// Header.tsx
import { Bell, Sun, Moon, Menu } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import NotificationDropdown from './NotificationDropdown';

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="relative flex items-center justify-between p-4 bg-card/80 backdrop-blur-sm bg-[hsl(var(--header))] transition-all duration-300">
      <button 
        onClick={toggleSidebar}
        className="p-2 hover:bg-muted/20 rounded-lg transition-colors"
      >
        <Menu size={20} className="text-card-foreground" />
      </button>

      <div className="flex items-center gap-4 relative">
        <button 
          onClick={toggleTheme} 
          className="p-2 hover:bg-muted/20 rounded-lg transition-all duration-300 cursor-pointer group"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <Sun size={20} className="text-yellow-500 group-hover:rotate-180 transition-transform duration-300" />
          ) : (
            <Moon size={20} className="text-card-foreground group-hover:scale-110 transition-transform duration-300" />
          )}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button 
            className="p-2 hover:bg-muted/20 rounded-lg transition-colors relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={20} className="text-card-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 z-50 w-[300px] rounded-md bg-white dark:bg-[#1D1A38] shadow-lg border border-[hsl(var(--custom-border))]">
              <NotificationDropdown />
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
            A
          </div>
          <span className="text-card-foreground font-medium hidden sm:block">Alex Doe</span>
        </div>
      </div>
    </header>
  );
}