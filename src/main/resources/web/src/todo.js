const body = document.getElementsByTagName('body')[0]

const mainNav = new Nav(body)

class Input extends Element {
    
    constructor() {
        super(
            {
                tag: 'input',
            }
        )
        this.text = ref('')
        this.attr(
            {
                onchange: (event) => {
                    this.text.value = event.target.value
                }
            }
        )
    }
}

class TodoScreen extends Screen {

    constructor() {
        super({})
        const input = new Input()
        this.textList = refArray()
        for (let i = 0; i < 10; i++) {
            this.textList.add(i)
        }
        this.add(
            new Column (
                {
                    items: [
                        new RefElementCollection(
                            {
                                tag: 'div',
                                items: this.textList,
                                toElement: (item) => {
                                    return new Row(
                                        {
                                            items: [
                                                new P(
                                                    {
                                                        text: item,
                                                        styles: {
                                                            display: 'block',
                                                        }
                                                    }
                                                ),
                                                new Button(
                                                    {
                                                        text: 'Remove',
                                                        attrs: {
                                                            onclick: () => {
                                                                this.onRemove(item)
                                                            }
                                                        }
                                                    }
                                                )
                                            ]
                                        }
                                    )
                                }
                            }
                        ),
                        new Row(
                            {
                                items: [
                                    input,
                                    new Button(
                                        {
                                            text: 'Add',
                                            attrs: {
                                                onclick: () => {
                                                    this.onAdd(input.node.value)
                                                    input.node.value = ''
                                                }
                                            }
                                        }
                                    )
                                ]
                            }
                        )
                    ]
                }
            )
        )
    }

    onAdd(value) {
        this.textList.add(value)
    }
    
    onRemove(value) {
        this.textList.remove(value)
    }
}

mainNav.setScreen(
    new TodoScreen()
)
 