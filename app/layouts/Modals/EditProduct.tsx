"use client";

import { Modal } from "@heroui/react";
import { InputGroup, ListBox, Select, TextField } from "@heroui/react";
import { Icon } from "@iconify/react";

export function EditProduct({
	openEditModal,
	setOpenEditModal,
	product,
}: {
	openEditModal: boolean;
	setOpenEditModal: (open: boolean) => void;
	product: object;
}) {
	return (
		<Modal
			isOpen={openEditModal}
			onOpenChange={setOpenEditModal}>
			<Modal.Backdrop>
				<Modal.Container
					size="md"
					placement="center">
					<Modal.Dialog className="">
						<Modal.CloseTrigger />
						<Modal.Header>
							<Modal.Heading>Edit Product</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									setOpenEditModal(false);
								}}
								className="w-full mt-3 text-black space-y-3">
								<div className="flex flex-col space-y-1">
									<label
										htmlFor="name"
										className="">
										Product Name
									</label>
									<input
										type="text"
										name="name"
										defaultValue={product?.title}
										placeholder="Enter Product Name"
										className="bg-[#F1F2F3] text-black font-medium w-full border-none outline-0 text-sm p-2.5 rounded-lg placeholder:opacity-45"
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label
										htmlFor="description"
										className="">
										Description
									</label>
									<textarea
										name="description"
										defaultValue={product?.description}
										placeholder="Enter Product Description"
										className="bg-[#F1F2F3] h-25 text-black resize-none font-medium w-full border-none outline-0 text-sm p-2.5 rounded-lg placeholder:opacity-45"
									/>
								</div>

								<div className="flex flex-col space-y-1">
									<label
										htmlFor="availablity"
										className="">
										Availability
									</label>
									<Select
										className="w-full bg-transparent text-black font-medium border-none outline-0 text-sm"
										placeholder="Select availablity"
										name="availablity"
										defaultValue={product?.availability}>
										<Select.Trigger className="border-0 bg-[#F1F2F3] p-2.5 rounded-lg shadow-none focus:ring-0 border-none select-no-flash outline-none">
											<Select.Value />
											<Select.Indicator />
										</Select.Trigger>
										<Select.Popover className="border-0 outline-0">
											<ListBox>
												<ListBox.Item
													id="In Stock"
													textValue="In Stock">
													In Stock
													<ListBox.ItemIndicator />
												</ListBox.Item>
												<ListBox.Item
													id="Low Stock"
													textValue="Low Stock">
													Low Stock
													<ListBox.ItemIndicator />
												</ListBox.Item>
											</ListBox>
										</Select.Popover>
									</Select>
								</div>
								<div className="flex flex-col space-y-1">
									<label
										htmlFor="price"
										className="">
										Price
									</label>
									<TextField
										className="w-full text-black"
										defaultValue={product?.price}
										name="price">
										<InputGroup className="h-10 bg-[#F1F2F3] border-none outline-0 focus:ring-0 font-medium select-no-flash text-sm rounded-lg">
											<InputGroup.Prefix>$</InputGroup.Prefix>
											<InputGroup.Input
												className="w-full bg-transparent  placeholder:opacity-45"
												defaultValue="10"
												type="number"
											/>
											<InputGroup.Suffix>USD</InputGroup.Suffix>
										</InputGroup>
									</TextField>
								</div>
								<div className="flex flex-col space-y-1">
									<label
										htmlFor="details"
										className="">
										Category
									</label>
									<input
										type="text"
										name="category"
										defaultValue={product?.category}
										placeholder="Enter category"
										className="bg-[#F1F2F3] text-black font-medium w-full border-none outline-0 text-sm p-2.5 rounded-lg placeholder:opacity-45"
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label
										htmlFor="image"
										className="">
										Image
									</label>

									<div className="bg-[#F1F2F3] text-black font-medium w-full border-none outline-0 text-sm flex justify-center items-center h-18 rounded-lg placeholder:opacity-45 relative">
										<input
											type="file"
											accept="image/*"
											name="image"
											className="w-full h-full absolute opacity-0 top-0 left-0 z-10"
										/>
										<div className="flex pointer-events-none justify-center items-center space-x-1">
											<Icon
												icon="solar:import-linear"
												className="text-[#E86C39] text-2xl"
											/>
											<span className="text-[12.5px] text-[#2D2E2E]">
												Upload Image
											</span>
										</div>
									</div>
								</div>
								<div className="w-full flex justify-end my-5">
									<button
										type="submit"
										className="w-fit text-white cursor-pointer px-3.5 py-1.5 rounded-md bg-[#6b8f71]">
										Update Product
									</button>
								</div>
							</form>
						</Modal.Body>
						<Modal.Footer className=""></Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
