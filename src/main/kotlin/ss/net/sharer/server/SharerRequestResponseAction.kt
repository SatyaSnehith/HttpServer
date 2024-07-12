package ss.net.sharer.server

import ss.net.server.SocketLevelAction
import ss.net.sharer.Password
import ss.net.sharer.json
import ss.net.sharer.message.*
import ss.io.util.readLine
import ss.io.util.writeCrlf
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
            ConnectResponse(
                status = ConnectionStatus.CONNECTED
            )
        } else {
            ConnectResponse(
                status = ConnectionStatus.NOT_CONNECTED,
                reason = DisconnectionReason.INCORRECT
            )
        }
        val connectResponseJson = json.encodeToString(connectResponse)
        outputStream.writeCrlf(connectResponseJson)
        println("SENT: ConnectResponse -> $connectResponseJson")
    }

}