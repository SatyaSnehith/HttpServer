package com.satyasnehith.net

import com.satyasnehith.net.httpserver.HttpServer
import com.satyasnehith.net.httpserver.response.StringResponse
import com.satyasnehith.net.httpserver.util.FileUtil
import com.satyasnehith.net.sharer.client.SharerClient
import com.satyasnehith.net.sharer.json
import com.satyasnehith.net.sharer.message.ConnectRequest
import com.satyasnehith.net.sharer.message.ConnectResponse
import com.satyasnehith.net.sharer.message.ConnectionStatus
import com.satyasnehith.net.sharer.server.SharerServer
import kotlinx.serialization.encodeToString
import java.io.File

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
