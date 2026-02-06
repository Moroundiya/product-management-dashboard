"use client";

import { addProduct } from "@/app/libs/addProduct";
import getProducts from "@/app/libs/getProducts";
import { setProducts } from "@/app/redux/ProductSlice";
import { Modal } from "@heroui/react";
import { InputGroup, ListBox, Select, TextField } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function AddProduct({
	openAddModal,
	setOpenAddModal,
}: {
	openAddModal: boolean;
	setOpenAddModal: (open: boolean) => void;
}) {
	const [file, setFile] = useState<string>("No file.");
	const [preview, setPreview] = useState<string | null>(null);
	const [progress, setProgress] = useState<boolean>(false);
	const products = useSelector((state: any) => state.products.list) || [];
	const dispatch = useDispatch();

	const productSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setProgress(true);
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());
		const availabilityValue = formData.get("availablity");
		const availability =
            availabilityValue === "In Stock" ? "In Stock" : "Low Stock";
        
		const updatedProducts = {
			id: `"${products.length + 1}"`,
			title: data.name,
			description: data.description,
			price: Number(data.price),
			category: data.category,
			image: preview,
			availability: availability,
			rating: null,
			createdAt: new Date().toISOString(),
		};

		const response = await addProduct(updatedProducts);
		if (response) {
			const updatedProducts = await getProducts();
			dispatch(setProducts(updatedProducts));
			setProgress(false);
			alert("Product Added");
		}
		setOpenAddModal(false);
		e.currentTarget.reset();
		setFile("No file.");
		setPreview(null);
	};

	return (
		<Modal
			isOpen={openAddModal}
			onOpenChange={setOpenAddModal}>
			<Modal.Backdrop>
				<Modal.Container
					size="md"
					placement="center">
					<Modal.Dialog className="">
						<Modal.CloseTrigger />
						<Modal.Header>
							<Modal.Heading>Add Product</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<form
								onSubmit={productSubmit}
								className="w-full mt-3 text-black space-y-3">
								<div className="flex flex-col space-y-1">
									<label
										htmlFor="name"
										className="">
										Product Name
									</label>
									<input
										required
										type="text"
										name="name"
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
										placeholder="Enter Product Description"
										required
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
										isRequired>
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
										name="price"
										isRequired>
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
										placeholder="Enter category"
										required
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
											required
											onChange={(e) => {
												const selectedFile = e.target.files?.[0];
												if (!selectedFile) return;
												setFile(selectedFile.name);
												setPreview(URL.createObjectURL(selectedFile));
											}}
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
									<p className="italic text-[13px] text-black break-after-all leading-snug">
										{file}
									</p>
								</div>

								<div className="w-full flex justify-end my-5">
									<button
										type="submit"
										disabled={progress}
										className={`w-fit text-white cursor-pointer px-3.5 py-1.5 rounded-md ${progress ? "bg-gray-500" : "bg-[#6b8f71]"}`}>
										{progress ? "Adding Product..." : "Add Product"}
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
