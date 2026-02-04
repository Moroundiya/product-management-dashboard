import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";

export const ProductCard = ({
	product: { images, price, title, category, availabilityStatus },
}: {
	product: {
		images: string[];
		price: number;
		title: string;
		category: string;
		availabilityStatus: string;
	};
}) => {
	const [imageLoaded, setImageLoaded] = useState(false);
	return (
		<div className="bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer">
			<div
				className={`w-full bg-[#F7F7F7] h-1/2 rounded-[20px] flex justify-center items-center cursor-pointer group relative overflow-hidden`}>
				<p
					className={`${
						availabilityStatus === "In Stock" ? "bg-[#7A9E7E]" : "bg-red-500"
					} text-white px-2.5 lg:px-3 rounded-md py-0.5 text-[10px] lg:text-[12px] absolute top-3 left-3`}>
					{availabilityStatus}
				</p>

				<div className="relative w-3/4 lg:w-full h-80 lg:h-60">
					<Image
						src={images[0]}
						fill
						onLoad={() => setImageLoaded(true)}
						className={` pointer-events-none transition-all object-contain ease-in-out duration-700 group-hover:scale-110`}
						alt="Product-image"
					/>
				</div>
			</div>
			<div className="flex flex-col h-1/2 justify-center items-center space-y-3 lg:space-y-0">
				<p className="text-[#54595F] text-[14px] lg:text-sm lg:text-md mb-1 lg:mb-2 capitalize">
					{category}
				</p>
				<p className="font-semibold uppercase text-xl px-3 md:text-[1.05rem] lg:text-xl text-center mx-auto w-full text-black">
					{title}
				</p>
				<p className="text-[#54595F] lg:my-2 text-xl">${price}</p>

				<div className="mt-2 flex justify-between items-center space-x-4">
					<div className="bg-yellow-400 text-white text-2xl p-1 rounded-full cursor-pointer">
						<Icon icon="iconamoon:edit-duotone" />
					</div>
					<div className="bg-red-700 text-white text-2xl p-1 rounded-full cursor-pointer">
						<Icon icon="material-symbols:delete-outline-rounded" />
					</div>
				</div>
			</div>
		</div>
	);
};
