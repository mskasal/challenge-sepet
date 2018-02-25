/**
 * Component class
 * @class
 */
export default class Component extends HTMLElement {
	_template;
	connectedCallback() {
		this._render();
		this.appendChild(this._template.content.cloneNode(true));
	}
	_render() {
		// use this for set innerHTML of your template
	}
}


