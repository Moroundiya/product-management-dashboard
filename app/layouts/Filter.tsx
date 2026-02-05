"use client";

import { Icon } from "@iconify/react";
import { ListBox, Select } from "@heroui/react";
import { SearchField } from "@heroui/react";

export default function Filter({
	setSearch,
	setSort,
}: {
	setSearch: (value: string) => void;
	setSort: (value: string) => void;
}) {
	return (
		<div className="w-full px-3 space-y-3 lg:space-y-0 lg:px-20 lg:flex items-center justify-between pt-22 pb-10">
			<div className="flex items-center">
				<div className="flex items-center">
					<Icon
						icon="solar:sort-bold"
						className="text-gray-800 text-2xl"
					/>
					<span className="ml-2 text-black font-medium text-sm lg:text-base">
						Sort By:
					</span>
				</div>
				<Select
					className="w-50 lg:w-[256px] text-sm lg:text-base"
					placeholder="Select one"
					onChange={(value) => setSort(value as string)}>
					<Select.Trigger className="ms-4 h-10 rounded-lg text-sm lg:text-base outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
						<Select.Value className="text-sm lg:text-base" />
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
			<div>
				<SearchField name="search">
					<SearchField.Group className="rounded-lg h-10 ring-0 outline-none focus-within:ring-0 focus-within:outline-none">
						<SearchField.SearchIcon />
						<SearchField.Input
							className="w-full lg:w-70 text-sm lg:text-base"
							placeholder="Search..."
							onChange={(e) => setSearch(e.target.value)}
						/>
						<SearchField.ClearButton />
					</SearchField.Group>
				</SearchField>
			</div>
		</div>
	);
}
