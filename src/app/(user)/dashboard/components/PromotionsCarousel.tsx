'use client';

import React from 'react';

const promos = [
  {
    title: 'Enjoy seamless international transactions with zero fees',
    subtitle: 'Easy With pinnacle pay',
  },
  {
    title: 'Send money globally with no hidden charges',
    subtitle: 'Fast & Secure with Pinnacle Pay',
  },
  {
    title: 'Experience borderless payments anytime',
    subtitle: 'Reliable with Pinnacle Pay',
  },
];

const PromoCarousel = () => {
  return (
    <div className="w-full">
      {/* Carousel */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-4 px-4 py-2 w-max">
          {promos.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90vw] md:w-[500px] bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-lg md:text-xl font-semibold">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mt-2">{item.subtitle}</p>
              {/* <div className="mt-4 h-24 rounded-xl bg-gray-200 dark:bg-neutral-600" /> */}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-2 space-x-1">
        {promos.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === 0 ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-neutral-500'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PromoCarousel;
