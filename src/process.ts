import {PackageURL} from 'packageurl-js'
import * as core from '@actions/core'
import * as exec from '@actions/exec'
import {Manifest, PackageCache} from '@github/dependency-submission-toolkit'
import {parseGradleGraph} from './parse'
import * as path from 'path'

export async function prepareDependencyManifest(
  gradleProjectPath: string,
  gradleBuildModule: string,
  gradleBuildConfiguration: string,
  gradleDependencyPath: string
): Promise<Manifest> {
  const {packageCache, directDependencies, indirectDependencies} =
    await processGradleGraph(
      gradleProjectPath,
      gradleBuildModule,
      gradleBuildConfiguration
    )

  core.startGroup(`📦️ Preparing Dependency Snapshot - '${gradleBuildModule}'`)
  const manifest = new Manifest(
    path.dirname(gradleDependencyPath),
    path.join(gradleProjectPath, gradleDependencyPath)
  )

  for (const pkgUrl of directDependencies) {
    const dep = packageCache.lookupPackage(pkgUrl)
    if (!dep) {
      core.setFailed(`🚨 Missing direct dependency: ${pkgUrl}`)
      throw new Error(
        'assertion failed: expected all direct dependencies to have entries in PackageCache'
      )
    }
    manifest.addDirectDependency(dep)
  }

  for (const pkgUrl of indirectDependencies) {
    const dep = packageCache.lookupPackage(pkgUrl)
    if (!dep) {
      core.setFailed(`🚨 Missing indirect dependency: ${pkgUrl}`)
      throw new Error(
        'assertion failed: expected all indirect dependencies to have entries in PackageCache'
      )
    }
    manifest.addIndirectDependency(dep)
  }
  core.endGroup()
  return manifest
}

export async function processGradleGraph(
  gradleProjectPath: string,
  gradleBuildModule: string,
  gradleBuildConfiguration: string
): Promise<Result> {
  const dependencyList = await processDependencyList(
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
  gradleProjectPath: string,
  gradleBuildModule: string,
  gradleBuildConfiguration: string
): Promise<[PackageURL, PackageURL | undefined][]> {
  core.startGroup(`🔨 Processing gradle dependencies - '${gradleBuildModule}'`)
  const dependencyList = await exec.getExecOutput(
    './gradlew',
    [
      `${gradleBuildModule}:dependencies`,
      '--configuration',
      gradleBuildConfiguration
    ],
    {cwd: gradleProjectPath}
  )
  if (dependencyList.exitCode !== 0) {
    core.error(dependencyList.stderr)
    core.setFailed(
      `'gradle ${gradleBuildModule}:dependencies resolution' failed!`
    )
    throw new Error("Failed to execute 'gradle dependencies'")
  }

  core.endGroup()
  return parseGradleGraph(gradleBuildModule, dependencyList.stdout)
}

interface Result {
  packageCache: PackageCache
  directDependencies: PackageURL[]
  indirectDependencies: PackageURL[]
}
