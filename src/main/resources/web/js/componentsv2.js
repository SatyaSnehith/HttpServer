const body = document.body

const SizeObserver = {
    observers: [],
    mobileMaxWidth: 760,
    isMobile: body.clientWidth < this.mobileMaxWidth,
    isMobileListening: false,

    listen: function() {
        this.isMobileListening = true
        window
            .matchMedia("(max-width: " + this.mobileMaxWidth + "px)")
            .addEventListener("change", (x) => {
                this.isMobile = x.matches
                for (const observer of this.observers) {
                    observer(this.isMobile)
                }
            });
    },

    addObserver: function(observer) {
        if (!this.isMobileListening) {
            this.listen()
        }
        this.observers.push(observer)
    }
}
SizeObserver.addObserver((isMobile) => console.log("isMobile: " + isMobile))

class HorizontalSpace extends Element {
    constructor(margin) {
        super(
            {    
                tag: 'div',
                styles: { marginLeft: margin }
            }
        )
    }
}

class VerticalSpace extends Element {
    constructor(margin) {
        super(
            {
                tag: 'div', 
                styles: {
                    marginTop: margin
                }
            }
        )
    }
}

class HorizontalDivider extends Element {
    constructor() {
        super(
            {
                tag: 'div',
                styles: { 
                    height: '1px',
                    backgroundColor: Color.BorderColor
                }
            }
        )
    }
}

class Row extends Element {
    
    /**
     * 
     * @param { { id, items, styles, attrs } } props 
     */
    constructor(props) {
        super(
            { 
                tag: 'div',
                ...props
            }
        )
        this.style(Style.Row)
        for(const e of props?.items ?? []) {
            this.add(e)
        }
    }

}


class Column extends Element {
    
    /**
     * 
     * @param { { id, items, styles, attrs } } props 
     */
    constructor(props) {
        super(
            { 
                tag: 'div',
                ...props
            }
        )
        this.style(Style.Column)
        for(const e of props?.items ?? []) {
            this.add(e)
        }
    }
}

class Text extends Element {

    /**
     * 
     * @param { { text, styles, attrs } } props 
     */
    constructor(props) {
        super(
            {
                tag: 'div',
                attrs: props.attrs,
                styles: {
                    ...{
                        margin: '0px',
                        color: Color.TextColor,
                    },
                    ...props.styles,
                }
            }
        )
        this.checkRef(
            props.text,
            (value) => {
                this.content(value)
            }
        )
    }
    
}

class SvgIcon extends Element {

    /**
     * 
     * @param { { svgName, size, styles, attrs } } props 
     */
    constructor(props) {
        super()
        this.size = props.size || '18px'
        this.node = fromHTML(Icon.icons[props.svgName])
        this.style(
            {
                ...Style.Size(this.size),
                ...props.styles,
                stoke: Color.TextColor,
                ...Style.Size(this.size),
            }
        )
        this.attr(props.attrs)
        // this.checkRef(
        //     props.svgName,
        //     (value) => {
        //         this.content(
        //             {
        //                 svg: Icon.icons[value]
        //             }
        //         )
        //     }
        // )
    }

    /**
     * 
     * @param { { svg, size, styles } } props 
     */
    content(props) {
        if (props.svg) {
            super.content(props.svg)
        }
        this.style(
            {
                ...props.styles,
                verticalAlign: 'top', // svg bug
                pointerEvents: 'none',
                ...Style.Size(this.size),
                stoke: Color.TextColor,
            },
        )
    }

}

class IconButton extends Element {

    /**
     * 
     * @param { { svgName, styles, attrs } } props 
     */
    constructor(props) {
        super(
            { 
                tag: 'div',
                ...props
            }
        )
        this.style(
            {
                display: 'flex',
                padding: '8px',
                borderRadius: '6px',
                ...Style.Pointer
            }
        )
        this.svg = new SvgIcon(
            {
                svgName: props.svgName,
                size: '16px',
            }
        )
        this.add(this.svg)
        this.hoverStyle(Style.EmptyBg, Style.CardBg)
    }
}

class Button extends Element {

    /**
     * 
     * @param { { text, href, svgName, styles, attrs } } props 
     */
    constructor(props) {
        super(
            {
                tag: 'div',
                ...props
            }
        )
        this.hoverStyle(Style.EmptyBg, Style.CardBg)
        this.style(
            {
                margin: '0px',
                color: Color.TextColor,
            },
            Style.BorderRadius('4px'),
            Style.Padding('4px 8px'),
            Style.Pointer
        )
        if (props.svgName) {
            this.style(
                {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }
            )
            this.svg = new SvgIcon(
                {
                    svgName: props.svgName,
                    size: '16px'
                }
            )
            this.add(this.svg)
            this.add(
                new HorizontalSpace('8px')
            )
        }
        this.add(
            new Text(
                {
                    text: props.text,
                }
            )
        )
        if (props.href) {
            this.href(props.href)
        }
    }

    href(ref) {
        this.node.href = ref
    }
}

class Tabs extends RefElementCollection {

    /**
     * 
     * @param { { 
     * id: String, 
     * selectedItem: Ref, 
     * tabItems: RefArray, 
     * toElement: Function, 
     * styles: Object, 
     * attrs: Object 
     * } } props
     */
    constructor(props) {
        super(
            {
                tag: 'div',
                items: props.tabItems,
                toElement: (item) => {
                    const text = new Text(
                        {
                            text: item.text,
                            styles: {
                                padding: '8px',
                                ...Style.Pointer
                            },
                            attrs: {
                                onclick: () => {
                                    props.selectedItem.value = item.text
                                }
                            }
                        }
                    )
                    text.checkRef(
                        item.selected,
                        (selected) => {
                            text.style(
                                {
                                    color: selected ? Color.TextColor : Color.DescriptionColor,
                                    fontWeight: selected ? '300' : '200',
                                }
                            )
                        }
                    )
                    return text
                },
                styles: {
                    display: 'flex',
                }
            }
        )
        this.tabItems = props.tabItems
        this.checkRef(
            props.selectedItem,
            (value, oldValue) => {
                if (oldValue === value) return
                this.swapSelection(value)
                this.swapSelection(oldValue)
            }
        )
    }

    swapSelection(text) {
        if (!text) return
        const item = this.tabItems.find(
            (i) => {
                return i.text === text
            }
        )
        if (!item) return
        item.selected.value = !item.selected.value
    }

    static createTabItem(text, selected = false) {
        return {
            text: text,
            selected : ref(selected)
        }
    }

    /**
     * 
     * @param { Array<String> } textList 
     * @returns 
     */
    static createTabItems(...textList) {
        return refArray(
            ...textList.map(
                t => Tabs.createTabItem(t)
            )
        )
    }
}

class State extends Element {
    
    /**
     * 
     * @param { { id, styles, attrs } } props 
     */
    constructor(props) {
        super(
            {
                tag: 'div',
                ...props
            }
        )
        this.child = undefined
    }

    set el(el) {
        if (this.child) {
            this.child.node.replaceWith(el.node)
        } else {
            this.add(el)
        }
        this.child = el
    }

}

class Route extends Element {

    /**
     * 
     * @param { { id, el, styles, attrs } } props 
     */
    constructor(props) {
        super(
            {
                tag: 'div', 
                styles: {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                },
                attrs: props?.attrs,
            }
        )
        this._id = props?.id ?? 'route'
        this.style(props?.styles)
        this.add(props?.el)   
        this.id = createTagName(this._id || 'route')
    }

    onmount() {
        console.log('onmount ' + this.id);
    }

    onunmount() {
        console.log('onunmount ' + this.id);
    }
}

class Screen extends Route {

    /**
     * 
     * @param { { id, el, styles, attrs } } props 
     */
    constructor(props) {
        super(
            {
                id: props?.id ?? 'screen',
                el: props?.el, 
                styles: props?.styles,
                attrs: props?.attrs
            }
        
        )
        this.style(
            {
                backgroundColor: Color.BgColor,
            }
        )
        
    }
}

class Popup extends Route {

    /**
     * 
     * @param { { id, el, cancelOnClickOutside } } props 
     */
    constructor(props) {
        super(
            {
                id: 'popup',
                attrs: {
                    onclick: (e) => {
                        if(e.target == this.node && props.cancelOnClickOutside) {
                            this.dismiss()
                        }
                    }
                }
            }
        )
        this.popupContent = new Element(
            {
                tag: 'div',
                styles: {
                    backgroundColor: Color.BgColor,
                },
            }
        )
        this.add(this.popupContent)
        this.popupContent.add(props?.el)
    }

    show() {
        body.appendChild(this.node)
        this.onmount()
    }

    dismiss() {
        this.onunmount()
        body.removeChild(this.node)
    }
}

class MenuPopup extends Popup {

    /**
     * 
     * @param { { id, items } } props 
     */
    constructor(props) {
        super(
            {
                cancelOnClickOutside: true
            }
        )
        this.popupContent.style(
            {
                width: 'auto',
                padding: '4px',
                position: 'absolute',
                borderRadius: '6px',
                display: 'flex',
                flexDirection: 'column',
                ...Style.Border
            },

        )

        for(const e of props.items) {
            this.popupContent.add(e)
        }

    }

    position(event) {
        const targetRect = event.target.getBoundingClientRect()
        const nodeRect = this.node.getBoundingClientRect();
        const popupNodeRect = this.popupContent.node.getBoundingClientRect();

        let x, y
        if (targetRect.left <= nodeRect.width - popupNodeRect.width) x = targetRect.left
        else x = targetRect.right - popupNodeRect.width

        if (targetRect.bottom <= nodeRect.height - popupNodeRect.height) y = targetRect.bottom
        else y = targetRect.top - popupNodeRect.height

        this.popupContent.style({
            left: x + "px",
            top: y + "px"
        })
    }

    show(event) {
        super.show()
        this.position(event)
    }

}

class Dialog extends Popup {

    /**
     * 
     * @param { { id, items } } props
     */
    constructor(props) {
        super( 
            {
                styles:  {
                    backgroundColor: '#55555555'
                }
            }
        )
        this.popupContent.style(
            {
                width: '300px',
                padding: '16px',
                margin: 'auto'
            }
        )
        for(const e of props.items) {
            this.popupContent.add(e)
        }
    }
}


class Nav {

    constructor(el) {
        this.currentScreen = null
        this.body = el
    }

    /**
     * 
     * @param {Screen} newScreen 
     */
    set screen(newScreen) {
        if (!(newScreen instanceof Screen)) return
        if (this.currentScreen) {
            this.currentScreen.onunmount()
            this.currentScreen.node.replaceWith(newScreen.node)
        } else {
            this.body.appendChild(newScreen.node)
        }
        this.currentScreen = newScreen
        this.currentScreen.onmount()
    }

}

const mainNav = new Nav(body)
