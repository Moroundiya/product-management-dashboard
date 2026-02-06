import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const data = await request.json();
	const res = await axios
		.post("https://698534a66964f10bf252980b.mockapi.io/products", data)
		.then((res) => res.data)
		.catch((err) => err.message);
	return NextResponse.json({
		message: res,
	});
}
