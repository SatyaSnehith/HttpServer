package com.satyasnehith.net.httpserver.response

fun badRequest(body: String): StringResponse {
    return StringResponse(
        body = body
    )
}