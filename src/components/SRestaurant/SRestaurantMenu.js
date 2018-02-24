import { Component } from '../../interfaces/index';
import { CustomElement } from '../../utils/index';

import {
	SMenuCategory
} from './';
import menuData from '../../../data/menuData';

@CustomElement('s-restaurant-menu')
export class SRestaurantMenu extends Component {
	constructor() {
		super();
		this._template = document.createElement('template');
		this._categories = menuData;
	}
	connectedCallback() {
		this._render();
		this.appendChild(this._template.content.cloneNode(true));
	}
	renderCategories() {
		return this._categories.map(
			(category, index) =>
				`<s-menu-category
					c-id="${category.Oid}"
					c-index="${index}"
					c-name="${category.CategoryDisplayName}"></s-menu-category>`
		).join('');
	}
	_render() {
		this._template.innerHTML = `
			<div>
				<div>
					<h3>Menu</h3>
					<input type="search" />
				</div>
				<div>
					${this.renderCategories()}
					</div>
			</div>
		`;
	}
}
