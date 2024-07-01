package com.satyasnehith.httpserver.request

import com.satyasnehith.httpserver.Headers
import com.satyasnehith.httpserver.splitAndTrim

val Request.contentType: ContentType?
    get() {
        val contentTypeValue = headers[Headers.ContentType] ?: return null
        val parts = contentTypeValue.splitAndTrim(';')
        if (parts.isEmpty()) return null
        val mimeType = parts[0]
        return ContentType.entries.find { it.mime == mimeType }
    }

val Request.contentLength: Long?
    get() {
        return headers[Headers.ContentLength]?.toLongOrNull()
    }
