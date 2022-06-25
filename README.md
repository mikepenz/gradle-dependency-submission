<div align="center">
  :octocat:
</div>
<h1 align="center">
  gradle-dependency-submission
</h1>

<p align="center">
    ... calculates dependencies for a Gradle build-target and submits the list to the Dependency Submission API.
</p>

<div align="center">
  <a href="https://github.com/mikepenz/gradle-dependency-submission">
		<img src="https://github.com/mikepenz/gradle-dependency-submission/actions/workflows/test.yml/badge.svg"/>
	</a>
</div>
<br />

-------

<p align="center">
    <a href="#whats-included-">What's included 🚀</a> &bull;
    <a href="#setup">Setup 🛠️</a> &bull;
    <a href="#sample-%EF%B8%8F">Sample 🖥️</a> &bull;
    <a href="#contribute-">Contribute 🧬</a> &bull;
    <a href="#license">License 📓</a>
</p>

-------

### What's included 🚀

- Supports any Gradle project
  - Uses the Gradle `dependencies` task
- Highly flexible configuration
- Submits all maven dependencies via the Dependency submission API

This action executes the `dependencies` task of a given Gradle project, and will submit the dependency tree via the [Dependency Submission API](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).

## Setup

### Configure the workflow

```yml
name: build
on:
  pull_request:

jobs:
  build:
    name: Dependencies
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: actions/checkout@v3

      - name: Run snapshot action
        uses: mikepenz/gradle-dependency-submission@{latest}
        with:
          gradle-project-path: "gradle-example"
          gradle-dependency-path: "app/build.gradle"
          gradle-build-module: ":app"
          gradle-build-configuration: "debugCompileClasspath"
```

### Inputs

| **Input**      | **Description**                                                                                                                                                       |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `gradle-project-path`    | Defines the path to the gradle project. Defaults to '' |
| `gradle-dependency-path`    | Defines the path to the gradle dependency file, relative to the `gradle-project-path`. Defaults to 'build.gradle' |
| `gradle-build-module`    | Defines the module to retrieve the dependencies for. This is often `:app`. Defaults to ''.  |
| `gradle-build-configuration`    | The configuration for which dependencies are resolved. Defaults to `debugCompileClasspath`.  |

## Sample 🖥️

[Snapshot dependencies](https://github.com/mikepenz/gradle-dependency-submission/network/dependencies)

## Contribute 🧬

```bash
# Install the dependencies  
$ npm install

# Verify lint is happy
$ npm run lint -- --fix

# Build the typescript and package it for distribution
$ npm run build && npm run package

# Run the tests, use to debug, and test it out
$ npm test
```

> This action depends on the `Dependency Submission Toolkit` which is hosted in the GitHub npm registry. See the following steps to configure `npm`: https://github.com/github/dependency-submission-toolkit#installation

### Credits

- [Go Dependency Submission Action](https://github.com/actions/go-dependency-submission/)
- [Dependency Submission Toolkig](https://github.com/github/dependency-submission-toolkit)

## Other actions

- [release-changelog-builder-action](https://github.com/mikepenz/release-changelog-builder-action)
- [action-junit-report](https://github.com/mikepenz/action-junit-report)
- [xray-action](https://github.com/mikepenz/xray-action/)
- [jira-release-composition-action](https://github.com/mikepenz/jira-release-composite-action)

## License

    Copyright (C) 2022 Mike Penz

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.