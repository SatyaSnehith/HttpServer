package com.satyasnehith.net

import com.satyasnehith.net.httpserver.HttpServer
import com.satyasnehith.net.httpserver.request.MultipartRequest
import com.satyasnehith.net.httpserver.request.StringRequest
import com.satyasnehith.net.httpserver.response.StringResponse
import com.satyasnehith.net.sharer.message.ConnectRequest
import com.satyasnehith.net.sharer.message.ConnectResponse
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

fun main(args: Array<String>) {
    println("HttpServer")
    val json = Json {
        encodeDefaults = true
        explicitNulls = false
    }
    println("ConnectRequest ${json.encodeToString(ConnectRequest())}")
    val s = json.encodeToString(ConnectResponse())
    println("ConnectResponse $s")
    println("ConnectResponse ${json. decodeFromString<ConnectResponse>(s).reason}")
    startServer()
//    testByteSearch()
}

fun startServer() {
    val server = HttpServer()

    server.addRoutes {
        get("/") {
            StringResponse(200, body = "Hello World! Get")
        }
        post("/") {
            (it as? MultipartRequest)?.let { multipart ->
                for (formData in multipart.body) {
                    println("FORM $formData")
                }
            }
            StringResponse(200, body = "Hello World! post ${(it as? StringRequest)?.body}")
        }
    }
    server.start()
}
//
//fun testByteSearch() {
//    val byteArrayList = List(10) {
//        Random.nextBytes(DEFAULT_BUFFER_SIZE)
//    }
//    val randomIndex = Random.nextInt(0, 50)
//    val first = randomIndex
//    val second = 50 - randomIndex
//    val randomListIndex = Random.nextInt(0, 8)
//    println("Boundary first $first, second $second")
//    val boundary1 = byteArrayList[randomListIndex].copyOfRange(DEFAULT_BUFFER_SIZE - first - 1, DEFAULT_BUFFER_SIZE - 1)
//    val boundary2 = byteArrayList[randomListIndex + 1].copyOfRange(0, second)
//    val boundary = boundary1 + boundary2
//    println("Boundary 1: len -> ${boundary1.size}, 2: len -> ${boundary2.size}")
//
//    for ((index, array) in byteArrayList.withIndex()) {
//        val f = indexOf(array, DEFAULT_BUFFER_SIZE, boundary)
//        println("FOUND $f at $index")
//    }
//
//}
//
//fun indexOf(array: ByteArray, count: Int, target: ByteArray): Int {
//    var found = 0
//    outer@ for (i in 0..< count) {
//        for (j in target.indices) {
//            if (array[i + j] != target[j]) {
//                found = 0
//                continue@outer
//            }
//            found++
//            if (found == target.size) return found
//        }
//        return 0
//    }
//    return 0
//}

