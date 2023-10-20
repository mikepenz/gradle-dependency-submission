import {jest, describe, test, expect} from '@jest/globals'
import {parseGradleGraph} from '../src/parse'
import fs from 'fs'

jest.setTimeout(180000)

describe('parseGradleDependencyOutput', () => {
  test('parses output of gradle dependency with dependencies upgraded', () => {
    const rootProject = parseGradleGraph(
      'test',
      fs.readFileSync('__tests__/_version_upgrade.txt', 'utf8'),
      'INDIVIDUAL',
      false
    )
    expect(JSON.parse(JSON.stringify(rootProject))).toEqual(EXPECTED)
  })
})

const EXPECTED = {
  childProjects: [],
  packages: [
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core-apt',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core-apt',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'xstream',
        namespace: 'com.thoughtworks.xstream',
        version: '1.4.20',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'xstream',
        namespace: 'com.thoughtworks.xstream',
        version: '1.4.20',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'mxparser',
        namespace: 'io.github.x-stream',
        version: '1.2.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'mxparser',
        namespace: 'io.github.x-stream',
        version: '1.2.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'xmlpull',
        namespace: 'xmlpull',
        version: '1.1.3.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core-apt',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.validation-api',
        namespace: 'jakarta.validation',
        version: '2.0.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core-apt',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'xstream',
        namespace: 'com.thoughtworks.xstream',
        version: '1.4.20',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-io',
        namespace: 'commons-io',
        version: '2.11.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-net',
        namespace: 'commons-net',
        version: '3.9.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-pool',
        namespace: 'commons-pool',
        version: '1.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-lang3',
        namespace: 'org.apache.commons',
        version: '3.12.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-pool2',
        namespace: 'org.apache.commons',
        version: '2.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.servlet-api',
        namespace: 'javax.servlet',
        version: '4.0.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-client',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-client',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-http',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-http',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-http',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-io',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-io',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-client',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-io',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-deploy',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-deploy',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-webapp',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-webapp',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-xml',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-xml',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-webapp',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-servlet',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-servlet',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-security',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-security',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-server',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-server',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.servlet-api',
        namespace: 'javax.servlet',
        version: '4.0.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-server',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-http',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-server',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-io',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-servlet',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util-ajax',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-util-ajax',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-deploy',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-xml',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-jmx',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-jmx',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-plus',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-plus',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-webapp',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-plus',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-jndi',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-jndi',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-annotations',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-annotations',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-plus',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-annotations',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-webapp',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-annotations',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.annotation-api',
        namespace: 'javax.annotation',
        version: '1.3.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-annotations',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'asm',
        namespace: 'org.ow2.asm',
        version: '9.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-annotations',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'asm-commons',
        namespace: 'org.ow2.asm',
        version: '9.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'asm-commons',
        namespace: 'org.ow2.asm',
        version: '9.4',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'asm',
        namespace: 'org.ow2.asm',
        version: '9.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'asm-commons',
        namespace: 'org.ow2.asm',
        version: '9.4',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'asm-tree',
        namespace: 'org.ow2.asm',
        version: '9.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'asm-tree',
        namespace: 'org.ow2.asm',
        version: '9.4',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'asm',
        namespace: 'org.ow2.asm',
        version: '9.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-jaspi',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-jaspi',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-security',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-jaspi',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.security.auth.message',
        namespace: 'org.eclipse.jetty.orbit',
        version: '1.0.0.v201108011116',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-jndi',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-rewrite',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-rewrite',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-server',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-rewrite',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.servlet-api',
        namespace: 'javax.servlet',
        version: '4.0.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-servlets',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-servlets',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-continuation',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-servlets',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-http',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-servlets',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-servlets',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-io',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-quickstart',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-quickstart',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-webapp',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-quickstart',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-jmx',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-quickstart',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-plus',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-quickstart',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-annotations',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-quickstart',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.transaction-api',
        namespace: 'javax.transaction',
        version: '1.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-servlet',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-servlet',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-api',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-servlet',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.servlet-api',
        namespace: 'javax.servlet',
        version: '4.0.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax-websocket-server-impl',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'javax-websocket-server-impl',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-annotations',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'javax-websocket-server-impl',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax-websocket-client-impl',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'javax-websocket-client-impl',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-client',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-client',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-client',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-client',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-client',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-io',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-client',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-common',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-common',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-api',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-common',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-common',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-io',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'javax-websocket-client-impl',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.websocket-client-api',
        namespace: 'javax.websocket',
        version: '1.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'javax-websocket-server-impl',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-server',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-server',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-common',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-server',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-client',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-server',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-servlet',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-server',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-servlet',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'websocket-server',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-http',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'javax-websocket-server-impl',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.websocket-api',
        namespace: 'javax.websocket',
        version: '1.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-client',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-alpn-client',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-alpn-client',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-io',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'http2-server',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'http2-server',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'http2-common',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'http2-common',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'http2-hpack',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'http2-hpack',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'http2-hpack',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-http',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'http2-hpack',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-io',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'http2-server',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-server',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'http2-client',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'http2-client',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'http2-common',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'http2-client',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-alpn-client',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.websocket-api',
        namespace: 'javax.websocket',
        version: '1.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.servlet-api',
        namespace: 'javax.servlet',
        version: '4.0.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'xstream',
        namespace: 'com.thoughtworks.xstream',
        version: '1.4.20',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jettison',
        namespace: 'org.codehaus.jettison',
        version: '1.5.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'classgraph',
        namespace: 'io.github.classgraph',
        version: '4.8.116',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'expiringmap',
        namespace: 'net.jodah',
        version: '0.5.10',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.activation',
        namespace: 'com.sun.activation',
        version: '1.2.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'activemq-client',
        namespace: 'org.apache.activemq',
        version: '5.17.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'activemq-client',
        namespace: 'org.apache.activemq',
        version: '5.17.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'activemq-client',
        namespace: 'org.apache.activemq',
        version: '5.17.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'hawtbuf',
        namespace: 'org.fusesource.hawtbuf',
        version: '1.11',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'activemq-client',
        namespace: 'org.apache.activemq',
        version: '5.17.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'geronimo-j2ee-management_1.1_spec',
        namespace: 'org.apache.geronimo.specs',
        version: 'jakarta.management.j2ee',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.jms-api',
        namespace: 'jakarta.jms',
        version: '2.0.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'hibernate-jpa-2.1-api',
        namespace: 'org.hibernate.javax.persistence',
        version: '1.0.2.Final',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.validation-api',
        namespace: 'jakarta.validation',
        version: '2.0.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'hibernate-validator',
        namespace: 'org.hibernate.validator',
        version: '6.1.7.Final',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'hibernate-validator',
        namespace: 'org.hibernate.validator',
        version: '6.1.7.Final',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.validation-api',
        namespace: 'jakarta.validation',
        version: '2.0.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'hibernate-validator',
        namespace: 'org.hibernate.validator',
        version: '6.1.7.Final',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jboss-logging',
        namespace: 'org.jboss.logging',
        version: '3.3.2.Final',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'hibernate-validator',
        namespace: 'org.hibernate.validator',
        version: '6.1.7.Final',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'classmate',
        namespace: 'com.fasterxml',
        version: '1.3.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.el',
        namespace: 'org.glassfish',
        version: 'org.glassfish',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-io',
        namespace: 'commons-io',
        version: '2.11.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-lang3',
        namespace: 'org.apache.commons',
        version: '3.12.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-net',
        namespace: 'commons-net',
        version: '3.9.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-pool2',
        namespace: 'org.apache.commons',
        version: '2.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-exec',
        namespace: 'org.apache.commons',
        version: '1.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-text',
        namespace: 'org.apache.commons',
        version: '1.10.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'commons-text',
        namespace: 'org.apache.commons',
        version: '1.10.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-lang3',
        namespace: 'org.apache.commons',
        version: '3.12.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-collections4',
        namespace: 'org.apache.commons',
        version: '4.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'bcprov-jdk15on',
        namespace: 'org.bouncycastle',
        version: 'org.bouncycastle',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'bcpkix-jdk15on',
        namespace: 'org.bouncycastle',
        version: 'org.bouncycastle',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'bcpkix-jdk15on',
        namespace: 'org.bouncycastle',
        version: 'org.bouncycastle',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'bcprov-jdk18on',
        namespace: 'org.bouncycastle',
        version: '1.72',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'bcpkix-jdk15on',
        namespace: 'org.bouncycastle',
        version: 'org.bouncycastle',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'bcutil-jdk18on',
        namespace: 'org.bouncycastle',
        version: '1.72',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'bcutil-jdk18on',
        namespace: 'org.bouncycastle',
        version: '1.72',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'bcprov-jdk18on',
        namespace: 'org.bouncycastle',
        version: '1.72',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'bcmail-jdk15on',
        namespace: 'org.bouncycastle',
        version: 'org.bouncycastle',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'bcmail-jdk15on',
        namespace: 'org.bouncycastle',
        version: 'org.bouncycastle',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'bcprov-jdk18on',
        namespace: 'org.bouncycastle',
        version: '1.72',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'bcmail-jdk15on',
        namespace: 'org.bouncycastle',
        version: 'org.bouncycastle',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'bcutil-jdk18on',
        namespace: 'org.bouncycastle',
        version: '1.72',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'bcmail-jdk15on',
        namespace: 'org.bouncycastle',
        version: 'org.bouncycastle',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'bcpkix-jdk18on',
        namespace: 'org.bouncycastle',
        version: '1.72',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.mail',
        namespace: 'com.sun.mail',
        version: '1.6.7',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jakarta.mail',
        namespace: 'com.sun.mail',
        version: '1.6.7',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.activation',
        namespace: 'com.sun.activation',
        version: '1.2.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'opendmk_jmxremote_optional_jar',
        namespace: 'org.glassfish.external',
        version: '1.0-b01-ea',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'opendmk_jdmkrt_jar',
        namespace: 'org.glassfish.external',
        version: '1.0-b01-ea',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jsch',
        namespace: 'com.github.mwiede',
        version: '0.2.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-all',
        namespace: 'org.eclipse.jetty.aggregate',
        version: '9.4.49.v20220914',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.servlet-api',
        namespace: 'javax.servlet',
        version: '4.0.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'joost',
        namespace: 'net.sf.joost',
        version: '0.9.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'quartz',
        namespace: 'org.quartz-scheduler',
        version: '2.3.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'quartz',
        namespace: 'org.quartz-scheduler',
        version: '2.3.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'c3p0',
        namespace: 'com.mchange',
        version: '0.9.5.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'c3p0',
        namespace: 'com.mchange',
        version: '0.9.5.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'mchange-commons-java',
        namespace: 'com.mchange',
        version: '0.2.19',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'quartz',
        namespace: 'org.quartz-scheduler',
        version: '2.3.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'mchange-commons-java',
        namespace: 'com.mchange',
        version: '0.2.19',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'quartz',
        namespace: 'org.quartz-scheduler',
        version: '2.3.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'HikariCP',
        namespace: 'com.zaxxer',
        version: '5.0.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'HikariCP',
        namespace: 'com.zaxxer',
        version: '5.0.1',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'Saxon-HE',
        namespace: 'net.sf.saxon',
        version: '11.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'Saxon-HE',
        namespace: 'net.sf.saxon',
        version: '11.4',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'xmlresolver',
        namespace: 'org.xmlresolver',
        version: '4.4.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'xmlresolver',
        namespace: 'org.xmlresolver',
        version: '4.4.3',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpclient5',
        namespace: 'org.apache.httpcomponents.client5',
        version: '5.1.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'httpclient5',
        namespace: 'org.apache.httpcomponents.client5',
        version: '5.1.3',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpcore5',
        namespace: 'org.apache.httpcomponents.core5',
        version: '5.1.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'httpclient5',
        namespace: 'org.apache.httpcomponents.client5',
        version: '5.1.3',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpcore5-h2',
        namespace: 'org.apache.httpcomponents.core5',
        version: '5.1.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'httpcore5-h2',
        namespace: 'org.apache.httpcomponents.core5',
        version: '5.1.3',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpcore5',
        namespace: 'org.apache.httpcomponents.core5',
        version: '5.1.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'httpclient5',
        namespace: 'org.apache.httpcomponents.client5',
        version: '5.1.3',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'httpclient5',
        namespace: 'org.apache.httpcomponents.client5',
        version: '5.1.3',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-codec',
        namespace: 'commons-codec',
        version: '1.15',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'xmlresolver',
        namespace: 'org.xmlresolver',
        version: '4.4.3',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpcore5',
        namespace: 'org.apache.httpcomponents.core5',
        version: '5.1.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'xercesImpl',
        namespace: 'xerces',
        version: '2.12.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'c3p0',
        namespace: 'com.mchange',
        version: '0.9.5.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'bsh',
        namespace: 'org.apache-extras.beanshell',
        version: '2.0b6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'derby',
        namespace: 'org.apache.derby',
        version: '10.15.2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'derby',
        namespace: 'org.apache.derby',
        version: '10.15.2.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'derbyshared',
        namespace: 'org.apache.derby',
        version: '10.15.2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'derbytools',
        namespace: 'org.apache.derby',
        version: '10.15.2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'derbytools',
        namespace: 'org.apache.derby',
        version: '10.15.2.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'derbyshared',
        namespace: 'org.apache.derby',
        version: '10.15.2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'json',
        namespace: 'org.json',
        version: '20220924',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'json-path',
        namespace: 'com.jayway.jsonpath',
        version: '2.7.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'json-path',
        namespace: 'com.jayway.jsonpath',
        version: '2.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'json-smart',
        namespace: 'net.minidev',
        version: '2.4.7',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'json-smart',
        namespace: 'net.minidev',
        version: '2.4.7',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'accessors-smart',
        namespace: 'net.minidev',
        version: '2.4.7',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'accessors-smart',
        namespace: 'net.minidev',
        version: '2.4.7',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'asm',
        namespace: 'org.ow2.asm',
        version: '9.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'json-path',
        namespace: 'com.jayway.jsonpath',
        version: '2.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jolt-core',
        namespace: 'com.bazaarvoice.jolt',
        version: '0.1.7',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jolt-core',
        namespace: 'com.bazaarvoice.jolt',
        version: '0.1.7',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.inject',
        namespace: 'javax.inject',
        version: '1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'json-utils',
        namespace: 'com.bazaarvoice.jolt',
        version: '0.1.7',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-annotations',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-yaml',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-module-jaxb-annotations',
        namespace: 'com.fasterxml.jackson.module',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-smile',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-cbor',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-protobuf',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-annotations',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-annotations',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-annotations',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-yaml',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-yaml',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-yaml',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'snakeyaml',
        namespace: 'org.yaml',
        version: '2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-yaml',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-yaml',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-collections',
        namespace: 'commons-collections',
        version: '3.2.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-beanutils',
        namespace: 'commons-beanutils',
        version: '1.9.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'commons-beanutils',
        namespace: 'commons-beanutils',
        version: '1.9.4',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-collections',
        namespace: 'commons-collections',
        version: '3.2.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'everit-json-schema',
        namespace: 'com.github.erosb',
        version: '1.14.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'everit-json-schema',
        namespace: 'com.github.erosb',
        version: '1.14.1',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'json',
        namespace: 'org.json',
        version: '20220924',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'everit-json-schema',
        namespace: 'com.github.erosb',
        version: '1.14.1',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-validator',
        namespace: 'commons-validator',
        version: '1.7',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'commons-validator',
        namespace: 'commons-validator',
        version: '1.7',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-digester',
        namespace: 'commons-digester',
        version: '2.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'commons-validator',
        namespace: 'commons-validator',
        version: '1.7',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-collections',
        namespace: 'commons-collections',
        version: '3.2.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'everit-json-schema',
        namespace: 'com.github.erosb',
        version: '1.14.1',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'handy-uri-templates',
        namespace: 'com.damnhandy',
        version: '2.1.8',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'handy-uri-templates',
        namespace: 'com.damnhandy',
        version: '2.1.8',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'joda-time',
        namespace: 'joda-time',
        version: '2.12.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'everit-json-schema',
        namespace: 'com.github.erosb',
        version: '1.14.1',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 're2j',
        namespace: 'com.google.re2j',
        version: '1.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'zjsonpatch',
        namespace: 'com.flipkart.zjsonpatch',
        version: '0.4.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'zjsonpatch',
        namespace: 'com.flipkart.zjsonpatch',
        version: '0.4.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'zjsonpatch',
        namespace: 'com.flipkart.zjsonpatch',
        version: '0.4.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'zjsonpatch',
        namespace: 'com.flipkart.zjsonpatch',
        version: '0.4.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-collections4',
        namespace: 'org.apache.commons',
        version: '4.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'json-lib',
        namespace: 'net.sf.json-lib',
        version: '2.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'json-lib',
        namespace: 'net.sf.json-lib',
        version: '2.4',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-beanutils',
        namespace: 'commons-beanutils',
        version: '1.9.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'json-lib',
        namespace: 'net.sf.json-lib',
        version: '2.4',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-collections',
        namespace: 'commons-collections',
        version: '3.2.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'json-lib',
        namespace: 'net.sf.json-lib',
        version: '2.4',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-lang',
        namespace: 'commons-lang',
        version: '2.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'json-lib',
        namespace: 'net.sf.json-lib',
        version: '2.4',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'ezmorph',
        namespace: 'net.sf.ezmorph',
        version: '1.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'ezmorph',
        namespace: 'net.sf.ezmorph',
        version: '1.0.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-lang',
        namespace: 'commons-lang',
        version: '2.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'xom',
        namespace: 'xom',
        version: '1.3.8',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'xercesImpl',
        namespace: 'xerces',
        version: '2.12.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'guava',
        namespace: 'com.google.guava',
        version: '31.1-jre',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'guava',
        namespace: 'com.google.guava',
        version: '31.1-jre',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'failureaccess',
        namespace: 'com.google.guava',
        version: '1.0.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'guava',
        namespace: 'com.google.guava',
        version: '31.1-jre',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'listenablefuture',
        namespace: 'com.google.guava',
        version: '9999.0-empty-to-avoid-conflict-with-guava',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'guava',
        namespace: 'com.google.guava',
        version: '31.1-jre',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jsr305',
        namespace: 'com.google.code.findbugs',
        version: '3.0.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'guava',
        namespace: 'com.google.guava',
        version: '31.1-jre',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'checker-qual',
        namespace: 'org.checkerframework',
        version: '3.12.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'guava',
        namespace: 'com.google.guava',
        version: '31.1-jre',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'error_prone_annotations',
        namespace: 'com.google.errorprone',
        version: '2.11.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'guava',
        namespace: 'com.google.guava',
        version: '31.1-jre',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'j2objc-annotations',
        namespace: 'com.google.j2objc',
        version: '1.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-schema',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-schema',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core-apt',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-schema',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'csv-validator-java-api',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-java-api',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-java-api',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scalaz-core_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scalaz-core_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-java-api',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-io-file_2.11',
        namespace: 'com.github.scala-incubator.io',
        version: '0.4.3-1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scala-io-file_2.11',
        namespace: 'com.github.scala-incubator.io',
        version: '0.4.3-1',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scala-io-file_2.11',
        namespace: 'com.github.scala-incubator.io',
        version: '0.4.3-1',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-io-core_2.11',
        namespace: 'com.github.scala-incubator.io',
        version: '0.4.3-1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scala-io-core_2.11',
        namespace: 'com.github.scala-incubator.io',
        version: '0.4.3-1',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scala-io-core_2.11',
        namespace: 'com.github.scala-incubator.io',
        version: '0.4.3-1',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-parser-combinators_2.11',
        namespace: 'org.scala-lang.modules',
        version: '1.0.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scala-parser-combinators_2.11',
        namespace: 'org.scala-lang.modules',
        version: '1.0.3',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scala-io-core_2.11',
        namespace: 'com.github.scala-incubator.io',
        version: '0.4.3-1',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-arm_2.11',
        namespace: 'com.madgag',
        version: '1.3.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scala-arm_2.11',
        namespace: 'com.madgag',
        version: '1.3.4',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scala-arm_2.11',
        namespace: 'com.madgag',
        version: '1.3.4',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-continuations-library_2.11',
        namespace: 'org.scala-lang.plugins',
        version: '1.0.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scala-continuations-library_2.11',
        namespace: 'org.scala-lang.plugins',
        version: '1.0.3',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scala-io-file_2.11',
        namespace: 'com.github.scala-incubator.io',
        version: '0.4.3-1',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-parser-combinators_2.11',
        namespace: 'org.scala-lang.modules',
        version: '1.0.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-java-api',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-parser-combinators_2.11',
        namespace: 'org.scala-lang.modules',
        version: '1.0.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scalaz-core_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scalaz-stream_2.11',
        namespace: 'org.scalaz.stream',
        version: '0.7.3a',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scalaz-stream_2.11',
        namespace: 'org.scalaz.stream',
        version: '0.7.3a',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scalaz-stream_2.11',
        namespace: 'org.scalaz.stream',
        version: '0.7.3a',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scalaz-core_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scalaz-stream_2.11',
        namespace: 'org.scalaz.stream',
        version: '0.7.3a',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scalaz-concurrent_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scalaz-concurrent_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scalaz-concurrent_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scalaz-core_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scalaz-concurrent_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scalaz-effect_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scalaz-effect_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scalaz-effect_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scalaz-core_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scalaz-stream_2.11',
        namespace: 'org.scalaz.stream',
        version: '0.7.3a',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scodec-bits_2.11',
        namespace: 'org.scodec',
        version: '1.0.9',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'scodec-bits_2.11',
        namespace: 'org.scodec',
        version: '1.0.9',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scodec-bits_2.11',
        namespace: 'org.scodec',
        version: '1.0.9',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scalaz-concurrent_2.11',
        namespace: 'org.scalaz',
        version: '7.2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-io-file_2.11',
        namespace: 'com.github.scala-incubator.io',
        version: '0.4.3-1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-io-core_2.11',
        namespace: 'com.github.scala-incubator.io',
        version: '0.4.3-1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-arm_2.11',
        namespace: 'com.madgag',
        version: '1.3.4',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'joda-time',
        namespace: 'joda-time',
        version: '2.12.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'opencsv',
        namespace: 'com.opencsv',
        version: '3.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'opencsv',
        namespace: 'com.opencsv',
        version: '3.3',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-lang3',
        namespace: 'org.apache.commons',
        version: '3.12.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'utf8-validator',
        namespace: 'uk.gov.nationalarchives',
        version: '1.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'csv-validator-core',
        namespace: 'uk.gov.nationalarchives',
        version: '1.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-io',
        namespace: 'commons-io',
        version: '2.11.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-schema',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-schema',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jcl-over-slf4j',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jcl-over-slf4j',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-schema',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-schema',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-continuations-library_2.11',
        namespace: 'org.scala-lang.plugins',
        version: '1.0.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-schema',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'gfc-semver_2.11',
        namespace: 'com.gilt',
        version: '0.0.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'gfc-semver_2.11',
        namespace: 'com.gilt',
        version: '0.0.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'scala-library',
        namespace: 'org.scala-lang',
        version: '2.11.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-schema',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jakarta.xml.bind-api',
        namespace: 'jakarta.xml.bind',
        version: '2.3.3',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.activation-api',
        namespace: 'jakarta.activation',
        version: 'com.sun.activation',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jakarta.xml.bind-api',
        namespace: 'jakarta.xml.bind',
        version: '2.3.3',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jackson-annotations',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jackson-module-jaxb-annotations',
        namespace: 'com.fasterxml.jackson.module',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-annotations',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-module-jaxb-annotations',
        namespace: 'com.fasterxml.jackson.module',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-module-jaxb-annotations',
        namespace: 'com.fasterxml.jackson.module',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-module-jaxb-annotations',
        namespace: 'com.fasterxml.jackson.module',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.xml.bind-api',
        namespace: 'jakarta.xml.bind',
        version: '2.3.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-module-jaxb-annotations',
        namespace: 'com.fasterxml.jackson.module',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.activation-api',
        namespace: 'jakarta.activation',
        version: 'com.sun.activation',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-module-jaxb-annotations',
        namespace: 'com.fasterxml.jackson.module',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-module-jaxb-annotations',
        namespace: 'com.fasterxml.jackson.module',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'snakeyaml',
        namespace: 'org.yaml',
        version: '2.0',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-boot',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-logging',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-health-check',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-health-check',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-health-check',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-client-jmx',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-client-jmx',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-client-jmx',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-client',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-client',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-client',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-client-jmx',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-health-check',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-client',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-health-check',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-rest-base',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-base',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-base',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-base',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-client-jmx',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-base',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-client',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-health-check',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-varsub',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-varsub',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-varsub',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jcl-over-slf4j',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jul-to-slf4j',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jul-to-slf4j',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'log4j-bom',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'log4j-1.2-api',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'log4j-bom',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'log4j-api',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'log4j-bom',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'log4j-core',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'log4j-bom',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'log4j-slf4j2-impl',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'log4j-bom',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'log4j-core',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'log4j-api',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'log4j-core',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'log4j-1.2-api',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'log4j-api',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'log4j-1.2-api',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'log4j-slf4j2-impl',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'log4j-api',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'log4j-slf4j2-impl',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'log4j-slf4j2-impl',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'log4j-core',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'log4j-slf4j2-impl',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'log4j-api',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jakarta.mail',
        namespace: 'com.sun.mail',
        version: '1.6.7',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'bcprov-jdk18on',
        namespace: 'org.bouncycastle',
        version: '1.72',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'bcpkix-jdk18on',
        namespace: 'org.bouncycastle',
        version: '1.72',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'bcmail-jdk18on',
        namespace: 'org.bouncycastle',
        version: '1.72',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jakarta.jms-api',
        namespace: 'jakarta.jms',
        version: '2.0.3',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jakarta.validation-api',
        namespace: 'jakarta.validation',
        version: '2.0.2',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jakarta.activation',
        namespace: 'com.sun.activation',
        version: '1.2.2',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jakarta.management.j2ee-api',
        namespace: 'jakarta.management.j2ee',
        version: '1.1.4',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'xstream',
        namespace: 'com.thoughtworks.xstream',
        version: '1.4.20',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-client',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-deploy',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-jmx',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-plus',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-annotations',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-jaspi',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-jndi',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-rewrite',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-servlets',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-quickstart',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-servlet',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax-websocket-server-impl',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-client',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-alpn-client',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'http2-server',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'http2-client',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-http',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-io',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-webapp',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-xml',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-security',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-server',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-continuation',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-api',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax-websocket-client-impl',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-server',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'websocket-common',
        namespace: 'org.eclipse.jetty.websocket',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'http2-common',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-servlet',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'http2-hpack',
        namespace: 'org.eclipse.jetty.http2',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jetty-util-ajax',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jetty-bom',
        namespace: 'org.eclipse.jetty',
        version: '9.4.51.v20230217',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'commons-text',
        namespace: 'org.apache.commons',
        version: '1.10.0',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'commons-net',
        namespace: 'commons-net',
        version: '3.9.0',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-yaml',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core-apt',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-stax',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-stax',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-stax',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-stax',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'super-csv',
        namespace: 'net.sf.supercsv',
        version: '2.4.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jcl-over-slf4j',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core-apt',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-csv',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jcl-over-slf4j',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-csv-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-apache-http',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-apache-http',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core-apt',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-apache-http',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.5.13',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'httpclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.5.13',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpcore',
        namespace: 'org.apache.httpcomponents',
        version: '4.4.15',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'httpclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.5.13',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-codec',
        namespace: 'commons-codec',
        version: '1.15',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-apache-http',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-apache-http',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-flatfile',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-flatfile',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-flatfile',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-solace',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-solace',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-solace',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'sol-common',
        namespace: 'com.solacesystems',
        version: '10.16.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-solace',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'sol-jcsmp',
        namespace: 'com.solacesystems',
        version: '10.16.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'sol-jcsmp',
        namespace: 'com.solacesystems',
        version: '10.16.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'org.osgi.annotation',
        namespace: 'org.osgi',
        version: '6.0.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'sol-jcsmp',
        namespace: 'com.solacesystems',
        version: '10.16.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'org.apache.servicemix.bundles.jzlib',
        namespace: 'org.apache.servicemix.bundles',
        version: '1.0.7_2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-solace',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'sol-jms',
        namespace: 'com.solacesystems',
        version: '10.16.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'sol-jms',
        namespace: 'com.solacesystems',
        version: '10.16.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'org.osgi.annotation',
        namespace: 'org.osgi',
        version: '6.0.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'sol-jms',
        namespace: 'com.solacesystems',
        version: '10.16.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'org.apache.servicemix.bundles.jzlib',
        namespace: 'org.apache.servicemix.bundles',
        version: '1.0.7_2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'sol-jms',
        namespace: 'com.solacesystems',
        version: '10.16.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'geronimo-jms_1.1_spec',
        namespace: 'org.apache.geronimo.specs',
        version: 'jakarta.jms',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-solace',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-solace',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'expiringmap',
        namespace: 'net.jodah',
        version: '0.5.10',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-solace',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-client-jmx',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-client',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-rest-base',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-rest-metrics-jvm',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-jvm',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-jvm',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-jvm',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-client-jmx',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-jvm',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-client',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-jvm',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-rest-base',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-jvm',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'micrometer-core',
        namespace: 'io.micrometer',
        version: '1.9.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'micrometer-core',
        namespace: 'io.micrometer',
        version: '1.9.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'HdrHistogram',
        namespace: 'org.hdrhistogram',
        version: '2.1.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'micrometer-core',
        namespace: 'io.micrometer',
        version: '1.9.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'LatencyUtils',
        namespace: 'org.latencyutils',
        version: '2.0.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-jvm',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'micrometer-jvm-extras',
        namespace: 'io.github.mweirauch',
        version: '0.2.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'micrometer-jvm-extras',
        namespace: 'io.github.mweirauch',
        version: '0.2.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'micrometer-core',
        namespace: 'io.micrometer',
        version: '1.9.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'micrometer-jvm-extras',
        namespace: 'io.github.mweirauch',
        version: '0.2.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-math3',
        namespace: 'org.apache.commons',
        version: '3.6.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aspectjrt',
        namespace: 'org.aspectj',
        version: '1.9.9.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aspectjweaver',
        namespace: 'org.aspectj',
        version: '1.9.9.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aspectjtools',
        namespace: 'org.aspectj',
        version: '1.9.9.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-profiler',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-metrics-jvm',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-provider-prometheus',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-provider-prometheus',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-provider-prometheus',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-client-jmx',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-provider-prometheus',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-client',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-provider-prometheus',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-rest-base',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-provider-prometheus',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-rest-metrics-jvm',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-provider-prometheus',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'micrometer-registry-prometheus',
        namespace: 'io.micrometer',
        version: '1.9.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'micrometer-registry-prometheus',
        namespace: 'io.micrometer',
        version: '1.9.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'micrometer-core',
        namespace: 'io.micrometer',
        version: '1.9.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'micrometer-registry-prometheus',
        namespace: 'io.micrometer',
        version: '1.9.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'simpleclient_common',
        namespace: 'io.prometheus',
        version: '0.15.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'simpleclient_common',
        namespace: 'io.prometheus',
        version: '0.15.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'simpleclient',
        namespace: 'io.prometheus',
        version: '0.15.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'simpleclient',
        namespace: 'io.prometheus',
        version: '0.15.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'simpleclient_tracer_otel',
        namespace: 'io.prometheus',
        version: '0.15.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'simpleclient_tracer_otel',
        namespace: 'io.prometheus',
        version: '0.15.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'simpleclient_tracer_common',
        namespace: 'io.prometheus',
        version: '0.15.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'simpleclient',
        namespace: 'io.prometheus',
        version: '0.15.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'simpleclient_tracer_otel_agent',
        namespace: 'io.prometheus',
        version: '0.15.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'simpleclient_tracer_otel_agent',
        namespace: 'io.prometheus',
        version: '0.15.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'simpleclient_tracer_common',
        namespace: 'io.prometheus',
        version: '0.15.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-rest-provider-prometheus',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-csv',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-csv',
        namespace: 'org.apache.commons',
        version: '1.9.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'super-csv',
        namespace: 'net.sf.supercsv',
        version: '2.4.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'snakeyaml',
        namespace: 'org.yaml',
        version: '2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'json-path',
        namespace: 'com.jayway.jsonpath',
        version: '2.7.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-collections',
        namespace: 'commons-collections',
        version: '3.2.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'joda-time',
        namespace: 'joda-time',
        version: '2.12.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'log4j-api',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-core',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-secure-sm',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-x-content',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-x-content',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-core',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-x-content',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'snakeyaml',
        namespace: 'org.yaml',
        version: '2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-x-content',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-x-content',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-smile',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-smile',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-smile',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-smile',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-x-content',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-yaml',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-x-content',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-cbor',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-cbor',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-cbor',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-cbor',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-geo',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-lz4',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-lz4',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lz4-java',
        namespace: 'org.lz4',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-lz4',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-core',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-core',
        namespace: 'org.apache.lucene',
        version: '9.4.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-analyzers-common',
        namespace: 'org.apache.lucene',
        version: '8.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-backward-codecs',
        namespace: 'org.apache.lucene',
        version: '8.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-grouping',
        namespace: 'org.apache.lucene',
        version: '8.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-highlighter',
        namespace: 'org.apache.lucene',
        version: '8.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-join',
        namespace: 'org.apache.lucene',
        version: '8.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-memory',
        namespace: 'org.apache.lucene',
        version: '8.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-misc',
        namespace: 'org.apache.lucene',
        version: '8.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-queries',
        namespace: 'org.apache.lucene',
        version: '8.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-queryparser',
        namespace: 'org.apache.lucene',
        version: '8.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-sandbox',
        namespace: 'org.apache.lucene',
        version: '8.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-spatial3d',
        namespace: 'org.apache.lucene',
        version: '8.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-suggest',
        namespace: 'org.apache.lucene',
        version: '8.11.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-cli',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-cli',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jopt-simple',
        namespace: 'net.sf.jopt-simple',
        version: '5.0.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-cli',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-core',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'hppc',
        namespace: 'com.carrotsearch',
        version: '0.8.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'joda-time',
        namespace: 'joda-time',
        version: '2.12.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 't-digest',
        namespace: 'com.tdunning',
        version: '3.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'HdrHistogram',
        namespace: 'org.hdrhistogram',
        version: '2.1.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jna',
        namespace: 'net.java.dev.jna',
        version: '5.10.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-plugin-classloader',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lucene-core',
        namespace: 'org.apache.lucene',
        version: '9.4.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-x-content',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-smile',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-yaml',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-cbor',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-apache-http',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-apache-http-async',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-apache-http-async',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-apache-http-async',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core-apt',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-apache-http-async',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-apache-http',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-apache-http-async',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpasyncclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.1.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'httpasyncclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpcore',
        namespace: 'org.apache.httpcomponents',
        version: '4.4.15',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'httpasyncclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpcore-nio',
        namespace: 'org.apache.httpcomponents',
        version: '4.4.15',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'httpcore-nio',
        namespace: 'org.apache.httpcomponents',
        version: '4.4.15',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpcore',
        namespace: 'org.apache.httpcomponents',
        version: '4.4.15',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'httpasyncclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.1.5',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.5.13',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-apache-http-async',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.5.13',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-apache-http-async',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'snakeyaml',
        namespace: 'org.yaml',
        version: '2.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'json-path',
        namespace: 'com.jayway.jsonpath',
        version: '2.7.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-collections',
        namespace: 'commons-collections',
        version: '3.2.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'joda-time',
        namespace: 'joda-time',
        version: '2.12.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'log4j-api',
        namespace: 'org.apache.logging.log4j',
        version: '2.20.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-rest-high-level-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-high-level-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-high-level-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-rest-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.5.13',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpcore',
        namespace: 'org.apache.httpcomponents',
        version: '4.4.15',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpasyncclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.1.5',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpcore-nio',
        namespace: 'org.apache.httpcomponents',
        version: '4.4.15',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-codec',
        namespace: 'commons-codec',
        version: '1.15',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-high-level-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'mapper-extras-client',
        namespace: 'org.elasticsearch.plugin',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-high-level-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'parent-join-client',
        namespace: 'org.elasticsearch.plugin',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-high-level-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aggs-matrix-stats-client',
        namespace: 'org.elasticsearch.plugin',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-high-level-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'rank-eval-client',
        namespace: 'org.elasticsearch.plugin',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-high-level-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'lang-mustache-client',
        namespace: 'org.elasticsearch.plugin',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'lang-mustache-client',
        namespace: 'org.elasticsearch.plugin',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'compiler',
        namespace: 'com.github.spullara.mustache.java',
        version: '0.9.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-rest-client-sniffer',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-client-sniffer',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-rest-client',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-client-sniffer',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpcore',
        namespace: 'org.apache.httpcomponents',
        version: '4.4.15',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'elasticsearch-rest-client-sniffer',
        namespace: 'org.elasticsearch.client',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'elasticsearch-x-content',
        namespace: 'org.elasticsearch',
        version: '7.17.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-codec',
        namespace: 'commons-codec',
        version: '1.15',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.5.13',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-smile',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-yaml',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-cbor',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-elastic-rest',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'adx-interlok-binding',
        namespace: 'com.telus.adx',
        version: '4.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-interlok-binding',
        namespace: 'com.telus.adx',
        version: '4.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-interlok-binding',
        namespace: 'com.telus.adx',
        version: '4.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-json',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-interlok-binding',
        namespace: 'com.telus.adx',
        version: '4.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-lang3',
        namespace: 'org.apache.commons',
        version: '3.12.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.validation-api',
        namespace: 'jakarta.validation',
        version: '2.0.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-bean-validation',
        namespace: 'org.unbroken-dome.jackson-bean-validation',
        version: '0.6.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-bean-validation',
        namespace: 'org.unbroken-dome.jackson-bean-validation',
        version: '0.6.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-annotations',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-yaml',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'cel-tools',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'cel-tools',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'cel-core',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'cel-core',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'cel-generated-antlr',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'cel-core',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'agrona',
        namespace: 'org.agrona',
        version: '1.17.1',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'cel-core',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'cel-generated-pb',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'cel-generated-pb',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'protobuf-java',
        namespace: 'com.google.protobuf',
        version: '3.21.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'cel-jackson',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'cel-jackson',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'cel-jackson',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'cel-jackson',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-protobuf',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-protobuf',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'protoparser',
        namespace: 'com.squareup',
        version: '4.0.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-protobuf',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-protobuf',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jackson-dataformat-protobuf',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-bom',
        namespace: 'com.fasterxml.jackson',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'cel-jackson',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-yaml',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'cel-jackson',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'cel-core',
        namespace: 'org.projectnessie.cel',
        version: '0.3.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'protobuf-java',
        namespace: 'com.google.protobuf',
        version: '3.21.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'hibernate-validator',
        namespace: 'org.hibernate.validator',
        version: '6.1.7.Final',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-routing',
        namespace: 'com.telus.adx',
        version: '1.8.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'javax.el',
        namespace: 'org.glassfish',
        version: 'org.glassfish',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-interlok-binding',
        namespace: 'com.telus.adx',
        version: '4.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-solace',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-interlok-binding',
        namespace: 'com.telus.adx',
        version: '4.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-annotations',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-interlok-binding',
        namespace: 'com.telus.adx',
        version: '4.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-interlok-binding',
        namespace: 'com.telus.adx',
        version: '4.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-interlok-binding',
        namespace: 'com.telus.adx',
        version: '4.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-text',
        namespace: 'org.apache.commons',
        version: '1.10.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-interlok-binding',
        namespace: 'com.telus.adx',
        version: '4.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-net',
        namespace: 'commons-net',
        version: '3.9.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-interlok-binding',
        namespace: 'com.telus.adx',
        version: '4.7.0',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'xstream',
        namespace: 'com.thoughtworks.xstream',
        version: '1.4.20',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'adx-interlok-binding',
        namespace: 'com.telus.adx',
        version: '4.7.0',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-s3',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-s3',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core-apt',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-s3',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aws-java-sdk-s3',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-s3',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aws-java-sdk-kms',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-kms',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aws-java-sdk-core',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-core',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'commons-codec',
        namespace: 'commons-codec',
        version: '1.15',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-core',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'httpclient',
        namespace: 'org.apache.httpcomponents',
        version: '4.5.13',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-core',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'ion-java',
        namespace: 'software.amazon.ion',
        version: '1.0.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-core',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-core',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-cbor',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-core',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'joda-time',
        namespace: 'joda-time',
        version: '2.12.0',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-kms',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jmespath-java',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jmespath-java',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-s3',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aws-java-sdk-core',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-s3',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jmespath-java',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-s3',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aws-java-sdk-core',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-s3',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-s3',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-s3',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-annotations',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-s3',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-cbor',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-s3',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-core-apt',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aws-java-sdk-core',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aws-java-sdk-sts',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-sts',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aws-java-sdk-core',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-sts',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jmespath-java',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-databind',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-core',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-annotations',
        namespace: 'com.fasterxml.jackson.core',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jackson-dataformat-cbor',
        namespace: 'com.fasterxml.jackson.dataformat',
        version: '2.14.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'interlok-apache-http',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jcl-over-slf4j',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-s3',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'slf4j-api',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-s3',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jcl-over-slf4j',
        namespace: 'org.slf4j',
        version: '2.0.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-s3',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'interlok-aws-common',
        namespace: 'com.adaptris',
        version: '4.7.0-RELEASE',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-bom',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aws-java-sdk-s3',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-bom',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aws-java-sdk-core',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-bom',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aws-java-sdk-sts',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-bom',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'aws-java-sdk-kms',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-bom',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jmespath-java',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'aws-java-sdk-bom',
        namespace: 'com.amazonaws',
        version: '1.12.422',
        qualifiers: null,
        subpath: null
      },
      null
    ],
    [
      {
        type: 'maven',
        name: 'jaxb-runtime',
        namespace: 'org.glassfish.jaxb',
        version: '2.3.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.xml.bind-api',
        namespace: 'jakarta.xml.bind',
        version: '2.3.3',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jaxb-runtime',
        namespace: 'org.glassfish.jaxb',
        version: '2.3.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'txw2',
        namespace: 'org.glassfish.jaxb',
        version: '2.3.6',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jaxb-runtime',
        namespace: 'org.glassfish.jaxb',
        version: '2.3.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'istack-commons-runtime',
        namespace: 'com.sun.istack',
        version: '3.0.12',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jaxb-runtime',
        namespace: 'org.glassfish.jaxb',
        version: '2.3.6',
        qualifiers: null,
        subpath: null
      },
      {
        type: 'maven',
        name: 'jakarta.activation',
        namespace: 'com.sun.activation',
        version: '1.2.2',
        qualifiers: null,
        subpath: null
      }
    ],
    [
      {
        type: 'maven',
        name: 'jaxb-runtime',
        namespace: 'org.glassfish.jaxb',
        version: '2.3.6',
        qualifiers: null,
        subpath: null
      },
      null
    ]
  ],
  name: 'test',
  projectRegistry: []
}
