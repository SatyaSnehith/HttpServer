package com.satyasnehith.net.sharer

import kotlinx.serialization.json.Json

val json = Json {
    encodeDefaults = true
    explicitNulls = false
}