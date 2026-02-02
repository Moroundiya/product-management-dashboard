// "use client";
import Image from "next/image";
import Navbar from "./layouts/Navbar";
import Filter from "./layouts/Filter";
// import { useState } from "react";

export default function Home() {
	return (
		<div className="bg-[#f5f7eb] text-white w-full min-h-dvh relative">
			<Navbar />
			<Filter />
		</div>
	);
}
