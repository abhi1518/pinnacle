"use client";

import { FormInput } from "@/components/ui/input";
import dynamic from "next/dynamic";

const CurrencySelect = dynamic(
  () => import("@/components/currencySelect/CurrencySelect"),
  { ssr: false }
);

type Props = {
  onCurrencyChange: (val: string) => void;
};

export const BeneficiaryDetailsSection = ({ onCurrencyChange }: Props) => (
  <div className="bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] shadow-md rounded-lg p-4 space-y-4">
    <h2 className="font-semibold text-lg">Beneficiary&#39;s Details</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormInput name="bankCountry" label="Bank Country *" />
      <CurrencySelect onChange={onCurrencyChange} label="Select Currency" />
      <FormInput name="iban" label="IBAN" className="md:col-span-2" />
      <FormInput name="bankName" label="Bank Name" />
      <FormInput name="accountNumber" label="Account Number" />
      <FormInput
        name="bankAddress"
        label="Bank Address"
        className="md:col-span-2"
      />
      <FormInput name="sortCode" label="Sort Code" />
      <FormInput name="swiftBic" label="Swift BIC" />
    </div>
  </div>
);
