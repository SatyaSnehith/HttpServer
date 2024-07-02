package com.satyasnehith.net.httpserver

import com.satyasnehith.net.server.SocketLevelAction
import com.satyasnehith.net.httpserver.request.*
import com.satyasnehith.net.httpserver.response.Response
import com.satyasnehith.net.httpserver.response.StringResponse
import com.satyasnehith.net.httpserver.response.send
import com.satyasnehith.net.util.readAvailable
import com.satyasnehith.net.util.readString
import java.net.Socket

abstract class HttpRequestResponseAction: SocketLevelAction {

    private val requestHandlers: ArrayList<RequestHandler> = ArrayList()

    override fun action(socket: Socket) {
        val inputStream = socket.getInputStream()
        val outputStream = socket.getOutputStream()

        var request = try {
            createRequest(inputStream)
        } catch (e: Exception) {
            throw Exception(e)
        }

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

        println("-".repeat(50))
        println(request)

        val requestHandler = requestHandlers.find {
            it.path == request.path &&
            (it.method.name == request.method || request.isHead)
        }

        var response = requestHandler?.onRequest(request) ?: StringResponse(
            statusCode = 400,
            body = "${request.path} does not exist with ${request.method} method"
        )

        if (request.isHead) { // send only headers
            response = Response(response)
        }

        println()
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
