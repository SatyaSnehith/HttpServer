package ss.net.server

import ss.net.Service
import kotlinx.coroutines.*
import java.net.ServerSocket
import java.net.Socket

abstract class Server(
    private val port: Int = 1111
): Service() {
    private var serverSocket: ServerSocket? = null

    protected val socketLevelActions: ArrayList<SocketLevelAction> = arrayListOf()

    val handler = CoroutineExceptionHandler { _, exception ->
        println("CoroutineExceptionHandler got $exception")
    }

    override fun start() {
        super.start()
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
                println("ERROR: SocketServer action: " + e.message)
            }
        }
    }

}