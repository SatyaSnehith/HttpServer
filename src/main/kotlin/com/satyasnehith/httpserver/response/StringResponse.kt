package com.satyasnehith.httpserver.response

class StringResponse(
    statusCode: Int,
    val body: String
): Response(
    statusCode,
) {
    override fun toString(): String {
        return super.toString() + "\n" + body
    }
}