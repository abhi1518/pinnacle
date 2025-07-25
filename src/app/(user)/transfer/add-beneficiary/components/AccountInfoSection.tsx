"use client";

import { FormInput } from "@/components/ui/input";

export const AccountInfoSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] shadow-md rounded-lg p-4 space-y-4">
    <FormInput name="accountName" label="Account name *" />
    <FormInput name="beneficiaryName" label="Beneficiary name *" />
  </div>
);
