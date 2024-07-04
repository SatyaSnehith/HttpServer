package com.satyasnehith.net

import kotlinx.coroutines.*

open class Service {
    val job = SupervisorJob()
    val scope = CoroutineScope(Dispatchers.IO + job)
    var isRunning = false

    open fun start() {
        isRunning = true
    }

    open fun stop() {
        isRunning = false
        scope.cancel()
        job.cancel()
    }
}