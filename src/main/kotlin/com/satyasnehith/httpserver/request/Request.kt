package com.satyasnehith.httpserver.request

import com.satyasnehith.httpserver.Headers

class Request(
    val method: String,
    val path: String,
    val version: String,
    val headers: Headers,
)
