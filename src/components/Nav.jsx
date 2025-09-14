import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Search, ShoppingBag } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <img src={logo} alt="Apple Logo" className="w-6 h-6 md:w-8 md:h-8" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <li className="hover:underline cursor-pointer">Store</li>
          <li className="hover:underline cursor-pointer">Mac</li>
          <li className="hover:underline cursor-pointer">iPad</li>
          <li className="hover:underline cursor-pointer">iPhone</li>
          <li className="hover:underline cursor-pointer">Watch</li>
          <li className="hover:underline cursor-pointer">AirPods</li>
          <li className="hover:underline cursor-pointer">TV & Home</li>
          <li className="hover:underline cursor-pointer">Entertainment</li>
          <li className="hover:underline cursor-pointer">Accessories</li>
          <li className="hover:underline cursor-pointer">Support</li>
        </ul>

        {/* Right side: Search + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Search Icon (visible in all screens) */}
          <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />

          {/* Shopping Bag Icon */}
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-300" />

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden text-white text-xl ml-2"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul
          className={`md:hidden flex flex-col bg-black text-white space-y-4 p-4 text-center text-sm font-medium transition-all duration-300 ${
            open ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <li className="hover:underline cursor-pointer">Store</li>
          <li className="hover:underline cursor-pointer">Mac</li>
          <li className="hover:underline cursor-pointer">iPad</li>
          <li className="hover:underline cursor-pointer">iPhone</li>
          <li className="hover:underline cursor-pointer">Watch</li>
          <li className="hover:underline cursor-pointer">AirPods</li>
          <li className="hover:underline cursor-pointer">TV & Home</li>
          <li className="hover:underline cursor-pointer">Entertainment</li>
          <li className="hover:underline cursor-pointer">Accessories</li>
          <li className="hover:underline cursor-pointer">Support</li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
