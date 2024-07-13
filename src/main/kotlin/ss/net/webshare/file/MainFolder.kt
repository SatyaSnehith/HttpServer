package ss.net.webshare.file

import ss.io.file.IFolder
import ss.io.file.SFile

class MainFolder: IFolder("") {
    private val files = ArrayList<SFile>()

    override fun listFiles() = files

}