package ss.io.util

import java.io.IOException
import java.io.InputStream
import java.io.OutputStream

const val CRLF = "\r\n"
val LF = '\n'.code

@Throws(IOException::class)
fun InputStream.readLine(): String {
    var count = 0
    var len = 0
    var data: ByteArray? = null
    var b: Int
    while (read().also { b = it } != -1 && b != LF) {
        if (len == count) {
            count = if (count != 0) 2 * len else 128
            val expanded = ByteArray(count)
            if (data != null) System.arraycopy(data, 0, expanded, 0, len)
            data = expanded
        }
        data!![len++] = b.toByte()
    }
    return if (len > 0) String(data!!, 0, len - 1) else ""
}

@Throws(IOException::class)
fun InputStream.readAvailable(): String {
    return readString(available())
}

@Throws(IOException::class)
fun InputStream.readString(count: Int): String {
    var len = 0
    val data = ByteArray(count)
    var b: Int

    repeat(count) {
        b = read()
        data[len++] = b.toByte()
    }

    return if (len > 0) String(data, 0, len) else ""
}

@Throws(IOException::class)
fun OutputStream.write(string: String) {
    write(string.toByteArray())
}

@Throws(IOException::class)
fun OutputStream.writeCrlf(string: String = "") {
    write((string + CRLF).toByteArray())
}

@Throws(IOException::class)
fun OutputStream.writeFile(
    inputStream: InputStream,
    length: Long,
    progress: Progress,
) {
    val buffer = ByteArray(DEFAULT_BUFFER_SIZE)
    var read = inputStream.read(buffer)
    var totalRead: Long = read.toLong()
    while(totalRead <= length && read > 0) {
        write(buffer, 0, read)
        read = inputStream.read(buffer)
        totalRead += read
        progress.sent = totalRead
    }
}