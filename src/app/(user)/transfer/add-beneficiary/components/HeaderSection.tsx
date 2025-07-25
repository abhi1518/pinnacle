"use client";

import { ChevronLeft } from "lucide-react";

export const HeaderSection = () => (
  <div className="flex items-center gap-4">
    <button>
      <ChevronLeft size={24} />
    </button>
    <div>
      <h1 className="text-2xl font-bold">New Transfer</h1>
      <p className="text-gray-500 text-sm">
        Send Money to anyone quickly and Securely.
      </p>
    </div>
  </div>
);
