package ss.net.sharer

import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

val json = Json {
    encodeDefaults = true
    explicitNulls = false
}

inline fun <reified T> T.toJson(): String? {
    return try {
        json.encodeToString(this)
    } catch (e: Exception) {
        null
    }
}

inline fun <reified T> String.fromJson(jsonString: String): T? {
    return try {
        json.decodeFromString(jsonString)
    } catch (e: Exception) {
        null
    }
}

