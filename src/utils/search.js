export default function DeepSearch(keyword, data) {
	if (!keyword) return [];
	return data.filter((item) => {
		const match = item.name.toLowerCase().match(keyword);

		if (match) {
			return item;
		}
	})
}
