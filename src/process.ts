import {PackageURL} from 'packageurl-js'
import * as core from '@actions/core'
import * as exec from '@actions/exec'
import {PackageCache} from '@github/dependency-submission-toolkit'
import {parseGradleGraph} from './parse'

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
      directDependencies.push(child)
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

  return parseGradleGraph(dependencyList.stdout)
}

interface Result {
  packageCache: PackageCache
  directDependencies: PackageURL[]
  indirectDependencies: PackageURL[]
}
