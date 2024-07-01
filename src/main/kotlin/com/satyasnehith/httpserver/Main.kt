package com.satyasnehith.httpserver

import com.satyasnehith.httpserver.request.StringRequest
import com.satyasnehith.httpserver.response.StringResponse

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