import {describe, test, expect} from '@jest/globals'
import {parseGradleGraph} from '../src/parse'

const GRADLE_DEPENDENCY_OUTPUT = `
> Task :app:dependencies

------------------------------------------------------------
Project ':app'
------------------------------------------------------------

debugCompileClasspath - Compile classpath for compilation 'debug' (target  (androidJvm)).
+--- org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.6.10
|    +--- org.jetbrains.kotlin:kotlin-stdlib:1.6.10
|    |    +--- org.jetbrains:annotations:13.0
|    |    \\--- org.jetbrains.kotlin:kotlin-stdlib-common:1.6.10
|    \\--- org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.6.10
|         \\--- org.jetbrains.kotlin:kotlin-stdlib:1.6.10 (*)
+--- org.jetbrains.kotlin:kotlin-stdlib-jdk8:{strictly 1.6.10} -> 1.6.10 (c)
+--- org.jetbrains.kotlin:kotlin-stdlib:{strictly 1.6.10} -> 1.6.10 (c)
+--- org.jetbrains.kotlin:kotlin-stdlib-jdk7:{strictly 1.6.10} -> 1.6.10 (c)
+--- org.jetbrains:annotations:{strictly 13.0} -> 13.0 (c)
\\--- org.jetbrains.kotlin:kotlin-stdlib-common:{strictly 1.6.10} -> 1.6.10 (c)

(c) - dependency constraint
(*) - dependencies omitted (listed previously)

A web-based, searchable dependency report is available by adding the --scan option.

BUILD SUCCESSFUL in 555ms
1 actionable task: 1 executed`

const GRADLE_EXAMPLE_DEPENDENCY_OUTPUT = [
  [
    {
      type: 'maven',
      name: 'kotlin-stdlib-jdk8',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotations',
      namespace: 'org.jetbrains',
      version: '13.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib-common',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlin-stdlib-jdk8',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib-jdk7',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlin-stdlib-jdk7',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlin-stdlib-jdk8',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    },
    undefined
  ]
]

describe('parseGradleDependencyOutput', () => {
  test('parses output of gradle dependency command into dependencies', () => {
    const dependencies = parseGradleGraph(GRADLE_DEPENDENCY_OUTPUT)

    expect(Object.values(dependencies).length).toEqual(
      GRADLE_EXAMPLE_DEPENDENCY_OUTPUT.length
    )
    expect(dependencies).toEqual(GRADLE_EXAMPLE_DEPENDENCY_OUTPUT)
  })
})
