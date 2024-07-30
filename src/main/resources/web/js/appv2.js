const body = document.getElementsByTagName('body')[0]

const mainNav = new Nav(body)

class TodoScreen extends Screen {

    constructor() {
        super()
        this.text = ref('moon')
        this.icon = ref('moon')
        this.add(
            new Row(
                {
                    items: [
                        new SvgIcon(
                            {
                                svgName: this.icon
                            }
                        ),
                        new IconButton(
                            {
                                svgName: this.icon
                            }
                        ),
                        new Button(
                            {
                                text: this.text,
                                svgName: this.icon,
                                attrs: {
                                    onclick: () => {
                                        const value = this.icon.value == 'sun' ? 'moon' : 'sun'
                                        this.icon.value = value
                                        this.text.value = value
                                    }
                                }
                            }
                        )
                    ]
                }
            )

        )
    }
}

mainNav.setScreen(
    new TodoScreen()
)
 