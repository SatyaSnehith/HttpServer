package com.satyasnehith.httpserver

import kotlinx.coroutines.*

@OptIn(DelicateCoroutinesApi::class)
suspend fun main(args: Array<String>) {
    println("HttpServer")

    val server = HttpServer()

    GlobalScope.launch {
        delay(5000)
        server.stop()
    }

    server.start()

}