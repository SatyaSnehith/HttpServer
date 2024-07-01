package com.satyasnehith.httpserver.request

import com.satyasnehith.httpserver.Headers

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
