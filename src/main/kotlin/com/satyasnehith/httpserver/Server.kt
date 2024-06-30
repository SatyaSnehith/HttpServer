package com.satyasnehith.httpserver

import kotlinx.coroutines.*
import java.net.ServerSocket
import java.net.Socket

abstract class Server(
    private val port: Int = 1111
) {
    val job = SupervisorJob()
    val scope = CoroutineScope(Dispatchers.IO + job)
    private var serverSocket: ServerSocket? = null
    var isRunning = false

    val handler = CoroutineExceptionHandler { _, exception ->
        println("CoroutineExceptionHandler got $exception")
    }

    fun start() {
        println("HttpServer start")
        isRunning = true
        serverSocket = ServerSocket(port)
        while(isRunning) {
            val socket = serverSocket!!.accept()
            scope.launch {
                onAccept(socket)
            }
        }
    }

    abstract fun onAccept(socket: Socket)


    fun stop() {
        isRunning = false
        scope.cancel()
        job.cancel()
    }


}