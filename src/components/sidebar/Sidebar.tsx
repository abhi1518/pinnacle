
// import {
//   Home,
//   Users,
//   Repeat,
//   Clock,
//   CreditCard,
//   Settings,
//   X,
//   Menu
// } from 'lucide-react';  

// const navItems = [
//   { label: 'Dashboard', icon: <Home size={20} />, href: '/dashboard' },
//   { label: 'Beneficiary', icon: <Users size={20} />, href: '/beneficiary' },
//   { label: 'Transfer', icon: <Repeat size={20} />, href: '/transfer' },
//   { label: 'History', icon: <Clock size={20} />, href: '/history' },
//   { label: 'Accounts', icon: <CreditCard size={20} />, href: '/accounts' },
//   { label: 'Setting', icon: <Settings size={20} />, href: '/settings' },
// ];


"use client";

import { useState, useEffect } from "react";
import { Home, Users, Repeat, X, Menu } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import Logo from "../../../public/dashboardLogo.png";
import SmallLogo from "../../../public/smallLogo.png";

const navItems = [
  { label: "Dashboard", icon: <Home size={20} />, href: "/dashboard" },
  { label: "Beneficiary", icon: <Users size={20} />, href: "/beneficiary" },
  { label: "Transfer", icon: <Repeat size={20} />, href: "/transfer" },
];

export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const getActiveTab = () => {
    const currentItem = navItems.find((item) => item.href === pathname);
    return currentItem ? currentItem.label : "Dashboard";
  };

  const activeTab = getActiveTab();

  const handleNavClick = (label: string, href: string) => {
    if (pathname !== href) {
      document.documentElement.classList.add("theme-transition");
      router.push(href);
      setTimeout(() => {
        document.documentElement.classList.remove("theme-transition");
      }, 150);
    }
    if (window.innerWidth < 640) setMobileOpen(false); // sm breakpoint
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Static Sidebar (Desktop/Tablet) */}
      <aside
        className={`hidden sm:block ${
          collapsed ? "w-20" : "w-60"
        } bg-[hsl(var(--side-bar))] text-white p-4 space-y-4 m-4 rounded-2xl transition-all duration-300`}
      >
        <div className="w-full flex justify-center">
          <Image
            src={collapsed ? SmallLogo : Logo}
            alt="PinnaclePay Logo"
            width={collapsed ? 30 : 170}
            height={collapsed ? 30 : 50}
          />
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.label, item.href)}
              className={`flex items-center w-full p-2 rounded transition-colors ${
                activeTab === item.label
                  ? "border border-white rounded-lg bg-[#19193a]"
                  : "hover:bg-[#19193a]"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <div className="w-6 h-6 flex justify-center items-center">
                {item.icon}
              </div>
              {!collapsed && <span className="ml-3">{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <aside className="absolute left-0 top-0 h-full w-full bg-[#0D0C22] text-white p-4 space-y-4 z-50 shadow-lg">
            <div className="flex justify-end">
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex justify-center">
              <Image
                src={Logo}
                alt="PinnaclePay Logo"
                width={170}
                height={50}
              />
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.label, item.href)}
                  className={`flex items-center w-full p-2 rounded transition-colors ${
                    activeTab === item.label
                      ? "border border-white rounded-lg bg-[#19193a]"
                      : "hover:bg-[#19193a]"
                  }`}
                >
                  <div className="w-6 h-6 flex justify-center items-center">
                    {item.icon}
                  </div>
                  <span className="ml-3">{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Mobile Toggle Button */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileOpen(true)}
          className="bg-[#0D0C22] p-2 rounded-full text-white shadow-lg"
        >
          <Menu size={20} />
        </button>
      </div>
    </>
  );
}



// "use client";

// import { useState } from "react";
// import {
//   Home,
//   Users,
//   Repeat,
//   Clock,
//   CreditCard,
//   Settings,
//   X,
//   Menu,
// } from "lucide-react";
// import Image from "next/image";
// import Logo from "../../../public/dashboardLogo.png";
// import SmallLogo from "../../../public/smallLogo.png";

// const navItems = [
//   { label: "Dashboard", icon: <Home size={20} /> },
//   { label: "Beneficiary", icon: <Users size={20} /> },
//   { label: "Transfer", icon: <Repeat size={20} /> },
//   { label: "History", icon: <Clock size={20} /> },
//   { label: "Accounts", icon: <CreditCard size={20} /> },
//   { label: "Setting", icon: <Settings size={20} /> },
// ];

// export default function Sidebar({ collapsed }: { collapsed: boolean }) {
//   const [activeTab, setActiveTab] = useState("Dashboard");
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleNavClick = (label: string) => {
//     setActiveTab(label);
//     if (window.innerWidth < 640) setMobileOpen(false);
//   };

//   return (
//     <>
//       {/* Static Sidebar: Desktop & Tablet */}
//       <aside
//         className={`hidden sm:block ${
//           collapsed ? "w-20" : "w-60"
//         } bg-gradient-to-b from-[#0D0C22] to-[#1a1a3a] text-white p-4 space-y-4 m-4 rounded-2xl transition-all duration-300 shadow-2xl border border-white/10`}
//       >
//         {/* Logo */}
//         <div className="w-full flex justify-center py-4">
//           <div className="transition-all duration-300">
//             <Image
//               src={collapsed ? SmallLogo : Logo}
//               alt="PinnaclePay Logo"
//               width={collapsed ? 30 : 170}
//               height={collapsed ? 30 : 50}
//               className="drop-shadow-lg"
//             />
//           </div>
//         </div>

//         {/* Nav */}
//         <nav className="space-y-2">
//           {navItems.map((item) => (
//             <button
//               key={item.label}
//               onClick={() => handleNavClick(item.label)}
//               className={`flex items-center w-full p-3 rounded-xl transition-all duration-300 group ${
//                 activeTab === item.label
//                   ? "bg-gradient-to-r from-[#6836F8] to-[#8B5CF6] shadow-lg shadow-purple-500/25 border border-white/20"
//                   : "hover:bg-white/10 hover:shadow-md"
//               } ${collapsed ? "justify-center" : ""}`}
//             >
//               <div
//                 className={`w-6 h-6 flex justify-center items-center transition-transform duration-300 ${
//                   activeTab === item.label
//                     ? "scale-110"
//                     : "group-hover:scale-105"
//                 }`}
//               >
//                 {item.icon}
//               </div>
//               {!collapsed && (
//                 <span className="ml-3 font-medium transition-all duration-300">
//                   {item.label}
//                 </span>
//               )}
//             </button>
//           ))}
//         </nav>

//         {/* Bottom decoration */}
//         <div className="pt-8">
//           <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
//         </div>
//       </aside>

//       {/* Mobile Sidebar Overlay */}
//       {mobileOpen && (
//         <div className="sm:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300">
//           <aside className="absolute left-0 top-0 h-full w-80 bg-gradient-to-b from-[#0D0C22] to-[#1a1a3a] text-white p-6 space-y-6 z-50 shadow-2xl border-r border-white/10">
//             {/* Close Button */}
//             <div className="flex justify-end">
//               <button
//                 onClick={() => setMobileOpen(false)}
//                 className="p-2 hover:bg-white/10 rounded-lg transition-colors"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             {/* Logo */}
//             <div className="flex justify-center py-4">
//               <Image
//                 src={Logo}
//                 alt="PinnaclePay Logo"
//                 width={170}
//                 height={50}
//                 className="drop-shadow-lg"
//               />
//             </div>

//             {/* Nav */}
//             <nav className="space-y-3">
//               {navItems.map((item) => (
//                 <button
//                   key={item.label}
//                   onClick={() => handleNavClick(item.label)}
//                   className={`flex items-center w-full p-4 rounded-xl transition-all duration-300 ${
//                     activeTab === item.label
//                       ? "bg-gradient-to-r from-[#6836F8] to-[#8B5CF6] shadow-lg shadow-purple-500/25 border border-white/20"
//                       : "hover:bg-white/10 hover:shadow-md"
//                   }`}
//                 >
//                   <div className="w-6 h-6 flex justify-center items-center">
//                     {item.icon}
//                   </div>
//                   <span className="ml-4 font-medium">{item.label}</span>
//                 </button>
//               ))}
//             </nav>
//           </aside>
//         </div>
//       )}

//       {/* Mobile Toggle Button (e.g., in Header) */}
//       <div className="sm:hidden fixed top-4 left-4 z-50">
//         <button
//           onClick={() => setMobileOpen(true)}
//           className="bg-[#0D0C22] p-2 rounded-full text-white shadow-lg"
//         >
//           <Menu size={20} />
//         </button>
//       </div>
//     </>
//   );
// }
