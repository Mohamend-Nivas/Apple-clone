import React from "react";
import Button from "./Button";
import airpodsImg from "../assets/airpods-pro.png";

const AirpodsSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white text-center py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="font-inter text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          AirPods Pro 3
        </h1>

        {/* Description */}
        <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-2">
          Featuring the world’s best in-ear Active Noise Cancellation.
        </p>
        <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-2">
          Exceptional sound quality. All-new heart rate sensing during workouts.
        </p>
        <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-2">
          Live Translation to communicate across languages.
        </p>
        <p className="font-inter font-semibold text-gray-600 text-base sm:text-lg mb-4">
          And improved battery life with up to 8 hours of listening time.
        </p>

        {/* Available Date */}
        <p className="text-gray-600 mb-6">Available From 19 Sep</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <Button variant="outline">Learn more</Button>
          <Button variant="outline">Pre-order</Button>
        </div>

        {/* AirPods Image */}
        <div className="flex justify-center">
          <img
            src={airpodsImg}
            alt="Apple AirPods Pro 3 — white earbuds"
            className="w-full sm:w-5/6 lg:w-3/4 object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AirpodsSection;
