import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = ({ cartCount, onCartClick}) => {

  const links = [
    { name: 'Products', id: 'products' },
    { name: 'Features', id: 'features' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' }
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">

        {/* Logo  */}
        <div
          className="text-2xl font-black text-[#7C3AED] cursor-pointer tracking-tight"

        >
          DigiTools
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-8 font-semibold text-slate-600">
          {links.map((link) => (
            <button
              key={link.id}

              className="hover:text-[#7C3AED] transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-5 md:gap-8">
          {/* Cart Icon */}
          <div className="relative cursor-pointer group" onClick={onCartClick}>
            <AiOutlineShoppingCart className="w-7 h-7 text-slate-700 group-hover:text-[#7C3AED] transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login & Get Started */}
          <div className="flex items-center gap-6">
            <button className="hidden sm:block font-bold text-slate-700 hover:text-[#7C3AED]">
              Login
            </button>
            <button className="bg-[#7C3AED] text-white px-7 py-2.5 rounded-full font-bold shadow-lg shadow-purple-100 hover:bg-purple-700 transition-all active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;