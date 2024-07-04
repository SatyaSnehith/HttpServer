package com.satyasnehith.net.sharer.server

import com.satyasnehith.net.server.SocketLevelAction
import com.satyasnehith.net.sharer.Password
import com.satyasnehith.net.sharer.message.BadMessage
import com.satyasnehith.net.sharer.message.ConnectRequest
import com.satyasnehith.net.util.readLine
import com.satyasnehith.net.util.writeCrlf
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import java.net.Socket

class SharerRequestResponseAction: SocketLevelAction {

    val userManager = UserManager()
    var password: Password = Password.TypeNumber(1111)

    override fun action(socket: Socket) {
        val ip = socket.inetAddress.hostAddress
        val outputStream = socket.getOutputStream()
        val inputStream = socket.getInputStream()

        val connectionLine = inputStream.readLine()
        val connectionRequest =
            try {
                Json.decodeFromString<ConnectRequest>(connectionLine)
            } catch (e: Exception) {
                outputStream.writeCrlf(Json.encodeToString(BadMessage(e.message ?: "wrong json format")))
            }
    }

}