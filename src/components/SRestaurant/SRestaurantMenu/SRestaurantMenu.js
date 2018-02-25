import { Component } from '../../../interfaces';
import { CustomElement } from '../../../utils';

import { SMenuCategory } from './';
import { SMenuSearch } from './SMSearch';

import menuData from '../../../../data/menuData';

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

		document.addEventListener('onSuggestionClicked', (event) => this.goItem(event.detail));
	}
	goItem(data) {
		const a = this.querySelector(data.id);
		a.focus();
	}
	renderCategories() {
		return this._categories.reduce(
			(start, category) =>
				start +
				`<s-menu-category
						id="c-${category.Oid}"
						tabindex="-1"
						c-data='${JSON.stringify(category)}'
					></s-menu-category>`, ''
		);
	}
	_render() {
		this._template.innerHTML = `
			<div class="sm-search">
				<h3>Menu</h3>
				<s-menu-search />
			</div>
			<div>
				${this.renderCategories()}
			</div>
		`;
	}
}
