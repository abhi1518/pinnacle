'use client';
import React from 'react';

const notifications = [
  {
    title: "You’ve Successfully Transferred ₹25,000 To Rahul Sharma (Axis Bank – A/C No: XXXX1234)",
    time: "2:45 PM",
    date: "30 April 2025",
  },
  ...Array(5).fill({
    title: "Transfer Of ₹50,000",
    time: "Now",
    date: "30 April 2025",
  }),
];

export default function NotificationDropdown() {
  return (
    <div className="absolute right-0 mt-2 w-[320px] max-h-[400px] overflow-y-auto rounded-xl bg-white dark:bg-[#1A1625] shadow-lg border border-[#E2E8F0] dark:border-[#5E5983] z-50">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="text-sm font-medium text-foreground">
          {notifications[0].title}
        </div>
        <a href="#" className="text-sm font-medium underline">View All</a>
      </div>

      <div className="divide-y divide-border">
        {notifications.slice(1).map((item, index) => (
          <div key={index} className="p-3">
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {item.time} | {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
