import {Column, Row, Text} from "../nui/components";

export default class FileComponent extends Column {
	constructor() {
		super(
			{
				styles: {
					width: '130px',
					height: '160px'
				}
			}
		);
		const icon = new Column(
			{
				styles: {
					height: '100%',
				}
			}
		)
		this.add(icon)

		const info = new Row(
			{
				styles: {
					padding: '6px 10px',
				}
			}
		)
		info.add(
			new Text(
				{
					text: "File name"
				}
			)
		)
		this.add(info)
	}
}