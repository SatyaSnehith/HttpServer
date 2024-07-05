package com.satyasnehith.net.httpserver.file

import java.io.File
import java.io.InputStream
import java.io.OutputStream

abstract class IFile(
    val name: String,
) {

    val mime: String = MimeType.fromName(name)
    abstract fun length(): Long

    abstract fun outputStream(): OutputStream

    abstract fun inputStream(): InputStream

    override fun toString(): String {
        return "File(fileName: $name, length: ${length()})"
    }

    companion object {
        fun fromFile(file: File): IFile {
            return object: IFile(file.name) {

                override fun length(): Long {
                    return file.length()
                }

                override fun outputStream(): OutputStream {
                    return file.outputStream()
                }

                override fun inputStream(): InputStream {
                    return file.inputStream()
                }
            }
        }
    }

}