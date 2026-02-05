"use client";
import { useState } from "react";
import Filter from "../layouts/Filter";
import Products from "../layouts/Products";

export default function Home() {
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("");
	return (
		<div className="bg-[#f5f7eb] text-white w-full min-h-dvh relative">
			<Filter
				setSearch={setSearch}
				setSort={setSort}
			/>
			<Products
				search={search}
				sort={sort}
			/>
			{/* <PaginatedList /> */}
		</div>
	);
}
