import Image from "next/image";
import productImg from "@/app/assets/images/product.jpg";
export default function page() {
	return (
		<div className="w-full px-3 lg:px-20 pt-22 pb-10">
			<h2 className="text-lg lg:text-2xl font-semibold">Product Details</h2>
			<div className="grid gap-14 lg:gap-20 lg:grid-cols-2 mt-4 w-full min-h-dvh">
				<div className="">
					<Image
						src={productImg}
						alt="Product Image"
					/>
				</div>
				<div className="flex flex-col space-y-4 text-black">
					<p className="text-2xl lg:text-4xl font-semibold leading-tight">
						Lightweight Puffer Jacket With a Hood
					</p>
					<div className="flex space-x-4">
						<span>⭐⭐⭐⭐⭐</span>
						<span>8k+ reviews</span>
					</div>
					<p className="text-2xl lg:text-3xl font-semibold mt-2">$120.00</p>
					<p className="mt-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<p className="flex space-x-2 text-sm items-center">
						<span className="text-gray-400">CATEGORY:</span>
						<span>Casual, Men</span>
					</p>
					<p className="flex space-x-2 items-center">
						<span className="text-gray-400">TAGS:</span>
						<span>black, biker</span>
					</p>
				</div>
			</div>
		</div>
	);
}
