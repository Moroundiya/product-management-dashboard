import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
	const products = await axios
		.get("https://698534a66964f10bf252980b.mockapi.io/products")
		.then((res) => res.data)
		.catch((err) => err.message);
	return NextResponse.json({ products });
}
