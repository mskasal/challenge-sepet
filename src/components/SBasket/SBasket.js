/* globals Map*/
import { Component } from '../../interfaces/index';
import { CustomElement } from '../../utils/index';

import SBasketItem from './SBasketItem';

@CustomElement('s-basket')
export class SBasket extends Component {
	constructor() {
		super();

		this._template = document.createElement('template');
		this._itemList = new Map();
	}
	connectedCallback() {
		this._render();
		this.appendChild(this._template.content.cloneNode(true));
		this.$itemList = this.querySelector('.sb-item-list');
		this.$itemsTotalPrice = this.querySelector('.sb-basket-total');
		document.addEventListener('onAdd', (event) => this.addItem(event.detail));
		document.addEventListener('onRemove', (event) => this.removeItem(event.detail));
		document.addEventListener('onCountChange', (event) => this.changeCountOfItem(event.detail));
	}
	addItem(item) {
		if (this._itemList.has(item.ProductId)) {
			const currentCount = this._itemList.get(item.ProductId).count;
			this._itemList.set(item.ProductId, { count: currentCount+1, data: item })
		} else {
			this._itemList.set(item.ProductId, { count: 1, data: item });
		}

		// TODO: this is broken, I should able to call _render only
		this.$itemList.innerHTML = this.renderItemList();
		this.$itemsTotalPrice.innerText = this.calculateTotal();
		// this should work instead above
		// this._render();
	}
	removeItem(item) {
		this._itemList.delete(item.data.ProductId);

		this.$itemList.innerHTML = this.renderItemList();
		this.$itemsTotalPrice.innerText = this.calculateTotal();
	}
	changeCountOfItem(item) {
		const currentItem = this._itemList.get(item.data.ProductId);
		// use parseInt just be sure it  will be int
		currentItem.count = parseInt(item.count);

		this.$itemList.innerHTML = this.renderItemList();
		this.$itemsTotalPrice.innerText = this.calculateTotal();
	}
	renderItemList() {
		const { _itemList } = this;
		let itemListStr = '';

		_itemList.forEach(
			(item) =>
				itemListStr = itemListStr +
					`<s-basket-item sb-data='${JSON.stringify(item)}'></s-basket-item>`);

		return itemListStr;
	}
	calculateTotal() {
		const { _itemList } = this;
		let total = 0.00;

		_itemList.forEach(
			(item) => {
				total = total + (item.count * parseFloat(item.data.ListPrice.replace(',','.')));
			});
		return total;
	}
	_render() {
		this._template.innerHTML = `
			<div class="s-basket">
				<h5>Basket</h5>
				<div class="sb-basket-items">
					<ul class="sb-item-list">
						${this.renderItemList()}
					</ul>
				</div>
				<div class="sb-basket-total">
					${this.calculateTotal()}
				</div>
				<div class="sb-basket-submit">
					<button>Buy</button>
				</div>
			</div>
		`;
	}
}
