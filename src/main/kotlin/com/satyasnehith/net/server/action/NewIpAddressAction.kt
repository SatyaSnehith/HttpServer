package com.satyasnehith.net.server.action

import com.satyasnehith.net.server.SocketLevelAction
import java.net.Socket

abstract class NewIpAddressAction: SocketLevelAction {

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