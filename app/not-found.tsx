import { Icon } from "@iconify/react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
			<div className="text-center max-w-md">
				<h1 className="text-7xl font-bold text-gray-900 mb-4">404</h1>

				<h2 className="text-2xl font-semibold mb-2">Page not found</h2>

				<p className="text-gray-600 mb-6">
					Sorry, the page you’re looking for doesn’t exist or was moved.
				</p>

				<Link
					href="/"
					className="w-fit flex justify-center items-center mx-auto space-x-1 px-4 py-2 text-sm rounded-lg bg-[#7A9E7E] text-white">
					<Icon icon="ion:arrow-back-outline" className="text-2xl" />
					<span>Go back home</span>
				</Link>
			</div>
		</div>
	);
}
