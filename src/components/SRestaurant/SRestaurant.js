import { Component } from '../../interfaces/index';
import { CustomElement } from '../../utils/index';

import {
	SRestaurantInfo,
	SRestaurantMenu
} from './';

import styles from './restaurant.css';

@CustomElement('s-restaurant')
export class SRestaurant extends Component {
	constructor() {
		super();
		this._template = document.createElement('template');
	}

	connectedCallback() {
		this._render();
		this.appendChild(this._template.content.cloneNode(true));
	}
	_render() {
		this._template.innerHTML = `
			<s-restaurant-info></s-restaurant-info>
			<s-restaurant-menu></s-restaurant-menu>
	`;
	}
}
