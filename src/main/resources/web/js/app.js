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
    mainNav.setScreen(screen2)
}

function changeTheme() {
    const classList = body.classList
    classList.toggle('darkTheme')
    classList.toggle('lightTheme')
}

function openPopup(event) {
    mainNav.setDialog(popup, event)
}

const screen1 = new Screen(
    {
        id: 1,
        els: [
            new Row(
                {
                    els: [
                        new Button(
                            {
                                text: 'WebShare', 
                                attrs: { onclick: openScreen2 }
                            }
                        ),
                        new HorizontalSpace('auto'),
                        new HorizontalSpace('4px'),
                        new IconButton(
                            {
                                svg: SettingsIcon, 
                                attrs: { onclick: openPopup }
                            }
                        )
                    ],
                    styles: {
                        alignItems: 'center',
                        padding: '4px'
                    }
                }
                
            ),
            // new HorizontalDivider()
        ]
    }
)

const screen2 = new Screen(
    {
        id: 2,
        els: [
            new P(
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
        ]
    }
)

const dialog = new Dialog(
    {
        id: 3,
        els: [
            new P(
                {
                    text: 'x',
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
        els: [
            new Button(
                {
                    text: 'abcd'
                }
            ),
            new Button(
                {
                    text: 'ewqads'
                }
            ),
            new Button(
                {
                    text: 'abasdgfdcd'
                }
            ),
            new Button(
                {
                    text: 'abcadssdad'
                }
            ),
        ],
    }
)

mainNav.setScreen(
   screen1
)
