import { Component } from '../interfaces';
import { CustomElement } from '../utils';

const style = `
	border-bottom: 1px red solid;
	background-color: #c1c1c1;
`;

@CustomElement('main-root')
export class App extends Component {
	constructor() {
		super();

		this.build();
	}
	build() {
		this.style = style;
		this.innerText = 'Hello World!';
	}
}
