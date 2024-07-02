package com.satyasnehith.net.httpserver.request

import com.satyasnehith.net.httpserver.Headers
import com.satyasnehith.net.util.readLine
import java.io.InputStream


fun createRequest(inputStream: InputStream): Request {
    val rLine = inputStream.readLine()
    val method: String
    val path: String
    val version: String
    val tokens = rLine.split(' ').toTypedArray()
    if (tokens.size == 3) {
        method = tokens[0]
        path = tokens[1]
        version = tokens[2]
    } else {
        throw Exception(rLine)
    }

    val headers = inputStream.readHeaders()

    return Request(
        method = method,
        path = path,
        version = version,
        headers = headers
    )
}


fun InputStream.readHeaders(): Headers {
    val headers = Headers()

    while (true) {
        val line = readLine()
        if (line.isEmpty()) break
        headers.add(line)
    }
    return headers
}