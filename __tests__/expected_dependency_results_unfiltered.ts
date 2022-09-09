export const EXPECTED_GRADLE_DEPENDENCY_UNFILTERED = [
	{
		resolved: {
			"pkg:maven/org.jacoco/org.jacoco.ant@0.8.7": {
				package_url: "pkg:maven/org.jacoco/org.jacoco.ant@0.8.7",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jacoco/org.jacoco.core@0.8.7",
					"pkg:maven/org.jacoco/org.jacoco.report@0.8.7",
					"pkg:maven/org.jacoco/org.jacoco.agent@0.8.7"
				]
			},
			"pkg:maven/androidx.test.ext/junit@1.1.3": {
				package_url: "pkg:maven/androidx.test.ext/junit@1.1.3",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/junit/junit@4.13.2",
					"pkg:maven/androidx.test/core@1.4.0",
					"pkg:maven/androidx.test/monitor@1.4.0",
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.test/monitor@1.5.0"
				]
			},
			"pkg:maven/androidx.test.espresso/espresso-core@3.4.0": {
				package_url: "pkg:maven/androidx.test.espresso/espresso-core@3.4.0",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.test/runner@1.4.0",
					"pkg:maven/androidx.test.espresso/espresso-idling-resource@3.4.0",
					"pkg:maven/com.squareup/javawriter@2.1.1",
					"pkg:maven/javax.inject/javax.inject@1",
					"pkg:maven/org.hamcrest/hamcrest-library@1.3",
					"pkg:maven/org.hamcrest/hamcrest-integration@1.3",
					"pkg:maven/com.google.code.findbugs/jsr305@2.0.1"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-test-junit4@1.2.1": {
				package_url: "pkg:maven/androidx.compose.ui/ui-test-junit4@1.2.1",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.activity/activity@1.2.0",
					"pkg:maven/androidx.compose.ui/ui-test@1.2.1",
					"pkg:maven/androidx.test.ext/junit@1.1.3",
					"pkg:maven/junit/junit@4.13.2",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.6.21",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.6.21",
					"pkg:maven/androidx.activity/activity@1.5.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10",
					"pkg:maven/androidx.activity/activity-compose@1.5.1",
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.runtime/runtime-saveable@1.2.1",
					"pkg:maven/androidx.lifecycle/lifecycle-common@2.5.1",
					"pkg:maven/androidx.lifecycle/lifecycle-runtime@2.5.1",
					"pkg:maven/androidx.test/core@1.4.0",
					"pkg:maven/androidx.test/monitor@1.5.0",
					"pkg:maven/androidx.test.espresso/espresso-core@3.4.0",
					"pkg:maven/androidx.test.espresso/espresso-idling-resource@3.4.0",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core@1.6.1",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-test@1.6.1"
				]
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.7.10": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.7.10",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk7@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-tooling@1.2.1": {
				package_url: "pkg:maven/androidx.compose.ui/ui-tooling@1.2.1",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-tooling-data@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-tooling-preview@1.2.1",
					"pkg:maven/androidx.activity/activity-compose@1.5.1",
					"pkg:maven/androidx.compose.animation/animation@1.1.1",
					"pkg:maven/androidx.compose.material/material@1.0.0",
					"pkg:maven/androidx.savedstate/savedstate-ktx@1.2.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-test-manifest@1.2.1": {
				package_url: "pkg:maven/androidx.compose.ui/ui-test-manifest@1.2.1",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.activity/activity@1.5.1"
				]
			},
			"pkg:maven/androidx.core/core-ktx@1.8.0": {
				package_url: "pkg:maven/androidx.core/core-ktx@1.8.0",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.core/core@1.8.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.ui/ui@1.2.1": {
				package_url: "pkg:maven/androidx.compose.ui/ui@1.2.1",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.runtime/runtime-saveable@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-geometry@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-graphics@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-text@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-unit@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-geometry@1.3.0-alpha03",
					"pkg:maven/androidx.compose.ui/ui-graphics@1.3.0-alpha03",
					"pkg:maven/androidx.compose.ui/ui-text@1.3.0-alpha03",
					"pkg:maven/androidx.compose.ui/ui-unit@1.3.0-alpha03",
					"pkg:maven/androidx.autofill/autofill@1.0.0",
					"pkg:maven/androidx.collection/collection@1.0.0",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03",
					"pkg:maven/androidx.core/core@1.8.0",
					"pkg:maven/androidx.customview/customview-poolingcontainer@1.0.0",
					"pkg:maven/androidx.lifecycle/lifecycle-common-java8@2.5.1",
					"pkg:maven/androidx.lifecycle/lifecycle-runtime@2.5.1",
					"pkg:maven/androidx.lifecycle/lifecycle-viewmodel@2.5.1",
					"pkg:maven/androidx.profileinstaller/profileinstaller@1.2.0",
					"pkg:maven/androidx.savedstate/savedstate-ktx@1.2.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-android@1.6.1",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core@1.6.1"
				]
			},
			"pkg:maven/androidx.compose.material3/material3@1.0.0-alpha16": {
				package_url: "pkg:maven/androidx.compose.material3/material3@1.0.0-alpha16",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.compose.foundation/foundation@1.2.0",
					"pkg:maven/androidx.compose.material/material-icons-core@1.0.2",
					"pkg:maven/androidx.compose.material/material-ripple@1.0.0",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-graphics@1.3.0-alpha03",
					"pkg:maven/androidx.compose.ui/ui-text@1.3.0-alpha03",
					"pkg:maven/androidx.compose.animation/animation-core@1.1.1",
					"pkg:maven/androidx.compose.foundation/foundation-layout@1.2.0",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03",
					"pkg:maven/androidx.lifecycle/lifecycle-runtime@2.5.1",
					"pkg:maven/androidx.lifecycle/lifecycle-viewmodel@2.5.1",
					"pkg:maven/androidx.savedstate/savedstate-ktx@1.2.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-tooling-preview@1.2.1": {
				package_url: "pkg:maven/androidx.compose.ui/ui-tooling-preview@1.2.1",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.lifecycle/lifecycle-runtime-ktx@2.5.1": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-runtime-ktx@2.5.1",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.lifecycle/lifecycle-runtime@2.5.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-android@1.6.1"
				]
			},
			"pkg:maven/androidx.activity/activity-compose@1.5.1": {
				package_url: "pkg:maven/androidx.activity/activity-compose@1.5.1",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.activity/activity-ktx@1.5.1",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.runtime/runtime-saveable@1.2.1",
					"pkg:maven/androidx.compose.ui/ui@1.2.1",
					"pkg:maven/androidx.lifecycle/lifecycle-common-java8@2.5.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/junit/junit@4.13.2": {
				package_url: "pkg:maven/junit/junit@4.13.2",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.hamcrest/hamcrest-core@1.3"
				]
			},
			"pkg:maven/androidx.compose.compiler/compiler@1.3.0": {
				package_url: "pkg:maven/androidx.compose.compiler/compiler@1.3.0",
				relationship: "direct",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-compiler-embeddable@1.7.10": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-compiler-embeddable@1.7.10",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/org.jetbrains.kotlin/kotlin-script-runtime@1.7.10",
					"pkg:maven/org.jetbrains.kotlin/kotlin-reflect@1.7.10",
					"pkg:maven/org.jetbrains.kotlin/kotlin-daemon-embeddable@1.7.10",
					"pkg:maven/org.jetbrains.intellij.deps/trove4j@1.0.20200330",
					"pkg:maven/net.java.dev.jna/jna@5.6.0"
				]
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-klib-commonizer-embeddable@1.7.10": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-klib-commonizer-embeddable@1.7.10",
				relationship: "direct",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/org.jetbrains.kotlin/kotlin-compiler-embeddable@1.7.10"
				]
			},
			"pkg:maven/org.jacoco/org.jacoco.core@0.8.7": {
				package_url: "pkg:maven/org.jacoco/org.jacoco.core@0.8.7",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.ow2.asm/asm@9.1",
					"pkg:maven/org.ow2.asm/asm-commons@9.1",
					"pkg:maven/org.ow2.asm/asm-tree@9.1"
				]
			},
			"pkg:maven/org.ow2.asm/asm@9.1": {
				package_url: "pkg:maven/org.ow2.asm/asm@9.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/org.ow2.asm/asm-commons@9.1": {
				package_url: "pkg:maven/org.ow2.asm/asm-commons@9.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.ow2.asm/asm@9.1",
					"pkg:maven/org.ow2.asm/asm-tree@9.1",
					"pkg:maven/org.ow2.asm/asm-analysis@9.1"
				]
			},
			"pkg:maven/org.ow2.asm/asm-tree@9.1": {
				package_url: "pkg:maven/org.ow2.asm/asm-tree@9.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.ow2.asm/asm@9.1"
				]
			},
			"pkg:maven/org.ow2.asm/asm-analysis@9.1": {
				package_url: "pkg:maven/org.ow2.asm/asm-analysis@9.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.ow2.asm/asm-tree@9.1"
				]
			},
			"pkg:maven/org.jacoco/org.jacoco.report@0.8.7": {
				package_url: "pkg:maven/org.jacoco/org.jacoco.report@0.8.7",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jacoco/org.jacoco.core@0.8.7"
				]
			},
			"pkg:maven/org.jacoco/org.jacoco.agent@0.8.7": {
				package_url: "pkg:maven/org.jacoco/org.jacoco.agent@0.8.7",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/org.hamcrest/hamcrest-core@1.3": {
				package_url: "pkg:maven/org.hamcrest/hamcrest-core@1.3",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/androidx.test/core@1.4.0": {
				package_url: "pkg:maven/androidx.test/core@1.4.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.test/monitor@1.4.0",
					"pkg:maven/androidx.lifecycle/lifecycle-common@2.3.0",
					"pkg:maven/androidx.test/monitor@1.5.0",
					"pkg:maven/androidx.lifecycle/lifecycle-common@2.5.1"
				]
			},
			"pkg:maven/androidx.annotation/annotation@1.2.0": {
				package_url: "pkg:maven/androidx.annotation/annotation@1.2.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/androidx.test/monitor@1.4.0": {
				package_url: "pkg:maven/androidx.test/monitor@1.4.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0"
				]
			},
			"pkg:maven/androidx.lifecycle/lifecycle-common@2.3.0": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-common@2.3.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0"
				]
			},
			"pkg:maven/androidx.test/runner@1.4.0": {
				package_url: "pkg:maven/androidx.test/runner@1.4.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.test/monitor@1.4.0",
					"pkg:maven/androidx.test.services/storage@1.4.0",
					"pkg:maven/junit/junit@4.13.2",
					"pkg:maven/androidx.test/monitor@1.5.0"
				]
			},
			"pkg:maven/androidx.test.services/storage@1.4.0": {
				package_url: "pkg:maven/androidx.test.services/storage@1.4.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.test/monitor@1.4.0",
					"pkg:maven/com.google.code.findbugs/jsr305@2.0.1",
					"pkg:maven/androidx.test/monitor@1.5.0"
				]
			},
			"pkg:maven/com.google.code.findbugs/jsr305@2.0.1": {
				package_url: "pkg:maven/com.google.code.findbugs/jsr305@2.0.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/androidx.test.espresso/espresso-idling-resource@3.4.0": {
				package_url: "pkg:maven/androidx.test.espresso/espresso-idling-resource@3.4.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/com.squareup/javawriter@2.1.1": {
				package_url: "pkg:maven/com.squareup/javawriter@2.1.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/javax.inject/javax.inject@1": {
				package_url: "pkg:maven/javax.inject/javax.inject@1",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/org.hamcrest/hamcrest-library@1.3": {
				package_url: "pkg:maven/org.hamcrest/hamcrest-library@1.3",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.hamcrest/hamcrest-core@1.3"
				]
			},
			"pkg:maven/org.hamcrest/hamcrest-integration@1.3": {
				package_url: "pkg:maven/org.hamcrest/hamcrest-integration@1.3",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.hamcrest/hamcrest-library@1.3"
				]
			},
			"pkg:maven/androidx.activity/activity@1.2.0": {
				package_url: "pkg:maven/androidx.activity/activity@1.2.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.core/core@1.1.0",
					"pkg:maven/androidx.lifecycle/lifecycle-runtime@2.3.0",
					"pkg:maven/androidx.lifecycle/lifecycle-viewmodel@2.3.0",
					"pkg:maven/androidx.savedstate/savedstate@1.1.0",
					"pkg:maven/androidx.lifecycle/lifecycle-viewmodel-savedstate@2.3.0"
				]
			},
			"pkg:maven/androidx.core/core@1.1.0": {
				package_url: "pkg:maven/androidx.core/core@1.1.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.lifecycle/lifecycle-runtime@2.3.0",
					"pkg:maven/androidx.versionedparcelable/versionedparcelable@1.1.0",
					"pkg:maven/androidx.collection/collection@1.0.0"
				]
			},
			"pkg:maven/androidx.lifecycle/lifecycle-runtime@2.3.0": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-runtime@2.3.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.lifecycle/lifecycle-common@2.3.0",
					"pkg:maven/androidx.arch.core/core-common@2.1.0",
					"pkg:maven/androidx.annotation/annotation@1.2.0"
				]
			},
			"pkg:maven/androidx.arch.core/core-common@2.1.0": {
				package_url: "pkg:maven/androidx.arch.core/core-common@2.1.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0"
				]
			},
			"pkg:maven/androidx.versionedparcelable/versionedparcelable@1.1.0": {
				package_url: "pkg:maven/androidx.versionedparcelable/versionedparcelable@1.1.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.collection/collection@1.0.0"
				]
			},
			"pkg:maven/androidx.collection/collection@1.0.0": {
				package_url: "pkg:maven/androidx.collection/collection@1.0.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0"
				]
			},
			"pkg:maven/androidx.lifecycle/lifecycle-viewmodel@2.3.0": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-viewmodel@2.3.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0"
				]
			},
			"pkg:maven/androidx.savedstate/savedstate@1.1.0": {
				package_url: "pkg:maven/androidx.savedstate/savedstate@1.1.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0"
				]
			},
			"pkg:maven/androidx.lifecycle/lifecycle-viewmodel-savedstate@2.3.0": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-viewmodel-savedstate@2.3.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.savedstate/savedstate@1.1.0",
					"pkg:maven/androidx.lifecycle/lifecycle-livedata-core@2.3.0",
					"pkg:maven/androidx.lifecycle/lifecycle-viewmodel@2.3.0"
				]
			},
			"pkg:maven/androidx.lifecycle/lifecycle-livedata-core@2.3.0": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-livedata-core@2.3.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.lifecycle/lifecycle-common@2.3.0"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-test@1.2.1": {
				package_url: "pkg:maven/androidx.compose.ui/ui-test@1.2.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-graphics@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-text@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-unit@1.2.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.6.21",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.6.21",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core@1.6.1",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-test@1.6.1",
					"pkg:maven/androidx.compose.ui/ui-graphics@1.3.0-alpha03",
					"pkg:maven/androidx.compose.ui/ui-text@1.3.0-alpha03",
					"pkg:maven/androidx.compose.ui/ui-unit@1.3.0-alpha03",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10",
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03",
					"pkg:maven/androidx.core/core-ktx@1.8.0",
					"pkg:maven/androidx.test/monitor@1.5.0",
					"pkg:maven/androidx.test.espresso/espresso-core@3.4.0"
				]
			},
			"pkg:maven/androidx.compose.runtime/runtime@1.2.1": {
				package_url: "pkg:maven/androidx.compose.runtime/runtime@1.2.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-android@1.6.1",
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-android@1.6.1": {
				package_url: "pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-android@1.6.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core@1.6.1",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-bom@1.6.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.6.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.7.10"
				]
			},
			"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core@1.6.1": {
				package_url: "pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core@1.6.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.6.21",
					"pkg:maven/org.jetbrains.kotlinx/atomicfu@0.17.0",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core-jvm@1.6.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10"
				]
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.6.21": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.6.21",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/org.jetbrains.kotlinx/atomicfu@0.17.0": {
				package_url: "pkg:maven/org.jetbrains.kotlinx/atomicfu@0.17.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.6.21",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10"
				]
			},
			"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-bom@1.6.1": {
				package_url: "pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-bom@1.6.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-android@1.6.1",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core@1.6.1",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-test@1.6.1",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core-jvm@1.6.1",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-test-jvm@1.6.1"
				]
			},
			"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-test@1.6.1": {
				package_url: "pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-test@1.6.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core@1.6.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.6.21",
					"pkg:maven/org.jetbrains.kotlinx/atomicfu@0.17.0",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-test-jvm@1.6.1"
				]
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.6.0": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.6.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.6.21",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk7@1.6.0"
				]
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.6.21": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.6.21",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.6.21",
					"pkg:maven/org.jetbrains/annotations@13.0"
				]
			},
			"pkg:maven/org.jetbrains/annotations@13.0": {
				package_url: "pkg:maven/org.jetbrains/annotations@13.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk7@1.6.0": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk7@1.6.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.6.21"
				]
			},
			"pkg:maven/androidx.compose.runtime/runtime-saveable@1.2.1": {
				package_url: "pkg:maven/androidx.compose.runtime/runtime-saveable@1.2.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-geometry@1.2.1": {
				package_url: "pkg:maven/androidx.compose.ui/ui-geometry@1.2.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-graphics@1.2.1": {
				package_url: "pkg:maven/androidx.compose.ui/ui-graphics@1.2.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.ui/ui-unit@1.2.1"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-unit@1.2.1": {
				package_url: "pkg:maven/androidx.compose.ui/ui-unit@1.2.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.ui/ui-geometry@1.2.1"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-text@1.2.1": {
				package_url: "pkg:maven/androidx.compose.ui/ui-text@1.2.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.ui/ui-graphics@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-unit@1.2.1"
				]
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10",
					"pkg:maven/org.jetbrains/annotations@13.0"
				]
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk7@1.7.10": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk7@1.7.10",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.test/monitor@1.5.0": {
				package_url: "pkg:maven/androidx.test/monitor@1.5.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.test/annotation@1.0.0"
				]
			},
			"pkg:maven/androidx.test/annotation@1.0.0": {
				package_url: "pkg:maven/androidx.test/annotation@1.0.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.annotation/annotation-experimental@1.1.0"
				]
			},
			"pkg:maven/androidx.annotation/annotation-experimental@1.1.0": {
				package_url: "pkg:maven/androidx.annotation/annotation-experimental@1.1.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/androidx.lifecycle/lifecycle-common@2.5.1": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-common@2.5.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.lifecycle/lifecycle-common-java8@2.5.1"
				]
			},
			"pkg:maven/androidx.activity/activity@1.5.1": {
				package_url: "pkg:maven/androidx.activity/activity@1.5.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.core/core@1.8.0",
					"pkg:maven/androidx.lifecycle/lifecycle-runtime@2.5.1",
					"pkg:maven/androidx.lifecycle/lifecycle-viewmodel@2.5.1",
					"pkg:maven/androidx.lifecycle/lifecycle-viewmodel-savedstate@2.5.1",
					"pkg:maven/androidx.savedstate/savedstate@1.2.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/androidx.collection/collection@1.0.0",
					"pkg:maven/androidx.tracing/tracing@1.0.0"
				]
			},
			"pkg:maven/androidx.core/core@1.8.0": {
				package_url: "pkg:maven/androidx.core/core@1.8.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.annotation/annotation-experimental@1.1.0",
					"pkg:maven/androidx.lifecycle/lifecycle-runtime@2.5.1",
					"pkg:maven/androidx.versionedparcelable/versionedparcelable@1.1.1",
					"pkg:maven/androidx.collection/collection@1.0.0",
					"pkg:maven/androidx.concurrent/concurrent-futures@1.0.0"
				]
			},
			"pkg:maven/androidx.lifecycle/lifecycle-runtime@2.5.1": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-runtime@2.5.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.arch.core/core-common@2.1.0",
					"pkg:maven/androidx.lifecycle/lifecycle-common@2.5.1",
					"pkg:maven/androidx.arch.core/core-runtime@2.1.0"
				]
			},
			"pkg:maven/androidx.versionedparcelable/versionedparcelable@1.1.1": {
				package_url: "pkg:maven/androidx.versionedparcelable/versionedparcelable@1.1.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.collection/collection@1.0.0"
				]
			},
			"pkg:maven/androidx.lifecycle/lifecycle-viewmodel@2.5.1": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-viewmodel@2.5.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/androidx.lifecycle/lifecycle-viewmodel-savedstate@2.5.1"
				]
			},
			"pkg:maven/androidx.lifecycle/lifecycle-viewmodel-savedstate@2.5.1": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-viewmodel-savedstate@2.5.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.core/core-ktx@1.8.0",
					"pkg:maven/androidx.lifecycle/lifecycle-livedata-core@2.5.1",
					"pkg:maven/androidx.lifecycle/lifecycle-viewmodel@2.5.1",
					"pkg:maven/androidx.savedstate/savedstate@1.2.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-android@1.6.1"
				]
			},
			"pkg:maven/androidx.lifecycle/lifecycle-livedata-core@2.5.1": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-livedata-core@2.5.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.lifecycle/lifecycle-common@2.5.1",
					"pkg:maven/androidx.arch.core/core-common@2.1.0",
					"pkg:maven/androidx.arch.core/core-runtime@2.1.0"
				]
			},
			"pkg:maven/androidx.savedstate/savedstate@1.2.0": {
				package_url: "pkg:maven/androidx.savedstate/savedstate@1.2.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/androidx.arch.core/core-common@2.1.0",
					"pkg:maven/androidx.lifecycle/lifecycle-common@2.5.1"
				]
			},
			"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core-jvm@1.6.1": {
				package_url: "pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core-jvm@1.6.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-bom@1.6.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.7.10",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10"
				]
			},
			"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-test-jvm@1.6.1": {
				package_url: "pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-test-jvm@1.6.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-bom@1.6.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-jdk8@1.7.10",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core@1.6.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-geometry@1.3.0-alpha03": {
				package_url: "pkg:maven/androidx.compose.ui/ui-geometry@1.3.0-alpha03",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-graphics@1.3.0-alpha03": {
				package_url: "pkg:maven/androidx.compose.ui/ui-graphics@1.3.0-alpha03",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.ui/ui-unit@1.3.0-alpha03",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-unit@1.3.0-alpha03": {
				package_url: "pkg:maven/androidx.compose.ui/ui-unit@1.3.0-alpha03",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.ui/ui-geometry@1.3.0-alpha03",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-text@1.3.0-alpha03": {
				package_url: "pkg:maven/androidx.compose.ui/ui-text@1.3.0-alpha03",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.ui/ui-graphics@1.3.0-alpha03",
					"pkg:maven/androidx.compose.ui/ui-unit@1.3.0-alpha03",
					"pkg:maven/androidx.collection/collection@1.0.0",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.runtime/runtime-saveable@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03",
					"pkg:maven/androidx.core/core@1.8.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core@1.6.1"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-tooling-data@1.2.1": {
				package_url: "pkg:maven/androidx.compose.ui/ui-tooling-data@1.2.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui@1.2.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.foundation/foundation@1.2.0": {
				package_url: "pkg:maven/androidx.compose.foundation/foundation@1.2.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.animation/animation@1.1.1",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui@1.2.1",
					"pkg:maven/androidx.compose.foundation/foundation-layout@1.2.0",
					"pkg:maven/androidx.compose.ui/ui-graphics@1.3.0-alpha03",
					"pkg:maven/androidx.compose.ui/ui-text@1.3.0-alpha03",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.animation/animation@1.1.1": {
				package_url: "pkg:maven/androidx.compose.animation/animation@1.1.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.animation/animation-core@1.1.1",
					"pkg:maven/androidx.compose.foundation/foundation-layout@1.0.0",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-geometry@1.3.0-alpha03",
					"pkg:maven/androidx.compose.foundation/foundation-layout@1.2.0",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.animation/animation-core@1.1.1": {
				package_url: "pkg:maven/androidx.compose.animation/animation-core@1.1.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-core@1.6.1",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-unit@1.3.0-alpha03",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.foundation/foundation-layout@1.0.0": {
				package_url: "pkg:maven/androidx.compose.foundation/foundation-layout@1.0.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.ui/ui@1.2.1"
				]
			},
			"pkg:maven/androidx.compose.material/material-icons-core@1.0.2": {
				package_url: "pkg:maven/androidx.compose.material/material-icons-core@1.0.2",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.compose.ui/ui@1.2.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.material/material-ripple@1.0.0": {
				package_url: "pkg:maven/androidx.compose.material/material-ripple@1.0.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.compose.foundation/foundation@1.2.0",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10",
					"pkg:maven/androidx.compose.animation/animation@1.1.1",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03"
				]
			},
			"pkg:maven/androidx.activity/activity-ktx@1.5.1": {
				package_url: "pkg:maven/androidx.activity/activity-ktx@1.5.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.activity/activity@1.5.1",
					"pkg:maven/androidx.core/core-ktx@1.8.0",
					"pkg:maven/androidx.lifecycle/lifecycle-runtime-ktx@2.5.1",
					"pkg:maven/androidx.lifecycle/lifecycle-viewmodel-ktx@2.5.1",
					"pkg:maven/androidx.savedstate/savedstate-ktx@1.2.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.lifecycle/lifecycle-viewmodel-ktx@2.5.1": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-viewmodel-ktx@2.5.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.lifecycle/lifecycle-viewmodel@2.5.1",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10",
					"pkg:maven/org.jetbrains.kotlinx/kotlinx-coroutines-android@1.6.1"
				]
			},
			"pkg:maven/androidx.savedstate/savedstate-ktx@1.2.0": {
				package_url: "pkg:maven/androidx.savedstate/savedstate-ktx@1.2.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.savedstate/savedstate@1.2.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.lifecycle/lifecycle-common-java8@2.5.1": {
				package_url: "pkg:maven/androidx.lifecycle/lifecycle-common-java8@2.5.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.lifecycle/lifecycle-common@2.5.1"
				]
			},
			"pkg:maven/androidx.concurrent/concurrent-futures@1.0.0": {
				package_url: "pkg:maven/androidx.concurrent/concurrent-futures@1.0.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/com.google.guava/listenablefuture@1.0",
					"pkg:maven/androidx.annotation/annotation@1.2.0"
				]
			},
			"pkg:maven/com.google.guava/listenablefuture@1.0": {
				package_url: "pkg:maven/com.google.guava/listenablefuture@1.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/androidx.arch.core/core-runtime@2.1.0": {
				package_url: "pkg:maven/androidx.arch.core/core-runtime@2.1.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.arch.core/core-common@2.1.0"
				]
			},
			"pkg:maven/androidx.tracing/tracing@1.0.0": {
				package_url: "pkg:maven/androidx.tracing/tracing@1.0.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0"
				]
			},
			"pkg:maven/androidx.autofill/autofill@1.0.0": {
				package_url: "pkg:maven/androidx.autofill/autofill@1.0.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.core/core@1.8.0"
				]
			},
			"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03": {
				package_url: "pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.customview/customview-poolingcontainer@1.0.0": {
				package_url: "pkg:maven/androidx.customview/customview-poolingcontainer@1.0.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.core/core-ktx@1.8.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/androidx.profileinstaller/profileinstaller@1.2.0": {
				package_url: "pkg:maven/androidx.profileinstaller/profileinstaller@1.2.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.startup/startup-runtime@1.1.1"
				]
			},
			"pkg:maven/androidx.startup/startup-runtime@1.1.1": {
				package_url: "pkg:maven/androidx.startup/startup-runtime@1.1.1",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.tracing/tracing@1.0.0"
				]
			},
			"pkg:maven/androidx.compose.foundation/foundation-layout@1.2.0": {
				package_url: "pkg:maven/androidx.compose.foundation/foundation-layout@1.2.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.annotation/annotation@1.2.0",
					"pkg:maven/androidx.compose.ui/ui@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-unit@1.3.0-alpha03",
					"pkg:maven/androidx.compose.animation/animation-core@1.1.1",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03",
					"pkg:maven/androidx.core/core@1.8.0",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10"
				]
			},
			"pkg:maven/androidx.compose.material/material@1.0.0": {
				package_url: "pkg:maven/androidx.compose.material/material@1.0.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/androidx.compose.animation/animation-core@1.1.1",
					"pkg:maven/androidx.compose.foundation/foundation@1.2.0",
					"pkg:maven/androidx.compose.material/material-icons-core@1.0.2",
					"pkg:maven/androidx.compose.material/material-ripple@1.0.0",
					"pkg:maven/androidx.compose.runtime/runtime@1.2.1",
					"pkg:maven/androidx.compose.ui/ui@1.2.1",
					"pkg:maven/androidx.compose.ui/ui-text@1.3.0-alpha03",
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib-common@1.7.10",
					"pkg:maven/androidx.compose.animation/animation@1.1.1",
					"pkg:maven/androidx.compose.foundation/foundation-layout@1.2.0",
					"pkg:maven/androidx.compose.ui/ui-util@1.3.0-alpha03"
				]
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-script-runtime@1.7.10": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-script-runtime@1.7.10",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-reflect@1.7.10": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-reflect@1.7.10",
				relationship: "indirect",
				scope: undefined,
				dependencies: [
					"pkg:maven/org.jetbrains.kotlin/kotlin-stdlib@1.7.10"
				]
			},
			"pkg:maven/org.jetbrains.kotlin/kotlin-daemon-embeddable@1.7.10": {
				package_url: "pkg:maven/org.jetbrains.kotlin/kotlin-daemon-embeddable@1.7.10",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/org.jetbrains.intellij.deps/trove4j@1.0.20200330": {
				package_url: "pkg:maven/org.jetbrains.intellij.deps/trove4j@1.0.20200330",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			},
			"pkg:maven/net.java.dev.jna/jna@5.6.0": {
				package_url: "pkg:maven/net.java.dev.jna/jna@5.6.0",
				relationship: "indirect",
				scope: undefined,
				dependencies: []
			}
		},
		name: "gradle-example/app",
		file: {
			"source_location": "gradle-example/app/build.gradle"
		}
	}
]