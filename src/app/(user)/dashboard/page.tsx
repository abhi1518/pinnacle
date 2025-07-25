'use client';

import { Card } from "@/components/ui/card";
import KycStatus from './components/KycStatus';
import AccountOverview from './components/AccountOverview';
import QuickActions from './components/QuickActions';
import CurrencyEvaluations from './components/CurrencyEvaluations';
import PromotionsCarousel from './components/PromotionsCarousel';
import RecentTransactions from './components/RecentTransactions';

export default function Home() {
  return (
    <Card className="mt-0 pt-0">
    <main className="p-4 space-y-6 min-h-screen">
      <h2 className="text-lg font-medium mb-0">Welcome,</h2>
      <h1 className="text-2xl font-bold">Alex</h1>

      <KycStatus />
      <AccountOverview />
      <QuickActions />
      <CurrencyEvaluations />
      <PromotionsCarousel />
      <RecentTransactions />
    </main>
    </Card>
  );
}
