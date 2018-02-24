/** CustomElement curry function
 * @param name
 * @returns {Function}
 * @constructor
 */
export default function CustomElement(name)  {
	return function(target) {
		customElements.define(name, target);
	}
}
