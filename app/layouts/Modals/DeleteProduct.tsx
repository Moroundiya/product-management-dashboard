"use client";

import getProducts from "@/app/libs/getProducts";
import { setProducts } from "@/app/redux/ProductSlice";
import { AlertDialog, Button } from "@heroui/react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function DeleteProduct({
	openDeleteModal,
	setOpenDeleteModal,
	productTitle,
}) {
	const router = useRouter();
	const dispatch = useDispatch();
	const { slug } = useParams();
	const [isDeleting, setIsDeleting] = useState<boolean>(false);

	const handleDelete = async () => {
		try {
			setIsDeleting(true);
			await axios.delete(
				`https://698534a66964f10bf252980b.mockapi.io/products/${String(slug)}`,
			);
			router.replace("/");
			const updatedProducts = await getProducts();
			dispatch(setProducts(updatedProducts));
		} catch (err: any) {
			console.error("Delete failed:", err.message);
		} finally {
			setIsDeleting(false);
		}
	};
	return (
		<AlertDialog>
			<AlertDialog.Backdrop
				isOpen={openDeleteModal}
				onOpenChange={setOpenDeleteModal}>
				<AlertDialog.Container size="md">
					<AlertDialog.Dialog className="">
						<AlertDialog.CloseTrigger />
						<AlertDialog.Header>
							<AlertDialog.Icon status="danger" />
							<AlertDialog.Heading>Delete product?</AlertDialog.Heading>
						</AlertDialog.Header>
						<AlertDialog.Body>
							<p>
								This will permanently delete <strong>{productTitle}</strong>{" "}
								product and all of its data. This action cannot be undone.
							</p>
						</AlertDialog.Body>
						<AlertDialog.Footer>
							<Button
								slot="close"
								variant="tertiary">
								Cancel
							</Button>
							<Button
								onClick={handleDelete}
								isDisabled={isDeleting}
								variant="danger">
								{isDeleting ? "Deleting Product..." : "Delete Product"}
							</Button>
						</AlertDialog.Footer>
					</AlertDialog.Dialog>
				</AlertDialog.Container>
			</AlertDialog.Backdrop>
		</AlertDialog>
	);
}
