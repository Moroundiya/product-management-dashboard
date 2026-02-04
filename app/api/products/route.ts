import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
	const products = await axios
		.get("https://dummyjson.com/products")
		.then((res) => res.data.products)
		.catch((err) => err.message);
	return NextResponse.json({ products });
}
