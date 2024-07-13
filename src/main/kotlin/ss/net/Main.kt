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
import java.io.File
import java.net.URLClassLoader

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
            fileMap = FileUtil.mapFromFolder("")
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
