import React from "react";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Title */}
      <h1
        className="font-hero bg-gradient-to-r from-gray-100 via-gray-200 to-white bg-clip-text text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] 
                    font-extrabold leading-tight tracking-tight mb-4"
      >
        Apple
      </h1>

      {/* Subtitle */}
      <p className="mb-6 text-base sm:text-lg">Big and bigger.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          Learn more
        </button>
        <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          Buy
        </button>
      </div>
    </section>
  );
};

export default Hero;
