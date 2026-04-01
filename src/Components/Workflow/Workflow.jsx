import React from "react";

const Workflow = () => {
  return (
    <div>
      <div className="w-full mt-18 font-sans">

        <div className="bg-[#7C3AED] text-white py-12 px-6 md:py-13 md:px-12 lg:py-18 flex flex-col items-center text-center">

          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl">
            Ready To Transform Your Workflow?
          </h2>

          <p className="mt-3 text-[12px] md:text-[16px] lg:text-lg text-purple-100 max-w-2xl leading-relaxed">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>

          {/* Action Buttons Part : */}
          <div className="mt-9 md:mt-10 flex flex-col sm:flex-row items-center gap-4">
            {/* Button : Explore Products */}
            <button className="w-full sm:w-auto px-5 py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5 bg-white text-[#7C3AED] font-bold rounded-full transition-all hover:bg-purple-50 hover:scale-105 active:scale-95 shadow-lg text-base">
              Explore Products
            </button>

            {/* Button : View Pricing */}
            <button className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-2.5 lg:px-7 lg:py-3 bg-transparent text-white font-bold rounded-full border-2 border-white transition-all hover:bg-white hover:text-[#7C3AED] hover:scale-105 active:scale-95 text-base">
              View Pricing
            </button>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 md:mt-10 text-xs md:text-sm text-purple-200">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workflow;