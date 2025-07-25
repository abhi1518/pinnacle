import { ReactNode } from 'react';
import UserLayout from '@/components/layout/UserLayout';

export const metadata = {
  title: 'PinnaclePay Dashboard',
  description: 'All your assigned beneficiaries in one place.',
};

interface LayoutProps {
	children: ReactNode
}


export default function Layout({ children }: LayoutProps) {
  return (
    <div>

          <UserLayout>{children}</UserLayout>

    </div>
  );
}