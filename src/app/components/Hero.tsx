"use client";
import React from "react";
import Image from "next/image";
import background from "../assets/items/bg1.png";
import bodybuilder from "../assets/items/pngegg.png";

const Hero = () => {
  return (
  <div className=" w-full flex justify-center hero-container bg-white">
    {/* Web Version */}
  <div className=" w-[90%] h-fit mt-4 relative md:block phone-max-brakepoint"> 
    <Image
      src={background}
      alt="background"
      className="w-full h-auto rounded-2xl max-h-[800px] "
    />

    <div className="absolute top-0 text-center text-white w-full h-full flex justify-between ">

      {/* Left Section - Text and Button */}
      <div className="h-3/5 w-1/4 mt-[6.25%] text-black flex justify-between items-center flex-col hero-left">
        <h1 className="font-extrabold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
          NO PAIN
        </h1>
        <p className="p-2 ml-6 text-xs sm:text-sm md:text-base lg:text-lg">
          La <span className="text-[#fe6d2f]">NRGym</span> îți oferim antrenamente diverse, pentru toate nivelele. Fii mai puternic și sănătos alături de noi!
        </p>
        <a href="#about" className="costum-cta items-center flex justify-center text-xs sm:text-sm md:text-base lg:text-lg">
          Afla mai multe
        </a>
      </div>

      {/* Bodybuilder Image */}
      <div className="h-full w-1/3 translate-y-[20%] translate-x-[-15%] bodybuilder-image">
        <Image src={bodybuilder} alt="bodybuilder" className="scale-[1.3]" /> 
      </div>

      {/* Right Section - "No Gain" & Scroll Button */}
      <div className="h-[calc(3/2)] w-1/4 mt-[6.25%] flex justify-start items-start relative hero-right">
        <h1 className="font-extrabold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-black">
          NO GAIN
        </h1>

        <a href="#about" className="justify-center items-center absolute bottom-0 right-0 mb-5 mr-6 sm:mr-10 sm:mb-10 scroll-btn">
          <div className="scrolldown">
            <div className="chevrons">
              <div className="chevrondown"></div>
            </div>
          </div>
        </a>
      </div>

    </div>
  </div>
  
  <div className="w-full sm:block md:hidden h-[800px] relative mt-6">
  <Image
    src={background}
    alt="background"
    className="w-full h-full object-cover" // Ensure no repetition
  />
  <div className="absolute top-0 text-center text-black w-full h-full flex flex-col justify-center items-center px-4">

    {/* Left Section - Mobile Text and Button */}
    <div className="text-center w-full mb-6">
      <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        NO PAIN - NO GAIN
      </h1>
      <p className="text-sm sm:text-base md:text-lg mt-4 px-6 sm:px-12 mb-5">
        La <span className="text-[#fe6d2f]">NRGym</span> îți oferim antrenamente diverse, pentru toate nivelele. Fii mai puternic și sănătos alături de noi!
      </p>
      <a href="#about" className=" bg-[#fe6d2f] text-white py-2 px-4 rounded-3xl text-sm sm:text-base hover:bg-[#fe6d2f] transition duration-300">
        Afla mai multe
      </a>
    </div>

    {/* Bodybuilder Image */}
    <div className="mt-4">
      <Image src={bodybuilder} alt="bodybuilder" className="scale-[1.0]" />
    </div>

    {/* Scroll Button */}
    <a href="#about" className="justify-center items-center absolute bottom-0 mt-6  sm:mb-10 scroll-btn">
      <div className="scrolldown text-white">
        <div className="chevrons">
          <div className="chevrondown"></div>
        </div>
      </div>
    </a>

  </div>
</div>


</div>


  );
};

export default Hero;
