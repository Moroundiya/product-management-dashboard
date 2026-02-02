"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Slidebar from "./Slidebar";
import Search from "../components/Search";

export default function Navbar() {
	const [search, setSearch] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);
	return (
		<div className="w-full h-auto relative">
			<nav className="bg-[#7A9E7E] py-3 px-3 text-white fixed z-50 w-full top-0 left-0 flex justify-between items-center lg:px-10">
				<Slidebar
					showSidebar={showSidebar}
					setShowSidebar={setShowSidebar}
				/>

				{/* <Icon
					icon={`${search ? "iconoir:cancel" : "mingcute:search-line"}`}
					className="text-2xl transition-all duration-500 cursor-pointer ease-in-out"
					onClick={() => setSearch(!search)}
				/> */}
				<h1 className="text-xl lg:text-2xl font-bold capitalize">dashboard</h1>

				<div
					className="relative cursor-pointer"
					onClick={() => setShowSidebar(true)}>
					<Icon
						icon="eva:menu-outline"
						className="text-3xl lg:text-4xl"
					/>
				</div>
			</nav>
			<Search search={search} />
		</div>
	);
}
