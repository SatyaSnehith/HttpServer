package com.satyasnehith.httpserver.response

import com.satyasnehith.httpserver.Headers

class StringResponse(
    statusCode: Int,
    headers: Headers = Headers(),
    val body: String
): Response(
    statusCode,
    headers
) {

    override fun toString(): String {
        return super.toString() + "\n" + body
    }

}