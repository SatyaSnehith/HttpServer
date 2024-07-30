const Color = {
    TextColor: 'var(--text-color)',
    BgColor: 'var(--bg-color)',
    CardColor: 'var(--card-color)',
    BorderColor: 'var(--border-color)',
}

const Style = {
    CardBg: { backgroundColor: Color.CardColor },
    EmptyBg: { backgroundColor: '' },
    BorderRadius: (br) => { return { borderRadius: br } },
    Size: s => { return { height: s, width: s } },
    Pointer: { cursor: 'pointer' },
    Padding: (p) => { return { padding: p } },
    Margin: (m) => { return { margin: m } },
    TextColor: { color: Color.TextColor },
    Row: {
        display: 'flex',
        flexDirection: 'row',
    },
    Column: {
        display: 'flex',
        flexDirection: 'column',
    },
    Border: {
        borderWidth: '1px',
        borderColor: Color.BorderColor,
        borderStyle: 'solid',
    }
}

const Icon = {
    icons: {},
    strokeWidth: '1',

    set: (iconName, element) => {
        // let icon = Icon.icons[iconName]
        // console.log(icon)
        // if (icon) {
        //     Icon.setIcon(icon, element)
        //     return 
        // }
        Icon.readSvg(
            iconName,
            (svg) => {
                const i = svg
                    .replaceAll('white', 'var(--text-color)')
                    // .replaceAll('stroke-width="1.5"', `stroke-width="${Icon.strokeWidth}"`)
                    // .replace(/(?:\r\n|\r|\n)/g, '')
                // Icon.icons[iconName] = i
                Icon.setIcon(i, element)
            }
        )
    },

    setIcon: (icon, element) => {
        console.log(element);
        if (element instanceof SvgIcon) {
            element.content(
                {
                    svg: icon
                }
            )
        }
    },

    readSvg: (iconName, onRes) => {
        fetch("images/" + iconName + ".svg", { cache: 'default' })
            .then((res) => res.text())
            .then(onRes)
            .catch((e) => console.error(e));
    }
}

