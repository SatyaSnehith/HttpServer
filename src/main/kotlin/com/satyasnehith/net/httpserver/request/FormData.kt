package com.satyasnehith.net.httpserver.request

import com.satyasnehith.net.httpserver.file.IFile

sealed class FormData(
    val name: String
) {
    class StringFormData(name: String, val body: String): FormData(name) {
        override fun toString(): String {
            return super.toString() + ": " + body
        }
    }

    class FileFormData(name: String, val body: IFile): FormData(name) {
        override fun toString(): String {
            return super.toString() + ": " + body
        }
    }

    override fun toString(): String {
        return name
    }
}