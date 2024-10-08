package ss.net.server.action

import ss.net.server.SocketLevelAction
import java.io.InputStream
import java.io.OutputStream
import java.net.Socket

abstract class RequestResponseAction: SocketLevelAction {

    override fun action(socket: Socket) {
        try {
            onRequest(socket.getInputStream(), socket.getOutputStream())
        } catch (e: Exception) {
            println("SocketServer onRequest error: " + e.message)
        }
    }

    abstract fun onRequest(inputStream: InputStream, outputStream: OutputStream)

    companion object {
        fun create(
            action: (InputStream, OutputStream) -> Unit
        ) = object: RequestResponseAction() {
            override fun onRequest(inputStream: InputStream, outputStream: OutputStream) {
                action(inputStream, outputStream)
            }
        }
    }
}