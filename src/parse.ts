import {PackageURL} from 'packageurl-js'
import * as core from '@actions/core'

const DEPENDENCY_DEPENDENCY_LEVEL_START = '+--- '
const DEPENDENCY_DEPENDENCY_LEVEL_END = '\\--- '
const DEPENDENCY_PROJECT_START = `${DEPENDENCY_DEPENDENCY_LEVEL_START}project`
const DEPENDENCY_CHILD_INSET = ['|    ', '     ']
const DEPENDENCY_CONSTRAINT = ' (c)'
const DEPENDENCY_OMITTED = ' (*)'
const DEPENDENCY_LEVEL_INLINE = 5

export function parseGradlePackage(pkg: string, level = 0): PackageURL {
  const stripped = pkg
    .substring((level + 1) * DEPENDENCY_LEVEL_INLINE)
    .trimEnd()
  const split = stripped.split(':')
  if (split.length < 3) {
    core.error(`Could not parse package: '${pkg}'`)
    throw Error(`The given '${pkg} can't be parsed as a gradle package.`)
  }
  const [packageName, libraryName, lineEnd] = split

  let strippedLineEnd = lineEnd

  if (
    lineEnd.endsWith(DEPENDENCY_CONSTRAINT) ||
    lineEnd.endsWith(DEPENDENCY_OMITTED)
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
  return new PackageURL(
    'maven',
    packageName,
    libraryName,
    version ?? null,
    null,
    null
  )
}

/**
 * parseGoModGraph parses an *associative list* of Go packages into tuples into
 * an associative list of PackageURLs. This expects the output of 'go mod
 * graph' as input
 */
export function parseGradleGraph(
  contents: string
): [PackageURL, PackageURL | undefined][] {
  const pkgAssocList: [PackageURL, PackageURL | undefined][] = []
  const linesIterator = new PeekingIterator(contents.split('\n').values())

  // iterate until the dependencies start!
  while (linesIterator.hasNext()) {
    if (linesIterator.peek()?.startsWith(DEPENDENCY_DEPENDENCY_LEVEL_START)) {
      break
    } else {
      linesIterator.next()
    }
  }
  // parse dependency tree
  parseGradleDependency(pkgAssocList, linesIterator, undefined, 0)
  return pkgAssocList
}

export function parseGradleDependency(
  pkgAssocList: [PackageURL, PackageURL | undefined][],
  iterator: PeekingIterator<string>,
  parentParent: PackageURL | undefined,
  level = 0
): void {
  // check if we are either at the end, or if we are not within a sub dependency
  let peekedLine = iterator.peek()?.trim()
  if (!peekedLine) return
  peekedLine = peekedLine.substring(level * DEPENDENCY_LEVEL_INLINE)
  if (
    level !== 0 &&
    !(
      peekedLine.startsWith(DEPENDENCY_DEPENDENCY_LEVEL_START) ||
      peekedLine.startsWith(DEPENDENCY_DEPENDENCY_LEVEL_END)
    )
  ) {
    return
  }

  // go through the dependencies
  while (iterator.hasNext()) {
    const line = iterator.peek()?.trim()
    if (!line) {
      iterator.next() // consume the empty line
      continue
    }
    const strippedLine = line.substring(level * DEPENDENCY_LEVEL_INLINE)

    if (line.startsWith(DEPENDENCY_PROJECT_START)) {
      core.warning(
        'Found a project dependency, skipping (Currently not supported)'
      )
      iterator.next() // consume the next item
      continue
    } else if (
      strippedLine.startsWith(DEPENDENCY_DEPENDENCY_LEVEL_START) ||
      strippedLine.startsWith(DEPENDENCY_DEPENDENCY_LEVEL_END)
    ) {
      iterator.next() // consume the next item
      if (level === 0 && strippedLine.endsWith(DEPENDENCY_CONSTRAINT)) {
        continue // ignore constraints at the root level
      }

      const parent = parseGradlePackage(line, level)
      if (parentParent) {
        pkgAssocList.push([parentParent, parent])
      }
      parseGradleDependency(pkgAssocList, iterator, parent, level + 1)
      if (level === 0) {
        pkgAssocList.push([parent, undefined])
      }
    } else if (
      strippedLine.startsWith(DEPENDENCY_CHILD_INSET[0]) ||
      strippedLine.startsWith(DEPENDENCY_CHILD_INSET[1])
    ) {
      core.error(
        `Found a child dependency at an unsupported level, skipping. '${strippedLine}'`
      )
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
