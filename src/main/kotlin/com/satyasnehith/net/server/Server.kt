package com.satyasnehith.net.server

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

    val socketLevelActions: ArrayList<SocketLevelAction> = arrayListOf()

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

    fun onAccept(socket: Socket) {
        socketLevelActions.forEach {
            try {
                it.action(socket)
            } catch (e: Exception) {
                println("SocketServer action: " + e.message)
            }
        }
    }

    fun stop() {
        isRunning = false
        scope.cancel()
        job.cancel()
    }


}