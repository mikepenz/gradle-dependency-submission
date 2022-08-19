import * as core from '@actions/core'
import * as github from '@actions/github'
import {Snapshot, Manifest, submitSnapshot} from '@github/dependency-submission-toolkit'
import {prepareDependencyManifest} from './process'

async function run(): Promise<void> {
  core.startGroup(`📘 Reading input values`)
  const useGradlew = core.getBooleanInput('use-gradlew')
  let gradleProjectPath = core.getMultilineInput('gradle-project-path')
  const gradleBuildModule = core.getMultilineInput('gradle-build-module')
  const gradleBuildConfiguration = core.getMultilineInput('gradle-build-configuration')
  const gradleDependencyPath = core.getMultilineInput('gradle-dependency-path')

  if (gradleProjectPath.length === 0) {
    core.debug(`No 'gradle-project-path' passed, using 'root'`)
    gradleProjectPath = ['']
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

  core.endGroup()

  const manifests: Manifest[] = []

  for (let i = 0; i < length; i++) {
    manifests.push(
      await prepareDependencyManifest(
        useGradlew,
        gradleProjectPath.length === 1 ? gradleProjectPath[0] : gradleProjectPath[i],
        gradleBuildModule[i],
        gradleBuildConfiguration.length === 1 ? gradleBuildConfiguration[0] : gradleBuildConfiguration[i],
        gradleDependencyPath.length !== 0 ? gradleDependencyPath[i] : undefined
      )
    )
  }

  const snapshot = new Snapshot(
    {
      name: 'mikepenz/gradle-dependency-submission',
      url: 'https://github.com/mikepenz/gradle-dependency-submission',
      version: '0.2.0'
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
