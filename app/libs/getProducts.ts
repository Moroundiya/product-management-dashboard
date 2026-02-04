import axios from "axios";

export default async function getProducts() {
	const productList = await axios
		.get("/api/products")
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.message;
		});

	return productList;
}
