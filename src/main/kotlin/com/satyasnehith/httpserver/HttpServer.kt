package com.satyasnehith.httpserver

import com.satyasnehith.httpserver.request.createRequest

class HttpServer: SocketServer() {

    val blockedIpAddressAction = BlockedIpAddressAction.create {
        println("BlockedIpAddressAction ip: " + it.inetAddress.hostAddress)
    }

    val newIpAddressAction = NewIpAddressAction.create {
        println("NewIpAddressAction ip: " + it.inetAddress.hostAddress)
    }

    val requestResponseAction = RequestResponseAction.create { inputStream, outputSream ->
        val request = createRequest(inputStream)
        println(request)
    }

    init {
        socketLevelActions.add(blockedIpAddressAction)
        socketLevelActions.add(newIpAddressAction)
        socketLevelActions.add(requestResponseAction)
    }

    fun blockIpAddress(ipAddress: String) {
        blockedIpAddressAction.ipAddressSet.add(ipAddress)
    }

    companion object {
        private const val VERSION = "HTTP/1.0"
        private const val CRLF = "\r\n"
        const val SERVER_NAME = "WebShare"
    }
}
