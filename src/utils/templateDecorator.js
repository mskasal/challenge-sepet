/**
 * Templater
 * @param html
 * @returns {Function}
 * @constructor
 */
export default function Template(html)  {
	console.log(html, 'html');
	const template = document.createElement('template');
	template.innerHTML = html;
	return function(target) {
		console.log(target, 'target');
		target._template = template;
	}
}

