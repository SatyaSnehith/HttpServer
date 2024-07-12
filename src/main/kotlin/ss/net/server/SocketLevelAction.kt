package ss.net.server

import java.net.Socket
import kotlin.jvm.Throws

fun interface SocketLevelAction {

    @Throws(Exception::class)
    fun action(socket: Socket)

}
