export default function CustomElement(name)  {
	return function(target) {
		customElements.define(name, target);
	}
}
