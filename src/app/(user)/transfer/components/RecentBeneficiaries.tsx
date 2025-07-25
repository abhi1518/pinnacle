"use client";

import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

interface Props {
  beneficiaries: string[];
}

export const RecentBeneficiaries = ({ beneficiaries }: Props) => {
  const router = useRouter();

  const handleAddBeneficiary = () => {
    router.push("transfer/add-beneficiary");
  };

  return (
    <section className="space-y-4 border border-[hsl(var(--custom-border))] shadow-md p-4 rounded-lg">
      <h4 className="text-md font-semibold mb-3">Recent Beneficiaries</h4>
      <div className="flex items-center gap-3 flex-wrap">
        {beneficiaries.map((name) => (
          <div
            key={name}
            className="flex items-center gap-2 bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] pr-2.5 rounded-full text-sm text-[#8D8D99]"
          >
            <span className="w-10 h-10 rounded-full bg-[hsl(var(--recent-beneficiaries))] flex items-center justify-center text-white text-xs font-medium">
              {name[0]}
            </span>
            {name}
          </div>
        ))}
        <button
          onClick={handleAddBeneficiary}
          className="flex items-center gap-2 border border-[#6836F8] px-3 py-2.5 rounded-full text-[#6836F8] text-sm hover:bg-primary/10"
        >
          <Plus size={14} />
          Add Beneficiary
        </button>
      </div>
    </section>
  );
};
