"use client";

import { SlidersHorizontal, Search } from "lucide-react";
import { type ReactNode, useState } from "react";
import FilterDrawer from "./drawer";

export default function TableFilter({
	isSearch = false,
	isFilter = false,
	children,
}: { isSearch?: boolean; isFilter?: boolean; children: ReactNode }) {
	const [open, setOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const handleOpenFilter = () => {
		setOpen(true);
	};

	return (
		<div className="mt-4">
			<div className="flex items-center justify-between">
				{isSearch && (
					<div className="flex items-center gap-2 border border-[hsl(var(--custom-border))] rounded-full px-4 py-2 w-full max-w-sm">
						<Search size={20} className="text-gray-400" />
						<input
							type="text"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder="Search ..."
							className="outline-none border-none bg-transparent text-gray-700 placeholder-gray-400 w-full text-sm"
						/>
					</div>
				)}
				{isFilter && (
					<div>
						<SlidersHorizontal className="cursor-pointer" onClick={handleOpenFilter} />
					</div>
				)}
			</div>
			<FilterDrawer open={open} setOpen={setOpen}>
				{children}
			</FilterDrawer>
		</div>
	);
}
