/* globals Map */
import { Component } from '../../../../interfaces';
import { CustomElement, Search, Flat } from '../../../../utils';

import { SMenuSearchSuggestionItem } from './';

import menuData from '../../../../../data/menuData';

@CustomElement('s-menu-search')
export class SMenuSearch extends Component {
	constructor() {
		super();
		this._template = document.createElement('template');

		this._searchData = Flat(menuData);
		this._suggestions = [];
	}
	connectedCallback() {
		this._render();
		this.appendChild(this._template.content.cloneNode(true));

		this.$searchInput = this.querySelector('.sms-input');
		this.$searchSuggestions = this.querySelector('.sms-suggestions');

		this.$searchInput.addEventListener('change', (event) => {
			event.preventDefault();

			this.findSuggestions(event);
		});
	}
	findSuggestions(event) {
		// find and render suggestions
		const data = this._searchData;
		const keyword = event.currentTarget.value;
		this._suggestions = Search(keyword, data) || [];
		this.$searchSuggestions.innerHTML = this.renderSuggestions();
	}
	renderSuggestions() {
		const { _suggestions } = this;

		return _suggestions.reduce(
			(start, item) =>
				start + `<sms-suggestion-item sms-i-data='${JSON.stringify(item)}'></sms-suggestion-item>`, ''
		);
	}
	_render() {
		this._template.innerHTML = `
			<div class="sms-container">
				<input type="search" class="sms-input" />
				<ul class="sms-suggestions">
					${this.renderSuggestions()}
				</ul>
			</div>			
		`;
	}
}
