import { FormSelect } from "@/components/ui/select";
import { Control } from "react-hook-form";
import { TransferFormValues } from "@/types";
import { useEffect, useState } from "react";

interface Props {
  control: Control<TransferFormValues>;
  accountOptions: string[];
  beneficiaries: string[];
}

export const TransferAccountSection = ({ control, accountOptions, beneficiaries }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // or a loading skeleton
  return (
  <section className="space-y-4 bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] shadow-md p-4 rounded-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormSelect
        name="accountName"
        control={control}
        label="Account name *"
        options={accountOptions.map((b) => ({ label: b, value: b }))}
      />
      <FormSelect
        name="beneficiaryName"
        control={control}
        label="Beneficiary name *"
        options={beneficiaries.map((b) => ({ label: b, value: b }))}
      />
    </div>
  </section>
   );
};
