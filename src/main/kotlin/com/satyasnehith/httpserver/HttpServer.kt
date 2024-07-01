package com.satyasnehith.httpserver

import com.satyasnehith.httpserver.file.IFile
import com.satyasnehith.httpserver.request.createRequest
import com.satyasnehith.httpserver.response.StringResponse
import java.io.File

class HttpServer: SocketServer() {

    val fileCreatorInterface = FileCreatorInterface { name ->
        IFile.fromFile(File("/httpserverfiles/$name"))
    }

    val blockedIpAddressAction = BlockedIpAddressAction.create {
        println("BlockedIpAddressAction ip: " + it.inetAddress.hostAddress)
    }

    val newIpAddressAction = NewIpAddressAction.create {
        println("NewIpAddressAction ip: " + it.inetAddress.hostAddress)
    }

    val requestResponseAction = RequestResponseAction.create { inputStream, outputSream ->
        val request = try {
            createRequest(inputStream)
        } catch (e: Exception) {
        }
        val resposne = StringResponse(200, "Hello World!")
        outputSream.write(resposne.startLine.toByteArray())
        outputSream.write(CRLF.toByteArray())
        outputSream.write(resposne.body.toByteArray())
        outputSream.write(CRLF.toByteArray())
        outputSream.flush()
        outputSream.close()
        println(request)
        println()
        println(resposne)
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
        const val VERSION = "HTTP/1.0"
        const val CRLF = "\r\n"
        const val SERVER_NAME = "WebShare"
    }
}

