"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Slidebar from "./Slidebar";

export default function Navbar() {
	const [search, setSearch] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);
	return (
		<nav className="bg-[#7A9E7E] py-4 px-3 text-white fixed z-30 w-full top-0 left-0 flex justify-between items-center lg:px-20">
			<Slidebar
				showSidebar={showSidebar}
				setShowSidebar={setShowSidebar}
			/>
			<Icon
				icon={`${search ? "iconoir:cancel" : "mingcute:search-line"}`}
				className="text-2xl transition-all duration-500 cursor-pointer ease-in-out"
				onClick={() => setSearch(!search)}
			/>
			<h1 className="text-2xl font-bold uppercase">Products</h1>

			<div
				className="relative cursor-pointer"
				onClick={() => setShowSidebar(true)}>
				<Icon
					icon="grommet-icons:cart"
					className="text-2xl"
				/>
			</div>
		</nav>
	);
}
