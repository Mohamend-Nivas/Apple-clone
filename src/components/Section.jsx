import React from "react";
import macImg from "../assets/macbook-top.jpg";
import watchImg from "../assets/watch.jpg";
import Button from "./Button";


const ProductSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-300 to-white py-16 px-6 space-y-20">
      {/* MacBook Section (Image Right) */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div className="text-center md:text-left">
          <h1 className="font-inter text-4xl sm:text-5xl font-bold mb-6 text-black">
            MacBook Pro
          </h1>

          <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-3">
            Supercharged for pros. Powered by M2 Pro and M2 Max chips.
          </p>
          <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-3">
            Incredible battery life and a stunning Liquid Retina XDR display.
          </p>
          <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-6">
            The ultimate laptop for creators and developers alike.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button variant="outline">Learn more</Button>
            <Button variant="outline">Buy</Button>
          </div>
        </div>

        {/* Image Right */}
        <div className="flex justify-center">
          <img
            src={macImg}
            alt="MacBook Pro"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Apple Watch Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Mobile Text Top */}
        <div className="text-center md:hidden flex flex-col justify-center items-center px-4">
          <h1 className="font-inter text-4xl sm:text-5xl font-bold mb-3 text-black">
            Apple Watch Series 9
          </h1>
          <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-1">
            The most advanced health features on your wrist.
          </p>
          <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-1">
            Track fitness, monitor heart health, and stay connected.
          </p>
          <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-4">
            Made for everyday wellness and productivity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Learn more
            </button>
            <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Buy
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center order-2 md:order-1">
          <img
            src={watchImg}
            alt="Apple Watch Series 9"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Desktop Text Right */}
        <div className="hidden md:flex flex-col text-left md:order-2 order-3">
          <h1 className="font-inter text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black">
            Apple Watch Series 9
          </h1>
          <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-3">
            The most advanced health features on your wrist.
          </p>
          <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-3">
            Track fitness, monitor heart health, and stay connected.
          </p>
          <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-6">
            Made for everyday wellness and productivity.
          </p>

          <div className="flex flex-wrap justify-start gap-4">
            <Button variant="outline">Learn more</Button>
            <Button variant="outline">Buy</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
