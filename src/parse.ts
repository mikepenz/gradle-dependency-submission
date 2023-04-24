import {PackageURL} from 'packageurl-js'
import * as core from '@actions/core'

const DEPENDENCY_DEPENDENCY_LEVEL_START = '+--- '
const DEPENDENCY_DEPENDENCY_LEVEL_END = '\\--- '
const DEPENDENCY_PROJECT = `project `
const DEPENDENCY_PROJECT_START = `${DEPENDENCY_DEPENDENCY_LEVEL_START}${DEPENDENCY_PROJECT}`
const DEPENDENCY_PROJECT_END = `${DEPENDENCY_DEPENDENCY_LEVEL_END}${DEPENDENCY_PROJECT}`
const DEPENDENCY_CHILD_INSET = ['|    ', '     ']
// (c) - dependency constraint
const DEPENDENCY_CONSTRAINT = ' (c)'
// (*) - dependencies omitted (listed previously)
const DEPENDENCY_OMITTED = ' (*)'
// (n) - Not resolved (configuration is not meant to be resolved)
const DEPENDENCY_NOT_RESOLVED = ' (n)'
const DEPENDENCY_LEVEL_INLINE = 5

export function parseProjectSpecification(projectString: string, level = 0): Project {
  const stripped = projectString.substring((level + 1) * DEPENDENCY_LEVEL_INLINE + DEPENDENCY_PROJECT.length).trimEnd()
  const project = stripped.split(' ')[0]
  return new Project(project)
}
/**
 * Parses a gradle package specification, given the single line and current level.
 *
 * Identifies variant of specification (full maven spec or without version (if bom file is used)).
 */
export function parseGradlePackage(pkg: string, level = 0, failOnError: boolean): PackageURL | undefined {
  const stripped = pkg.substring((level + 1) * DEPENDENCY_LEVEL_INLINE).trimEnd()
  const split = stripped.split(':')
  let packageName = ''
  let libraryName = ''
  let lineEnd = ''
  if (split.length === 2) {
    packageName = split[0]
    const secondaryParts = split[1].trim().split(' -> ')
    if (secondaryParts.length === 2) {
      ;[libraryName, lineEnd] = secondaryParts
    } else {
      if (split[1].trim().endsWith(DEPENDENCY_NOT_RESOLVED)) {
        core.warning(`Discovered unresolved dependency: ${stripped}`)
        libraryName = split[1].trim().replace(DEPENDENCY_NOT_RESOLVED, '')
      } else {
        core.error(`Could not parse package: '${stripped}' (1)`)
        if (failOnError) {
          throw Error(`The given '${stripped} can't be parsed as a gradle package.`)
        } else {
          return undefined
        }
      }
    }
  } else if (split.length === 1 && stripped.trim().endsWith(DEPENDENCY_NOT_RESOLVED)) {
    core.warning(`Could not parse unresolved package: '${stripped}' (3)`)
    return undefined
  } else if (split.length < 3) {
    core.error(`Could not parse package: '${stripped}' (2)`)
    if (failOnError) {
      throw Error(`The given '${stripped} can't be parsed as a gradle package.`)
    } else {
      return undefined
    }
  } else {
    ;[packageName, libraryName, lineEnd] = split
  }

  let strippedLineEnd = lineEnd

  if (
    lineEnd.endsWith(DEPENDENCY_CONSTRAINT) ||
    lineEnd.endsWith(DEPENDENCY_OMITTED) ||
    lineEnd.endsWith(DEPENDENCY_NOT_RESOLVED)
  ) {
    strippedLineEnd = lineEnd.substring(0, lineEnd.length - 4)
  }
  const endParts = strippedLineEnd.trim().split(' -> ')
  let version
  if (endParts.length === 1) {
    version = endParts[0]
  } else {
    version = endParts[endParts.length - 1].trim()
  }
  return new PackageURL('maven', packageName, libraryName, version ?? null, null, null)
}

/**
 * `parseGradleGraph` takes in the current module and dependency output and parses through the full `dependency` output.
 */
export function parseGradleGraph(
  gradleBuildModule: string,
  contents: string,
  subModuleMode: 'INDIVIDUAL' | 'INDIVIDUAL_DEEP' | 'COMBINED' | 'IGNORE' | 'IGNORE_SILENT',
  failOnError: boolean
): RootProject {
  const start = Date.now()
  core.startGroup(`📄 Parsing gradle dependencies graph - '${gradleBuildModule}'`)

  const rootProject = new RootProject(gradleBuildModule)
  const splitContent = contents.split('\n')
  const linesIterator = new PeekingIterator(splitContent.values())
  core.info(`Dependency output of ${splitContent.length} lines`)

  // iterate until the dependencies start!
  while (linesIterator.hasNext()) {
    const peek = linesIterator.peek()
    if (peek?.startsWith(DEPENDENCY_DEPENDENCY_LEVEL_START) || peek?.startsWith(DEPENDENCY_DEPENDENCY_LEVEL_END)) {
      break
    } else {
      linesIterator.next()
    }
  }

  // parse dependency tree
  parseGradleDependency(rootProject, rootProject, linesIterator, undefined, 0, subModuleMode, failOnError)
  core.info(`Completed parsing ${rootProject.packages.length} dependency associations within ${Date.now() - start}ms`)
  core.endGroup()
  return rootProject
}

/**
 *
 */
function parseGradleDependency(
  rootProject: RootProject,
  project: Project,
  iterator: PeekingIterator<string>,
  parentParent: PackageURL | undefined,
  level = 0,
  subModuleMode: 'INDIVIDUAL' | 'INDIVIDUAL_DEEP' | 'COMBINED' | 'IGNORE' | 'IGNORE_SILENT',
  failOnError: boolean
): void {
  // check if we are either at the end, or if we are not within a sub dependency
  let peekedLine = iterator.peek()?.trimEnd() // don't trim start (or it could kick away child insets)
  if (!peekedLine) return
  peekedLine = peekedLine.substring(level * DEPENDENCY_LEVEL_INLINE)
  if (
    level !== 0 &&
    !(
      peekedLine.startsWith(DEPENDENCY_DEPENDENCY_LEVEL_START) || peekedLine.startsWith(DEPENDENCY_DEPENDENCY_LEVEL_END)
    )
  ) {
    return
  }

  // go through the dependencies
  while (iterator.hasNext()) {
    const line = iterator.peek()?.trimEnd() // don't trim start (or it could kick away child insets)
    if (!line) {
      iterator.next() // consume the empty line
      continue
    }
    const strippedLine = line.substring(level * DEPENDENCY_LEVEL_INLINE)

    if (strippedLine.startsWith(DEPENDENCY_PROJECT_START) || strippedLine.startsWith(DEPENDENCY_PROJECT_END)) {
      iterator.next() // consume this line describing the project
      if (subModuleMode === 'IGNORE') {
        core.info(`Found a project dependency, skipping (Currently not supported) - ${line}`)
      } else if (subModuleMode === 'IGNORE_SILENT') {
        core.debug(`Found a project dependency, skipping (Currently not supported) - ${line}`)
      } else if (strippedLine.endsWith(DEPENDENCY_NOT_RESOLVED)) {
        core.info(`Found an enresolved project dependency, skipping - ${line}`)
      } else {
        const childProject = rootProject.getOrRegisterProject(parseProjectSpecification(line, level)) // register new child project with root
        parseGradleDependency(rootProject, childProject, iterator, undefined, level + 1, subModuleMode, failOnError)
        project.childProjects.push(childProject) // register child project with parent project to retain hierarchy
        core.info(`Found a child project dependency: ${childProject.name}`)
      }
    } else if (
      strippedLine.startsWith(DEPENDENCY_DEPENDENCY_LEVEL_START) ||
      strippedLine.startsWith(DEPENDENCY_DEPENDENCY_LEVEL_END)
    ) {
      iterator.next() // consume the next item
      if (level === 0 && strippedLine.endsWith(DEPENDENCY_CONSTRAINT)) {
        continue // ignore constraints at the root level
      }

      const parent = parseGradlePackage(line, level, failOnError)
      if (parent) {
        if (parentParent) {
          project.packages.push([parentParent, parent])
        }
        parseGradleDependency(rootProject, project, iterator, parent, level + 1, subModuleMode, failOnError)
        if (level === 0 || !parentParent) {
          project.packages.push([parent, undefined])
        }
      }
    } else if (
      strippedLine.startsWith(DEPENDENCY_CHILD_INSET[0]) ||
      strippedLine.startsWith(DEPENDENCY_CHILD_INSET[1])
    ) {
      core.debug(`Found a child dependency at an unsupported level, skipping. '${strippedLine}'`)
      iterator.next() // consume the next item
      continue
    } else if (level === 0) {
      iterator.next() // consume the next item
      continue
    } else {
      break
    }
  }
}

export class Project {
  name: string
  dependencyPath: string | undefined = undefined
  childProjects: Project[] = []
  packages: [PackageURL, PackageURL | undefined][] = []

  constructor(name: string) {
    this.name = name
  }
}

export class RootProject extends Project {
  projectRegistry: Project[] = []

  /**
   * Registers the given project. If not yet existing.
   * Returns existing instance otherwise
   */
  getOrRegisterProject(project: Project): Project {
    if (project.name === this.name) {
      return this
    }
    const exists = this.projectRegistry.find(item => item.name === project.name)
    if (!exists) {
      this.projectRegistry.push(project)
      return project
    } else {
      return exists
    }
  }
}

class PeekingIterator<T> {
  iterator: IterableIterator<T>
  nextVal: T | undefined

  constructor(iterator: IterableIterator<T>) {
    this.iterator = iterator
    this.nextVal = this.iterator.next().value
  }

  peek(): T | undefined {
    return this.nextVal
  }

  next(): T | undefined {
    const nextVal = this.nextVal
    this.nextVal = this.iterator.next().value
    return nextVal
  }

  hasNext(): boolean {
    return this.nextVal !== undefined
  }
}
