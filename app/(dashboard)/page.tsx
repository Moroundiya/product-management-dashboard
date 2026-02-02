import Filter from "../layouts/Filter";
import Products from "../layouts/Products";

export default function Home() {
	return (
		<div className="bg-[#f5f7eb] text-white w-full min-h-dvh relative">
			<Filter />
			<Products />
		</div>
	);
}
