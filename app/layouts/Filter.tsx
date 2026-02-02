import { Icon } from "@iconify/react";
import { Label, ListBox, Select } from "@heroui/react";

export default function Filter() {
	return (
		<div className="w-full px-3 lg:px-10 flex items-center justify-between pt-22 pb-10">
			<div className="flex items-center">
				<div className="flex items-center">
					<Icon
						icon="solar:sort-bold"
						className="text-gray-800 text-2xl"
					/>
					<span className="ml-2 text-black font-medium">Sort By:</span>
				</div>
				<Select
					className="w-[256px]"
					placeholder="Select one">
					<Select.Trigger className="ms-4  rounded-lg  outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
						<Select.Value />
						<Select.Indicator />
					</Select.Trigger>
					<Select.Popover>
						<ListBox>
							<ListBox.Item
								id="latest"
								textValue="Latest">
								Latest
								<ListBox.ItemIndicator />
							</ListBox.Item>
							<ListBox.Item
								id="oldest"
								textValue="Oldest">
								Oldest
								<ListBox.ItemIndicator />
							</ListBox.Item>
							<ListBox.Item
								id="name"
								textValue="Name (A–Z)">
								Name (A–Z)
								<ListBox.ItemIndicator />
							</ListBox.Item>
						</ListBox>
					</Select.Popover>
				</Select>
			</div>
		</div>
	);
}
