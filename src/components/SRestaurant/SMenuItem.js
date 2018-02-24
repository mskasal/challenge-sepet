import { Component } from '../../interfaces/index';
import { CustomElement } from '../../utils/index';

@CustomElement('s-menu-item')
export class SRestaurantInfo extends Component {
	constructor() {
		super();
		this._template = document.createElement('template');
	}

	connectedCallback() {
		this._render();
		this.appendChild(this._template.content.cloneNode(true));
	}
	attributeChangedCallback(name, oldValue, newValue) {
		switch(name) {
		case 'p-name':
			this.pName = newValue;
			break;
		case 'p-price':
			this.pPrice = newValue;
			break;
		case 'p-index':
			this.pIndex = newValue;
			break;
		}
	}
	static get observedAttributes() {
		return ['p-name', 'p-index', 'p-price'];
	}
	_render() {
		const { pPrice, pName } = this;
		this._template.innerHTML = `
			<li>
				<span>${pName}</span>
				<span>${pPrice}</span>
			</li>		
		`;
	}
}
