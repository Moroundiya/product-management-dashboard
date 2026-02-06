import axios from "axios";
import { NextResponse } from "next/server";

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } },
) {
	const { id } = params;

	const res = await axios
		.delete(`https://698534a66964f10bf252980b.mockapi.io/products/${id}`)
		.then((res) => res.data)
		.catch((err) => err.message);

	return NextResponse.json({
		message: res,
	});
}
