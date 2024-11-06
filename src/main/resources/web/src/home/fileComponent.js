import {Column, IconButton, Row, Text} from "../nui/components";
import {Color, Style} from "../nui/style";

export default class FileComponent extends Column {
	constructor() {
		super(
			{
				styles: {
					width: '130px',
					height: '160px',
					backgroundColor: Color.FileColor,
					borderRadius: '8px',
					...Style.Pointer
				}
			}
		);

		const preview = new Column(
			{
				styles: {
					height: '100%',
					padding: '6px',
				}
			}
		)

		const icon = new Column(
			{
				styles: {
					backgroundColor: Color.FileInnerColor,
					borderRadius: '4px',
					height: '100%',
					width: '100%',
				}
			}
		)
		preview.add(icon)

		this.add(preview)

		const info = new Row(
			{
				styles: {
				}
			}
		)
		info.add(
			new Text(
				{
					text: "File name",
					styles: {
						width: '100%',
						padding: '6px 10px',
						alignContent: 'center',

					}
				}
			)
		)
		info.add(
			new IconButton(
				{
					svgName: 'moreVertical'
				}
			)
		)
		this.hoverStyle(
			{
				backgroundColor: Color.FileColor,
			},
			{
				backgroundColor: Color.HoveredFileColor
			}
		)
		this.add(info)
	}
}