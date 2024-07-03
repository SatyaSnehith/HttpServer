package com.satyasnehith.net.httpserver.file

import java.io.File
import java.io.InputStream
import java.io.OutputStream

abstract class IFile(
    val name: String,
) {

    abstract fun outputStream(): OutputStream

    abstract fun inputStream(): InputStream

    override fun toString(): String {
        return "[fileName: $name]"
    }

    companion object {
        fun fromFile(file: File): IFile {
            return object: IFile(file.name) {

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