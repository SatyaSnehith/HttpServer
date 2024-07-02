package com.satyasnehith.net

import com.satyasnehith.net.httpserver.HttpServer
import com.satyasnehith.net.httpserver.request.StringRequest
import com.satyasnehith.net.httpserver.response.StringResponse

fun main(args: Array<String>) {
    println("HttpServer")

    val server = HttpServer()

    server.addRoutes {
        get("/") {
            StringResponse(200, body = "Hello World! Get")
        }
        post("/") {
            StringResponse(200, body = "Hello World! post ${(it as? StringRequest)?.body}")
        }
    }
    server.start()

}