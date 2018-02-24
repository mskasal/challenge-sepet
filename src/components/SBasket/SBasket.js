import { Component } from '../../interfaces/index';
import { CustomElement } from '../../utils/index';

const template = document.createElement('template');
template.innerHTML = `
	<div>Basket</div>		
`;

const style = `
	
`;

@CustomElement('s-basket')
export class SBasket extends Component {
	constructor() {
		super();

		this._template = template;
		this.style = style;
	}

	connectedCallback() {
		this.appendChild(this._template.content.cloneNode(true));

		this._render();
	}
	_render() {

	}
}
