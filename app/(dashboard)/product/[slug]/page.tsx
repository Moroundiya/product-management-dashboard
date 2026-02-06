"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { setProducts } from "@/app/redux/ProductSlice";
import { fetchAllProducts } from "@/app/libs/fetchAllProducts";
import { DeleteProduct } from "@/app/layouts/Modals/DeleteProduct";
import { EditProduct } from "@/app/layouts/Modals/EditProduct";

export default function Page() {
	const { slug } = useParams();
	const dispatch = useDispatch();
	const products = useSelector((state: any) => state.products.list);
	const singleProduct = products?.find((item: any) => item.id === Number(slug));
	const [loading, setLoading] = useState<boolean>(true);
	const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
	const [openEditModal, setOpenEditModal] = useState<boolean>(false);

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
		<>
			<DeleteProduct
				openDeleteModal={openDeleteModal}
				setOpenDeleteModal={setOpenDeleteModal}
				productTitle={singleProduct?.title}
			/>
			<EditProduct
				openEditModal={openEditModal}
				setOpenEditModal={setOpenEditModal}
				product={singleProduct}
			/>
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
							<span className={`${singleProduct?.rating ? "block" : "hidden"}`}>
								⭐⭐⭐⭐⭐
							</span>
							<span>
								{singleProduct?.rating ? singleProduct?.rating : "No review"}
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
							<div
								onClick={() => {
									setOpenEditModal(true);
								}}
								className="bg-yellow-400 text-white text-base py-1 px-3.5 rounded-sm flex items-center justify-center space-x-2 cursor-pointer">
								<Icon icon="iconamoon:edit-duotone" />
								<span>Edit</span>
							</div>
							<div
								onClick={() => setOpenDeleteModal(true)}
								className="bg-red-700 text-white text-base py-1 px-3.5 rounded-sm flex items-center justify-center space-x-2 cursor-pointer">
								<Icon icon="material-symbols:delete-outline-rounded" />
								<span>Delete</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
