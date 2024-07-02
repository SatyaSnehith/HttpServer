package com.satyasnehith.httpserver.response

import com.satyasnehith.httpserver.HttpServer
import java.io.OutputStream

fun Response.send(outputStream: OutputStream) {
    outputStream.write(startLine.toByteArray())
    for (header in headers) {
        outputStream.write((header.key + ": " + header.value + HttpServer.CRLF).toByteArray())
    }
    outputStream.write(HttpServer.CRLF.toByteArray())
    when(this) {
        is StringResponse -> {
            outputStream.write(body.toByteArray())
            outputStream.write(HttpServer.CRLF.toByteArray())
        }
    }
    outputStream.flush()
    outputStream.close()
}
