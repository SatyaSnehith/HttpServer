
const homeUi = () => {
    const selectedTitle = ref('Files')
    const titles = refArray(
        Tabs.createTabItem(''),
        Tabs.createTabItem('Text'),
    )
    const col = new Column()
    const titleTabs = new Tabs(
        {
            tabItems: titles,
            selectedItem: selectedTitle
        }
    )
    col.add(titleTabs)
    return {
        el: col
    }
}

class HomeScreen extends Screen {
    constructor() {
        super()
        const ui = homeUi()
        this.add(ui.el)
        this.ui = ui
    }
}