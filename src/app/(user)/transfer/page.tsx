'use client';

import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import {
  TransferHeader,
  RecentBeneficiaries,
  TransferAccountSection,
  TransferDetailsSection,
  TransferContinueButton,
} from "./components"; // path depending on your folder structure
import { TransferFormValues } from "@/types";

const beneficiaries = ["Rechal Green", "Cooper Calzoni", "Nolan George", "Prinston Philips"];
const accountOptions = ["Account A", "Account B", "Account C"];

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
      amount: "",
      purpose: "Reimbursement for expenses",
    },
  });

  const handleCurrencyChange = (val: string) => {
    console.log("Selected currency:", val);
  };

  return (
    <Card>
      <main className="p-4 md:p-6 lg:p-4 space-y-6">
        <TransferHeader />
        <RecentBeneficiaries beneficiaries={beneficiaries} />
        <Form {...form}>
          <form className="space-y-6">
            <TransferAccountSection control={form.control} accountOptions={accountOptions} beneficiaries={beneficiaries} />
            <TransferDetailsSection onCurrencyChange={handleCurrencyChange} />
            <TransferContinueButton />
          </form>
        </Form>
      </main>
    </Card>
  );
}
