import {PackageURL} from 'packageurl-js'
import * as core from '@actions/core'
import {Manifest, PackageCache} from '@github/dependency-submission-toolkit'
import {parseGradleGraph} from './parse'
import * as path from 'path'
import {retrieveGradleBuildPath, retrieveGradleDependencies} from './gradle'
import {convertToRelativePath} from './utils'

export async function prepareDependencyManifest(
  useGradlew: boolean,
  gradleProjectPath: string,
  gradleBuildModule: string,
  gradleBuildConfiguration: string,
  gradleDependencyPath: string | undefined
): Promise<Manifest> {
  const {packageCache, directDependencies, indirectDependencies} = await processGradleGraph(
    useGradlew,
    gradleProjectPath,
    gradleBuildModule,
    gradleBuildConfiguration
  )

  let dependencyPath: string
  if (gradleDependencyPath === undefined) {
    const buildPath = await retrieveGradleBuildPath(useGradlew, gradleProjectPath, gradleBuildModule)
    if (buildPath === undefined) {
      core.setFailed(`🚨 Could not retrieve the gradle dependency path (to the build.gradle) for ${gradleBuildModule}`)
      throw new Error(`Failed to retrieve gradle build path.`)
    } else {
      dependencyPath = convertToRelativePath(buildPath)
    }
  } else {
    dependencyPath = path.join(gradleProjectPath, gradleDependencyPath)
  }

  core.startGroup(`📦️ Preparing Dependency Snapshot - '${gradleBuildModule}'`)
  const manifest = new Manifest(path.dirname(dependencyPath), dependencyPath)
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

export async function processGradleGraph(
  useGradlew: boolean,
  gradleProjectPath: string,
  gradleBuildModule: string,
  gradleBuildConfiguration: string
): Promise<Result> {
  const dependencyList = await processDependencyList(
    useGradlew,
    gradleProjectPath,
    gradleBuildModule,
    gradleBuildConfiguration
  )

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
  return {
    packageCache: cache,
    directDependencies,
    indirectDependencies
  }
}

export async function processDependencyList(
  useGradlew: boolean,
  gradleProjectPath: string,
  gradleBuildModule: string,
  gradleBuildConfiguration: string
): Promise<[PackageURL, PackageURL | undefined][]> {
  core.startGroup(`🔨 Processing gradle dependencies for module - '${gradleBuildModule}'`)
  const dependencyList = await retrieveGradleDependencies(
    useGradlew,
    gradleProjectPath,
    gradleBuildModule,
    gradleBuildConfiguration
  )
  core.endGroup()
  return parseGradleGraph(gradleBuildModule, dependencyList)
}

interface Result {
  packageCache: PackageCache
  directDependencies: PackageURL[]
  indirectDependencies: PackageURL[]
}
