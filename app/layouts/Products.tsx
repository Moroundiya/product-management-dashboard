"use client";

import { Icon } from "@iconify/react";
import Skeleton from "./Skeleton";
import getProducts from "../libs/getProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/ProductSlice";
import { PaginatedList } from "../components/Pagination";
import { AddProduct } from "./Modals/AddProduct";
import { fetchAllProducts } from "../libs/fetchAllProducts";

export default function Products({
	search,
	sort,
	openAddModal,
	setOpenAddModal,
}: {
	search: string;
	sort: string;
	openAddModal: boolean;
	setOpenAddModal: (open: boolean) => void;
}) {
	const products = useSelector((state: any) => state.products.list) || [];
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			const products = await fetchAllProducts();
			if (products) {
				dispatch(setProducts(products));
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<AddProduct
				openAddModal={openAddModal}
				setOpenAddModal={setOpenAddModal}
			/>
			<div className="w-full px-3 lg:px-20 mb-5">
				<button
					onClick={() => setOpenAddModal(true)}
					className="bg-[#7A9E7E] text-white text-sm font-semibold flex justify-center items-center space-x-1 w-fit px-3 py-2 rounded-sm cursor-pointer">
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
						<PaginatedList
							search={search}
							sort={sort}
						/>
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
