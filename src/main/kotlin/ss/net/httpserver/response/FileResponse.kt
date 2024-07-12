package ss.net.httpserver.response

import ss.net.httpserver.Headers
import ss.io.file.IFile

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