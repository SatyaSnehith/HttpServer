
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

const buttons = (count) => {
    const list = []
    for (let i = 0; i < count; ++i) {
        list.push(new HorizontalSpace('50px'))
        list.push(
            new IconButton(
                {
                    svgName: 'sun',
                    attrs: {
                        onclick: (event) => {
                            themePopup.show(event)
                        }
                    }
                }
            )
        )
    }
    return list

}

const buttonRow = () => {
    return new Row(
        {
            items: buttons(20)
        }
    )
}

const buttonRowList = (count) => {
    const list = []
    for (let i = 0; i < count; ++i) {
        list.push(new VerticalSpace('50px'))
        list.push(
            buttonRow()
        )
    }
    return list
}

const buttonGrid = () => {
    return new Column(
        {
            items: buttonRowList(20)
        }
    )
}

class PopupTestScreen extends Screen {

    constructor() {
        super()
        this.add(buttonGrid())
    }
}

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

mainNav.screen = new PopupTestScreen()
 