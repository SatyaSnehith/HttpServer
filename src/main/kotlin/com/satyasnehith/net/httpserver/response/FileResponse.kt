package com.satyasnehith.net.httpserver.response

import com.satyasnehith.net.httpserver.Headers
import com.satyasnehith.net.httpserver.file.IFile

class FileResponse(
    statusCode: Int = 200,
    headers: Headers = Headers(),
    val body: IFile
): Response(
    statusCode,
    headers
) {

    init {
        headers[Headers.ContentLength] = body.length().toString()
        headers[Headers.ContentType] = body.mime
    }

    override fun toString(): String {
        return super.toString() + "\n" + body
    }

}