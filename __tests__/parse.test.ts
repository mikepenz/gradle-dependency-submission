import {jest, describe, test, expect} from '@jest/globals'
import {parseGradleGraph} from '../src/parse'
import fs from 'fs'
import {
  GRADLE_EXAMPLE_DEPENDENCY_OUTPUT,
  GRADLE_EXAMPLE_DEPENDENCY_OUTPUT_UNRESOLVED,
  GRADLE_EXAMPLE_DEPENDENCY_OUTPUT_SPRING,
  GRADLE_EXAMPLE_DEPENDENCY_WITH_SUB_PROJECTS_OUTPUT,
  GRADLE_EXAMPLE_DEPENDENCY_OUTPUT_UNSPECIFIED
} from './expected_dependency_results'

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


const GRADLE_DEPENDENCY_OUTPUT_UNRESOLVED = `
> Task :app:dependencies

------------------------------------------------------------
Project ':app'
------------------------------------------------------------

debugCompileClasspath - Compile classpath for compilation 'debug' (target  (androidJvm)).
+--- org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.6.10
|    +--- org.jetbrains.kotlin:kotlin-stdlib:1.6.10
|    |    +--- org.jetbrains:annotations:13.0
|    |    \\--- org.projectlombok:lombok (n)
+--- org.jetbrains:annotations:{strictly 13.0} -> 13.0 (c)
\\--- org.jetbrains.kotlin:kotlin-stdlib-common:{strictly 1.6.10} -> 1.6.10 (c)

(c) - dependency constraint
(*) - dependencies omitted (listed previously)

A web-based, searchable dependency report is available by adding the --scan option.

BUILD SUCCESSFUL in 555ms
1 actionable task: 1 executed`


const GRADLE_DEPENDENCY_OUTPUT_UNSPECIFIED = `
> Task :app:dependencies

------------------------------------------------------------
Project ':app'
------------------------------------------------------------

debugCompileClasspath - Compile classpath for compilation 'debug' (target  (androidJvm)).
+--- org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.6.10
|    +--- org.jetbrains.kotlin:kotlin-stdlib:1.6.10
|    |    +--- org.jetbrains:annotations:13.0
|    |    \\--- unspecified (n)
+--- org.jetbrains:annotations:{strictly 13.0} -> 13.0 (c)
\\--- org.jetbrains.kotlin:kotlin-stdlib-common:{strictly 1.6.10} -> 1.6.10 (c)

(c) - dependency constraint
(*) - dependencies omitted (listed previously)

A web-based, searchable dependency report is available by adding the --scan option.

BUILD SUCCESSFUL in 555ms
1 actionable task: 1 executed`


const GRADLE_DEPENDENCY_OUTPUT_SPRING = `
Type-safe dependency accessors is an incubating feature.

> Task :aspect4-commons-application:dependencies

------------------------------------------------------------
Project ':aspect4-commons-application' - ASPECT4 Application Commons
------------------------------------------------------------

compileClasspath - Compile classpath for source set 'main'.
+--- org.projectlombok:lombok -> 1.18.24
+--- com.fasterxml.jackson.core:jackson-databind -> 2.13.3
|    +--- com.fasterxml.jackson.core:jackson-annotations:2.13.3
|    |    \\--- com.fasterxml.jackson:jackson-bom:2.13.3
|    |         +--- com.fasterxml.jackson.core:jackson-annotations:2.13.3 (c)
|    |         +--- com.fasterxml.jackson.core:jackson-core:2.13.3 (c)
|    |         +--- com.fasterxml.jackson.core:jackson-databind:2.13.3 (c)
|    |         +--- com.fasterxml.jackson.dataformat:jackson-dataformat-yaml:2.13.3 (c)
|    |         +--- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.13.3 (c)
|    |         +--- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.13.3 (c)
|    |         \\--- com.fasterxml.jackson.module:jackson-module-parameter-names:2.13.3 (c)
|    +--- com.fasterxml.jackson.core:jackson-core:2.13.3
|    |    \\--- com.fasterxml.jackson:jackson-bom:2.13.3 (*)
|    \\--- com.fasterxml.jackson:jackson-bom:2.13.3 (*)
+--- dk.eg.aspect4:aspect4-commons-graphql:22.3-SNAPSHOT (*)
\\--- dk.eg.aspect4:aspect4-application-support-api:22.3-SNAPSHOT
     \\--- dk.eg.aspect4:aspect4-commons-client:22.3-SNAPSHOT (*)

(c) - dependency constraint
(*) - dependencies omitted (listed previously)
`

jest.setTimeout(180000)

describe('parseGradleDependencyOutput', () => {
  test('parses output of gradle dependency command into dependencies', () => {
    const dependencies = parseGradleGraph('test', GRADLE_DEPENDENCY_OUTPUT).packages

    expect(Object.values(dependencies).length).toEqual(GRADLE_EXAMPLE_DEPENDENCY_OUTPUT.length)
    expect(dependencies).toEqual(GRADLE_EXAMPLE_DEPENDENCY_OUTPUT)
  })

  test('parses output of gradle dependency command with unresolved dependencies', () => {
    const dependencies = parseGradleGraph('test', GRADLE_DEPENDENCY_OUTPUT_UNRESOLVED).packages

    expect(Object.values(dependencies).length).toEqual(GRADLE_EXAMPLE_DEPENDENCY_OUTPUT_UNRESOLVED.length)
    expect(dependencies).toEqual(GRADLE_EXAMPLE_DEPENDENCY_OUTPUT_UNRESOLVED)
  })

  test('parses output of gradle dependency command with unspecified dependencies', () => {
    const dependencies = parseGradleGraph('test', GRADLE_DEPENDENCY_OUTPUT_UNSPECIFIED).packages

    expect(Object.values(dependencies).length).toEqual(GRADLE_EXAMPLE_DEPENDENCY_OUTPUT_UNSPECIFIED.length)
    expect(dependencies).toEqual(GRADLE_EXAMPLE_DEPENDENCY_OUTPUT_UNSPECIFIED)
  })

  test('parses output of gradle dependency command with bom into dependencies', () => {
    const dependencies = parseGradleGraph('test', GRADLE_DEPENDENCY_OUTPUT_SPRING).packages

    expect(Object.values(dependencies).length).toEqual(GRADLE_EXAMPLE_DEPENDENCY_OUTPUT_SPRING.length)
    expect(dependencies).toEqual(GRADLE_EXAMPLE_DEPENDENCY_OUTPUT_SPRING)
  })

  test('parses output of gradle dependency command with sub projects', () => {
    const rootProject = parseGradleGraph('test', fs.readFileSync('__tests__/elasticoutput.txt', 'utf8'), 'INDIVIDUAL')
    expect(rootProject).toEqual(GRADLE_EXAMPLE_DEPENDENCY_WITH_SUB_PROJECTS_OUTPUT)
  })
})
