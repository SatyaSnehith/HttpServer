package com.satyasnehith.net.sharer.server

import com.satyasnehith.net.server.SocketLevelAction
import com.satyasnehith.net.sharer.Password
import com.satyasnehith.net.sharer.json
import com.satyasnehith.net.sharer.message.*
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
                println(e.message)
                outputStream.writeCrlf(json.encodeToString(Message.badMessage("wrong json format")))
                return
            }
        println("RECEIVED: ConnectRequest -> $connectRequestJson")
        val connectResponse = if (password.equals(connectRequest.password)) {
            ConnectResponse()
        } else {
            ConnectResponse(
                reason = DisconnectionReason.INCORRECT
            )
        }
        val connectResponseJson = json.encodeToString(connectResponse)
        outputStream.writeCrlf(connectResponseJson)
        println("SENT: ConnectResponse -> $connectResponseJson")
    }

}