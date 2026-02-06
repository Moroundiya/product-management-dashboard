import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Sidebar({
	showSidebar,
	setShowSidebar,
}: {
	showSidebar: boolean;
	setShowSidebar: (value: boolean) => void;
}) {
	return (
		<div
			className={`w-full h-full bg-[#000b00c9] fixed z-50 top-0 transition-all ease-in-out overflow-hidden ${
				showSidebar
					? "left-0 opacity-100 duration-[0.8s]"
					: "left-full opacity-0 delay-300 duration-1000"
			} flex justify-end`}>
			<div
				className={`w-7/12 lg:w-1/5 h-full bg-white px-5 lg:px-7 pb-5 relative transition-all ease-in-out overflow-x-hidden ${
					showSidebar
						? "left-0 opacity-100 delay-100 duration-1000"
						: "left-full opacity-0 duration-[0.8s]"
				} `}>
				<span>
					<Icon
						icon="famicons:close"
						className="absolute right-5 top-5 text-2xl cursor-pointer text-black"
						onClick={() => setShowSidebar(false)}
					/>
				</span>
				<div className="w-full h-auto mt-16 text-black text-base font-medium">
					<div className="flex flex-col space-y-5">
						<Link
							href="/"
							onClick={() => setShowSidebar(false)}>
							Dashboard
						</Link>
						<Link
							href="/profile"
							onClick={() => setShowSidebar(false)}>
							Profile
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
