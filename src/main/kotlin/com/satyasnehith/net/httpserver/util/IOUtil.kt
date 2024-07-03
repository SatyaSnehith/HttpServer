package com.satyasnehith.net.httpserver.util

import java.io.InputStream
import java.io.OutputStream

object IOUtil {

    fun receiveFormData(inputStream: InputStream, outputStream: OutputStream, boundary: String): Boolean {
        val boundaryBytes = boundary.toByteArray()
        var foundBoundaryIndex = 0
        val suspectedBoundary = ArrayList<Byte>()
        var read: Int = inputStream.read()
        var readCount = 1
        while(read >= 0) {
            val byte = read.toByte()
            readCount++
            if (byte == boundaryBytes[foundBoundaryIndex]) {
                suspectedBoundary.add(byte)
                foundBoundaryIndex++
                if (foundBoundaryIndex == boundaryBytes.size) {
                    val r1 = inputStream.read().toByte()
                    val r2 = inputStream.read().toByte()
                    return arrayOf(r1, r2).toByteArray().contentEquals("--".toByteArray()) // the last boundary will have extra "--"
                }
            } else {
                foundBoundaryIndex = 0
                outputStream.write(suspectedBoundary.toByteArray())
                suspectedBoundary.clear()
                outputStream.write(read)
            }
            read = inputStream.read()
        }
        return false
    }

}