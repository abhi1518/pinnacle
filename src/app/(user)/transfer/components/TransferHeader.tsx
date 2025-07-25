import { ChevronLeft } from "lucide-react";

export const TransferHeader = () => (
  <div className="mb-4">
    <div className="flex items-center space-x-4 mb-2">
      <button className="text-gray-600 dark:text-white">
        <ChevronLeft size={24} />
      </button>
      <h2 className="text-2xl font-semibold text-card-foreground">
        New Transfer
      </h2>
    </div>
    <p className="text-sm text-muted-foreground">
      Send Money to anyone quickly and Securely.
    </p>
  </div>
);
