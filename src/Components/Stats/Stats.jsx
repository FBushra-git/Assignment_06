import React from 'react';

const Stats = () => {
  // Stats Data from Image
  const statsData = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    <section className="bg-[#7F3FFF] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center divide-y md:divide-y-0 md:divide-x divide-white/20">

          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-6 py-6 md:py-0"
            >
              {/* Stat Value */}
              <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                {stat.value}
              </h2>

              {/* Stat Label */}
              <p className="text-lg md:text-xl font-medium mt-1 text-white/90">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;