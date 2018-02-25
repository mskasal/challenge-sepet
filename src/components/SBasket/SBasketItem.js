import { Component } from '../../interfaces/index';
import { CustomElement } from '../../utils/index';

@CustomElement('s-basket-item')
export class SBasketItem extends Component {
	constructor() {
		super();
		this._template = document.createElement('template');
	}
	connectedCallback() {
		this._render();
		this.appendChild(this._template.content.cloneNode(true));
		this.$removeButton = this.querySelector('.bs-remove');
		this.$countInput = this.querySelector('.sbi-count');
		// TODO: Fix binding problem with better usage of lifecycle
		const data = this._sbData;
		this.$removeButton.addEventListener('click', (event) => {
			event.preventDefault();
			this.removeEventHandler(data);
		});
		this.$countInput.addEventListener('change', (event) => {
			event.preventDefault();
			if (parseInt(event.target.value) < 0) {
				event.target.value = 0;
				return;
			}
			data.count = event.target.value;
			this.changeCountEventHandler(data);
		});
	}
	removeEventHandler(data) {
		const event = new CustomEvent('onRemove', { detail: { ...data } });
		document.dispatchEvent(event);
	}
	changeCountEventHandler(data) {
		const event = new CustomEvent('onCountChange', { detail: { ...data } });
		document.dispatchEvent(event);
	}
	attributeChangedCallback(name, oldValue, newValue) {
		switch(name) {
		case 'sb-data':
			this._sbData = JSON.parse(newValue);
			// remove data attribute for cleaner dom
			this.removeAttribute('sb-data');
			break;
		default:
			break;
		}
	}
	static get observedAttributes() {
		return ['sb-data'];
	}
	_render() {
		const { count, data: { DisplayName, ListPrice } } = this._sbData;

		this._template.innerHTML = `
			<li>
				<span>${DisplayName}</span>
				<input type="number" class="sbi-count" min="0" value="${count}"/>
				<button class="bs-remove">x</button>
				<span>${ListPrice}</span>
			</li>
		`;
	}
}
