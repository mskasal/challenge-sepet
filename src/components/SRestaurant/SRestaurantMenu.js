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
	renderCategories() {
		return this._categories.map(
			(category) =>
				`<s-menu-category
						c-data='${JSON.stringify(category)}'
					></s-menu-category>`
		).join('');
	}
	_render() {
		this._template.innerHTML = `
			<div>
				<h3>Menu</h3>
				<input type="search" />
			</div>
			<div>
				${this.renderCategories()}
			</div>
		`;
	}
}
