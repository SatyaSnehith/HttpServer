package com.satyasnehith.net.util

fun String.splitAndTrim(char: Char): List<String> = split(char).map { it.trim() }