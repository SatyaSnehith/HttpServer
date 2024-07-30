const body = document.getElementsByTagName('body')[0]

const mainNav = new Nav(body)

class TodoScreen extends Screen {

    constructor() {
        super()
        this.icon = ref('moon')
        this.add(
            new SvgIcon(
                {
                    svgName: this.icon
                }
            )
        )
    }
}

mainNav.setScreen(
    new TodoScreen()
)
 