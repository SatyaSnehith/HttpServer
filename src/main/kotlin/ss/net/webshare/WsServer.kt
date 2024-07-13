package ss.net.webshare

import ss.net.httpserver.HttpServer
import ss.net.webshare.file.MainFolder
import ss.net.webshare.user.UserManager

class WsServer: HttpServer() {
    val mainFolder = MainFolder()
    val userManager = UserManager()


}