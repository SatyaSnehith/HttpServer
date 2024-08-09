
const homeUi = () => {
    const selectedTitle = ref('Files')
    const titles = Tabs.createTabItems('Files', 'Text')
    const col = new Column()
    const titleTabs = new Tabs(
        {
            tabItems: titles,
            selectedItem: selectedTitle
        }
    )
    const s = new State()
    s.checkRef(
        selectedTitle,
        (v) => {
            s.el = new Text(
                {
                    text: v + 'dsd'
                }
            )
        }
    )

    col.add(titleTabs)
    col.add(s)
    return {
        selectedTitle: selectedTitle,
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