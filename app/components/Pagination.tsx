"use client";
import { useState, useMemo } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { productType } from "../types/product";

export const PaginatedList = ({
	search,
	sort,
}: {
	search: string;
	sort: string;
}) => {
	const [page, setPage] = useState<number>(1);
	const itemsPerPage = 8;
	const products = useSelector((state: any) => state.products.list) || [];

	const filteredItems = useMemo(() => {
		let items = products;

		if (search) {
			items = items.filter((product: any) =>
				product.title.toLowerCase().includes(search.toLowerCase()),
			);
		}
		if (sort === "latest") {
			items = [...items].sort(
				(a, b) =>
					new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
			);
		} else if (sort === "oldest") {
			items = [...items].sort(
				(a, b) =>
					new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
			);
		} else if (sort === "name") {
			items = [...items].sort((a, b) => a.title.localeCompare(b.title));
		}

		return items;
	}, [products, search, sort]);

	const handleChange = (event: any, value: number) => {
		setPage(value);
		window.scrollTo({ top: 0 });
	};

	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const paginatedItems = filteredItems.slice(startIndex, endIndex);

	return (
		<Stack
			spacing={6}
			alignItems="center"
			justifyContent="center"
			className="pb-8">
			<div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 lg:grid-cols-4 mt-5">
				{paginatedItems.map((product: productType | any) => (
					<ProductCard
						product={product}
						key={product.id}
					/>
				))}
			</div>
			{filteredItems.length > itemsPerPage && (
				<div className="w-full mx-auto flex justify-center items-center">
					<Pagination
						count={Math.ceil(filteredItems.length / itemsPerPage)}
						page={page}
						onChange={handleChange}
						color="success"
					/>
				</div>
			)}
		</Stack>
	);
};
