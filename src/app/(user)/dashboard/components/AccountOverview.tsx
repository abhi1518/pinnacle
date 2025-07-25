// components/AccountOverviewCard.tsx
import { Download } from "lucide-react";

const currencyBalances = [
  { label: "USD", amount: "$185.63" },
  { label: "EUR", amount: "$97.35" },
  { label: "British Pound", amount: "$113.28" },
];

export default function AccountOverviewCard() {
  return (
    <div className="bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] rounded-2xl shadow-sm p-4 sm:p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
        <div>
          <h3 className="text-sm text-gray-600">Account Overview</h3>
          <p className="text-2xl font-semibold mt-1">£520,940.00</p>
          <p className="text-sm text-gray-600 mt-1">Balance in other currencies</p>
        </div>

        <div className="text-right ml-auto">
          <p className="text-xs text-gray-400 mb-1">Thursday, 10th April</p>
          <button className="flex items-center gap-1 text-sm font-medium rounded-full px-3 py-1 bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] hover:bg-gray-100 dark:hover:bg-[#ffffff15]">
            Statement <Download className="w-4 h-4" />
          </button>
          <div>
            <button className="text-sm text-right text-blue-600 dark:text-blue-400 underline mt-1">View All</button>
          </div>
        </div>
      </div>

      {/* Currency balances */}
      <div className="flex flex-col sm:flex-row gap-2">
        {currencyBalances.map((curr, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center px-4 py-2 rounded-xl bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] flex-1 text-sm"
          >
            <span className="text-gray-500">{curr.label}</span>
            <span className="font-medium">{curr.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
