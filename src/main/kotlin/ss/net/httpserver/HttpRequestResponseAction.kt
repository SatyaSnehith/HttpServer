package ss.net.httpserver

import ss.net.httpserver.file.FileReceiver
import ss.net.httpserver.file.FileSender
import ss.io.file.IFile
import ss.io.util.*
import ss.net.server.SocketLevelAction
import ss.net.httpserver.request.*
import ss.net.httpserver.response.*
import ss.net.httpserver.util.IOUtil
import ss.net.httpserver.util.Logger
import java.io.ByteArrayOutputStream
import java.io.File
import java.io.InputStream
import java.io.OutputStream
import java.net.Socket
import kotlin.jvm.Throws

class HttpRequestResponseAction: SocketLevelAction {

    private val requestHandlers: ArrayList<RequestHandler> = ArrayList()

    val fileCreatorInterface = FileCreatorInterface { name ->
        val dir = File("/home/satya/Documents/LocalServerUploads")
        if (!dir.exists()) dir.mkdirs()
        val file = File(dir, name)
        file.createNewFile()
//        println("FILE ${file.absolutePath}")
        IFile.fromFile(file)
    }

    val fileReceiver = FileReceiver()

    val fileSender = FileSender()

    override fun action(socket: Socket) {
        val inputStream = socket.getInputStream()
        val outputStream = socket.getOutputStream()

        val request = try {
            receiveRequest(inputStream)
        } catch (e: Exception) {
            send(
                response = StringResponse(
                    statusCode = 400,
                    body = "Bad Request\n${e.message}"
                ),
                outputStream = outputStream
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

        send(
            response = response,
            outputStream = outputStream
        )

    }


    @Throws(Exception::class)
    fun receiveRequest(inputStream: InputStream): Request {
        var request = createRequest(inputStream)
        Logger.divider("START")
        Logger.request(request)

        val headers = request.headers

        if (request.isPost) {
            request = when(headers.contentType) {
                ContentType.JSON, ContentType.TEXT -> {
                    val len = request.headers.contentLength?.toInt()
                    val body = if (len != null) {
                        inputStream.readString(len)
                    } else {
                        inputStream.readAvailable()
                    }
                    Logger.line(body)
                    StringRequest(request, body)
                }
                ContentType.MULTI_PART -> {
                    val boundary = headers.boundary
                    val line = inputStream.readLine()
                    Logger.line(line)
                    if (line == boundary) {
                        val formDataList = ArrayList<FormData>()
                        var continueReading = true
                        var index = 0
                        while(continueReading) {
                            val formHeaders = inputStream.readHeaders()
                            Logger.headers(formHeaders)
                            val contentDisposition = formHeaders.contentDisposition
                                ?: throw Exception(
                                    "Incorrect ${Headers.ContentDisposition} -> ${formHeaders[Headers.ContentDisposition]}"
                                )
                            val fileName = contentDisposition.fileName
                            val name = contentDisposition.name.ifEmpty { index.toString() }
                            val formData: FormData = if (!fileName.isNullOrBlank()) {
                                val file = fileCreatorInterface.onCreateFile(fileName)
                                val fileFormDataInfo = fileReceiver.receiveFormData(
                                    inputStream = inputStream,
                                    file = file,
                                    length = formHeaders.contentLength,
                                    boundary = CRLF + boundary
                                )
                                continueReading = !(fileFormDataInfo.isLastFormDate)
                                Logger.line("[file=${fileFormDataInfo.length}]")
                                FormData.FileFormData(name, file)
                            } else {
                                val byteArrayOutputStream = ByteArrayOutputStream()
                                val formDataInfo = IOUtil.receiveFormData(
                                    inputStream = inputStream,
                                    outputStream = byteArrayOutputStream,
                                    boundary = CRLF + boundary,
                                )
                                val data = byteArrayOutputStream.toString()
                                continueReading = !(formDataInfo.isLastFormDate)
                                Logger.line(data)
                                FormData.StringFormData(name, data)
                            }
                            if (continueReading) {
                                Logger.line(boundary)
                            }
                            formDataList.add(formData)
                            index++
                        }
                        Logger.line("$boundary--")
                        Logger.divider("END")
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

    fun send(
        response: Response,
        outputStream: OutputStream
    ) {
        outputStream.writeCrlf(response.startLine)
        for (header in response.headers.lines()) {
            outputStream.writeCrlf(header)
        }
        outputStream.writeCrlf()
        when(response) {
            is StringResponse -> {
                outputStream.write(response.body)
            }
            is FileResponse -> {
                fileSender.send(
                    file = response.body,
                    outputStream = outputStream
                )
            }
        }
        outputStream.flush()
        outputStream.close()
    }

    fun static(
        fileMap: Map<String, IFile>,
    ) {
        for ((path, file) in fileMap) {
            if (path == "/index.html") {
                get("/") {
                    StringResponse(
                        body = """
                            <!DOCTYPE html>
                            <html>
                                <head>
                                    <meta charset="UTF-8">
                                    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'>
                                    <title>WebShare</title>
                                    <link rel="stylesheet" href="styles.css">
                                    <script defer src="bundle.js"></script>
                                </head>
                                <body class="darkTheme">
                                </body>
                            </html>
                        """.trimIndent(),
                        headers = Headers().apply {
                            set(Headers.ContentType, "text/html")
                        }
                    )

                }
            } else {
                get(path) {
                    FileResponse(
                        body = file
                    )
                }
            }
        }
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
