import React from "react";

const SimplePricing = () => {
  return (
    <div>
      <div className="w-full mt-10 font-sans">
        <div className="px-5 py-12 md:px-10 lg:px-32 lg:py-20">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-18">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-15 items-center max-w-7xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white border border-slate-100 rounded-4xl p-6 md:p-6 lg:p-10 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
              <h3 className="text-xl font-bold text-slate-900">Starter</h3>
              <p className="text-slate-500 text-xs lg:text-sm mt-1">
                Perfect for getting started
              </p>

              <div className="mt-6 mb-6">
                <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">
                  $0
                </span>
                <span className="text-slate-400 font-medium text-sm">
                  /Month
                </span>
              </div>

              <ul className="space-y-3 mb-8 grow">
                {[
                  "Access to 10 free tools",
                  "Basic templates",
                  "Community support",
                  "1 project/mo",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-slate-600 text-xs lg:text-[14px]"
                  >
                    <svg
                      className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 lg:py-4 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold rounded-xl lg:rounded-2xl transition-all active:scale-[0.98] text-sm">
                Get Started
              </button>
            </div>

            {/* Pro Plan (Featured) */}
            <div className="relative bg-[#7C3AED] rounded-4xl p-6 md:p-7 lg:p-10 shadow-xl shadow-purple-200 transform md:scale-105 z-10 border-4 border-white/10 flex flex-col h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-[10px] lg:text-xs font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                Most Popular
              </div>

              <h3 className="text-xl font-bold text-white">Pro</h3>
              <p className="text-purple-100 text-xs lg:text-sm mt-1">
                Best for professionals
              </p>

              <div className="mt-6 mb-6">
                <span className="text-3xl lg:text-4xl font-extrabold text-white">
                  $29
                </span>
                <span className="text-purple-200 font-medium text-sm">
                  /Month
                </span>
              </div>

              <ul className="space-y-3 mb-8 grow">
                {[
                  "All premium tools",
                  "Unlimited templates",
                  "Priority support",
                  "Unlimited projects",
                  "Cloud sync",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-purple-50 text-xs lg:text-[14px]"
                  >
                    <svg
                      className="w-4 h-4 lg:w-5 lg:h-5 text-white shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 lg:py-4 bg-white hover:bg-purple-50 text-[#7C3AED] font-bold rounded-xl lg:rounded-2xl transition-all active:scale-[0.98] text-sm">
                Start Pro Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-slate-100 rounded-4xl p-6 md:p-6 lg:p-10 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
              <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
              <p className="text-slate-500 text-xs lg:text-sm mt-1">
                For teams and businesses
              </p>

              <div className="mt-6 mb-6">
                <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">
                  $99
                </span>
                <span className="text-slate-400 font-medium text-sm">
                  /Month
                </span>
              </div>

              <ul className="space-y-3 mb-8 grow">
                {[
                  "Everything in Pro",
                  "Team collaboration",
                  "Custom integrations",
                  "Dedicated support",
                  "SLA guarantee",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-slate-600 text-xs lg:text-[14px]"
                  >
                    <svg
                      className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 lg:py-4 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold rounded-xl lg:rounded-2xl transition-all active:scale-[0.98] text-sm">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePricing;