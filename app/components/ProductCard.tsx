import Image from "next/image";
import { useState } from "react";

export const ProductCard = ({
	image,
	price,
	title,
	category,
	availabilityStatus,
	product,
}: {
	image: string;
	price: number;
	title: string;
	category: string;
	availabilityStatus: string;
	product: object;
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
				<Image
					src={image}
					onLoad={() => setImageLoaded(true)}
					className={`w-3/4 ${
						imageLoaded ? "h-full" : "h-62.5"
					} lg:w-auto pointer-events-none transition-all ease-in-out duration-700 group-hover:scale-110`}
					alt="Product-image"
				/>
			</div>
			<div className="flex flex-col h-1/2 justify-center items-center">
				<p className="text-[#54595F] lg:text-sm lg:text-md mb-1 lg:mb-2 capitalize">
					{category}
				</p>
				<p className="font-semibold uppercase text-xl md:text-[1.05rem] lg:text-xl text-center mx-auto w-10/12 lg:w-full">
					{title}
				</p>
				<p className="text-[#54595F] lg:my-2 text-lg">${price}</p>
				{/* <p
					className={`md:text-[0.7rem] lg:text-[0.85rem] bg-[#6a8d6a] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4  text-white px-3 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white transition-all duration-500 hover:bg-[#7A9E7E]`}>
					<span className="me-1 lg:me-2 ps-1">Add to Cart</span>
					<Icon
						icon="icons8:add-shopping-cart"
						className="text-xl lg:text-3xl"
					/>
				</p> */}
			</div>
		</div>
	);
};
