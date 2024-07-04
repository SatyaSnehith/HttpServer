package com.satyasnehith.net.httpserver

import com.satyasnehith.net.httpserver.file.IFile
import com.satyasnehith.net.server.SocketLevelAction
import com.satyasnehith.net.httpserver.request.*
import com.satyasnehith.net.httpserver.response.Response
import com.satyasnehith.net.httpserver.response.StringResponse
import com.satyasnehith.net.httpserver.response.send
import com.satyasnehith.net.httpserver.util.IOUtil
import com.satyasnehith.net.util.CRLF
import com.satyasnehith.net.util.readAvailable
import com.satyasnehith.net.util.readLine
import com.satyasnehith.net.util.readString
import java.io.ByteArrayOutputStream
import java.io.File
import java.io.InputStream
import java.net.Socket
import kotlin.jvm.Throws

class HttpRequestResponseAction: SocketLevelAction {

    private val requestHandlers: ArrayList<RequestHandler> = ArrayList()

    val fileCreatorInterface = com.satyasnehith.net.httpserver.FileCreatorInterface { name ->
        val dir = File("/home/satya/Documents/LocalServerUploads")
        if (!dir.exists()) dir.mkdirs()
        val file = File(dir, name)
        file.createNewFile()
        println("FILE ${file.absolutePath}")
        IFile.fromFile(file)
    }

    val fileReceiver = FileReceiver()

    override fun action(socket: Socket) {
        val inputStream = socket.getInputStream()
        val outputStream = socket.getOutputStream()

        val request = try {
            receiveRequest(inputStream)
        } catch (e: Exception) {
            outputStream.send(
                StringResponse(
                    statusCode = 400,
                    body = "Bad Request\n${e.message}"
                )
            )
            return
        }

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

        outputStream.send(response)

        println("-".repeat(50))
        println(request)
        println()
        println(response)
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
                ContentType.MULTI_PART -> {
                    val boundary = headers.boundary
                    val line = inputStream.readLine()
                    if (line == boundary) {
                        val formDataList = ArrayList<FormData>()
                        var continueReading = true
                        var index = 0
                        while(continueReading) {
                            val formHeaders = inputStream.readHeaders()
                            val contentDisposition = formHeaders
                                .contentDisposition ?: throw Exception("Incorrect ${Headers.ContentDisposition} -> ${formHeaders[Headers.ContentDisposition]}")
                            val fileName = contentDisposition.fileName
                            val name = contentDisposition.name.ifEmpty { index.toString() }
                            var formData: FormData = if (!fileName.isNullOrBlank()) {
                                val file = fileCreatorInterface.onCreateFile(fileName)
                                continueReading = !fileReceiver.receive(
                                    inputStream = inputStream,
                                    outputStream = file.outputStream(),
                                    boundary = CRLF + boundary
                                )
                                FormData.FileFormData(name, file)
                            } else {
                                val byteArrayOutputStream = ByteArrayOutputStream()
                                continueReading = !IOUtil.receiveFormData(
                                    inputStream = inputStream,
                                    outputStream = byteArrayOutputStream,
                                    boundary = CRLF + boundary
                                )
                                FormData.StringFormData(name, byteArrayOutputStream.toString())
                            }
                            formDataList.add(formData)
                            index++
                        }
                        MultipartRequest(request, formDataList)
                    } else throw Exception("Not a boundary $line")
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
