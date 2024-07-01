package com.satyasnehith.httpserver

fun String.splitAndTrim(char: Char): List<String> = split(char).map { it.trim() }