import * as core from '@actions/core'
import * as exec from '@actions/exec'
import semver from 'semver'

export async function singlePropertySupport(useGradlew: boolean, gradleProjectPath: string): Promise<boolean> {
  const version = await fetchGradleVersion(useGradlew, gradleProjectPath)
  return semver.satisfies(version, '>=7.5.0')
}

export async function fetchGradleVersion(useGradlew: boolean, gradleProjectPath: string): Promise<string> {
  const command = useGradlew ? './gradlew' : 'gradle'
  const versionOutput = await exec.getExecOutput(command, ['--version'], {
    cwd: gradleProjectPath,
    silent: !core.isDebug()
  })
  if (versionOutput.exitCode !== 0) {
    core.error(versionOutput.stderr)
    core.setFailed(`'${command} --version' command failed!`)
    throw new Error(`Failed to execute '${command} --version'`)
  }

  const output = versionOutput.stdout
  const version = output.match(/[\\S\\s]*?-\n(Gradle )(.+)\n-/)
  if (version != null) {
    return version[2]
  }
  if (core.isDebug()) {
    core.debug(`Failed to extract gradle version from: ${output}`)
  }
  throw new Error(`Failed to extract gradle version`)
}

export async function retrieveGradleDependencies(
  useGradlew: boolean,
  gradleProjectPath: string,
  gradleBuildModule: string,
  gradleBuildConfiguration: string
): Promise<string> {
  const start = Date.now()
  const command = useGradlew ? './gradlew' : 'gradle'
  const dependencyList = await exec.getExecOutput(
    command,
    [`${gradleBuildModule}:dependencies`, '--configuration', gradleBuildConfiguration],
    {
      cwd: gradleProjectPath,
      silent: !core.isDebug()
    }
  )
  if (dependencyList.exitCode !== 0) {
    core.error(dependencyList.stderr)
    core.setFailed(`'${command} ${gradleBuildModule}:dependencies' resolution failed!`)
    throw new Error(`Failed to execute '${command} ${gradleBuildModule}:dependencies'`)
  }
  core.info(
    `Completed retrieving the 'dependencies' for configuration '${gradleBuildConfiguration}' within ${
      Date.now() - start
    }ms`
  )
  return dependencyList.stdout
}

/**
 * Retrieves the `property` from a given `module` name
 */
export async function retrieveGradleBuildPath(
  useGradlew: boolean,
  gradleProjectPath: string,
  gradleBuildModule: string
): Promise<string | undefined> {
  return retrieveGradleProperty(useGradlew, gradleProjectPath, gradleBuildModule, 'buildFile')
}

/**
 * Retrieves the `property` from a given `module` name
 */
async function retrieveGradleProperty(
  useGradlew: boolean,
  gradleProjectPath: string,
  gradleBuildModule: string,
  property: string
): Promise<string | undefined> {
  if (!singlePropertySupport(useGradlew, gradleProjectPath)) {
    core.warning(
      `The current gradle version does not support retrieving a single property. Skipping retrieval of ${property} for ${gradleBuildModule}`
    )
    return undefined
  }

  const command = useGradlew ? './gradlew' : 'gradle'
  const propertyOutput = await exec.getExecOutput(
    command,
    [`${gradleBuildModule}:properties`, '-q', '--property', property],
    {
      cwd: gradleProjectPath,
      silent: !core.isDebug()
    }
  )
  if (propertyOutput.exitCode !== 0) {
    core.error(propertyOutput.stderr)
    core.setFailed(`'${command} ${gradleBuildModule}:properties' retrieval failed!`)
    throw new Error(`Failed to execute '${command} ${gradleBuildModule}:properties'`)
  }

  const output = propertyOutput.stdout
  const matched = output.match(new RegExp(`[\\S\\s]*?(${property}: )(.+)\n`))

  if (matched != null) {
    return matched[2]
  }

  core.warning(`Failed to retrieve the '${property}' for ${gradleBuildModule}`)
  return undefined
}
