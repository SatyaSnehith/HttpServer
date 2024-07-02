package com.satyasnehith.net.httpserver

import com.satyasnehith.net.server.action.BlockedIpAddressAction
import com.satyasnehith.net.server.action.NewIpAddressAction
import com.satyasnehith.net.server.Server
import com.satyasnehith.net.httpserver.file.IFile
import com.satyasnehith.net.httpserver.response.StringResponse
import java.io.File

class HttpServer: Server() {

    val fileCreatorInterface = com.satyasnehith.net.httpserver.FileCreatorInterface { name ->
        IFile.fromFile(File("/httpserverfiles/$name"))
    }

    val blockedIpAddressAction = BlockedIpAddressAction.create {
        println("BlockedIpAddressAction ip: " + it.inetAddress.hostAddress)
    }

    val newIpAddressAction = NewIpAddressAction.create {
        println("NewIpAddressAction ip: " + it.inetAddress.hostAddress)
    }

    val httpRequestResponseAction = HttpRequestResponseAction.create { request ->
        println(request)
        StringResponse(
            statusCode = 200,
            body = "Hello World!"
        )
    }

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

