package ss.io.file

import java.io.File

abstract class SFile(
    val name: String
) {
    abstract fun length(): Long

    companion object {
        fun fromFile(file: File): SFile {
            return if (file.isFile) IFile.fromFile(file)
            else IFolder.fromFile(file)
        }
    }
}

fun List<SFile>.foldersFirst(): List<SFile> {
    return filterIsInstance<IFolder>() + filterIsInstance<IFile>()
}

fun List<SFile>.sortByAsc(): List<SFile> {
    return sortedBy { it.name }
}
