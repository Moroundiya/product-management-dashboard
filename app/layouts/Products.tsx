"use client";

import { Icon } from "@iconify/react";
import Skeleton from "./Skeleton";
import getProducts from "../libs/getProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/ProductSlice";
import { ProductCard } from "../components/ProductCard";
import PaginatedList from "../components/Pagination";

export default function Products() {
	const dispatch = useDispatch();
	const products = useSelector((state: any) => state.products.list);
	// const products = await getProducts();
	// console.log("products:", products);
	useEffect(() => {
		const fetchProducts = async () => {
			const products = await getProducts();
			if (products.products && products.products.length > 0) {
				dispatch(setProducts(products.products));
				console.log("products:", products);
			} else {
				console.log("No products found.");
			}
			return products;
			// console.log("products:", products);
		};

		fetchProducts();
	}, []);

	return (
		<>
			<div className="w-full px-3 lg:px-20 mb-5">
				<button className="bg-[#7A9E7E] text-white text-sm font-semibold flex justify-center items-center space-x-1 w-fit px-3 py-2 rounded-sm cursor-pointer">
					<Icon
						icon="gridicons:add-outline"
						className="text-2xl"
					/>
					<span>Add New Product</span>
				</button>
			</div>
			<div
				className={`${products && products.length > 0 ? "px-3 lg:px-20" : "px-3 lg:px-20"}`}>
				<>
					{products && products.length > 0 ? (
						<PaginatedList />
					) : (
						<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 lg:grid-cols-4 mt-5 ">
							<Skeleton />
						</div>
					)}
				</>
			</div>
		</>
	);
}
