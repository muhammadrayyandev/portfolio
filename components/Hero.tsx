"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row mt-20 md:mt-0">
      {/* Right: Image Section (Mobile First) */}
      <div className="relative bg-white w-full md:w-1/2 flex justify-center items-center p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden order-1 md:order-2">
        {/* Animated Background Dots */}
        <div className="absolute inset-0">
          <div className="animate-dots opacity-60"></div>
        </div>

        {/* Profile Image */}
        <div className="relative z-10 shadow-2xl shadow-black">
          <div className="relative">
            <img
              src="/profile.png"
              alt="Tayyab Khattak"
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-xl"
            />
            <div className="absolute inset-0 border-2 border-black translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Left: Text Section */}
      <div className="bg-black text-white flex flex-col justify-center items-start w-full md:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 uppercase font-serif">
          Full Stack <br /> Developer
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 leading-relaxed">
          I like to craft solid and scalable full-stack web products{" "}
          <br className="hidden sm:block" />
          with great user experiences and modern design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-200 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-full font-semibold text-center hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
