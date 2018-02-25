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
		this.hideSuggestions();

		this.$searchInput.addEventListener('keyup', (event) => {
			event.preventDefault();

			this.findSuggestions(event);
		});

		document.body.addEventListener('click', () => {
			this.hideSuggestions();
		});
	}
	/**
		Showing and hiding an element not very effective
		I could create a suggestions Component and extend
		Component with show, hide methods
	*/
	showSuggestions() {
		this.$searchSuggestions.style.display = 'block';
	}
	hideSuggestions() {
		this.$searchSuggestions.style.display = 'none';
	}
	findSuggestions(event) {
		// find and render suggestions
		const data = this._searchData;
		const keyword = event.currentTarget.value;

		this._suggestions = Search(keyword, data) || [];

		if (this._suggestions.length > 0) {
			this.$searchSuggestions.innerHTML = this.renderSuggestions();
			this.showSuggestions();

		} else {
			this.hideSuggestions();
		}
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
					asd
					${this.renderSuggestions()}
				</ul>
			</div>			
		`;
	}
}
