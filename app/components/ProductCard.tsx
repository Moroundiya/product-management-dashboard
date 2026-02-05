import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({
	product: { id, images, price, title, category, availabilityStatus },
}: {
	product: {
		id: number;
		images: string[];
		price: number;
		title: string;
		category: string;
		availabilityStatus: string;
	};
}) => {
	return (
		<div className="bg-white rounded-[20px] shadow-lg p-1.5 lg:p-2 flex justify-center items-center flex-col cursor-pointer">
			<div
				className={`w-full bg-[#F7F7F7] h-1/2 rounded-[20px] flex justify-center items-center cursor-pointer group relative overflow-hidden`}>
				<p
					className={`${
						availabilityStatus === "In Stock" ? "bg-[#7A9E7E]" : "bg-red-500"
					} text-white px-2.5 lg:px-3 rounded-md py-0.5 text-[10px] lg:text-[12px] absolute top-3 left-3 z-40`}>
					{availabilityStatus}
				</p>
				<div className="relative w-3/4 lg:w-full h-80 lg:h-60">
					<Image
						src={images[0]}
						fill
						className={`pointer-events-none transition-all object-contain ease-in-out duration-700 group-hover:scale-110`}
						alt="Product-image"
					/>
				</div>
			</div>
			<div className="flex flex-col h-1/2 justify-center items-center space-y-3 lg:space-y-0">
				<p className="text-[#54595F] text-[14px] lg:text-sm lg:text-md mt-3 mb-1 lg:mb-2 capitalize">
					{category}
				</p>
				<p className="font-semibold uppercase text-xl px-3 md:text-[1.05rem] lg:text-xl text-center mx-auto w-full text-black">
					{title}
				</p>
				<p className="text-[#54595F] lg:my-2 text-xl">${price}</p>
				<Link
					href={`/product/${id}`}
					className={`md:text-[0.7rem] lg:text-[0.85rem] bg-[#6a8d6a] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4  text-white px-3 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white transition-all duration-500 hover:bg-[#7A9E7E]`}>
					<Icon
						icon="carbon:view-filled"
						className="text-xl lg:text-2xl"
					/>
					<span className="me-1 lg:me-2 ps-1">View product</span>
				</Link>
			</div>
		</div>
	);
};
