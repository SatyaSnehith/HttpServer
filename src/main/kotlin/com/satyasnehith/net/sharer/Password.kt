package com.satyasnehith.net.sharer

sealed class Password {
    class TypeNumber(val value: Int): Password() {
        override fun equals(other: Any?): Boolean {
            if (other is String) {
                return value == other.toIntOrNull()
            }
            if (other is Number) {
                return value == other.toInt()
            }
            return false
        }

        override fun hashCode(): Int {
            return value
        }
    }

    class TypeString(val value: String): Password()
}