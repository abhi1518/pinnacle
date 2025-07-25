'use client';

import { useState } from 'react';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';

const transactions = [
  {
    name: 'Anna john',
    account: 'Navi',
    date: '10 Jan 2025',
    time: '09:45 pm',
    amount: '$1,546.12',
    type: 'outbound',
  },
  {
    name: 'Chris lauran',
    account: 'Opra',
    date: '9 Jan 2025',
    time: '09:45 pm',
    amount: '$1,546.12',
    type: 'outbound',
  },
  {
    name: 'Chloe Wallows',
    account: 'Ran',
    date: '6 Jan 2025',
    time: '09:45 pm',
    amount: '$1,546.12',
    type: 'inbound',
  },
  {
    name: 'Chloe Wallows',
    account: 'Rajat',
    date: '1 Jan 2025',
    time: '10:45 pm',
    amount: '$1,546.12',
    type: 'outbound',
  },
];

type FilterType = 'all' | 'inbound' | 'outbound';

export default function RecentTransactions() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = filter === 'all' ? transactions : transactions.filter(t => t.type === filter);

  const filterTypes: FilterType[] = ['all', 'inbound', 'outbound'];

  return (
    <section className="mb-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div>
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            {filterTypes.map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={clsx(
                  'px-4 py-1.5 rounded-full text-sm border',
                  filter === type
                    ? 'bg-black text-white'
                    : 'bg-white text-black border-gray-300'
                )}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="date"
            defaultValue="2023-09-01"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
          <span className="text-sm text-gray-500">to</span>
          <input
            type="date"
            defaultValue="2025-03-23"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
          <a href="#" className="text-sm underline ml-2">View all</a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((txn, i) => (
          <div
            key={i}
            className="bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] rounded-xl p-4 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                {txn.type === 'inbound' ? (
                  <ArrowDownLeft className="w-4 h-4 text-green-500" />
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-black" />
                )}
              </div>
              <div>
                <p className="font-medium">{txn.name}</p>
                <p className="text-sm text-gray-500">Account Name: {txn.account}</p>
                <p className="text-sm text-gray-500">{txn.date} | {txn.time}</p>
              </div>
            </div>
            <p className="font-semibold">{txn.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
