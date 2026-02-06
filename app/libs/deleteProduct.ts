import axios from "axios";

export async function deleteProduct(id: string) {
	const res = await axios
		.delete(`/api/deleteproduct/${id}`)
		.then((res) => res.data)
		.catch((err) => err.message);
	return res;
}
