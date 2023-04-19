import * as core from '@actions/core'
import * as github from '@actions/github'
import {Snapshot, Manifest, submitSnapshot} from '@github/dependency-submission-toolkit'
import {prepareBuildEnvironmentManifest, prepareDependencyManifest} from './process'

async function run(): Promise<void> {
  core.startGroup(`📘 Reading input values`)
  const useGradlew = core.getBooleanInput('use-gradlew')
  let gradleProjectPath = core.getMultilineInput('gradle-project-path')
  let gradleBuildModule = core.getMultilineInput('gradle-build-module')
  const gradleBuildConfiguration = core.getMultilineInput('gradle-build-configuration')
  const gradleBuildConfigurationMapping = core.getMultilineInput('gradle-build-configuration-mapping')
  const gradleDependencyPath = core.getMultilineInput('gradle-dependency-path')
  let subModuleMode: 'INDIVIDUAL' | 'INDIVIDUAL_DEEP' | 'COMBINED' | 'IGNORE'
  const subModuleModeInput = core.getInput('sub-module-mode')
  const includeBuildEnvironment = core.getBooleanInput('include-build-environment')
  const failOnError = core.getBooleanInput('fail-on-error')
  let correlator = core.getInput('correlator')

  // verify inputs are valid
  if (gradleProjectPath.length === 0) {
    core.debug(`No 'gradle-project-path' passed, using 'root'`)
    gradleProjectPath = ['']
  }

  if (gradleBuildModule.length === 0) {
    core.info(`No 'gradle-build-module' passed, using ':'`)
    gradleBuildModule = [':']
  }

  const length = gradleBuildModule.length
  if (gradleProjectPath.length !== 1 && gradleProjectPath.length !== length) {
    core.setFailed(
      'When passing multiple modules (`gradle-build-module`), the `gradle-project-path` inputs must have the same amount of items or exactly 1'
    )
    return
  } else if (gradleBuildConfiguration.length > 1 && gradleBuildConfiguration.length !== length) {
    core.setFailed(
      'When passing the `gradle-build-configuration`, this input must have the same amount of items as the `gradle-build-module` or exactly 1'
    )
  } else if (gradleDependencyPath.length !== 0 && gradleDependencyPath.length !== length) {
    core.setFailed(
      'When passing the `gradle-dependency-path`, this input must have the same amount of items as the `gradle-build-module` or none'
    )
    return
  }

  // ensure provided subModuleMode is one of the supported types
  if (subModuleModeInput === 'INDIVIDUAL') {
    subModuleMode = 'INDIVIDUAL'
  } else if (subModuleModeInput === 'INDIVIDUAL_DEEP') {
    subModuleMode = 'INDIVIDUAL_DEEP'
  } else if (subModuleModeInput === 'COMBINED') {
    subModuleMode = 'COMBINED'
  } else if (subModuleModeInput === 'IGNORE') {
    subModuleMode = 'IGNORE'
  } else {
    core.warning(`🚨 Unknown sub-module-mode: ${subModuleModeInput}`)
    subModuleMode = 'IGNORE'
  }
  core.debug(` sub-module-mode: ${subModuleMode}`)

  // retrieve module to build configuration mapping
  // this will overrule the default build configuration provided
  const moduleBuildConfigurations = new Map<string, string>()
  for (const [module, configuration] of gradleBuildConfigurationMapping.map(x => x.trim().split('|'))) {
    moduleBuildConfigurations.set(module, configuration)
    core.debug(` will use build configuration ${configuration} for ${module}`)
  }

  if (correlator === '') {
    correlator = `${github.context.job}-${gradleBuildModule.join('_')}-${gradleBuildConfiguration.join('_')}`
  }

  core.endGroup()

  const manifests: Manifest[] = []
  for (let i = 0; i < length; i++) {
    // if no gradleBuildConfiguration was defined -> execute unfiltered
    // if 1 gradleBuildConfiguration was defined -> use it for all
    // else -> use the config for the given item
    const gbcl = gradleBuildConfiguration.length
    const configuration = gbcl === 0 ? '' : gbcl === 1 ? gradleBuildConfiguration[0] : gradleBuildConfiguration[i]

    const subManifests = await prepareDependencyManifest(
      useGradlew,
      gradleProjectPath.length === 1 ? gradleProjectPath[0] : gradleProjectPath[i],
      gradleBuildModule[i],
      configuration,
      gradleDependencyPath.length !== 0 ? gradleDependencyPath[i] : undefined,
      moduleBuildConfigurations,
      subModuleMode,
      failOnError
    )
    manifests.push(...subManifests)
  }

  if (includeBuildEnvironment) {
    const buildEnvironmentManifest = await prepareBuildEnvironmentManifest(
      useGradlew,
      gradleProjectPath[0],
      undefined,
      failOnError
    )
    manifests.push(...buildEnvironmentManifest)
  }

  const snapshot = new Snapshot(
    {
      name: 'online-photo-submission/gradle-dependency-submission',
      url: 'https://github.com/online-photo-submission/gradle-dependency-submission',
      version: 'v1.0.1'
    },
    github.context,
    {
      correlator,
      id: github.context.runId.toString()
    }
  )
  for (const manifest of manifests) {
    snapshot.addManifest(manifest)
  }
  submitSnapshot(snapshot)
  core.endGroup()
}

run()
