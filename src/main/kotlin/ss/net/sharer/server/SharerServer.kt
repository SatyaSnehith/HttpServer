package ss.net.sharer.server

import ss.net.server.Server

class SharerServer: Server(1111) {

    private val sharerRequestResponseAction = SharerRequestResponseAction()

    init {
        socketLevelActions.add(sharerRequestResponseAction)
    }

}

