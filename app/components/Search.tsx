export default function Search({ search }: { search: boolean }) {
	return (
		<div
			className={`bg-white border border-[#7A9E7E] -z-0 shadow-md rounded-md w-11/12 mx-auto lg:w-75 py-2 lg:py-1.5 px-2.5 absolute left-3 lg:left-16 ${
				search ? "top-18.5" : "-top-25"
			} transition-all duration-1000 ease-in-out`}>
			<input
				type="search"
				placeholder="Search product..."
				className="w-full h-full outline-none text-black text-sm lg:text-base"
				// onChange={(e) => {
				// 	dispatch(productAction.searchProduct(e.target.value));
				// }}
			/>
		</div>
	);
}
