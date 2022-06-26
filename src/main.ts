import * as core from '@actions/core'
import * as github from '@actions/github'
import {
  Snapshot,
  Manifest,
  submitSnapshot
} from '@github/dependency-submission-toolkit'
import {prepareDependencyManifest} from './process'

async function run(): Promise<void> {
  core.startGroup(`📘 Reading input values`)
  const gradleProjectPath = core.getInput('gradle-project-path').split(';')
  const gradleBuildModule = core.getInput('gradle-build-module').split(';')
  const gradleBuildConfiguration = core
    .getInput('gradle-build-configuration')
    .split(';')
  const gradleDependencyPath = core
    .getInput('gradle-dependency-path')
    .split(';')

  const length = gradleProjectPath.length
  if (
    [gradleBuildModule, gradleBuildConfiguration, gradleDependencyPath].some(
      x => x.length !== length
    )
  ) {
    core.setFailed(
      'When passing multiple projects, all inputs must have the same amount of items'
    )
    return
  }

  core.endGroup()

  const manifests: Manifest[] = []

  for (let i = 0; i < length; i++) {
    manifests.push(
      await prepareDependencyManifest(
        gradleProjectPath[i],
        gradleBuildModule[i],
        gradleBuildConfiguration[i],
        gradleDependencyPath[i]
      )
    )
  }

  const snapshot = new Snapshot(
    {
      name: 'mikepenz/gradle-dependency-submission',
      url: 'https://github.com/mikepenz/gradle-dependency-submission',
      version: '0.0.3'
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
