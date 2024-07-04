package com.satyasnehith.net.sharer.server

import com.satyasnehith.net.server.Server

class SharerServer: Server(1111) {

    private val sharerRequestResponseAction = SharerRequestResponseAction()

    init {
        socketLevelActions.add(sharerRequestResponseAction)
    }

}

