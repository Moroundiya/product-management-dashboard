import getProducts from "./getProducts";

export const fetchAllProducts = async () => {
	const allProducts = await getProducts();
	if (allProducts && allProducts.length > 0) {
		const modifiedProducts = allProducts.map((item) => ({
			id: Number(item.id),
			title: item.title,
			description: item.description,
			price: Number(item.price),
			category: item.category,
			image: item.image,
			availability: item.availability,
			rating: item.rating,
			createdAt: item.createdAt || new Date().toISOString(),
		}));
		return modifiedProducts;
	} else {
		return "No products found.";
	}
};
