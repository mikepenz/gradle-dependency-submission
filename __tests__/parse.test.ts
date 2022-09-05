import { jest, describe, test, expect } from '@jest/globals'
import { parseGradleGraph } from '../src/parse'
import fs from 'fs';

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

const GRADLE_EXAMPLE_DEPENDENCY_OUTPUT_SPRING = [
  [
    {
      type: "maven",
      name: "lombok",
      namespace: "org.projectlombok",
      version: "1.18.24",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
  [
    {
      type: "maven",
      name: "jackson-databind",
      namespace: "com.fasterxml.jackson.core",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "jackson-annotations",
      namespace: "com.fasterxml.jackson.core",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "jackson-annotations",
      namespace: "com.fasterxml.jackson.core",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "jackson-bom",
      namespace: "com.fasterxml.jackson",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "jackson-bom",
      namespace: "com.fasterxml.jackson",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "jackson-annotations",
      namespace: "com.fasterxml.jackson.core",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "jackson-bom",
      namespace: "com.fasterxml.jackson",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "jackson-core",
      namespace: "com.fasterxml.jackson.core",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "jackson-bom",
      namespace: "com.fasterxml.jackson",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "jackson-databind",
      namespace: "com.fasterxml.jackson.core",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "jackson-bom",
      namespace: "com.fasterxml.jackson",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "jackson-dataformat-yaml",
      namespace: "com.fasterxml.jackson.dataformat",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "jackson-bom",
      namespace: "com.fasterxml.jackson",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "jackson-datatype-jdk8",
      namespace: "com.fasterxml.jackson.datatype",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "jackson-bom",
      namespace: "com.fasterxml.jackson",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "jackson-datatype-jsr310",
      namespace: "com.fasterxml.jackson.datatype",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "jackson-bom",
      namespace: "com.fasterxml.jackson",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "jackson-module-parameter-names",
      namespace: "com.fasterxml.jackson.module",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "jackson-databind",
      namespace: "com.fasterxml.jackson.core",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "jackson-core",
      namespace: "com.fasterxml.jackson.core",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "jackson-core",
      namespace: "com.fasterxml.jackson.core",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "jackson-bom",
      namespace: "com.fasterxml.jackson",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "jackson-databind",
      namespace: "com.fasterxml.jackson.core",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "jackson-bom",
      namespace: "com.fasterxml.jackson",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "jackson-databind",
      namespace: "com.fasterxml.jackson.core",
      version: "2.13.3",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
  [
    {
      type: "maven",
      name: "aspect4-commons-graphql",
      namespace: "dk.eg.aspect4",
      version: "22.3-SNAPSHOT",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
  [
    {
      type: "maven",
      name: "aspect4-application-support-api",
      namespace: "dk.eg.aspect4",
      version: "22.3-SNAPSHOT",
      qualifiers: null,
      subpath: null,
    },
    {
      type: "maven",
      name: "aspect4-commons-client",
      namespace: "dk.eg.aspect4",
      version: "22.3-SNAPSHOT",
      qualifiers: null,
      subpath: null,
    },
  ],
  [
    {
      type: "maven",
      name: "aspect4-application-support-api",
      namespace: "dk.eg.aspect4",
      version: "22.3-SNAPSHOT",
      qualifiers: null,
      subpath: null,
    },
    undefined,
  ],
]

jest.setTimeout(180000)

describe('parseGradleDependencyOutput', () => {
  test('parses output of gradle dependency command into dependencies', () => {
    const dependencies = parseGradleGraph("test", GRADLE_DEPENDENCY_OUTPUT).packages

    expect(Object.values(dependencies).length).toEqual(
      GRADLE_EXAMPLE_DEPENDENCY_OUTPUT.length
    )
    expect(dependencies).toEqual(GRADLE_EXAMPLE_DEPENDENCY_OUTPUT)
  })

  test('parses output of gradle dependency command with bom into dependencies', () => {
    const dependencies = parseGradleGraph("test", GRADLE_DEPENDENCY_OUTPUT_SPRING).packages

    expect(Object.values(dependencies).length).toEqual(
      GRADLE_EXAMPLE_DEPENDENCY_OUTPUT_SPRING.length
    )
    expect(dependencies).toEqual(GRADLE_EXAMPLE_DEPENDENCY_OUTPUT_SPRING)
  })


  test('parses output of gradle dependency command with sub projects', () => {
    const rootProject = parseGradleGraph("test", fs.readFileSync("__tests__/elasticoutput.txt", 'utf8'), 'INDIVIDUAL')
    expect(rootProject).toEqual(GRADLE_EXAMPLE_DEPENDENCY_WITH_SUB_PROJECTS_OUTPUT)
  })
})

const GRADLE_EXAMPLE_DEPENDENCY_WITH_SUB_PROJECTS_OUTPUT = {
  dependencyPath: undefined,
  childProjects: [
    {
      dependencyPath: undefined,
      childProjects: [],
      packages: [],
      name: ":libs:elasticsearch-core",
    },
    {
      dependencyPath: undefined,
      childProjects: [],
      packages: [],
      name: ":libs:elasticsearch-logging",
    },
    {
      dependencyPath: undefined,
      childProjects: [],
      packages: [],
      name: ":libs:elasticsearch-secure-sm",
    },
    {
      dependencyPath: undefined,
      childProjects: [
        {
          dependencyPath: undefined,
          childProjects: [
          ],
          packages: [
          ],
          name: ":libs:elasticsearch-core",
        },
      ],
      packages: [],
      name: ":libs:elasticsearch-x-content",
    },
    {
      dependencyPath: undefined,
      childProjects: [],
      packages: [],
      name: ":libs:elasticsearch-geo",
    },
    {
      dependencyPath: undefined,
      childProjects: [
        {
          dependencyPath: undefined,
          childProjects: [
          ],
          packages: [
          ],
          name: ":libs:elasticsearch-core",
        },
      ],
      packages: [
        [
          {
            type: "maven",
            name: "lz4-java",
            namespace: "org.lz4",
            version: "1.8.0",
            qualifiers: null,
            subpath: null,
          },
          undefined,
        ],
      ],
      name: ":libs:elasticsearch-lz4",
    },
    {
      dependencyPath: undefined,
      childProjects: [
        {
          dependencyPath: undefined,
          childProjects: [
          ],
          packages: [
          ],
          name: ":libs:elasticsearch-core",
        },
      ],
      packages: [
        [
          {
            type: "maven",
            name: "jopt-simple",
            namespace: "net.sf.jopt-simple",
            version: "5.0.2",
            qualifiers: null,
            subpath: null,
          },
          undefined,
        ],
      ],
      name: ":libs:elasticsearch-cli",
    },
    {
      dependencyPath: undefined,
      childProjects: [],
      packages: [],
      name: ":libs:elasticsearch-plugin-classloader",
    },
  ],
  packages: [
    [
      {
        type: "maven",
        name: "lucene-core",
        namespace: "org.apache.lucene",
        version: "9.3.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "lucene-analysis-common",
        namespace: "org.apache.lucene",
        version: "9.3.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "lucene-backward-codecs",
        namespace: "org.apache.lucene",
        version: "9.3.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "lucene-grouping",
        namespace: "org.apache.lucene",
        version: "9.3.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "lucene-highlighter",
        namespace: "org.apache.lucene",
        version: "9.3.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "lucene-join",
        namespace: "org.apache.lucene",
        version: "9.3.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "lucene-memory",
        namespace: "org.apache.lucene",
        version: "9.3.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "lucene-misc",
        namespace: "org.apache.lucene",
        version: "9.3.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "lucene-queries",
        namespace: "org.apache.lucene",
        version: "9.3.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "lucene-queryparser",
        namespace: "org.apache.lucene",
        version: "9.3.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "lucene-sandbox",
        namespace: "org.apache.lucene",
        version: "9.3.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "lucene-suggest",
        namespace: "org.apache.lucene",
        version: "9.3.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "t-digest",
        namespace: "com.tdunning",
        version: "3.2",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "HdrHistogram",
        namespace: "org.hdrhistogram",
        version: "2.1.9",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "log4j-api",
        namespace: "org.apache.logging.log4j",
        version: "2.18.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "log4j-core",
        namespace: "org.apache.logging.log4j",
        version: "2.18.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "jna",
        namespace: "net.java.dev.jna",
        version: "5.10.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "log4j2-ecs-layout",
        namespace: "co.elastic.logging",
        version: "1.2.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "ecs-logging-core",
        namespace: "co.elastic.logging",
        version: "1.2.0",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
    [
      {
        type: "maven",
        name: "hppc",
        namespace: "com.carrotsearch",
        version: "0.8.1",
        qualifiers: null,
        subpath: null,
      },
      undefined,
    ],
  ],
  name: "test",
  projectRegistry: [
    {
      dependencyPath: undefined,
      childProjects: [],
      packages: [],
      name: ":libs:elasticsearch-core",
    },
    {
      dependencyPath: undefined,
      childProjects: [],
      packages: [],
      name: ":libs:elasticsearch-logging",
    },
    {
      dependencyPath: undefined,
      childProjects: [],
      packages: [],
      name: ":libs:elasticsearch-secure-sm",
    },
    {
      dependencyPath: undefined,
      childProjects: [
        {
          dependencyPath: undefined,
          childProjects: [
          ],
          packages: [
          ],
          name: ":libs:elasticsearch-core",
        },
      ],
      packages: [],
      name: ":libs:elasticsearch-x-content",
    },
    {
      dependencyPath: undefined,
      childProjects: [],
      packages: [],
      name: ":libs:elasticsearch-geo",
    },
    {
      dependencyPath: undefined,
      childProjects: [
        {
          dependencyPath: undefined,
          childProjects: [
          ],
          packages: [
          ],
          name: ":libs:elasticsearch-core",
        },
      ],
      packages: [
        [
          {
            type: "maven",
            name: "lz4-java",
            namespace: "org.lz4",
            version: "1.8.0",
            qualifiers: null,
            subpath: null,
          },
          undefined,
        ],
      ],
      name: ":libs:elasticsearch-lz4",
    },
    {
      dependencyPath: undefined,
      childProjects: [
        {
          dependencyPath: undefined,
          childProjects: [
          ],
          packages: [
          ],
          name: ":libs:elasticsearch-core",
        },
      ],
      packages: [
        [
          {
            type: "maven",
            name: "jopt-simple",
            namespace: "net.sf.jopt-simple",
            version: "5.0.2",
            qualifiers: null,
            subpath: null,
          },
          undefined,
        ],
      ],
      name: ":libs:elasticsearch-cli",
    },
    {
      dependencyPath: undefined,
      childProjects: [],
      packages: [],
      name: ":libs:elasticsearch-plugin-classloader",
    },
  ],
}

