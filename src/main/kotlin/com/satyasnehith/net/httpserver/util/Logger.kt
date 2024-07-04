package com.satyasnehith.net.httpserver.util

import com.satyasnehith.net.httpserver.Headers
import com.satyasnehith.net.httpserver.request.Request

object Logger {
    val debug = true

    fun log(any: Any) {
        if (debug) {
            println(any)
        }
    }

    fun lf() {
        if (debug) {
            println()
        }
    }

    fun divider(message: String = "") {
        log("-$message" + "-".repeat(50))
    }

    fun line(string: String) {
        log(string)
    }

    fun request(request: Request) {
        log(request)
        lf()
    }

    fun headers(headers: Headers) {
        log(headers)
        lf()
    }

}