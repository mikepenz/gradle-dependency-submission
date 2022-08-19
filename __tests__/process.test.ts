import {jest, describe, test, expect} from '@jest/globals'
import {prepareDependencyManifest, processDependencyList} from '../src/process'

jest.setTimeout(240000)

describe('processDependencyList', () => {
  process.env['GITHUB_WORKSPACE'] = '.'
  test('run in gradle-example', async () => {
    const project = await processDependencyList(
      true,
      'gradle-example',
      ':app',
      'debugCompileClasspath',
      'IGNORE'
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
        'IGNORE'
      )
    } catch (error: any) {
      expect(error.message).toEqual("Failed to execute './gradlew :app:dependencies'")
    }
  })

  test('run in root', async () => {
    const project = await processDependencyList(
      false,
      '',
      ':',
      'compileClasspath',
      'IGNORE'
    )
    const dependencies = project.packages
    expect(dependencies).toHaveLength(EXPECTED_ROOT_GRADLE_DEPENDENCY_OUTPUT.length)
    expect(dependencies).toEqual(EXPECTED_ROOT_GRADLE_DEPENDENCY_OUTPUT)
  })

  test('run in gradle-example with nested modules - IGNORE', async () => {
    const manifests = await prepareDependencyManifest(
      true,
      'gradle-example',
      ':library-parent-parent',
      'debugCompileClasspath',
      undefined,
      'IGNORE'
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
      'COMBINED'
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
      'INDIVIDUAL'
    )
    expect(manifests).toHaveLength(EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_INDIVIDUAL.length)
    expect(manifests).toEqual(EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_INDIVIDUAL)
  })
})

const EXPECTED_ROOT_GRADLE_DEPENDENCY_OUTPUT = [
  [
    {
      type: "maven",
      name: "spring-core",
      namespace: "org.springframework",
      version: "5.3.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "spring-jcl",
      namespace: "org.springframework",
      version: "5.3.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "spring-core",
      namespace: "org.springframework",
      version: "5.3.0",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
]

const EXPECTED_GRADLE_DEPENDENCY_OUTPUT = [
  [
    {
      type: "maven",
      name: "kotlin-stdlib-jdk8",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib-common",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotations",
      namespace: "org.jetbrains",
      version: "13.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlin-stdlib-jdk8",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib-jdk7",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlin-stdlib-jdk7",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlin-stdlib-jdk8",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
  [
    {
      type: "maven",
      name: "ui-tooling",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-tooling",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "runtime",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "runtime",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlinx-coroutines-android",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlinx-coroutines-android",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlinx-coroutines-core",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlinx-coroutines-core",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlinx-coroutines-core-jvm",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlinx-coroutines-core-jvm",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlinx-coroutines-bom",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlinx-coroutines-bom",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlinx-coroutines-android",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlinx-coroutines-bom",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlinx-coroutines-core-jvm",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlinx-coroutines-bom",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlinx-coroutines-core",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlinx-coroutines-core-jvm",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib-jdk8",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlinx-coroutines-core-jvm",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib-common",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlinx-coroutines-android",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlinx-coroutines-bom",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "kotlinx-coroutines-android",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib-jdk8",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-tooling",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "runtime-saveable",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "runtime-saveable",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "runtime-saveable",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "runtime",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-geometry",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-geometry",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-graphics",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-graphics",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-graphics",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-unit",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-unit",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-unit",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-geometry",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-text",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-text",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-text",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-graphics",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-text",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-unit",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-unit",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-tooling",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-tooling-data",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-tooling-data",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-tooling-data",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "runtime",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-tooling-data",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-tooling",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-tooling-preview",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-tooling-preview",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-tooling-preview",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "runtime",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-tooling",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
  [
    {
      type: "maven",
      name: "ui-test-manifest",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "activity",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "core",
      namespace: "androidx.core",
      version: "1.8.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "core",
      namespace: "androidx.core",
      version: "1.8.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "core",
      namespace: "androidx.core",
      version: "1.8.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation-experimental",
      namespace: "androidx.annotation",
      version: "1.1.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "core",
      namespace: "androidx.core",
      version: "1.8.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "lifecycle-runtime",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-runtime",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-runtime",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "core-common",
      namespace: "androidx.arch.core",
      version: "2.1.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "core-common",
      namespace: "androidx.arch.core",
      version: "2.1.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-runtime",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "lifecycle-common",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-common",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "core",
      namespace: "androidx.core",
      version: "1.8.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "versionedparcelable",
      namespace: "androidx.versionedparcelable",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "versionedparcelable",
      namespace: "androidx.versionedparcelable",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "versionedparcelable",
      namespace: "androidx.versionedparcelable",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "collection",
      namespace: "androidx.collection",
      version: "1.0.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "collection",
      namespace: "androidx.collection",
      version: "1.0.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "lifecycle-runtime",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "lifecycle-viewmodel",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-viewmodel",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-viewmodel",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "lifecycle-viewmodel-savedstate",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-viewmodel-savedstate",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-viewmodel-savedstate",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "core-ktx",
      namespace: "androidx.core",
      version: "1.8.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "core-ktx",
      namespace: "androidx.core",
      version: "1.8.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "core-ktx",
      namespace: "androidx.core",
      version: "1.8.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "core",
      namespace: "androidx.core",
      version: "1.8.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "core-ktx",
      namespace: "androidx.core",
      version: "1.8.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-viewmodel-savedstate",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "lifecycle-livedata-core",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-livedata-core",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "lifecycle-common",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-viewmodel-savedstate",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "lifecycle-viewmodel",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-viewmodel-savedstate",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "savedstate",
      namespace: "androidx.savedstate",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "savedstate",
      namespace: "androidx.savedstate",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "savedstate",
      namespace: "androidx.savedstate",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-viewmodel-savedstate",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-viewmodel-savedstate",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlinx-coroutines-android",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "savedstate",
      namespace: "androidx.savedstate",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "ui-test-manifest",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
  [
    {
      type: "maven",
      name: "core-ktx",
      namespace: "androidx.core",
      version: "1.8.0",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
  [
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
  [
    {
      type: "maven",
      name: "material3",
      namespace: "androidx.compose.material3",
      version: "1.0.0-alpha16",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "foundation",
      namespace: "androidx.compose.foundation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "foundation",
      namespace: "androidx.compose.foundation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "foundation",
      namespace: "androidx.compose.foundation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "animation",
      namespace: "androidx.compose.animation",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "animation",
      namespace: "androidx.compose.animation",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "animation",
      namespace: "androidx.compose.animation",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "animation-core",
      namespace: "androidx.compose.animation",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "animation-core",
      namespace: "androidx.compose.animation",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "animation-core",
      namespace: "androidx.compose.animation",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlinx-coroutines-core",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "animation",
      namespace: "androidx.compose.animation",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "foundation-layout",
      namespace: "androidx.compose.foundation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "foundation-layout",
      namespace: "androidx.compose.foundation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "foundation-layout",
      namespace: "androidx.compose.foundation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "foundation-layout",
      namespace: "androidx.compose.foundation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-unit",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "animation",
      namespace: "androidx.compose.animation",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "runtime",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "animation",
      namespace: "androidx.compose.animation",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "animation",
      namespace: "androidx.compose.animation",
      version: "1.1.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-geometry",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "foundation",
      namespace: "androidx.compose.foundation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "runtime",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "foundation",
      namespace: "androidx.compose.foundation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "material3",
      namespace: "androidx.compose.material3",
      version: "1.0.0-alpha16",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "material-icons-core",
      namespace: "androidx.compose.material",
      version: "1.0.2",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "material-icons-core",
      namespace: "androidx.compose.material",
      version: "1.0.2",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "material3",
      namespace: "androidx.compose.material3",
      version: "1.0.0-alpha16",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "material-ripple",
      namespace: "androidx.compose.material",
      version: "1.0.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "material-ripple",
      namespace: "androidx.compose.material",
      version: "1.0.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "foundation",
      namespace: "androidx.compose.foundation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "material-ripple",
      namespace: "androidx.compose.material",
      version: "1.0.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "runtime",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "material3",
      namespace: "androidx.compose.material3",
      version: "1.0.0-alpha16",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "runtime",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "material3",
      namespace: "androidx.compose.material3",
      version: "1.0.0-alpha16",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "material3",
      namespace: "androidx.compose.material3",
      version: "1.0.0-alpha16",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-graphics",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "material3",
      namespace: "androidx.compose.material3",
      version: "1.0.0-alpha16",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui-text",
      namespace: "androidx.compose.ui",
      version: "1.3.0-alpha03",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "material3",
      namespace: "androidx.compose.material3",
      version: "1.0.0-alpha16",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
  [
    {
      type: "maven",
      name: "ui-tooling-preview",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
  [
    {
      type: "maven",
      name: "lifecycle-runtime-ktx",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "annotation",
      namespace: "androidx.annotation",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-runtime-ktx",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "lifecycle-runtime",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-runtime-ktx",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-runtime-ktx",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlinx-coroutines-android",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-runtime-ktx",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
  [
    {
      type: "maven",
      name: "activity-compose",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "activity-ktx",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity-ktx",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "activity",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity-ktx",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "core-ktx",
      namespace: "androidx.core",
      version: "1.8.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity-ktx",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "lifecycle-runtime-ktx",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity-ktx",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "lifecycle-viewmodel-ktx",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-viewmodel-ktx",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "lifecycle-viewmodel",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-viewmodel-ktx",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "lifecycle-viewmodel-ktx",
      namespace: "androidx.lifecycle",
      version: "2.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlinx-coroutines-android",
      namespace: "org.jetbrains.kotlinx",
      version: "1.6.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity-ktx",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "savedstate-ktx",
      namespace: "androidx.savedstate",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "savedstate-ktx",
      namespace: "androidx.savedstate",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "savedstate",
      namespace: "androidx.savedstate",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "savedstate-ktx",
      namespace: "androidx.savedstate",
      version: "1.2.0",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity-ktx",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "kotlin-stdlib",
      namespace: "org.jetbrains.kotlin",
      version: "1.7.10",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity-compose",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "runtime",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity-compose",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "runtime-saveable",
      namespace: "androidx.compose.runtime",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity-compose",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "ui",
      namespace: "androidx.compose.ui",
      version: "1.2.1",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "activity-compose",
      namespace: "androidx.activity",
      version: "1.5.1",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
]

const EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_IGNORE = [
  {
    resolved: {
      "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.7.10": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "kotlin-stdlib-jdk8",
            namespace: "org.jetbrains.kotlin",
            version: "1.7.10",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
    },
    name: "gradle-example/library-parent-parent",
    file: {
      source_location: "gradle-example/library-parent-parent/build.gradle",
    },
  },
]

const EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_COMBINED = [
  {
    resolved: {
      "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.7.10": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "kotlin-stdlib-jdk8",
            namespace: "org.jetbrains.kotlin",
            version: "1.7.10",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-common",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "annotations",
                    namespace: "org.jetbrains",
                    version: "13.0",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
              ],
            },
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib-jdk7",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-common",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "annotations",
                        namespace: "org.jetbrains",
                        version: "13.0",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
      "pkg:maven/com.squareup.retrofit2/retrofit@2.9.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "retrofit",
            namespace: "com.squareup.retrofit2",
            version: "2.9.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "okhttp",
                namespace: "com.squareup.okhttp3",
                version: "4.10.0",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "okio",
                    namespace: "com.squareup.okio",
                    version: "3.0.0",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "okio-jvm",
                        namespace: "com.squareup.okio",
                        version: "3.0.0",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-jdk8",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                            {
                              packageURL: {
                                type: "maven",
                                name: "kotlin-stdlib",
                                namespace: "org.jetbrains.kotlin",
                                version: "1.7.10",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "kotlin-stdlib-common",
                                    namespace: "org.jetbrains.kotlin",
                                    version: "1.7.10",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                  ],
                                },
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "annotations",
                                    namespace: "org.jetbrains",
                                    version: "13.0",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                  ],
                                },
                              ],
                            },
                            {
                              packageURL: {
                                type: "maven",
                                name: "kotlin-stdlib-jdk7",
                                namespace: "org.jetbrains.kotlin",
                                version: "1.7.10",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "kotlin-stdlib",
                                    namespace: "org.jetbrains.kotlin",
                                    version: "1.7.10",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                    {
                                      packageURL: {
                                        type: "maven",
                                        name: "kotlin-stdlib-common",
                                        namespace: "org.jetbrains.kotlin",
                                        version: "1.7.10",
                                        qualifiers: null,
                                        subpath: null,
                                      },
                                      dependencies: [
                                      ],
                                    },
                                    {
                                      packageURL: {
                                        type: "maven",
                                        name: "annotations",
                                        namespace: "org.jetbrains",
                                        version: "13.0",
                                        qualifiers: null,
                                        subpath: null,
                                      },
                                      dependencies: [
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-common",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-common",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "annotations",
                        namespace: "org.jetbrains",
                        version: "13.0",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
      "pkg:maven/com.squareup.okhttp3/okhttp@4.10.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "okhttp",
            namespace: "com.squareup.okhttp3",
            version: "4.10.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "okio",
                namespace: "com.squareup.okio",
                version: "3.0.0",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "okio-jvm",
                    namespace: "com.squareup.okio",
                    version: "3.0.0",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-jdk8",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                            {
                              packageURL: {
                                type: "maven",
                                name: "kotlin-stdlib-common",
                                namespace: "org.jetbrains.kotlin",
                                version: "1.7.10",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                              ],
                            },
                            {
                              packageURL: {
                                type: "maven",
                                name: "annotations",
                                namespace: "org.jetbrains",
                                version: "13.0",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                              ],
                            },
                          ],
                        },
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-jdk7",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                            {
                              packageURL: {
                                type: "maven",
                                name: "kotlin-stdlib",
                                namespace: "org.jetbrains.kotlin",
                                version: "1.7.10",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "kotlin-stdlib-common",
                                    namespace: "org.jetbrains.kotlin",
                                    version: "1.7.10",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                  ],
                                },
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "annotations",
                                    namespace: "org.jetbrains",
                                    version: "13.0",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-common",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                  ],
                },
              ],
            },
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-common",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "annotations",
                    namespace: "org.jetbrains",
                    version: "13.0",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
              ],
            },
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
      "pkg:maven/com.squareup.okhttp3/logging-interceptor@4.10.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "logging-interceptor",
            namespace: "com.squareup.okhttp3",
            version: "4.10.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "okhttp",
                namespace: "com.squareup.okhttp3",
                version: "4.10.0",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "okio",
                    namespace: "com.squareup.okio",
                    version: "3.0.0",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "okio-jvm",
                        namespace: "com.squareup.okio",
                        version: "3.0.0",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-jdk8",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                            {
                              packageURL: {
                                type: "maven",
                                name: "kotlin-stdlib",
                                namespace: "org.jetbrains.kotlin",
                                version: "1.7.10",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "kotlin-stdlib-common",
                                    namespace: "org.jetbrains.kotlin",
                                    version: "1.7.10",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                  ],
                                },
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "annotations",
                                    namespace: "org.jetbrains",
                                    version: "13.0",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                  ],
                                },
                              ],
                            },
                            {
                              packageURL: {
                                type: "maven",
                                name: "kotlin-stdlib-jdk7",
                                namespace: "org.jetbrains.kotlin",
                                version: "1.7.10",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "kotlin-stdlib",
                                    namespace: "org.jetbrains.kotlin",
                                    version: "1.7.10",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                    {
                                      packageURL: {
                                        type: "maven",
                                        name: "kotlin-stdlib-common",
                                        namespace: "org.jetbrains.kotlin",
                                        version: "1.7.10",
                                        qualifiers: null,
                                        subpath: null,
                                      },
                                      dependencies: [
                                      ],
                                    },
                                    {
                                      packageURL: {
                                        type: "maven",
                                        name: "annotations",
                                        namespace: "org.jetbrains",
                                        version: "13.0",
                                        qualifiers: null,
                                        subpath: null,
                                      },
                                      dependencies: [
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-common",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-common",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "annotations",
                        namespace: "org.jetbrains",
                        version: "13.0",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                  ],
                },
              ],
            },
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib-jdk8",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-common",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "annotations",
                        namespace: "org.jetbrains",
                        version: "13.0",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-jdk7",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-common",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                        {
                          packageURL: {
                            type: "maven",
                            name: "annotations",
                            namespace: "org.jetbrains",
                            version: "13.0",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
      "pkg:maven/org.json/json@20220320": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "json",
            namespace: "org.json",
            version: "20220320",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
      "pkg:maven/com.squareup.okio/okio@3.0.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "okio",
            namespace: "com.squareup.okio",
            version: "3.0.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "okio-jvm",
                namespace: "com.squareup.okio",
                version: "3.0.0",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-jdk8",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-common",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                        {
                          packageURL: {
                            type: "maven",
                            name: "annotations",
                            namespace: "org.jetbrains",
                            version: "13.0",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-jdk7",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                            {
                              packageURL: {
                                type: "maven",
                                name: "kotlin-stdlib-common",
                                namespace: "org.jetbrains.kotlin",
                                version: "1.7.10",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                              ],
                            },
                            {
                              packageURL: {
                                type: "maven",
                                name: "annotations",
                                namespace: "org.jetbrains",
                                version: "13.0",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-common",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
              ],
            },
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
      "pkg:maven/com.squareup.okio/okio-jvm@3.0.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "okio-jvm",
            namespace: "com.squareup.okio",
            version: "3.0.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib-jdk8",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-common",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "annotations",
                        namespace: "org.jetbrains",
                        version: "13.0",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-jdk7",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-common",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                        {
                          packageURL: {
                            type: "maven",
                            name: "annotations",
                            namespace: "org.jetbrains",
                            version: "13.0",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib-common",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
              ],
            },
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
      "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "kotlin-stdlib",
            namespace: "org.jetbrains.kotlin",
            version: "1.7.10",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib-common",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
              ],
            },
            {
              packageURL: {
                type: "maven",
                name: "annotations",
                namespace: "org.jetbrains",
                version: "13.0",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
              ],
            },
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
      "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "kotlin-stdlib-common",
            namespace: "org.jetbrains.kotlin",
            version: "1.7.10",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
      "pkg:maven/org.jetbrains/annotations@13.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "annotations",
            namespace: "org.jetbrains",
            version: "13.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
      "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk7@1.7.10": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "kotlin-stdlib-jdk7",
            namespace: "org.jetbrains.kotlin",
            version: "1.7.10",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-common",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "annotations",
                    namespace: "org.jetbrains",
                    version: "13.0",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
              ],
            },
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
    },
    name: "gradle-example/library-parent-parent",
    file: {
      source_location: "gradle-example/library-parent-parent/build.gradle",
    },
  },
]

const EXPECTED_GRADLE_DEPENDENCY_MULTI_LEVEL_OUTPUT_INDIVIDUAL = [
  {
    resolved: {
      "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.7.10": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "kotlin-stdlib-jdk8",
            namespace: "org.jetbrains.kotlin",
            version: "1.7.10",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
    },
    name: "gradle-example/library-parent-parent",
    file: {
      source_location: "gradle-example/library-parent-parent/build.gradle",
    },
  },
  {
    resolved: {
      "pkg:maven/com.squareup.retrofit2/retrofit@2.9.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "retrofit",
            namespace: "com.squareup.retrofit2",
            version: "2.9.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "okhttp",
                namespace: "com.squareup.okhttp3",
                version: "4.10.0",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
              ],
            },
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
      "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.7.10": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "kotlin-stdlib-jdk8",
            namespace: "org.jetbrains.kotlin",
            version: "1.7.10",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
      "pkg:maven/com.squareup.okhttp3/okhttp@4.10.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "okhttp",
            namespace: "com.squareup.okhttp3",
            version: "4.10.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
    },
    name: "gradle-example/library-parent",
    file: {
      source_location: "gradle-example/library-parent/build.gradle",
    },
  },
  {
    resolved: {
      "pkg:maven/com.squareup.okhttp3/okhttp@4.10.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "okhttp",
            namespace: "com.squareup.okhttp3",
            version: "4.10.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "okio",
                namespace: "com.squareup.okio",
                version: "3.0.0",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "okio-jvm",
                    namespace: "com.squareup.okio",
                    version: "3.0.0",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-jdk8",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                            {
                              packageURL: {
                                type: "maven",
                                name: "kotlin-stdlib-common",
                                namespace: "org.jetbrains.kotlin",
                                version: "1.7.10",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                              ],
                            },
                            {
                              packageURL: {
                                type: "maven",
                                name: "annotations",
                                namespace: "org.jetbrains",
                                version: "13.0",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                              ],
                            },
                          ],
                        },
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-jdk7",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                            {
                              packageURL: {
                                type: "maven",
                                name: "kotlin-stdlib",
                                namespace: "org.jetbrains.kotlin",
                                version: "1.7.10",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "kotlin-stdlib-common",
                                    namespace: "org.jetbrains.kotlin",
                                    version: "1.7.10",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                  ],
                                },
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "annotations",
                                    namespace: "org.jetbrains",
                                    version: "13.0",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-common",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                  ],
                },
              ],
            },
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-common",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "annotations",
                    namespace: "org.jetbrains",
                    version: "13.0",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
              ],
            },
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
      "pkg:maven/com.squareup.okhttp3/logging-interceptor@4.10.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "logging-interceptor",
            namespace: "com.squareup.okhttp3",
            version: "4.10.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "okhttp",
                namespace: "com.squareup.okhttp3",
                version: "4.10.0",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "okio",
                    namespace: "com.squareup.okio",
                    version: "3.0.0",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "okio-jvm",
                        namespace: "com.squareup.okio",
                        version: "3.0.0",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-jdk8",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                            {
                              packageURL: {
                                type: "maven",
                                name: "kotlin-stdlib",
                                namespace: "org.jetbrains.kotlin",
                                version: "1.7.10",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "kotlin-stdlib-common",
                                    namespace: "org.jetbrains.kotlin",
                                    version: "1.7.10",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                  ],
                                },
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "annotations",
                                    namespace: "org.jetbrains",
                                    version: "13.0",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                  ],
                                },
                              ],
                            },
                            {
                              packageURL: {
                                type: "maven",
                                name: "kotlin-stdlib-jdk7",
                                namespace: "org.jetbrains.kotlin",
                                version: "1.7.10",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                                {
                                  packageURL: {
                                    type: "maven",
                                    name: "kotlin-stdlib",
                                    namespace: "org.jetbrains.kotlin",
                                    version: "1.7.10",
                                    qualifiers: null,
                                    subpath: null,
                                  },
                                  dependencies: [
                                    {
                                      packageURL: {
                                        type: "maven",
                                        name: "kotlin-stdlib-common",
                                        namespace: "org.jetbrains.kotlin",
                                        version: "1.7.10",
                                        qualifiers: null,
                                        subpath: null,
                                      },
                                      dependencies: [
                                      ],
                                    },
                                    {
                                      packageURL: {
                                        type: "maven",
                                        name: "annotations",
                                        namespace: "org.jetbrains",
                                        version: "13.0",
                                        qualifiers: null,
                                        subpath: null,
                                      },
                                      dependencies: [
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-common",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-common",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "annotations",
                        namespace: "org.jetbrains",
                        version: "13.0",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                  ],
                },
              ],
            },
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib-jdk8",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-common",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "annotations",
                        namespace: "org.jetbrains",
                        version: "13.0",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-jdk7",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-common",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                        {
                          packageURL: {
                            type: "maven",
                            name: "annotations",
                            namespace: "org.jetbrains",
                            version: "13.0",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
      "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.7.10": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "kotlin-stdlib-jdk8",
            namespace: "org.jetbrains.kotlin",
            version: "1.7.10",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-common",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "annotations",
                    namespace: "org.jetbrains",
                    version: "13.0",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
              ],
            },
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib-jdk7",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-common",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "annotations",
                        namespace: "org.jetbrains",
                        version: "13.0",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
      "pkg:maven/com.squareup.okio/okio@3.0.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "okio",
            namespace: "com.squareup.okio",
            version: "3.0.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "okio-jvm",
                namespace: "com.squareup.okio",
                version: "3.0.0",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-jdk8",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-common",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                        {
                          packageURL: {
                            type: "maven",
                            name: "annotations",
                            namespace: "org.jetbrains",
                            version: "13.0",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-jdk7",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                            {
                              packageURL: {
                                type: "maven",
                                name: "kotlin-stdlib-common",
                                namespace: "org.jetbrains.kotlin",
                                version: "1.7.10",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                              ],
                            },
                            {
                              packageURL: {
                                type: "maven",
                                name: "annotations",
                                namespace: "org.jetbrains",
                                version: "13.0",
                                qualifiers: null,
                                subpath: null,
                              },
                              dependencies: [
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-common",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
              ],
            },
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
      "pkg:maven/com.squareup.okio/okio-jvm@3.0.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "okio-jvm",
            namespace: "com.squareup.okio",
            version: "3.0.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib-jdk8",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib-common",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                    {
                      packageURL: {
                        type: "maven",
                        name: "annotations",
                        namespace: "org.jetbrains",
                        version: "13.0",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                      ],
                    },
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-jdk7",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                    {
                      packageURL: {
                        type: "maven",
                        name: "kotlin-stdlib",
                        namespace: "org.jetbrains.kotlin",
                        version: "1.7.10",
                        qualifiers: null,
                        subpath: null,
                      },
                      dependencies: [
                        {
                          packageURL: {
                            type: "maven",
                            name: "kotlin-stdlib-common",
                            namespace: "org.jetbrains.kotlin",
                            version: "1.7.10",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                        {
                          packageURL: {
                            type: "maven",
                            name: "annotations",
                            namespace: "org.jetbrains",
                            version: "13.0",
                            qualifiers: null,
                            subpath: null,
                          },
                          dependencies: [
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib-common",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
              ],
            },
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
      "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "kotlin-stdlib",
            namespace: "org.jetbrains.kotlin",
            version: "1.7.10",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib-common",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
              ],
            },
            {
              packageURL: {
                type: "maven",
                name: "annotations",
                namespace: "org.jetbrains",
                version: "13.0",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
              ],
            },
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
      "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "kotlin-stdlib-common",
            namespace: "org.jetbrains.kotlin",
            version: "1.7.10",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
      "pkg:maven/org.jetbrains/annotations@13.0": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "annotations",
            namespace: "org.jetbrains",
            version: "13.0",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
      "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk7@1.7.10": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "kotlin-stdlib-jdk7",
            namespace: "org.jetbrains.kotlin",
            version: "1.7.10",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
            {
              packageURL: {
                type: "maven",
                name: "kotlin-stdlib",
                namespace: "org.jetbrains.kotlin",
                version: "1.7.10",
                qualifiers: null,
                subpath: null,
              },
              dependencies: [
                {
                  packageURL: {
                    type: "maven",
                    name: "kotlin-stdlib-common",
                    namespace: "org.jetbrains.kotlin",
                    version: "1.7.10",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
                {
                  packageURL: {
                    type: "maven",
                    name: "annotations",
                    namespace: "org.jetbrains",
                    version: "13.0",
                    qualifiers: null,
                    subpath: null,
                  },
                  dependencies: [
                  ],
                },
              ],
            },
          ],
        },
        relationship: "indirect",
        scope: undefined,
      },
    },
    name: "gradle-example/library-child-1",
    file: {
      source_location: "gradle-example/library-child-1/build.gradle",
    },
  },
  {
    resolved: {
      "pkg:maven/org.json/json@20220320": {
        depPackage: {
          packageURL: {
            type: "maven",
            name: "json",
            namespace: "org.json",
            version: "20220320",
            qualifiers: null,
            subpath: null,
          },
          dependencies: [
          ],
        },
        relationship: "direct",
        scope: undefined,
      },
    },
    name: "gradle-example/library-child-2",
    file: {
      source_location: "gradle-example/library-child-2/build.gradle",
    },
  },
]