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
- Submits all maven dependencies via the Dependency Submission API

> **Note**: This action executes the `dependencies` task of a given Gradle project, and will submit the dependency tree via the [Dependency Submission API](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).

> **Note**: At this time `Gradle 7.5` or newer is required as it offers a new task to retrieve individual properties. (Used to retrieve build file path, and project name)

## Setup

### Configure the workflow

```yml
name: build
on:
  push:
    branches:
      - develop # run the action on your projects default branch

jobs:
  build:
    name: Dependencies
    runs-on: ubuntu-latest
    permissions: # The Dependency Submission API requires write permission
      contents: write
    steps:
      - name: 'Checkout Repository'
        uses: actions/checkout@v3

      - name: Run snapshot action
        uses: mikepenz/gradle-dependency-submission@{latest}
        with:
          gradle-project-path: "gradle-example"
          gradle-build-module: ":app"
```

<details><summary><b>Root Module Config</b></summary>
<p>

The following example showcases a gradle module in the root, without a module name, and no sub-folder.

```yml
- name: Root Gradle Dependency Submission
  uses: mikepenz/gradle-dependency-submission@{latest}
  with:
    use-gradlew: false
    gradle-build-module: |-
      :
    gradle-build-configuration: |-
      compileClasspath
```

</p>
</details>

<details><summary><b>Multi Module Config</b></summary>
<p>

```yml
- name: Gradle Dependency Submission
  uses: mikepenz/gradle-dependency-submission@{latest}
  with:
    gradle-project-path: |-
      gradle-example
    gradle-build-module: |-
      :app
      :simple-app
    gradle-build-configuration: |-
      debugCompileClasspath
```

</p>
</details>

> ℹ️ Currently the action has to be run on the default branch. Running it as part of a PR won't update the [Dependency graph](https://github.com/mikepenz/gradle-dependency-submission/network/dependencies) of your projects [Insights](https://github.com/mikepenz/gradle-dependency-submission/pulse) - This seems to be a GitHub requirement.

### Inputs

| **Input**      | **Description**                                                                                                                                                       |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `use-gradlew`    | Defines if `./gradlew` or `gradle` cli will be used to retrieve the dependencies. Defaults to 'true' e.g. `./gradlew`.|
| `gradle-project-path`    | Defines the path to the gradle project. Defaults to ''. |
| `gradle-build-module`    | Defines the module to retrieve the dependencies for. This is often `:app`. Defaults to ':'.  |
| `gradle-build-configuration`    | Optional configuration filter, for which the dependencies are resolved. As example: Android projects - `debugCompileClasspath`, plain java projects - `compileClasspath`. |
| `gradle-build-configuration-mapping`    | Optional configuration to allow per module build configuration mapping. Provide one mapping per line in the format like: `:module\|compileClasspath` |
| `gradle-dependency-path`    | Defines the path to the gradle dependency file, relative to the `gradle-project-path`. If not provided, automatically resolved via gradle and the `module` config. |
| `sub-module-mode`  | Defines how the action handles sub projects/modules. Possible options `IGNORE`, `COMBINED`, `INDIVIDUAL`, `INDIVIDUAL_DEEP`. Default: `IGNORE`. |
| `include-build-environment`  | Optional mode to enable the submission of the `buildEnvironment` as individual Manifest via the dependency submission API. Default: `false`. |

| **sub-module-mode**      |    **Description**           |
| ----- | ---- |
| `IGNORE`      | Ignores sub projects/modules and skips over their dependencies. Only the core module is being imported. |
| `COMBINED`    | Combines and flattens the sub dependencies, and attaches them to the root of the parent module. |
| `INDIVIDUAL`  | Handles every single module as its own `Manifest` in the dependency submission API. Uses the gradle API to retrieve the module paths, and imports them individually. |
| `INDIVIDUAL_DEEP`  | Handles every single module as its own `Manifest` in the dependency submission API. Will call the `dependencies` task for every single sub project/module to gather the full tree. Uses the gradle API to retrieve the module paths, and imports them individually. |

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

### Credits

- [Go Dependency Submission Action](https://github.com/actions/go-dependency-submission/)
- [Dependency Submission Toolkit](https://github.com/github/dependency-submission-toolkit)

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
