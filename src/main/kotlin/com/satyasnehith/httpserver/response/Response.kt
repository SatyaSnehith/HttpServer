package com.satyasnehith.httpserver.response

import com.satyasnehith.httpserver.HttpServer

open class Response(
    val statusCode: Int,
) {

    val startLine: String
        get() = "${HttpServer.VERSION} $statusCode ${StatusMessages[statusCode]} ${HttpServer.CRLF}"


    override fun toString(): String {
        return startLine
    }

}