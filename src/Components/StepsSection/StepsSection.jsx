import React from "react";


import userImg from "../../assets/New folder/assets/products/user.png";
import productImg from "../../assets/New folder/assets/products/package.png";
import createImg from "../../assets/New folder/assets/products/rocket.png";

const StepsSection = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      image: userImg,
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      image: productImg,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      image: createImg,
    },
  ];

  return (
    <div className="w-full mt-10 font-sans bg-gray-50/50">
      <div className="px-5 py-12 md:px-12 lg:px-32 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white p-8 md:p-6 lg:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
            >
              {/* Step Number Badge */}
              <div className="absolute top-6 right-6 bg-[#7C3AED] text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full shadow-lg">
                {step.id}
              </div>

              {/* Icon Image Container */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-8">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-62.5">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;