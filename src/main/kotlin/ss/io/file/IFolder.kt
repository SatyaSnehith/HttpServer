package ss.io.file

import java.io.File

abstract class IFolder(
    name: String,
): SFile(name) {
    abstract fun listFiles(): List<SFile>

    override fun length(): Long {
        return listFiles().sumOf { it.length() }
    }

    override fun toString(): String {
        return "Folder(fileName: $name)"
    }

    companion object {
        fun fromFile(file: File): IFolder {
            return object: IFolder(file.name) {
                override fun listFiles(): List<SFile> {
                    return file.listFiles()?.map { SFile.fromFile(it) } ?: listOf()
                }
            }
        }
    }
}