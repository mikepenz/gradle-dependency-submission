import {jest, describe, test, expect} from '@jest/globals'
import {prepareDependencyManifest, processBuildEnvironmentDependencyList, processDependencyList} from '../src/process'
import {BUILD_ENVIRONMENT_EXPECTED_OUTPUT} from './expected_build_env_results'
import {
  EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_INDIVIDUAL,
  EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_COMBINED,
  EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_IGNORE,
  EXPECTED_GRADLE_DEPENDENCY_OUTPUT,
  EXPECTED_ROOT_GRADLE_DEPENDENCY_OUTPUT
} from './expected_dependency_results'
import {EXPECTED_GRADLE_DEPENDENCY_UNFILTERED} from './expected_dependency_results_unfiltered'

jest.setTimeout(240000)

describe('processBuildEnvironmentDependencyList', () => {
  process.env['GITHUB_WORKSPACE'] = '.'
  test('run in gradle-example', async () => {
    const project = await processBuildEnvironmentDependencyList(true, 'gradle-example', false)
    const dependencies = project.packages
    expect(dependencies).toHaveLength(BUILD_ENVIRONMENT_EXPECTED_OUTPUT.length)
    expect(dependencies).toEqual(BUILD_ENVIRONMENT_EXPECTED_OUTPUT)
  })
})

describe('processDependencyList', () => {
  process.env['GITHUB_WORKSPACE'] = '.'
  test('run in gradle-example', async () => {
    const project = await processDependencyList(
      true,
      'gradle-example',
      ':app',
      'debugCompileClasspath',
      new Map<string, string>(),
      'IGNORE',
      false
    )
    const dependencies = project.packages
    expect(dependencies).toHaveLength(EXPECTED_GRADLE_DEPENDENCY_OUTPUT.length)
    expect(dependencies).toEqual(EXPECTED_GRADLE_DEPENDENCY_OUTPUT)
  })

  test('run in gradle-example with invalid configuration', async () => {
    try {
      await processDependencyList(
        true,
        'gradle-example',
        ':app',
        'non-existing',
        new Map<string, string>(),
        'IGNORE',
        false
      )
    } catch (error: any) {
      expect(error.message).toEqual("Failed to execute './gradlew :app:dependencies --configuration non-existing'")
    }
  })

  test('run in root', async () => {
    const project = await processDependencyList(
      false,
      '',
      ':',
      'compileClasspath',
      new Map<string, string>(),
      'IGNORE',
      false
    )
    const dependencies = project.packages
    expect(dependencies).toHaveLength(EXPECTED_ROOT_GRADLE_DEPENDENCY_OUTPUT.length)
    expect(dependencies).toEqual(EXPECTED_ROOT_GRADLE_DEPENDENCY_OUTPUT)
  })
})

describe('prepareDependencyManifest', () => {
  test('run in gradle-example with nested modules - IGNORE', async () => {
    const manifests = await prepareDependencyManifest(
      true,
      'gradle-example',
      ':library-parent-parent',
      'debugCompileClasspath',
      undefined,
      new Map<string, string>(),
      'IGNORE',
      false
    )
    expect(manifests).toHaveLength(EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_IGNORE.length)
    expect(manifests).toEqual(EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_IGNORE)
  })

  test('run in gradle-example with nested modules - COMBINED', async () => {
    const manifests = await prepareDependencyManifest(
      true,
      'gradle-example',
      ':library-parent-parent',
      'debugCompileClasspath',
      undefined,
      new Map<string, string>(),
      'COMBINED',
      false
    )
    expect(manifests).toHaveLength(EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_COMBINED.length)
    expect(manifests).toEqual(EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_COMBINED)
  })

  test('run in gradle-example with nested modules - INDIVIDUAL', async () => {
    const manifests = await prepareDependencyManifest(
      true,
      'gradle-example',
      ':library-parent-parent',
      'debugCompileClasspath',
      undefined,
      new Map<string, string>(),
      'INDIVIDUAL',
      false
    )
    expect(manifests).toHaveLength(EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_INDIVIDUAL.length)
    expect(manifests).toEqual(EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_INDIVIDUAL)
  })

  test('run unfiltered configuration in gradle-example', async () => {
    const manifest = await prepareDependencyManifest(
      true,
      'gradle-example',
      ':app',
      '',
      undefined,
      new Map<string, string>(),
      'IGNORE',
      false
    )

    expect(manifest).toHaveLength(EXPECTED_GRADLE_DEPENDENCY_UNFILTERED.length)
    expect(JSON.parse(JSON.stringify(manifest))).toEqual(EXPECTED_GRADLE_DEPENDENCY_UNFILTERED)
  })
})
