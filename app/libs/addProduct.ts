import axios from "axios";

export async function addProduct(product: any) {
	const res = await axios
		.post("/api/addproduct", product)
		.then((res) => res.data)
		.catch((err) => err.message);
	return res;
}
