package ss.net.httpserver.file

import ss.io.file.IFile
import ss.net.httpserver.util.IOUtil
import ss.io.util.Progress
import java.io.InputStream

class FileReceiver {

    val fileProgressMap = HashMap<IFile, Progress>()

    fun receiveFormData(
        inputStream: InputStream,
        file: IFile,
        length: Long?,
        boundary: String
    ): FormDataInfo {
        val progress = Progress(
            sent = 0,
            total = length ?: -1
        )
        fileProgressMap[file] = progress
        val formData = IOUtil.receiveFormData(
            inputStream = inputStream,
            outputStream = file.outputStream(),
            boundary = boundary,
            progress = progress
        )
        fileProgressMap.remove(file)
        return formData
    }

}

class FormDataInfo(
    val length: Long,
    val isLastFormDate: Boolean
)
