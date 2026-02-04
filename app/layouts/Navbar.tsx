"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Slidebar from "./Slidebar";
import Link from "next/link";

export default function Navbar() {
	const [showSidebar, setShowSidebar] = useState(false);
	return (
		<nav className="bg-[#6B8F71] py-3 px-3 text-white fixed z-50 w-full top-0 left-0 flex justify-between items-center lg:px-20">
			<Slidebar
				showSidebar={showSidebar}
				setShowSidebar={setShowSidebar}
			/>
			<Link
				href="/"
				className="text-xl lg:text-2xl font-bold capitalize">
				dashboard
			</Link>
			<div
				className="relative cursor-pointer"
				onClick={() => setShowSidebar(true)}>
				<Icon
					icon="eva:menu-outline"
					className="text-3xl lg:text-4xl"
				/>
			</div>
		</nav>
	);
}
