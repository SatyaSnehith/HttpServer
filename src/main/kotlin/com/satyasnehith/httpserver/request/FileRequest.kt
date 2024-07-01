package com.satyasnehith.httpserver.request

import com.satyasnehith.httpserver.Headers
import com.satyasnehith.httpserver.file.IFile

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
    override fun toString(): String {
        return super.toString() + "\n" + body
    }

}