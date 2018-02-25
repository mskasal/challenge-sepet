import { Component } from '../../interfaces';
import { CustomElement } from '../../utils';

import { SRestaurantInfo } from './';
import { SRestaurantMenu } from './SRestaurantMenu'

import styles from './restaurant.css';

@CustomElement('s-restaurant')
export class SRestaurant extends Component {
	constructor() {
		super();
		this._template = document.createElement('template');
	}
	_render() {
		this._template.innerHTML = `
			<s-restaurant-info></s-restaurant-info>
			<s-restaurant-menu></s-restaurant-menu>
	`;
	}
}
