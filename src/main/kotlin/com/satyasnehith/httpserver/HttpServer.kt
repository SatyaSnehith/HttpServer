package com.satyasnehith.httpserver

import com.satyasnehith.httpserver.request.createRequest
import kotlinx.coroutines.*
import java.net.ServerSocket

class HttpServer {
    val job = SupervisorJob()
    val scope = CoroutineScope(Dispatchers.IO + job)
    private var serverSocket: ServerSocket? = null
    private val PORT = 1111
    var isRunning = false

    val handler = CoroutineExceptionHandler { _, exception ->
        println("CoroutineExceptionHandler got $exception")
    }
    fun start() {
        println("HttpServer start")

        isRunning = true
        serverSocket = ServerSocket(PORT)
        while(isRunning) {
            val socket = serverSocket!!.accept()
            scope.launch {
                val request = createRequest(socket.getInputStream())
                println(request)
            }
        }
    }

    fun stop() {
        isRunning = false
        scope.cancel()
        job.cancel()
    }

    companion object {
        private const val VERSION = "HTTP/1.0"
        private const val CRLF = "\r\n"
        const val SERVER_NAME = "WebShare"
    }
}