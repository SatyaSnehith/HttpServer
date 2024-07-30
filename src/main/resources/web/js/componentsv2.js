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
        for(const e of props.items) {
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
        for(const e of props.items) {
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
                styles: props.styles,
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
        const svg = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>'
        this.node = fromHTML(svg)
        this.content(
            {
                styles: props.styles,
            }
        )
        this.attr(props.attrs)
        this.checkRef(
            props.svgName,
            (value) => {
                Icon.set(value, this)
            }
        )
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
                ...Style.Size(this.size)
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
                size: '16px'
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

class Route extends Element {

    /**
     * 
     * @param { { id, styles } } props 
     */
    constructor(props) {
        super(
            {
                tag: 'div', 
                styles: {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }
            }
        )
        if (props) {
            this._id = props.id || 'route'

            if (props.styles) {
                this.style(props.styles)
            }
    
            this.add(props.el)   
        }
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
     * @param { { id, el, styles } } props 
     */
    constructor(props) {
        super(
            {
                id: 'screen', 
                styles: {
                    backgroundColor: Color.BgColor,
                }
            }
        )
        
    }
}

class Nav {

    constructor(el) {
        this.screen = null
        this.dialog = null
        this.body = el
    }

    /**
     * 
     * @param {Screen} newScreen 
     */
    setScreen(newScreen) {
        if (!(newScreen instanceof Screen)) return
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
