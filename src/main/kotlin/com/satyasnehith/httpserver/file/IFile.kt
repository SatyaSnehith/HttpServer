package com.satyasnehith.httpserver.file

import java.io.File
import java.io.OutputStream

abstract class IFile(
    val name: String,
) {

    abstract fun out(): OutputStream

    companion object {
        fun fromFile(file: File): IFile {
            return object: IFile(file.name) {

                override fun out(): OutputStream {
                    return file.outputStream()
                }

            }
        }
    }

}