import { Component } from '../interfaces';
import { CustomElement } from '../utils';
import SRestaurant from './SRestaurant/SRestaurant';
import SBasket from './SBasket/SBasket';

import styles from './app.css';

@CustomElement('app-root')
export class App extends Component {
	constructor() {
		super();

		this._template = document.createElement('template');
	}
	_render() {
		this._template.innerHTML = `
			<header class="app-header">
				<h2 class="app-title">Challenge Sepet</h2>
			</header>
			<section class="app-section">
				<s-restaurant></s-restaurant>
				<aside class="app-aside">
					<s-basket></s-basket>
				</aside>
			</section>
			<footer class="app-footer">
				<dev-info></dev-info>
			</footer>
		`;
	}
}
