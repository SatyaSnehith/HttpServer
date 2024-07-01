package com.satyasnehith.httpserver

import com.satyasnehith.httpserver.file.IFile
import com.satyasnehith.httpserver.response.StringResponse
import java.io.File

class HttpServer: Server() {

    val fileCreatorInterface = FileCreatorInterface { name ->
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

    fun blockIpAddress(ipAddress: String) {
        blockedIpAddressAction.ipAddressSet.add(ipAddress)
    }

    companion object {
        const val VERSION = "HTTP/1.0"
        const val CRLF = "\r\n"
        const val SERVER_NAME = "WebShare"
    }
}

