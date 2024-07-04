package com.satyasnehith.net.sharer.server

import com.satyasnehith.net.server.SocketLevelAction
import com.satyasnehith.net.sharer.Password
import com.satyasnehith.net.sharer.json
import com.satyasnehith.net.sharer.message.BadMessage
import com.satyasnehith.net.sharer.message.ConnectRequest
import com.satyasnehith.net.sharer.message.ConnectResponse
import com.satyasnehith.net.util.readLine
import com.satyasnehith.net.util.writeCrlf
import kotlinx.serialization.encodeToString
import java.net.Socket

class SharerRequestResponseAction: SocketLevelAction {

    val userManager = UserManager()
    var password: Password = Password.TypeNumber(1111)

    override fun action(socket: Socket) {
        val ip = socket.inetAddress.hostAddress
        val outputStream = socket.getOutputStream()
        val inputStream = socket.getInputStream()

        val connectRequestJson = inputStream.readLine()
        val connectRequest =
            try {
                json.decodeFromString<ConnectRequest>(connectRequestJson)
            } catch (e: Exception) {
                outputStream.writeCrlf(json.encodeToString(BadMessage(e.message ?: "wrong json format")))
                return
            }
        println("RECEIVED: ConnectRequest -> $connectRequest")
        if (password.equals(connectRequest.password)) {
            val connectResponse = ConnectResponse()
            val connectResponseJson = json.encodeToString(connectResponse)
            outputStream.writeCrlf(connectResponseJson)
            println("SENT: ConnectResponse -> $connectResponse")

        }
    }

}