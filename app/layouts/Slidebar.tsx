import { Icon } from "@iconify/react";

export default function Slidebar({
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
					: "left-full opacity-0 delay-300 duration-[1s]"
			} flex justify-end`}>
			<div
				className={`w-10/12 lg:w-[440px] h-full bg-white px-5 lg:px-7 pb-5 relative transition-all ease-in-out overflow-x-hidden ${
					showSidebar
						? "left-0 opacity-100 delay-100 duration-[1s]"
						: "left-full opacity-0 duration-[0.8s]"
				} `}>
				<span>
					<Icon
						icon="material-symbols-light:cancel-outline-rounded"
						className="absolute right-5 top-5 text-4xl cursor-pointer text-red-700"
						onClick={() => setShowSidebar(false)}
					/>
				</span>
				<p className="text-xl font-bold pt-14 lg:text-[1.45rem]">Cart</p>
				<div className="w-full h-[2px] mt-2 bg-[#D9D9D9] rounded-3xl overflow-hidden">
					<div className="h-full w-[50px] bg-[#7A9E7E]"></div>
				</div>
				<div className="mt-0 lg:mt-8 border-t border-[#0000001e] mb-5 h-[70%] md:h-[700px] lg:h-[70%] overflow-y-auto overflow-x-hidden">
					{cartItems.length === 0 ? (
						<p className="py-10 text-sm text-gray-500 text-center">
							Cart is empty
						</p>
					) : (
						cartItems.map((item) => (
							<div className="py-3 border-b border-[#0000001e] flex w-full">
								<div className="flex justify-between items-center w-full">
									<div className="flex items-center">
										<img
											src={item?.image}
											alt=""
											className="w-[75px] me-3"
										/>
										<div>
											<p className="text-[#017D03] font-semibold">
												{item?.title}
											</p>
											<p className="text-[#54595F] font-semibold flex items-center">
												${item?.price}{" "}
												<span className="ps-1">x {item?.quantity}</span>
											</p>
										</div>
									</div>
									<Icon
										icon="iconoir:cancel"
										className="text-[#FF9C00] text-2xl cursor-pointer"
										onClick={() =>
											dispatch(cartActions.removeItemFromCart(item))
										}
									/>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
}
