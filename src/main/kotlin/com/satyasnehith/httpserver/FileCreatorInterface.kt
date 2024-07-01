package com.satyasnehith.httpserver

import com.satyasnehith.httpserver.file.IFile

fun interface FileCreatorInterface {
    fun onCreateFile(fileName: String): IFile
}