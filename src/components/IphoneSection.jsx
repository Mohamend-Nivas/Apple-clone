import React from "react";
import iphoneImg from "../assets/iphone-16.jpg"; 
import Button from "./Button";

const IphoneSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white text-center py-16">
      {/* Heading with Gradient */}
      <h1 className="font-inter text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black">
        iPhone 16 Pro
      </h1>

      {/* Description */}
      <p className="font-inter font-semibold text-gray-500 text-base sm:text-lg mb-2">
        Designed with aerospace-grade titanium for strength and lightness.
      </p>
      <p className="font-inter font-semibold text-gray-500 text-base sm:text-lg mb-2">
        Powered by the all-new A18 Pro chip for extreme performance.
      </p>
      <p className="font-inter font-semibold text-gray-500 text-base sm:text-lg mb-2">
        Advanced camera system that captures pro-level photos and videos.
      </p>
      <p className="font-inter font-semibold text-gray-500 text-base sm:text-lg mb-4">
        Up to 30 hours of battery life. The future in your hands.
      </p>

      {/* Available Date */}
      <p className="text-gray-500 mb-6">Available from 22 Sep</p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <Button variant="outline">Learn more</Button>
        <Button variant="outline">Pre-order</Button>
      </div>

      {/* iPhone Image */}
      <div className="w-screen flex justify-center">
        <img
          src={iphoneImg}
          alt="iPhone 16 Pro"
          className="w-full sm:w-5/6 lg:w-3/4 mx-auto object-contain"
        />
      </div>
    </section>
  );
};

export default IphoneSection;
