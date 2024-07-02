package com.satyasnehith.net.httpserver.request

import com.satyasnehith.net.httpserver.Headers
import com.satyasnehith.net.httpserver.file.IFile

class FileRequest(
    method: String,
    path: String,
    version: String,
    headers: Headers,
    val body: IFile
): Request(
    method,
    path,
    version,
    headers,
) {

    constructor(request: Request, body: IFile):
            this(
                method = request.method,
                path = request.path,
                version = request.version,
                headers = request.headers,
                body = body
            )

    override fun toString(): String {
        return super.toString() + "\n" + body
    }

}