'use client';

import { useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Header from '@/components/header/Header';
import { Theme } from "@radix-ui/themes";
import { useTheme } from '@/context/ThemeContext';

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed((prev) => !prev);
  const { theme } = useTheme(); // Use theme from context

  return (
    <Theme appearance={theme}>
      <div className="relative flex h-screen bg-[hsl(var(--background))] text-foreground transition-colors duration-300 sm:overflow-x-hidden">
        <Sidebar collapsed={collapsed} />
        
        <div className="flex-1 flex flex-col relative overflow-hidden">
          <div className="fixed top-0 left-0 right-0 z-30 sm:static sm:overflow-x-hidden">
            <div className="max-w-screen sm:w-auto mx-auto overflow-hidden">
              <Header toggleSidebar={toggleSidebar} />
            </div>
          </div>
          
          <main className="flex-1 pt-16 sm:pt-4 overflow-y-auto overflow-x-auto bg-background transition-colors duration-300">
            <div className="min-w-[600px] sm:min-w-0 p-2">
              {children}
            </div>
          </main>
        </div>
      </div>
    </Theme>
  );
}