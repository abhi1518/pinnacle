"use client";

import { FormField, FormItem, FormDescription } from "@/components/ui/form";
import { FormInput } from "@/components/ui/input";
import dynamic from "next/dynamic";

const CurrencySelect = dynamic(
  () => import("@/components/currencySelect/CurrencySelect"),
  { ssr: false }
);

type Props = {
  onCurrencyChange: (val: string) => void;
};

export const TransferDetailsSection = ({ onCurrencyChange }: Props) => (
  <div className="bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] shadow-md rounded-lg p-4 space-y-4">
    <h2 className="font-semibold text-lg">Transfer Details</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        name="amount"
        render={() => (
          <FormItem>
            <div className="flex items-center overflow-hidden">
              <FormInput
                name="amount"
                label="Amount in USD *"
                placeholder="Amount"
                className="rounded-none rounded-l-md border-r-0"
              />
              <div className="w-px h-6 bg-gray-300 mx-2 mt-5" />
              <div className="pr-2">
                <CurrencySelect
                  onChange={onCurrencyChange}
                  label=""
                  className="min-w-[100px] mt-6 text-[13px] text-[hsl(var(--text-card-foreground))] font-medium"
                />
              </div>
            </div>
            <FormDescription className="text-xs text-muted-foreground mt-1">
              FX rate: 1 GBP = 11.0 USD
            </FormDescription>
          </FormItem>
        )}
      />
      <FormInput
        name="purpose"
        label="What is the Purpose of the transfer?"
        placeholder="Enter details"
      />
    </div>
  </div>
);
