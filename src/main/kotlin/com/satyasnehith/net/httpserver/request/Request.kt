package com.satyasnehith.net.httpserver.request

import com.satyasnehith.net.httpserver.Headers

open class Request(
    val method: String,
    val path: String,
    val version: String,
    val headers: Headers,
) {

    override fun toString(): String {
        return listOf(
            listOf(method, path, version).joinToString(" "),
            headers
        ).joinToString("\n")
    }

}
