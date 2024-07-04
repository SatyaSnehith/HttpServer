package com.satyasnehith.net.sharer.client

import com.satyasnehith.net.Service
import com.satyasnehith.net.sharer.json
import com.satyasnehith.net.sharer.message.ConnectRequest
import com.satyasnehith.net.sharer.message.ConnectResponse
import com.satyasnehith.net.util.readLine
import com.satyasnehith.net.util.writeCrlf
import kotlinx.serialization.encodeToString
import java.net.Socket

class SharerClient: Service() {
    var socket: Socket? = null

    override fun start() {
        super.start()
        socket = Socket("localhost",1111)
        val outputStream = socket!!.getOutputStream()
        val inputStream = socket!!.getInputStream()
        val connectRequest = ConnectRequest()
        val connectRequestJson = json.encodeToString(connectRequest)
        outputStream.writeCrlf(connectRequestJson)
        println("SENT: ConnectRequest -> $connectRequestJson")
        val connectResponseJson = inputStream.readLine()
        val connectResponse = json.decodeFromString<ConnectResponse>(connectResponseJson)
        println("RECEIVED: ConnectResponse -> $connectResponseJson")

    }

    override fun stop() {
        socket?.close()
        super.stop()
    }

}