package com.satyasnehith.net.httpserver.response

import com.satyasnehith.net.httpserver.Headers

class StringResponse(
    statusCode: Int = 200,
    headers: com.satyasnehith.net.httpserver.Headers = com.satyasnehith.net.httpserver.Headers(),
    val body: String
): Response(
    statusCode,
    headers
) {

    init {
        headers[com.satyasnehith.net.httpserver.Headers.ContentLength] = body.length.toString()
    }

    override fun toString(): String {
        return super.toString() + "\n" + body
    }

}