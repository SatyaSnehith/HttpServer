package com.satyasnehith.net.httpserver.response

import com.satyasnehith.net.httpserver.Headers
import com.satyasnehith.net.httpserver.HttpServer

open class Response(
    val statusCode: Int,
    val headers: com.satyasnehith.net.httpserver.Headers = com.satyasnehith.net.httpserver.Headers()
) {

    val startLine: String
        get() = "${HttpServer.VERSION} $statusCode ${StatusMessages[statusCode]}${HttpServer.CRLF}"


    override fun toString(): String {
        return startLine
    }

}