package com.satyasnehith.net.httpserver

import com.satyasnehith.net.httpserver.file.IFile

fun interface FileCreatorInterface {
    fun onCreateFile(fileName: String): IFile
}