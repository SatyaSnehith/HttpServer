package ss.net

import ss.net.httpserver.HttpServer
import ss.net.httpserver.response.StringResponse
import ss.net.httpserver.util.FileUtil
import ss.net.sharer.client.SharerClient
import ss.net.sharer.json
import ss.net.sharer.message.ConnectRequest
import ss.net.sharer.message.ConnectResponse
import ss.net.sharer.message.ConnectionStatus
import ss.net.sharer.server.SharerServer
import kotlinx.serialization.encodeToString
import ss.io.file.IFile
import java.io.File

val webFiles = listOf(
    "web/4a508eb5667fb9042644.woff2",
    "web/4b432532fa948388046f.woff",
    "web/5c5ff10473ac9b95f049.woff",
    "web/26c9746e633c989a9b47.woff",
    "web/bundle.js",
    "web/bundle.js.map",
    "web/d2316b3ad57dae5d46c2.woff2",
    "web/de52a3d93f85dcb8da44.woff2",
    "web/index.html",
    "web/styles.css",
)

fun main(args: Array<String>) {
    startServer()
//    startSharerClient()
//    startSharerServer()
//    getFiles()
}

fun getFiles() {
    val map = HashMap<String, File>()
    FileUtil.getFileMap(
        folder = File(""),
        map = map
    )
    for (path in map.keys) {
        println(path)
    }
}

fun startServer() {
    println("HttpServer")
    val server = HttpServer()

    server.addRoutes {
//        val r = this.javaClass.classLoader.getResource("sd")
//        println("RESOURCE: $r")
//        if (r != null) {
//            URLClassLoader(arrayOf(r), this.javaClass.classLoader).urLs.forEach {
//                println("URL: ${it.path}")
//            }
//            println("RESOURCE: ${File(r.path).length()}")
//        }
//
//        File("new.txt").createNewFile()

        static(
            fileMap = webFiles.associate {
                val file = File(ClassLoader.getSystemResource(it).file)
                "/" + file.name to IFile.fromFile(file)
            }
        )
        get("/dsa") {
            StringResponse(
                body = it.queries.joinToString()
            )
        }
    }
    server.start()
}

fun startSharerServer() {
    val server = SharerServer()
    server.start()
}

fun startSharerClient() {
    val client = SharerClient()
    client.start()
}

fun checkJson() {
    println("ConnectRequest ${json.encodeToString(ConnectRequest())}")
    val s = json.encodeToString(ConnectResponse(ConnectionStatus.CONNECTED))
    println("ConnectResponse $s")
    println("ConnectResponse ${json. decodeFromString<ConnectResponse>(s).reason}")
}
