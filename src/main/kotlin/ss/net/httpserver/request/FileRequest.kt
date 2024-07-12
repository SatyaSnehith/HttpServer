package ss.net.httpserver.request

import ss.net.httpserver.Headers
import ss.io.file.IFile

class FileRequest(
    method: String,
    path: String,
    version: String,
    headers: Headers,
    vararg val body: IFile
): Request(
    method,
    path,
    version,
    headers,
) {

    constructor(request: Request, vararg body: IFile):
            this(
                method = request.method,
                path = request.path,
                version = request.version,
                headers = request.headers,
                body = body
            )

    override fun toString(): String {
        return super.toString() + "\n" + body.joinToString("\n")
    }

}