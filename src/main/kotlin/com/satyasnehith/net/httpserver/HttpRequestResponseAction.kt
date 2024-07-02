package com.satyasnehith.net.httpserver

import com.satyasnehith.net.httpserver.file.IFile
import com.satyasnehith.net.server.SocketLevelAction
import com.satyasnehith.net.httpserver.request.*
import com.satyasnehith.net.httpserver.response.Response
import com.satyasnehith.net.httpserver.response.StringResponse
import com.satyasnehith.net.httpserver.response.send
import com.satyasnehith.net.util.readAvailable
import com.satyasnehith.net.util.readLine
import com.satyasnehith.net.util.readString
import java.io.File
import java.io.InputStream
import java.net.Socket
import kotlin.jvm.Throws

class HttpRequestResponseAction: SocketLevelAction {

    private val requestHandlers: ArrayList<RequestHandler> = ArrayList()

    val fileCreatorInterface = com.satyasnehith.net.httpserver.FileCreatorInterface { name ->
        IFile.fromFile(File("/httpserverfiles/$name"))
    }

    override fun action(socket: Socket) {
        val inputStream = socket.getInputStream()
        val outputStream = socket.getOutputStream()

        val request = try {
            receiveRequest(inputStream)
        } catch (e: Exception) {
            StringResponse(
                statusCode = 400,
                body = "Bad Request\n${e.message}"
            ).send(outputStream)
            return
        }

        println("-".repeat(50))
        println(request)

        val requestHandler = requestHandlers.find {
            it.path == request.path &&
            (it.method.name == request.method || request.isHead)
        }

        var response = requestHandler?.onRequest(request) ?: StringResponse(
            statusCode = 400,
            body = "Bad Request\n${request.path} does not exist with ${request.method} method"
        )

        if (request.isHead) { // send only headers
            response = Response(response)
        }

        println()
        println(response)

        response.send(outputStream)
    }


    @Throws(Exception::class)
    fun receiveRequest(inputStream: InputStream): Request {
        var request = createRequest(inputStream)

        val headers = request.headers

        if (request.isPost) {
            request = when(headers.contentType) {
                ContentType.JSON, ContentType.TEXT -> {
                    val len = request.contentLength
                    val body = if (len != null) {
                        inputStream.readString(len)
                    } else {
                        inputStream.readAvailable()
                    }
                    StringRequest(request, body)
                }
                ContentType.FORM -> {
                    val boundary = headers.boundary
                    val line = inputStream.readLine()
                    if (line == boundary) {
                        val formHeaders = inputStream.readHeaders()
                        val contentDisposition = formHeaders
                            .contentDisposition ?: throw Exception("Incorrect ${Headers.ContentDisposition} ${formHeaders[Headers.ContentDisposition]}")

                    }
                    FileRequest(request, fileCreatorInterface.onCreateFile(""))
                }
                else -> {
                    request
                }
            }
        }

        return request
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

}

abstract class RequestHandler(
    val method: Method,
    val path: String
) {
    abstract fun onRequest(request: Request): Response

}
