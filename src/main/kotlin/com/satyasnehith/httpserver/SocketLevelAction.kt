package com.satyasnehith.httpserver

import com.satyasnehith.httpserver.request.*
import com.satyasnehith.httpserver.response.Response
import com.satyasnehith.httpserver.response.StringResponse
import com.satyasnehith.httpserver.response.send
import java.io.InputStream
import java.io.OutputStream
import java.net.Socket
import kotlin.jvm.Throws

fun interface SocketLevelAction {

    @Throws(Exception::class)
    fun action(socket: Socket)

}

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

abstract class RequestResponseAction: SocketLevelAction {

    override fun action(socket: Socket) {
        try {
            onRequest(socket.getInputStream(), socket.getOutputStream())
        } catch (e: Exception) {
            println("SocketServer onRequest error: " + e.message)
        }
    }

    abstract fun onRequest(inputStream: InputStream, outputStream: OutputStream)

    companion object {
        fun create(
            action: (InputStream, OutputStream) -> Unit
        ) = object: RequestResponseAction() {
            override fun onRequest(inputStream: InputStream, outputStream: OutputStream) {
                action(inputStream, outputStream)
            }
        }
    }
}


abstract class HttpRequestResponseAction: SocketLevelAction {

    val requestHandlers: ArrayList<RequestHandler> = ArrayList()

    override fun action(socket: Socket) {
        val inputStream = socket.getInputStream()
        val outputStream = socket.getOutputStream()

        var request = try {
            createRequest(inputStream)
        } catch (e: Exception) {
            throw Exception(e)
        }

        println("request.isPost: ${request.isPost}")

        println("request.contentType: ${request.contentType}")

        if (request.isPost) {
            request = when(request.contentType) {
                ContentType.JSON, ContentType.TEXT -> {
                    val len = request.contentLength
                    val body = if (len != null) {
                        inputStream.readString(len)
                    } else {
                        inputStream.readAvailable()
                    }
                    StringRequest(request, body)
                }
                else -> {
                    request
                }
            }
        }

        println(request)

        val requestHandler = requestHandlers.find {
            it.path == request.path &&
            it.method.name == request.method
        }

        val response = requestHandler?.onRequest(request) ?: StringResponse(
            statusCode = 400,
            body = "${request.path} not available with ${request.method} method"
        )

        println(response)

        response.send(outputStream)
    }


    fun get(
        path: String,
        respond: (Request) -> Response
    ) {
        addRequestHandler(
            method = Method.GET,
            path = path,
            respond = respond
        )
    }

    fun post(
        path: String,
        respond: (Request) -> Response
    ) {
        addRequestHandler(
            method = Method.POST,
            path = path,
            respond = respond
        )
    }

    private fun addRequestHandler(
        method: Method,
        path: String,
        respond: (Request) -> Response
    ) {
        requestHandlers.add(object: RequestHandler(method, path) {
            override fun onRequest(request: Request): Response {
                return respond(request)
            }
        })
    }


    abstract fun onRequest(request: Request): Response

    companion object {
        fun create(
            action: (Request) -> Response
        ) = object: HttpRequestResponseAction() {
            override fun onRequest(request: Request): Response {
                return action(request)
            }
        }
    }
}

abstract class RequestHandler(
    val method: Method,
    val path: String
) {
    abstract fun onRequest(request: Request): Response

}

