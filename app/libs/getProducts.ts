import axios from "axios";

export default async function getProducts() {
	const productList = await axios
		.get("/api/getproducts")
        .then((res) => {
			return res.data.products; 
		})
		.catch((err) => {
			return err.message;
		});

	return productList;
}
