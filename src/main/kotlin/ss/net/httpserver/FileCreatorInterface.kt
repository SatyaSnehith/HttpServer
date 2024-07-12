package ss.net.httpserver

import ss.io.file.IFile

fun interface FileCreatorInterface {
    fun onCreateFile(fileName: String): IFile
}