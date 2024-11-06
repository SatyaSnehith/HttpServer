import {Column} from "../nui/components";
import FileComponent from "./fileComponent";

const filesUi = (props) => {

}

export default class FilesTab extends Column {
	constructor(props) {
		super(props);
		this.add(new FileComponent())
	}
}

class ViewModel {
	constructor() {

	}
}