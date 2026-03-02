import { Icon } from "@iconify/react";
import React from "react";
import Skeleton from "./Skeleton";

export default function Products() {
	return (
		<div className="px-3 pb-20 lg:px-20">
			<button className="bg-[#7A9E7E] text-white text-sm font-semibold flex justify-center items-center space-x-1 w-fit px-3 py-2 rounded-sm cursor-pointer">
				<Icon
					icon="gridicons:add-outline"
					className="text-2xl"
				/>
				<span>Add New Product</span>
			</button>
			<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 lg:grid-cols-4 mt-5 ">
				<Skeleton />
			</div>
		</div>
	);
}
