package com.satyasnehith.net.httpserver.response

import com.satyasnehith.net.util.write
import com.satyasnehith.net.util.writeCrlf
import java.io.OutputStream

fun OutputStream.send(response: Response) {
    writeCrlf(response.startLine)
    for (header in response.headers.lines()) {
        writeCrlf(header)
    }
    writeCrlf()
    when(response) {
        is StringResponse -> {
            write(response.body)
        }
    }
    flush()
    close()
}
