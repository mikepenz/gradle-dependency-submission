import * as core from '@actions/core'
import * as github from '@actions/github'
import {Snapshot, Manifest, submitSnapshot} from '@github/dependency-submission-toolkit'
import {prepareDependencyManifest} from './process'

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
  if ([gradleProjectPath, gradleBuildConfiguration].some(x => x.length !== 1 && x.length !== length)) {
    core.setFailed(
      'When passing multiple modules (`gradle-build-module`), all inputs must have the same amount of items or exactly 1'
    )
    return
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

  core.endGroup()

  const manifests: Manifest[] = []
  for (let i = 0; i < length; i++) {
    const subManifests = await prepareDependencyManifest(
      useGradlew,
      gradleProjectPath.length === 1 ? gradleProjectPath[0] : gradleProjectPath[i],
      gradleBuildModule[i],
      gradleBuildConfiguration.length === 1 ? gradleBuildConfiguration[0] : gradleBuildConfiguration[i],
      gradleDependencyPath.length !== 0 ? gradleDependencyPath[i] : undefined,
      moduleBuildConfigurations,
      subModuleMode
    )
    manifests.push(...subManifests)
  }

  const snapshot = new Snapshot(
    {
      name: 'mikepenz/gradle-dependency-submission',
      url: 'https://github.com/mikepenz/gradle-dependency-submission',
      version: '0.7.2'
    },
    github.context,
    {
      correlator: `${github.context.job}-${gradleBuildModule.join('-')}-${gradleBuildConfiguration}`,
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
