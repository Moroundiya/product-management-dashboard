"use client";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

const PaginatedList = () => {
	const [page, setPage] = useState(1);
	const itemsPerPage = 8;
	const items = useSelector((state: any) => state.products.list) || [];
	const handleChange = (event, value) => {
		setPage(value);

		window.scrollTo({
			top: 0,
			// behavior: "smooth",
		});
	};

	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const paginatedItems = items.slice(startIndex, endIndex);

	return (
		<Stack
			spacing={6}
			alignItems="center"
			justifyContent="center"
			className="pb-8">
			<div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 lg:grid-cols-4 mt-5 ">
				{paginatedItems?.map((product) => (
					<ProductCard
						product={product}
						key={product.id}
					/>
				))}
			</div>
			<div className="w-full mx-auto flex justify-center items-center">
				<Pagination
					count={Math.ceil(items.length / itemsPerPage)}
					page={page}
					onChange={handleChange}
					color="success"
					className=""
				/>
			</div>
		</Stack>
	);
};

export default PaginatedList;
