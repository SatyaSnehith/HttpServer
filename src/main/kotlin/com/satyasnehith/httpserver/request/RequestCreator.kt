package com.satyasnehith.httpserver.request

import com.satyasnehith.httpserver.Headers
import java.io.InputStream

fun createRequest(inputStream: InputStream): Request {
    val reader = inputStream.bufferedReader()
    val rLine = reader.readLine()
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

    val headers = Headers()

    while (true) {
        val line = reader.readLine()
        if (line.isEmpty()) break
        headers.add(line)
    }

    return Request(
        method = method,
        path = path,
        version = version,
        headers = headers
    )
}
