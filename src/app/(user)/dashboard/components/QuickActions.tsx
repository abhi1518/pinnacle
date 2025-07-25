// components/QuickActions.tsx
import { Plus, Send, Briefcase, ArrowRightCircle } from "lucide-react";

const actions = [
  { label: "New Beneficiary", icon: <Plus className="w-5 h-5" /> },
  { label: "New Transfer", icon: <Send className="w-5 h-5" /> },
  { label: "Funds", icon: <Briefcase className="w-5 h-5" /> },
  { label: "Manage Direct Debit", icon: <ArrowRightCircle className="w-5 h-5" /> },
];

export default function QuickActions() {
  return (
    <div className="w-full bg-transparent">
      <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <div
            key={index}
            className="bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition"
          >
            <div className="bg-[hsl(var(--quick-action-icon-bg))] border border-[hsl(var(--custom-border))] rounded-full w-10 h-10 flex items-center justify-center mb-3">
              {action.icon}
            </div>
            <span className="text-sm font-medium">{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
