package com.satyasnehith.net.httpserver.request

import com.satyasnehith.net.httpserver.Headers
import java.io.IOException
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

    val headers = com.satyasnehith.net.httpserver.Headers()

    while (true) {
        val line = inputStream.readLine()
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

@Throws(IOException::class)
fun InputStream.readLine(): String {
    val LF = '\n'.code
    var count = 0
    var len = 0
    var data: ByteArray? = null
    var b: Int
    while (read().also { b = it } != -1 && b != LF) {
        if (len == count) {
            count = if (count != 0) 2 * len else 128
            val expanded = ByteArray(count)
            if (data != null) System.arraycopy(data, 0, expanded, 0, len)
            data = expanded
        }
        data!![len++] = b.toByte()
    }
    return if (len > 0) String(data!!, 0, len - 1) else ""
}

@Throws(IOException::class)
fun InputStream.readAvailable(): String {
    return readString(available())
}

@Throws(IOException::class)
fun InputStream.readString(count: Int): String {
    var len = 0
    val data = ByteArray(count)
    var b: Int

    repeat(count) {
        b = read()
        data[len++] = b.toByte()
    }

    return if (len > 0) String(data, 0, len) else ""
}
