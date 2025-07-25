'use client';

import { useState } from "react";
import { FormInput } from "@/components/ui/input";
import dynamic from "next/dynamic";

const CurrencySelect = dynamic(
  () => import("@/components/currencySelect/CurrencySelect"),
  { ssr: false }
);

type Props = {
  onCurrencyChange: (val: string) => void;
};

export const TransferDetailsSection = ({ onCurrencyChange }: Props) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");

  const handleCurrencyChange = (val: string) => {
    setSelectedCurrency(val);
    onCurrencyChange(val); // this calls the parent callback too
  };

  return (
    <section className="space-y-4 bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] shadow-md p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Transfer Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <div className="flex items-center overflow-hidden">
            <FormInput
              name="amount"
              label="Amount in USD *"
              placeholder="Amount"
              className="rounded-none rounded-l-md border-r-0"
            />
            <div className="w-px h-6 bg-gray-300 mx-2 mt-5" />
            <div className="pr-2 mt-1.5">
              <CurrencySelect
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                label="Select Currency"
                className="min-w-[100px] text-[13px] text-[hsl(var(--text-card-foreground))] font-medium"
              />
            </div>
          </div>
        </div>

        <FormInput
          name="purpose"
          label="What is the Purpose of the transfer?"
          placeholder="Enter details"
        />
      </div>
    </section>
  );
};
