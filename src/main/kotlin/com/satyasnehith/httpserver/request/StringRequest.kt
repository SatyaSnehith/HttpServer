package com.satyasnehith.httpserver.request

import com.satyasnehith.httpserver.Headers

class StringRequest(
    method: String,
    path: String,
    version: String,
    headers: Headers,
    val body: String
): Request(
    method,
    path,
    version,
    headers,
) {
    override fun toString(): String {
        return super.toString() + "\n" + body
    }

}