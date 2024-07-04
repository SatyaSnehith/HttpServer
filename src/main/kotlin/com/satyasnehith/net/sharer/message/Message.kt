package com.satyasnehith.net.sharer.message

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
open class Message(
    @SerialName("t")
    val type: String,
    @SerialName("e")
    val error: String? = null,
)

@Serializable
class ConnectRequest(
    @SerialName("p")
    val password: String = "1111",
    val s: String = "1111",
): Message(
    type = "cr",
)

@Serializable
class ConnectResponse (
    @SerialName("r")
    val reason: DisconnectionReason? = null
): Message(
    type = "cr"
)

enum class DisconnectionReason {
    UNAVAILABLE,
    INCORRECT,
    BLOCKED
}