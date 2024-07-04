package com.satyasnehith.net.sharer.message

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import java.lang.IllegalArgumentException

@Serializable
open class Message(
    @SerialName("t")
    val type: String,
    @SerialName("e")
    val error: String? = null
) {
    companion object {
        fun badMessage(error: String) = Message(
            type = "bm",
            error = error
        )
    }
}

@Serializable
class ConnectRequest(
    @SerialName("p")
    val password: String = "1111",
): Message(
    type = "cr",
)

@Serializable
class ConnectResponse (
    @SerialName("s")
    val status: ConnectionStatus,
    @SerialName("r")
    val reason: DisconnectionReason? = null
): Message(
    type = "cr"
) {
    init {
        if (
            status == ConnectionStatus.NOT_CONNECTED &&
            reason == null
        ) throw IllegalArgumentException("Reason must present if not connected")
    }
}

enum class DisconnectionReason {
//    @SerialName("un")
    UNAVAILABLE,
//    @SerialName("ic")
    INCORRECT,
//    @SerialName("bl")
    BLOCKED
}

enum class ConnectionStatus {
//    @SerialName("cn")
    CONNECTED,
//    @SerialName("nc")
    NOT_CONNECTED,
}