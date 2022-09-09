import {PackageURL} from 'packageurl-js'
import * as core from '@actions/core'
import {Manifest, PackageCache} from '@github/dependency-submission-toolkit'
import {parseGradleGraph, RootProject, Project} from './parse'
import * as path from 'path'
import {
  retrieveGradleBuildEnvironment,
  retrieveGradleBuildPath,
  retrieveGradleDependencies,
  retrieveGradleProjectName
} from './gradle'
import {convertToRelativePath} from './utils'

/**
 * Retrieves the dependencies from gradle for the define dmodule and builds the Manifest for it.
 */
export async function prepareDependencyManifest(
  useGradlew: boolean,
  gradleProjectPath: string,
  gradleBuildModule: string,
  gradleBuildConfiguration: string,
  gradleDependencyPath: string | undefined,
  moduleBuildConfiguration: Map<string, string>,
  subModuleMode: 'INDIVIDUAL' | 'INDIVIDUAL_DEEP' | 'COMBINED' | 'IGNORE'
): Promise<Manifest[]> {
  const rootProject = await processDependencyList(
    useGradlew,
    gradleProjectPath,
    gradleBuildModule,
    gradleBuildConfiguration,
    moduleBuildConfiguration,
    subModuleMode
  )

  // inject the gradle dependency path into the root project
  rootProject.dependencyPath = gradleDependencyPath

  // construct the Manifests
  const manifests: Manifest[] = []
  for (const result of transformProject(rootProject, subModuleMode)) {
    manifests.push(await buildManifest(result, useGradlew, gradleProjectPath))
  }
  return manifests
}

/**
 * Retrieves the build environment from gradle and builds the Manifest for it.
 */
export async function prepareBuildEnvironmentManifest(
  useGradlew: boolean,
  gradleProjectPath: string,
  gradleDependencyPath: string | undefined
): Promise<Manifest[]> {
  const rootProject = await processBuildEnvironmentDependencyList(useGradlew, gradleProjectPath)

  // inject the gradle dependency path into the root project
  rootProject.dependencyPath = gradleDependencyPath

  // construct the Manifests
  const manifests: Manifest[] = []
  for (const result of transformProject(rootProject, 'COMBINED')) {
    manifests.push(await buildManifest(result, useGradlew, gradleProjectPath, 'buildEnvironment'))
  }
  return manifests
}

/**
 * Transforms the retrieved [Project] into the required format for
 */
function transformProject(
  rootProject: RootProject,
  subModuleMode: 'INDIVIDUAL' | 'INDIVIDUAL_DEEP' | 'COMBINED' | 'IGNORE'
): Result[] {
  const flattenedProjects: Project[] = []
  flattenedProjects.push(rootProject)
  if (subModuleMode === 'INDIVIDUAL' || subModuleMode === 'INDIVIDUAL_DEEP') {
    // construct flattened projects array
    flattenedProjects.push(...rootProject.projectRegistry)
  } else if (subModuleMode === 'COMBINED') {
    // merge all dependencies into the parent project, ommiting any child project.
    for (const project of rootProject.projectRegistry) {
      rootProject.packages.push(...project.packages)
    }
  } else if (rootProject.projectRegistry.length !== 0) {
    core.warning(
      'The `sub-module-mode` was set to `IGNORE` but sub-modules were found. This should not happen, please report to the maintainer.'
    )
  }

  const results: Result[] = []

  for (const project of flattenedProjects) {
    const dependencyList = project.packages

    /* add all direct and indirect packages to a new PackageCache */
    const cache = new PackageCache()
    const directDependencies: Set<PackageURL> = new Set()
    const indirectDependencies: Set<PackageURL> = new Set()

    for (const [parent, child] of dependencyList) {
      // as the `Set` does comparison by reference - ensure we use the same package (and packageURL) object
      // if a specific `PackageURL` did already exist in the cache - use this object
      // this eliminates potential duplicates
      const parentPackage = cache.package(parent)
      if (child !== undefined) {
        const childPackage = cache.package(child)
        indirectDependencies.add(childPackage.packageURL)
      } else {
        directDependencies.add(parentPackage.packageURL)
      }
    }

    for (const [parent, child] of dependencyList) {
      if (!child) continue // we can only connect the child to the parent if it exists
      /* Look up the parent package in the cache. go mod graph will return
       * multiple versions of packages with the same namespace and name. We
       * select only package versions used in the Go build target. */
      const targetPackage = cache.lookupPackage(parent)
      if (!targetPackage) continue
      const childPackage = cache.lookupPackage(child)
      if (!childPackage) continue
      // create the dependency relationship
      if (!targetPackage.dependencies.includes(childPackage)) {
        targetPackage.dependsOn(childPackage)
      }
    }

    results.push({
      project,
      packageCache: cache,
      directDependencies: Array.from(directDependencies.values()),
      indirectDependencies: Array.from(indirectDependencies.values())
    })
  }
  return results
}

/**
 *
 */
async function buildManifest(
  result: Result,
  useGradlew: boolean,
  gradleProjectPath: string,
  manifestName: string | undefined = undefined
): Promise<Manifest> {
  const {project, packageCache, directDependencies, indirectDependencies} = result

  let dependencyPath: string
  if (project.dependencyPath === undefined) {
    const buildPath = await retrieveGradleBuildPath(useGradlew, gradleProjectPath, project.name)
    if (buildPath === undefined) {
      core.setFailed(`🚨 Could not retrieve the gradle dependency path (to the build.gradle) for ${project.name}`)
      throw new Error(`Failed to retrieve gradle build path.`)
    } else {
      dependencyPath = convertToRelativePath(buildPath)
    }
  } else {
    dependencyPath = path.join(gradleProjectPath, project.dependencyPath)
  }

  core.startGroup(`📦️ Preparing Dependency Snapshot - '${project.name}'`)
  let name = manifestName || path.dirname(dependencyPath)
  if (name === '.') {
    // if no project name is available, retrieve it from gradle or fallback to `dependencyPath`
    name = (await retrieveGradleProjectName(useGradlew, gradleProjectPath)) || dependencyPath
  }
  const manifest = new Manifest(name, dependencyPath)
  core.info(`Connection ${directDependencies.length} direct dependencies`)

  for (const pkgUrl of directDependencies) {
    const dep = packageCache.lookupPackage(pkgUrl)
    if (!dep) {
      core.setFailed(`🚨 Missing direct dependency: ${pkgUrl}`)
      throw new Error('assertion failed: expected all direct dependencies to have entries in PackageCache')
    }
    manifest.addDirectDependency(dep)
  }

  core.info(`Connection ${indirectDependencies.length} indirect dependencies`)
  for (const pkgUrl of indirectDependencies) {
    const dep = packageCache.lookupPackage(pkgUrl)
    if (!dep) {
      core.setFailed(`🚨 Missing indirect dependency: ${pkgUrl}`)
      throw new Error('assertion failed: expected all indirect dependencies to have entries in PackageCache')
    }
    manifest.addIndirectDependency(dep)
  }

  core.endGroup()
  return manifest
}

export async function processDependencyList(
  useGradlew: boolean,
  gradleProjectPath: string,
  gradleBuildModule: string,
  gradleBuildConfiguration: string,
  moduleBuildConfiguration: Map<string, string>,
  subModuleMode: 'INDIVIDUAL' | 'INDIVIDUAL_DEEP' | 'COMBINED' | 'IGNORE'
): Promise<RootProject> {
  core.startGroup(`🔨 Processing gradle dependencies for root module - '${gradleBuildModule}'`)
  const dependencyList = await retrieveGradleDependencies(
    useGradlew,
    gradleProjectPath,
    gradleBuildModule,
    moduleBuildConfiguration.get(gradleBuildModule) || gradleBuildConfiguration
  )
  core.endGroup()
  const rootProject = parseGradleGraph(gradleBuildModule, dependencyList, subModuleMode)

  if (subModuleMode === 'INDIVIDUAL_DEEP') {
    for (const project of rootProject.projectRegistry) {
      core.startGroup(`🔨 Processing gradle dependencies for sub module - '${project.name}'`)
      const subDependencyList = await retrieveGradleDependencies(
        useGradlew,
        gradleProjectPath,
        project.name,
        moduleBuildConfiguration.get(project.name) || gradleBuildConfiguration
      )
      const subProject = parseGradleGraph(project.name, subDependencyList, 'IGNORE_SILENT')
      project.packages.push(...subProject.packages)
      core.endGroup()
    }
  }

  return rootProject
}

export async function processBuildEnvironmentDependencyList(
  useGradlew: boolean,
  gradleProjectPath: string
): Promise<RootProject> {
  core.startGroup(`🔨 Processing gradle buildEnvironment`)
  const dependencyList = await retrieveGradleBuildEnvironment(useGradlew, gradleProjectPath)
  core.endGroup()
  return parseGradleGraph(':', dependencyList, 'IGNORE_SILENT')
}

interface Result {
  project: Project
  packageCache: PackageCache
  directDependencies: PackageURL[]
  indirectDependencies: PackageURL[]
}
