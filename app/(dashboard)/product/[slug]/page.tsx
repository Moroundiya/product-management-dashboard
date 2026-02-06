"use client";

import Image from "next/image";
import productImg from "@/app/assets/images/product.jpg";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setProducts } from "@/app/redux/ProductSlice";
import getProducts from "@/app/libs/getProducts";
import { fetchAllProducts } from "@/app/libs/fetchAllProducts";
import { deleteProduct } from "@/app/libs/deleteProduct";
import axios from "axios";
export default function Page() {
	const router = useRouter();
	const { slug } = useParams();
	const dispatch = useDispatch();
	const products = useSelector((state: any) => state.products.list);
	const singleProduct = products?.find((item) => item.id === Number(slug));
	const [loading, setLoading] = useState(true);

	const handleDelete = async () => {
		// const res = await deleteProduct(slug as string);

		const res = await axios
			.delete(
				`https://698534a66964f10bf252980b.mockapi.io/products/${String(slug)}`,
			)
			.then((res) => res.data)
			.catch((err) => err.message);

		if (res) {
			console.log("res is", res);
			const updatedProducts = await getProducts();
			dispatch(setProducts(updatedProducts));
			alert("Product Deleted");
			router.push("/");
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const products = await fetchAllProducts();
			if (products) {
				dispatch(setProducts(products));
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return (
			<div className="w-full px-3 lg:px-20 pt-26 pb-10">Loading Product...</div>
		);
	}

	if (!singleProduct) {
		return (
			<div className="w-full px-3 lg:px-20 pt-26 pb-10">Product not found.</div>
		);
	}

	return (
		<div className="w-full px-3 lg:px-20 pt-26 pb-10 bg-[#f7f7f7]">
			<h2 className="text-lg lg:text-2xl font-semibold">Product Details</h2>
			<div className="grid gap-8 lg:gap-20 lg:grid-cols-2 mt-4 w-full min-h-dvh">
				<div className="lg:w-full relative bg-[#e5ebe7c7] shadow rounded-xl h-96 lg:h-auto">
					<Image
						src={singleProduct?.image}
						alt="Product Image"
						fill
						className="object-contain"
					/>
				</div>
				<div className="flex flex-col space-y-4 text-black">
					<p className="text-2xl lg:text-4xl font-bold leading-tight">
						{singleProduct?.title}
					</p>
					<div className="flex space-x-4">
						<span>⭐⭐⭐⭐⭐</span>
						<span>
							{singleProduct?.rating ? singleProduct?.rating : "No review"}{" "}
							reviews
						</span>
					</div>
					<p className="text-2xl lg:text-3xl font-semibold mt-2">
						${singleProduct?.price}
					</p>
					<p className="mt-4">{singleProduct?.description}</p>
					<p className="flex space-x-2 text-sm items-center">
						<span className="text-gray-400">CATEGORY:</span>
						<span>{singleProduct?.category}</span>
					</p>
					<p className="flex space-x-2 items-center">
						<span className="text-gray-400">TAGS:</span>
						{singleProduct?.tags && singleProduct.tags.length > 0 ? (
							singleProduct?.tags.map((tag) => <span key={tag}>{tag}</span>)
						) : (
							<span>No tags available</span>
						)}
					</p>
					<div className="mt-2 flex items-center space-x-5">
						<div className="bg-yellow-400 text-white text-base py-1 px-3.5 rounded-sm flex items-center justify-center space-x-2 cursor-pointer">
							<Icon icon="iconamoon:edit-duotone" />
							<span>Edit</span>
						</div>
						<div
							onClick={handleDelete}
							className="bg-red-700 text-white text-base py-1 px-3.5 rounded-sm flex items-center justify-center space-x-2 cursor-pointer">
							<Icon icon="material-symbols:delete-outline-rounded" />
							<span>Delete</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
