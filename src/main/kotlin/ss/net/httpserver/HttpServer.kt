package ss.net.httpserver

import ss.net.server.action.BlockedIpAddressAction
import ss.net.server.action.NewIpAddressAction
import ss.net.server.Server

class HttpServer: Server() {

    val blockedIpAddressAction = BlockedIpAddressAction.create {
        println("BlockedIpAddressAction ip: " + it.inetAddress.hostAddress)
    }

    val newIpAddressAction = NewIpAddressAction.create {
        println("NewIpAddressAction ip: " + it.inetAddress.hostAddress)
    }

    private val httpRequestResponseAction = HttpRequestResponseAction()

    init {
        socketLevelActions.add(blockedIpAddressAction)
        socketLevelActions.add(newIpAddressAction)
        socketLevelActions.add(httpRequestResponseAction)
    }

    fun addRoutes(
        routes: HttpRequestResponseAction.() -> Unit
    ) {
        httpRequestResponseAction.routes()
    }

    override fun start() {
        super.start()
        println("HttpServer start")
    }

    fun blockIpAddress(ipAddress: String) {
        blockedIpAddressAction.ipAddressSet.add(ipAddress)
    }

    companion object {
        const val VERSION = "HTTP/1.1"
        const val SERVER_NAME = "WebShare"
    }
}

