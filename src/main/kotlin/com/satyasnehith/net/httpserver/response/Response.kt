package com.satyasnehith.net.httpserver.response

import com.satyasnehith.net.httpserver.Headers
import com.satyasnehith.net.httpserver.HttpServer

open class Response(
    val statusCode: Int,
    val headers: Headers = Headers()
) {

    constructor(response: Response): this(
        statusCode = response.statusCode,
        headers = response.headers
    )

    val startLine: String
        get() = "${HttpServer.VERSION} $statusCode ${StatusMessages[statusCode]}"


    override fun toString(): String {
        return startLine + '\n' + headers.toString()
    }

}