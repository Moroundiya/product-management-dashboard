import Navbar from "./layouts/Navbar";
import Filter from "./layouts/Filter";
import Products from "./layouts/Products";
import { Pagination } from "@heroui/react";

export default function Home() {
	return (
		<div className="bg-[#f5f7eb] text-white w-full min-h-dvh relative">
			<Navbar />
			<Filter />
			<Products />
			<Pagination
				initialPage={1}
				total={10}
			/>
		</div>
	);
}
