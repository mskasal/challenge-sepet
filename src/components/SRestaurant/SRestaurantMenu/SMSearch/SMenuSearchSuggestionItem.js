/* globals Map */
import { Component } from '../../../../interfaces';
import { CustomElement } from '../../../../utils';

@CustomElement('sms-suggestion-item')
export class SMenuSearch extends Component {
	constructor() {
		super();
		this._template = document.createElement('template');
	}
	connectedCallback() {
		this._render();
		this.appendChild(this._template.content.cloneNode(true));

		const data = this._smsIData;
		this.addEventListener('click', (event) => {
			event.preventDefault();

			this.suggestionClickHandler(data);
		});
	}
	suggestionClickHandler(data) {
		// Check if it is a product or category
		let event;
		event = new CustomEvent('onSuggestionClicked', { detail: { ...data } });
		document.dispatchEvent(event);
	}
	attributeChangedCallback(name, oldValue, newValue) {
		switch(name) {
		case 'sms-i-data':
			this._smsIData = JSON.parse(newValue);
			// remove data attribute for cleaner dom
			this.removeAttribute('sms-i-data');
			break;
		default:
			break;
		}
	}
	static get observedAttributes() {
		return ['sms-i-data'];
	}
	_render() {
		const { name } = this._smsIData;
		this._template.innerHTML = `
			<li class="sms-item">${ name}</li>				
		`;
	}
}
