package com.satyasnehith.net.httpserver

import com.satyasnehith.net.server.action.BlockedIpAddressAction
import com.satyasnehith.net.server.action.NewIpAddressAction
import com.satyasnehith.net.server.Server

class HttpServer: Server() {

    val blockedIpAddressAction = BlockedIpAddressAction.create {
        println("BlockedIpAddressAction ip: " + it.inetAddress.hostAddress)
    }

    val newIpAddressAction = NewIpAddressAction.create {
        println("NewIpAddressAction ip: " + it.inetAddress.hostAddress)
    }

    val httpRequestResponseAction = HttpRequestResponseAction()

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

    fun blockIpAddress(ipAddress: String) {
        blockedIpAddressAction.ipAddressSet.add(ipAddress)
    }

    companion object {
        const val VERSION = "HTTP/1.1"
        const val SERVER_NAME = "WebShare"
    }
}

