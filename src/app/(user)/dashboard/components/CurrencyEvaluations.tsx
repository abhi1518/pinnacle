


'use client';

// import Image from 'next/image';

const currencies = [
  {
    code: 'USD',
    value: '$ 12,0880',
    flag: '🇺🇸',
  },
  {
    code: 'EUR',
    value: '$ 12,0880',
    flag: '🇪🇺',
  },
  {
    code: 'INR',
    value: '$ 12,0880',
    flag: '🇮🇳',
  },
];

export default function CurrencyEvaluations() {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Current Currency Evaluations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currencies.map((item) => (
          <div
            key={item.code}
            className="bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] rounded-2xl p-4 relative shadow-sm"
          >
            {/* <Image
              src={item.flag}
              alt={`${item.code} flag`}
              width={28}
              height={28}
              className="absolute top-3 right-3 rounded-full"
            /> */}
            <span className="absolute top-3 right-3 rounded-full">{item.flag}</span>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">{item.code}</p>
            <p className="text-lg font-semibold mt-1">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
