import { Component } from '../../../interfaces';
import { CustomElement } from '../../../utils';

@CustomElement('s-menu-item')
export class SMenuItem extends Component {
	constructor() {
		super();
		this._template = document.createElement('template');
	}
	connectedCallback() {
		this._render();
		this.appendChild(this._template.content.cloneNode(true));

		this.$addButton = this.querySelector('.p-add-to-basket');

		const data = this._pData;
		this.$addButton.addEventListener('click', (event) => {
			event.preventDefault();
			this.addEventHandler(data);
		});
	}
	addEventHandler(data) {
		const event = new CustomEvent('onAdd', { detail: { ...data } });
		document.dispatchEvent(event);
	}
	attributeChangedCallback(name, oldValue, newValue) {
		switch(name) {
		case 'p-data':
			this._pData = JSON.parse(newValue);
			// remove data attribute for cleaner dom
			this.removeAttribute('p-data');
			break;
		default:
			break;
		}
	}
	static get observedAttributes() {
		return ['p-data'];
	}
	_render() {
		const { DisplayName, ListPrice } = this._pData;

		this._template.innerHTML = `
			<li class="p-list-item">
				<button
					class="p-add-to-basket"
				>&#43;</button>
				<span class="p-name">${DisplayName}</span>
				<span class="p-price"> - ${ListPrice}</span>
			</li>		
		`;
	}
}
