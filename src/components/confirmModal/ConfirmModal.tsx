import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogOverlay,
	DialogTitle,
} from "@/components/ui/dialog";

type ConfirmModalProps = {
	open: boolean;
	onClose: () => void;
	title: string;
	description: string;
	confirmText?: string;
	cancelText?: string;
	onConfirm: () => void;
};

export default function ConfirmModal({
	open,
	onClose,
	title,
	description,
	confirmText = "Confirm",
	cancelText = "Cancel",
	onConfirm,
}: ConfirmModalProps) {
	return (
		<Dialog open={open} onOpenChange={onClose}>
			{/* Custom overlay with backdrop blur */}
			<DialogOverlay className="fixed inset-0 z-40 bg-black/20 dark:bg-black/40 backdrop-blur-sm transition-colors" />

			<DialogContent className="max-w-sm z-50 rounded-2xl p-6 bg-white dark:bg-[#5E59831F] border border-border shadow-lg transition-colors">
				<DialogHeader>
					<DialogTitle className="text-center text-xl font-semibold text-gray-900 dark:text-white">
						{title}
					</DialogTitle>
					<DialogDescription className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2">
						{description}
					</DialogDescription>
				</DialogHeader>
				<div className="mt-6 flex justify-center gap-4">
					<Button
						variant="outline"
						onClick={onClose}
						className="rounded-full px-6 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
					>
						{cancelText}
					</Button>
					<Button
						onClick={onConfirm}
						className="rounded-full px-6 bg-[#6836F8] hover:bg-[#5429d1] text-white transition-colors"
					>
						{confirmText}
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
