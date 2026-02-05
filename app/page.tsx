// "use client";
import Image from "next/image";
import Navbar from "./layouts/Navbar";
import Filter from "./layouts/Filter";
import Skeleton from "./layouts/Skeleton";
// import { useState } from "react";

export default function Home() {
	return (
		<div className="bg-[#f5f7eb] text-white w-full min-h-dvh relative">
			<Navbar />
			<Filter />
			<div className="px-3 pb-20 lg:px-20">
				<button className="bg-[#7A9E7E] text-white text-sm font-semibold w-fit px-3 py-2 rounded-sm cursor-pointer">
					Add New Product
				</button>
				<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 lg:grid-cols-4 mt-5 ">
					<Skeleton />
				</div>
			</div>
		</div>
	);
}
