class Row extends ElementCollection {
    
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
        this.style(
            {
                display: 'flex',
                flexDirection: 'row'
            }
        )
        for(const e of props.items) {
            this.add(e)
        }
    }

}


class Column extends ElementCollection {
    
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
        this.style(
            {
                display: 'flex',
                flexDirection: 'column'
            }
        )
        for(const e of props.items) {
            this.add(e)
        }
    }

}

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

class P extends Element {

    /**
     * 
     * @param { { text, styles, attrs } } props 
     */
    constructor(props) {
        super(
            {
                tag: 'a',
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

class A extends Element {

    /**
     * 
     * @param { { text, href, styles, attrs } } props 
     */
    constructor(props) {
        super(
            {
                tag: 'a',
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
        this.content(props.text)
        if (props.href) {
            this.href(props.href)
        }
    }

    href(ref) {
        this.node.href = ref
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
        const svg = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>'
        this.node = fromHTML(svg)
        this.content(
            {
                styles: props.styles,
            }
        )
        this.attr(props.attrs)
        Icon.set(props.svgName, this)
    }

    content(props) {
        if (props.svg) {
            super.content(props.svg)
        }
        this.style(props.styles)
        this.style(
            {
                verticalAlign: 'top',
                pointerEvents: 'none'
            },
            Style.Size(this.size)
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
                borderRadius: '6px'
            }
        )
        this.svg = new SvgIcon(
            {
                svgName: props.svgName,
                size: '16px'
            }
        )
        this.add(this.svg)
        this.hoverStyle(Style.EmptyBg, Style.CardBg)
    }

    svgStyle(...styles) {
        this.svg.style(styles)
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
                tag: 'a',
                ...props
            }
        )
        this.style(
            {
                margin: '0px',
                color: Color.TextColor,
            }
        )
        this.hoverStyle(Style.EmptyBg, Style.CardBg)
        this.style(
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
                new HorizontalSpace('4px')
            )
        }
        this.add(
            new A(
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

class Screen extends ElementCollection {

    /**
     * 
     * @param { { id, el, styles } } props 
     */
    constructor(props) {
        super(
            {
                tag: 'div', 
                styles: {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    backgroundColor: Color.BgColor,
                }
            }
        )

        this.id = createTagName(props.id || 'screen')

        if (props.styles) {
            this.style(props.styles)
        }

        this.add(props.el)        
    }

    onmount() {
        console.log('onmount ' + this.id);
    }

    onunmount() {
        console.log('onunmount ' + this.id);
    }
}

class Popup extends Element {

    /**
     * 
     * @param { { id, items } } props 
     */
    constructor(props) {
        super(
            {
                tag: 'div', 
                styles: {
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                },
                attrs: {
                    onclick: (e) => {
                        if(e.target == this.node) {
                            mainNav.setDialog(null)
                        }
                    }
                }
            }
        )

        this.dialogElement = new Element(
            {
                tag: 'div',
                styles: {
                    width: 'auto',
                    padding: '4px',
                    backgroundColor: Color.BgColor,
                    position: 'absolute',
                    borderRadius: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    ...Style.Border
                },
            }

        )

        this.add(this.dialogElement)

        for(const e of props.items) {
            this.dialogElement.add(e)
        }

    }

    pos(event) {
        const targetRect = event.target.getBoundingClientRect()

        this.clientX = targetRect.left
        this.clientY = targetRect.bottom

        const absX = this.clientX + window.scrollX;
        const absY = this.clientY + window.scrollY;

        const nodeRect = this.node.getBoundingClientRect();
        const dialogNodeRect = this.dialogElement.node.getBoundingClientRect();
        
        const maxX = nodeRect.width - dialogNodeRect.width - 10;
        const maxY = nodeRect.height - dialogNodeRect.height - 10;
        
        let x = Math.max(0, Math.min(absX, maxX));
        let y = Math.max(0, Math.min(absY, maxY));
        
        if (x < 10) x = 10
        if (y < 10) y = 10
        this.dialogElement.style({
            left: x + "px",
            top: y + "px"
        })
    }

    onmount() {
        console.log('onmount ' + this.id);
    }

    onunmount() {
        console.log('onunmount ' + this.id);
    }
}

class Dialog extends Element {

    /**
     * 
     * @param { { id, items } } props
     */
    constructor(props) {
        super( 
            {
                tag: 'div', 
                styles: {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                },
                attrs: {
                    onclick: (e) => {
                        if(e.target == this.node) {
                            mainNav.setDialog(null)
                            return false
                        }
                    }
                }
            }

        )

        this.style(
            {
                backgroundColor: '#55555555'
            }
        )
        this.dialogNode = new Element(
            {
                tag: 'div',
                styles: {
                    width: '300px',
                    padding: '16px',
                    backgroundColor: Color.BgColor,
                    margin: 'auto'
                },
            }
        )
        this.add(this.dialogNode)
        for(const e of props.items) {
            this.dialogNode.add(e)
        }
    }

    onmount() {
        console.log('onmount ' + this.id);
    }

    onunmount() {
        console.log('onunmount ' + this.id);
    }
}

class Nav {

    constructor(el) {
        this.screen = null
        this.dialog = null
        this.body = el
    }

    setScreen(newScreen) {
        if (this.screen) {
            this.screen.onunmount()
            this.screen.node.replaceWith(newScreen.node)
        } else {
            this.body.appendChild(newScreen.node)
        }
        this.screen = newScreen
        this.screen.onmount()
    }
    
    setDialog(dialog, event) {
        if (dialog) {
            this.body.appendChild(dialog.node)
            dialog.onmount()
        } else {
            this.body.removeChild(this.dialog.node)
        }
        if (this.dialog) {
            this.dialog.onunmount()
        }
        if (event) {
            dialog.pos(event)
        }
        this.dialog = dialog
    }
}
