import {PackageURL} from 'packageurl-js'
import * as core from '@actions/core'
import {Manifest, PackageCache} from '@github/dependency-submission-toolkit'
import {parseGradleGraph, RootProject, Project} from './parse'
import * as path from 'path'
import {retrieveGradleBuildPath, retrieveGradleDependencies, retrieveGradleProjectName} from './gradle'
import {convertToRelativePath} from './utils'

export async function prepareDependencyManifest(
  useGradlew: boolean,
  gradleProjectPath: string,
  gradleBuildModule: string,
  gradleBuildConfiguration: string,
  gradleDependencyPath: string | undefined,
  subModuleMode: 'INDIVIDUAL' | 'COMBINED' | 'IGNORE'
): Promise<Manifest[]> {
  const results = await processGradleGraph(
    useGradlew,
    gradleProjectPath,
    gradleBuildModule,
    gradleBuildConfiguration,
    gradleDependencyPath,
    subModuleMode
  )

  const manifests: Manifest[] = []
  for (const result of results) {
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
    let name = path.dirname(dependencyPath)
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
    manifests.push(manifest)
  }
  return manifests
}

export async function processGradleGraph(
  useGradlew: boolean,
  gradleProjectPath: string,
  gradleBuildModule: string,
  gradleBuildConfiguration: string,
  gradleDependencyPath: string | undefined,
  subModuleMode: 'INDIVIDUAL' | 'COMBINED' | 'IGNORE'
): Promise<Result[]> {
  const rootProject = await processDependencyList(
    useGradlew,
    gradleProjectPath,
    gradleBuildModule,
    gradleBuildConfiguration,
    subModuleMode
  )

  // inject the gradle dependency path into the root project
  rootProject.dependencyPath = gradleDependencyPath

  const flattenedProjects: Project[] = []
  flattenedProjects.push(rootProject)
  if (subModuleMode === 'INDIVIDUAL') {
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
    const directDependencies: PackageURL[] = []
    const indirectDependencies: PackageURL[] = []

    for (const [parent, child] of dependencyList) {
      cache.package(parent)
      if (child !== undefined) {
        cache.package(child)
        indirectDependencies.push(child)
      } else {
        directDependencies.push(parent)
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
      targetPackage.dependsOn(childPackage)
    }
    results.push({
      project,
      packageCache: cache,
      directDependencies,
      indirectDependencies
    })
  }
  return results
}

export async function processDependencyList(
  useGradlew: boolean,
  gradleProjectPath: string,
  gradleBuildModule: string,
  gradleBuildConfiguration: string,
  subModuleMode: 'INDIVIDUAL' | 'COMBINED' | 'IGNORE'
): Promise<RootProject> {
  core.startGroup(`🔨 Processing gradle dependencies for root module - '${gradleBuildModule}'`)
  const dependencyList = await retrieveGradleDependencies(
    useGradlew,
    gradleProjectPath,
    gradleBuildModule,
    gradleBuildConfiguration
  )
  core.endGroup()
  const rootProject = parseGradleGraph(gradleBuildModule, dependencyList, subModuleMode)

  for (const project of rootProject.projectRegistry) {
    core.startGroup(`🔨 Processing gradle dependencies for sub module - '${gradleBuildModule}'`)
    const subDependencyList = await retrieveGradleDependencies(
      useGradlew,
      gradleProjectPath,
      project.name,
      gradleBuildConfiguration
    )
    const subProject = parseGradleGraph(project.name, subDependencyList, 'IGNORE_SILENT')
    project.packages.push(...subProject.packages)
    core.endGroup()
  }

  return rootProject
}

interface Result {
  project: Project
  packageCache: PackageCache
  directDependencies: PackageURL[]
  indirectDependencies: PackageURL[]
}
