
const homeUi = (props) => {
    const topBar = new Row(
        {
            styles: {
                padding: '4px',
                alignItems: 'center',
            }
        }
    )
    const selectedTitle = ref('Files')
    const titles = Tabs.createTabItems('Files', 'Text')
    const titleTabs = new TitleTabs(
        {
            tabItems: titles,
            selectedItem: selectedTitle
        }
    )
    topBar.add(titleTabs)
    topBar.add(new HorizontalSpace('auto'))
    topBar.add(
        new IconButton(
            {
                svgName: 'refresh',
                attrs: { onclick: () => props?.onRefreshClicked?.() }
            }
        )
    )
    topBar.add(new HorizontalSpace('4px'))
    topBar.add(
        new IconButton(
            {
                svgName: 'sun',
                attrs: {
                    onclick: () => {
                        body.classList.toggle('darkTheme')
                        body.classList.toggle('lightTheme')
                    }
                }
            }
        )
    )
    topBar.add(new HorizontalSpace('4px'))
    topBar.add(
        new IconButton(
            {
                svgName: 'settings',
                attrs: { onclick: () => props?.onSettingsClicked?.() }
            }
        )
    )
    const filesCol = new Column()
    const textCol = new Column()
    const selectedFileType = ref('Admin')
    const fileTypes = Tabs.createTabItems('Admin', 'Users')
    const fileTypeTabs = new UnderlineTabs(
        {
            tabItems: fileTypes,
            selectedItem: selectedFileType
        }
    )
    filesCol.add(fileTypeTabs)
    const col = new Column()
    
    const s = new StateSet(
        {
            selectedItem: selectedTitle,
            states: {
                'Files': filesCol,
                'Text': textCol
            }
        }
    )


    col.add(topBar)
    col.add(s)
    return {
        selectedTitle: selectedTitle,
        el: col
    }
}

class HomeScreen extends Screen {
    constructor() {
        super()
        const ui = homeUi(
            {
                onSettingsClicked: () => this.onSettingsClicked()
            }
        )
        this.add(ui.el)
        this.ui = ui
    }

    onSettingsClicked() {
        console.log("settings")
        this.ui.selectedTitle.value = 'Text'
    }
}

mainNav.screen = new HomeScreen()
