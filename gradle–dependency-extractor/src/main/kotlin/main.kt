import com.android.builder.model.AndroidProject
import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.parameters.options.option
import org.gradle.tooling.GradleConnector
import java.io.File


fun main(args: Array<String>) = DependencyExtractor().main(args)

class DependencyExtractor : CliktCommand() {
    val moduleName: String? by option(help = "moduleName")


    override fun run() {
        GradleConnector.newConnector()
            .forProjectDirectory(File("../gradle-example/simple-app"))
            .connect().use { connection ->
                val model: AndroidProject = connection.model(AndroidProject::class.java)
                    .withArguments("-Pandroid.injected.build.model.only.versioned=7")
                    .get()

                model.variants.first().mainArtifact.dependencyGraphs.compileDependencies.forEach {
                    println(it.toString())
                }
            }

        println("")
        println("")
        println("")

        GradleConnector.newConnector()
            .forProjectDirectory(File("../gradle-example/library-parent-parent"))
            .connect().use { connection ->
                val model: AndroidProject = connection.model(AndroidProject::class.java)
                    .withArguments("-Pandroid.injected.build.model.only.versioned=7")
                    .get()

                model.variants.first().mainArtifact.dependencyGraphs.compileDependencies.forEach {
                    println(it.toString())
                }
            }
    }
}