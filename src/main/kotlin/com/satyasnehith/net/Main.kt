package com.satyasnehith.net

import com.satyasnehith.net.httpserver.HttpServer
import com.satyasnehith.net.httpserver.request.MultipartRequest
import com.satyasnehith.net.httpserver.request.StringRequest
import com.satyasnehith.net.httpserver.response.StringResponse
import com.satyasnehith.net.sharer.client.SharerClient
import com.satyasnehith.net.sharer.json
import com.satyasnehith.net.sharer.message.ConnectRequest
import com.satyasnehith.net.sharer.message.ConnectResponse
import com.satyasnehith.net.sharer.server.SharerServer
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

fun main(args: Array<String>) {
    startServer()
}

fun startServer() {
    println("HttpServer")
    val server = HttpServer()

    server.addRoutes {
        get("/") {
            StringResponse(200, body = "Hello World! Get")
        }
        post("/") {
            (it as? MultipartRequest)?.let { multipart ->
                for (formData in multipart.body) {
                    println("FORM $formData")
                }
            }
            StringResponse(200, body = "Hello World! post ${(it as? StringRequest)?.body}")
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
    val s = json.encodeToString(ConnectResponse())
    println("ConnectResponse $s")
    println("ConnectResponse ${json. decodeFromString<ConnectResponse>(s).reason}")
}
