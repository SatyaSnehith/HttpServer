package com.satyasnehith.httpserver

import java.io.InputStream
import java.io.OutputStream
import java.net.Socket
import kotlin.jvm.Throws

abstract class SocketServer: Server() {
    val socketLevelActions: ArrayList<SocketLevelActions> = arrayListOf()

    override fun onAccept(socket: Socket) {
        socketLevelActions.forEach {
            try {
                it.action(socket)
            } catch (e: Exception) {
                println("SocketServer action: " + e.message)
            }
        }
        try {
            onRequest(socket.getInputStream(), socket.getOutputStream())
        } catch (e: Exception) {
            println("SocketServer onRequest error: " + e.message)
        }
    }

    abstract fun onRequest(inputStream: InputStream, outputStream: OutputStream)


    companion object {
        private const val VERSION = "HTTP/1.0"
        private const val CRLF = "\r\n"
        const val SERVER_NAME = "WebShare"
    }
}

interface SocketLevelActions {

    @Throws(Exception::class)
    fun action(socket: Socket)

}

abstract class NewIpAddressAction: SocketLevelActions {

    private val ipAddressSet: HashSet<String> = hashSetOf()

    @Synchronized
    override fun action(socket: Socket) {
        val ipAddress = socket.inetAddress.hostAddress
        if (!ipAddressSet.contains(ipAddress)) {
            ipAddressSet.add(ipAddress)
            onNewIpAddress(socket)
        }
    }

    abstract fun onNewIpAddress(socket: Socket)

    companion object {
        fun create(
            action: (Socket) -> Unit
        ) = object: NewIpAddressAction() {
            override fun onNewIpAddress(socket: Socket) {
                action(socket)
            }
        }
    }
}

abstract class BlockedIpAddressAction: SocketLevelActions {

    val ipAddressSet: HashSet<String> = hashSetOf()

    @Throws(Exception::class)
    override fun action(socket: Socket) {
        val ipAddress = socket.inetAddress.hostAddress
        if(ipAddressSet.contains(ipAddress)) socket.close()
    }

    abstract fun onBlockedIpAddressAccess(socket: Socket)

    companion object {
        fun create(
            action: (Socket) -> Unit
        ) = object: BlockedIpAddressAction() {
            override fun onBlockedIpAddressAccess(socket: Socket) {
                action(socket)
            }
        }
    }

}

