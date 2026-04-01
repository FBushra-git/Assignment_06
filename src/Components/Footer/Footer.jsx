import React from "react";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="w-full font-sans bg-[#0F172A] text-white">
        {/* Main Footer Container */}
        <div className="px-5 py-12 md:px-10 lg:px-32 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">DigiTools</h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Product */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="hover:text-white cursor-pointer transition-colors">
                    Features
                  </li>
                  <li className="hover:text-white cursor-pointer transition-colors">
                    Pricing
                  </li>
                  <li className="hover:text-white cursor-pointer transition-colors">
                    Templates
                  </li>
                  <li className="hover:text-white cursor-pointer transition-colors">
                    Integrations
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="hover:text-white cursor-pointer transition-colors">
                    About
                  </li>
                  <li className="hover:text-white cursor-pointer transition-colors">
                    Blog
                  </li>
                  <li className="hover:text-white cursor-pointer transition-colors">
                    Careers
                  </li>
                  <li className="hover:text-white cursor-pointer transition-colors">
                    Press
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-4">
                  Resources
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="hover:text-white cursor-pointer transition-colors">
                    Documentation
                  </li>
                  <li className="hover:text-white cursor-pointer transition-colors">
                    Help Center
                  </li>
                  <li className="hover:text-white cursor-pointer transition-colors">
                    Community
                  </li>
                  <li className="hover:text-white cursor-pointer transition-colors">
                    Contact
                  </li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-3 lg:col-span-1 mt-6 md:mt-8 lg:mt-0">
                <h3 className="font-bold text-base md:text-lg mb-4">
                  Social Links
                </h3>
                <div className="flex flex-row gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-purple-500 hover:text-white transition-all cursor-pointer shrink-0">
                    <FaInstagram />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-purple-500 hover:text-white transition-all cursor-pointer shrink-0">
                    <TiSocialFacebookCircular />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-purple-500 hover:text-white transition-all cursor-pointer shrink-0">
                    <BsTwitterX />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-800 mt-12 md:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Terms of Service
              </span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Cookies
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;