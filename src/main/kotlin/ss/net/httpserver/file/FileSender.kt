package ss.net.httpserver.file

import ss.io.file.IFile
import ss.io.util.Progress
import ss.io.util.writeFile
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