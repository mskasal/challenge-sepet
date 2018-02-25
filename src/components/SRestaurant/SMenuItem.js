import { Component } from '../../interfaces/index';
import { CustomElement } from '../../utils/index';

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
		const { DisplayName, ListPrice, ProductId } = this._pData;

		this._template.innerHTML = `
			<li>
				<button
					id="product-${ProductId.slice(-5)}"
					class="p-add-to-basket"
				>+</button>
				<span>${DisplayName}</span>
				<span>${ListPrice}</span>
			</li>		
		`;
	}
}
