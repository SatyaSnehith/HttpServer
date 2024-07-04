package com.satyasnehith.net.sharer.client

import com.satyasnehith.net.Service
import com.satyasnehith.net.sharer.json
import com.satyasnehith.net.sharer.message.ConnectRequest
import com.satyasnehith.net.sharer.message.ConnectResponse
import com.satyasnehith.net.util.readLine
import com.satyasnehith.net.util.writeCrlf
import kotlinx.serialization.encodeToString
import java.io.InputStream
import java.io.OutputStream
import java.net.Socket

class SharerClient(
    private val host: String = "localhost",
    private val port: Int = 1111
): Service() {
    private lateinit var socket: Socket
    private lateinit var outputStream: OutputStream
    private lateinit var inputStream: InputStream
    private lateinit var password: String

    fun start(
        password: String
    ) {
        this.password = password
        start()
    }

    override fun start() {
        super.start()
        socket = Socket(host, port)
        outputStream = socket.getOutputStream()
        inputStream = socket.getInputStream()

        processConnectionRequest()
    }

    private fun processConnectionRequest() {
        val connectRequest = ConnectRequest(password)
        val connectRequestJson = json.encodeToString(connectRequest)
        outputStream.writeCrlf(connectRequestJson)
        println("SENT: ConnectRequest -> $connectRequestJson")
        val connectResponseJson = inputStream.readLine()
        val connectResponse = json.decodeFromString<ConnectResponse>(connectResponseJson)
        println("RECEIVED: ConnectResponse -> $connectResponseJson")
    }

    override fun stop() {
        socket.close()
        super.stop()
    }

}