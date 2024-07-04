package com.satyasnehith.net.httpserver.request

import com.satyasnehith.net.httpserver.util.IOUtil
import java.io.InputStream
import java.io.OutputStream

class FileReceiver {
    fun receive(inputStream: InputStream, outputStream: OutputStream, boundary: String): FormDataInfo {
        return IOUtil.receiveFormData(inputStream, outputStream, boundary)
    }

}

class FormDataInfo(
    val length: Int,
    val isLastFormDate: Boolean
)
