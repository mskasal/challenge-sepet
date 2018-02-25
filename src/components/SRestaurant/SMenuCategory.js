import { Component } from '../../interfaces/index';
import { CustomElement } from '../../utils/index';

import {
	SMenuItem
} from './';

@CustomElement('s-menu-category')
export class SRestaurantInfo extends Component {
	constructor() {
		super();
		this._template = document.createElement('template');
	}
	attributeChangedCallback(name, oldValue, newValue) {
		switch(name) {
		case 'c-data':
			this._categoryData = JSON.parse(newValue);
			// Remove data attribute for cleaner dom
			this.removeAttribute('c-data');
			break;
		default:
			break;
		}
	}
	static get observedAttributes() {
		return ['c-data'];
	}
	renderProducts() {
		const { Products } = this._categoryData;

		// p-data='${JSON.stringify(product)}' is a problem
		// We have to use single quote(')
		return Products.reduce(
			(start, product) =>
				start + `<s-menu-item
					p-data='${JSON.stringify(product)}'
				></s-menu-item>`, ''
		);
	}
	_render() {
		if (!this._categoryData) return;
		const { CategoryDisplayName } = this._categoryData;

		this._template.innerHTML = `
			<div>
				<h4>${CategoryDisplayName}</h4>
				<ul class="c-products">
					${this.renderProducts()}
				</ul>
			</div>
		`;
	}
}
