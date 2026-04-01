import { FaPlay } from "react-icons/fa";
import hero from "../../assets/New folder/assets/products/banner.png";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-20 pb-20 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content Column */}
        <div className="space-y-6 md:space-y-7 text-center lg:text-left order-2 lg:order-1">

          {/* New Badge */}
          <div className="inline-flex items-center space-x-2 bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            <span>New: AI-Powered Tools Available</span>
          </div>

          {/* Main Heading: Responsive Font Sizes */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Supercharge Your <br className="hidden md:block" />
            <span className="text-slate-800">Digital Workflow</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-[17px] text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Text Link */}
          <p className="text-[15px] font-semibold text-gray-400 cursor-pointer hover:underline">
            Explore Products
          </p>


          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">

            {/* Primary Button */}
            <button className="w-full sm:w-auto bg-[#7C3AED] text-white px-9 py-4 rounded-full font-extrabold shadow-lg shadow-purple-200 hover:bg-purple-700 hover:scale-105 transition">
              Explore Products
            </button>

            {/* Secondary Button */}
            <button className="w-full sm:w-auto flex items-center justify-center space-x-3 border border-purple-200 px-9 py-4 rounded-full font-extrabold text-purple-700 hover:bg-purple-50 transition">
              <div className="bg-purple-600 rounded-full p-2 flex items-center justify-center">
                <FaPlay className="text-white text-[10px]" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="relative order-1 lg:order-2">
          <img
            src={hero}
            alt="Digital Workflow UI Illustration"
            className="w-full h-auto object-contain max-w-125 lg:max-w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;