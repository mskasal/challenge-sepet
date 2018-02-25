//Sorry for brute force
export default function Flat(data) {
	let products = [];
	const categories = data.map((category) => {
		products = products.concat(category.Products.map((product) => {
			return { name: product.DisplayName, id: `#p-${product.ProductId.slice(-6)}`}
		}));

		return { name: category.DisplayName, id: `#c-${category.Oid}` } }
	);

	return [ ...categories, ...products]
}
