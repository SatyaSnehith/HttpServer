
class ThemePopup extends MenuPopup {
    constructor() {
        super(
            {
                items: [
                    new Button(
                        {
                            text: 'light',
                            svgName: 'sun'
                        }
                    ),
                    new Button(
                        {
                            text: 'dark',
                            svgName: 'moon'
                        }
                    ),
                ]
            }
        )
    }
}
const themePopup = new ThemePopup()

class TodoScreen extends Screen {

    constructor() {
        super()
        this.text = ref('moon')
        this.icon = ref('moon')
        this.add(
            new VerticalSpace('100px'),
        )
        this.add(
            new Row(
                {
                    items: [
                        new SvgIcon(
                            {
                                svgName: this.icon
                            }
                        ),
                        new HorizontalSpace('100px'),
                        new IconButton(
                            {
                                svgName: this.icon,
                                attrs: {
                                    onclick: (event) => {
                                        themePopup.show(event)
                                    }
                                }
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

mainNav.screen = new TodoScreen()
 