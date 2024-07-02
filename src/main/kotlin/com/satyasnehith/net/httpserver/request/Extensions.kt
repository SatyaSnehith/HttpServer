package com.satyasnehith.net.httpserver.request

import com.satyasnehith.net.util.splitAndTrim

val Request.contentType: ContentType?
    get() {
        val contentTypeValue = headers[com.satyasnehith.net.httpserver.Headers.ContentType] ?: return null
        val parts = contentTypeValue.splitAndTrim(';')
        if (parts.isEmpty()) return null
        val mimeType = parts[0]
        return ContentType.entries.find { it.mime == mimeType }
    }

val Request.contentLength: Int?
    get() {
        return headers[com.satyasnehith.net.httpserver.Headers.ContentLength]?.toIntOrNull()
    }

val Request.isPost: Boolean
    get() {
        return method == Method.POST.name
    }