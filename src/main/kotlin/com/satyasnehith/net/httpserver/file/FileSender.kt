package com.satyasnehith.net.httpserver.file

import com.satyasnehith.net.util.Progress
import com.satyasnehith.net.util.writeFile
import java.io.OutputStream

class FileSender {
    val fileProgressMap = HashMap<IFile, Progress>()

    fun send(
        file: IFile,
        outputStream: OutputStream,
    ) {
        val length = file.length()
        val progress = Progress(
            sent = 0,
            total = length
        )
        fileProgressMap[file] = progress

        outputStream.writeFile(
            inputStream = file.inputStream(),
            length = length,
            progress = progress
        )

        fileProgressMap.remove(file)
    }

}