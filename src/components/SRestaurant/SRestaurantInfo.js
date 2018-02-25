import { Component } from '../../interfaces';
import { CustomElement } from '../../utils';

import restaurantData from '../../../data/restoranData';

@CustomElement('s-restaurant-info')
export class SRestaurantInfo extends Component {
	constructor() {
		super();
		this._template = document.createElement('template');
		this._info = restaurantData;
	}
	_render() {
		const {
			Serving,
			Flavour,
			Speed,
			DisplayName,
			RestaurantCuisines,
			PaymentMethods,
			IsOpen
		} = this._info;

		const status = (IsOpen)
			? '<span class="green">Open</span>'
			: '<span class="red">Closed</span>';

		this._template.innerHTML = `
			<div class="restaurant-info">
				<div class="r-header">
					<h3 class="r-title">${DisplayName}</h3>
					<div class="r-points">
						<span class="p-serving">Serving ${Serving}</span>
						<span class="p-speed">Speed ${Speed}</span>
						<span class="p-flavor">Flavour ${Flavour}</span>
					</div>
				</div>
				
				<div class="info">
						<div class="i-types">
							${RestaurantCuisines.map((item) => ` ${item.Name}`)}
						</div>
						<div class="i-payment-methods">
							${PaymentMethods.slice(0,3).map((item) => ` ${item.PaymentMethodName}`)}
						</div>
						<div class="i-availability">
							${status}
						</div>
				</div>
			</div>
		`;
	}
}
