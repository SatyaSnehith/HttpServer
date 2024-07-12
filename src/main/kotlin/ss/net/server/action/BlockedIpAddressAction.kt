package ss.net.server.action

import ss.net.server.SocketLevelAction
import java.net.Socket

abstract class BlockedIpAddressAction: SocketLevelAction {

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