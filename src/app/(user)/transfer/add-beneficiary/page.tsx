"use client";

import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { TransferFormValues } from "@/types";

import { HeaderSection } from "./components/HeaderSection";
import { AccountInfoSection } from "./components/AccountInfoSection";
import { BeneficiaryDetailsSection } from "./components/BeneficiaryDetailsSection";
import { TransferDetailsSection } from "./components/TransferDetailsSection";
import { ContinueButton } from "./components/ContinueButton";

export default function TransferPage() {
  const form = useForm<TransferFormValues>({
    defaultValues: {
      accountName: "Ralph loran",
      beneficiaryName: "Rechal Green",
      bankCountry: "America",
      currency: "USD",
      iban: "GB12ABCD10203012345678",
      bankName: "ABC bank",
      accountNumber: "88558955848",
      bankAddress: "24 widen street, lyc in heights, xyz abc",
      sortCode: "44646",
      swiftBic: "DEUTGB2LXXX",
      amount: "Lydia Geidt",
      purpose: "Reimbursement for expenses",
    },
  });

  const handleCurrencyChange = (val: string) => {
    console.log("Selected currency:", val);
  };

  return (
    <Card>
      <main className="p-4 md:p-8 space-y-6">
        <HeaderSection />
        <Form {...form}>
          <form className="space-y-6">
            <AccountInfoSection />
            <BeneficiaryDetailsSection onCurrencyChange={handleCurrencyChange} />
            <TransferDetailsSection onCurrencyChange={handleCurrencyChange} />
            <ContinueButton />
          </form>
        </Form>
      </main>
    </Card>
  );
}
