import { Component } from '../../interfaces/index';
import { CustomElement } from '../../utils/index';

import {
	SMenuItem
} from './';
import menuData from '../../../data/menuData';

@CustomElement('s-menu-category')
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
		case 'c-name':
			this.cName = newValue;
			break;
		case 'c-index':
			this.cIndex = newValue;
			break;
		case 'c-id':
			this.cId = newValue;
			break;
		}
	}
	static get observedAttributes() {
		return ['c-name', 'c-index', 'c-id'];
	}
	renderProducts() {
		this._categoryData = menuData[this.cIndex];
		const { Products } = this._categoryData;

		return Products.map(
			(product, index) =>
				`<s-menu-item
					p-index="${index}"
					p-name="${product.DisplayName}"
					p-price="${product.ListPrice}"
				></s-menu-item>`
		).join('');
	}
	_render() {
		const { cName } = this;

		this._template.innerHTML = `
			<div>
				<h4>${cName}</h4>
				<ul class="c-products">
					${this.renderProducts()}
				</ul>
			</div>
		`;
	}
}
