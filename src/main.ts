import * as core from '@actions/core'
import * as github from '@actions/github'
import {
  Snapshot,
  Manifest,
  submitSnapshot
} from '@github/dependency-submission-toolkit'
import { processGradleGraph } from './process'

async function run(): Promise<void> {
  //https://github.com/actions/go-dependency-submission/blob/main/src/index.ts

  //https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api
  //https://docs.github.com/en/rest/dependency-graph/dependency-submission#about-the-dependency-submission-api
  //https://github.com/github/dependency-submission-toolkit

  const gradleProjectPath = core.getInput('gradle-project-path')
  const gradleBuildModule = core.getInput('gradle-build-module')
  const gradleBuildConfiguration = core.getInput('gradle-build-configuration')
  const gradleDependencyPath = core.getInput('gradle-dependency-path')

  const directDeps = await processGradleGraph(gradleProjectPath, gradleBuildModule, gradleBuildConfiguration)
  const manifest = new Manifest(gradleBuildConfiguration, gradleDependencyPath)
  const snapshot = new Snapshot(
    {
      name: 'mikepenz/gradle-dependency-submission',
      url: 'https://github.com/actions/go-dependency-submission',
      version: '0.0.1'
    },
    github.context,
    {
      correlator: `${github.context.job}-${gradleBuildConfiguration}`,
      id: github.context.runId.toString()
    }
  )
  snapshot.addManifest(manifest)
  submitSnapshot(snapshot)
}

run()
