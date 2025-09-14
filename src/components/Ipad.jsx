import React from "react";
import ipadImg from "../assets/ipad.jpg"; // iPad image path

const Ipad = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center text-white h-[600px] bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${ipadImg})` }}
    >
      <div className="relative z-10 px-6">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-semibold text-blue-400">
          iPad Pro
        </h2>
        <h1
          className="font-pro font-extrabold bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent 
             text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-none"
        >
          M4
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-200 max-w-2xl mx-auto text-base sm:text-lg">
          The ultimate iPad experience with the breakthrough M4 chip, an all-new
          Ultra Retina XDR display, Apple Pencil Pro, and support for powerful
          creative workflows like never before.
        </p>

        {/* Release Info */}
        <p className="mt-4 text-sm text-gray-400">
          Pre-order starting at 6:00 PM IST on 20 Sep
          <br /> Available from 27 Sep
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition">
            Learn more
          </button>
          <button className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition">
            View pricing
          </button>
        </div>
      </div>

      {/* Optional Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default Ipad;
