const body = document.getElementsByTagName('body')[0]

const mainNav = new Nav(body)

const $ = q => document.getElementById(q)

const green = {
    color: 'green'
}

const red = {
    color: 'red'
}

function openScreen2() {
    mainNav.setScreen(new Screen2())
}

function changeTheme() {
    const classList = body.classList
    classList.toggle('darkTheme')
    classList.toggle('lightTheme')
}

function openPopup(event) {
    mainNav.setDialog(popup, event)
}

const homeTopBar = () => new Row(
    {
        id: "row",
        items: [
            new Button(
                {   
                    id: 'webShareBtn',
                    text: 'WebShare',
                    svg: SettingsIcon, 
                }
            ),
            new HorizontalSpace('auto'),
            new HorizontalSpace('4px'),
            new IconButton(
                {
                    svgName: 'settings', 
                    attrs: { onclick: openPopup }
                }
            )
        ],
        styles: {
            alignItems: 'center',
            padding: '4px'
        }
    }
)


const bottomBar = () => new Row(
    {
        items: [
            new Button(
                {
                    text: 'WebShare',
                    svg: SettingsIcon, 
                    attrs: { onclick: openScreen2 }
                }
            ),
            new IconButton(
                {
                    svgName: 'settings', 
                    attrs: { onclick: openPopup }
                }
            )
        ],
        styles: {
            alignItems: 'center',
            padding: '4px'
        }
    }
)

const screen1Content = () => new Column(
    {
        items: [
            homeTopBar(),
            new VerticalSpace('auto'),
            bottomBar(),
        ],
        styles: Style.Size('inherit')
    }
)

class Screen1 extends Screen {
    
    constructor() {
        super(
            {
                el: screen1Content(),
            }
        )
        this.webShareBtn.onClick(openScreen2)
    }
}

class Screen2 extends Screen {

    constructor() {
        super(
            {
                el: new P(
                    {
                        text: 'Dialog!',
                        attrs: { 
                            onclick: function() { 
                                console.log('d');
                                mainNav.setDialog(dialog)
                            }
                        }
                    }
                )
            }
        )
    }

}

const dialog = new Dialog(
    {
        id: 3,
        items: [
            new P(
                {
                    text: 'x',
                    styles: {
                        height: '200px',
                        display: 'block',
                    },
                    attrs: { 
                        onclick: function() {
                            mainNav.setDialog(null)
                        }
                    } 
                }
            ),
        ]
    }
    
)

const popup = new Popup(
    {
        id: 4,
        items: [
            new Button(
                {
                    text: 'abcd',
                    svg: LightThemeIcon,
                }
            ),
            new Button(
                {
                    text: 'ewqads',
                    svg: DarkThemeIcon,
                }
            ),
            new Button(
                {
                    text: 'abasdgfdcd',
                    svg: DarkThemeIcon,
                }
            ),
            new Button(
                {
                    text: 'abcadssdad',
                    svg: DarkThemeIcon,
                }
            ),
        ],
    }
)

mainNav.setScreen(
   new Screen1()
)
