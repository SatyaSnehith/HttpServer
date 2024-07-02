package com.satyasnehith.net.httpserver.response

import com.satyasnehith.net.util.write
import com.satyasnehith.net.util.writeCrlf
import java.io.OutputStream

fun Response.send(outputStream: OutputStream) {
    outputStream.writeCrlf(startLine)
    for (header in headers.lines()) {
        outputStream.writeCrlf(header)
    }
    outputStream.writeCrlf()
    when(this) {
        is StringResponse -> {
            outputStream.write(body)
        }
    }
    outputStream.flush()
    outputStream.close()
}
