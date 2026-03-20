

import React, { useState } from "react";
import Main from "..//..//../assets/heroImage/Main.png";
import Mini1 from "..//..//../assets/heroImage/Mini1.png";
import Mini2 from "..//..//../assets/heroImage/Mini2.png";
import Button from "../ButtonSmall/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {

  const blocks = [
    {
      id: 0,
      content: (
        <div className="relative h-[600px] overflow-hidden">
          <img src={Main} className="w-full h-full object-cover" alt="Hero" />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-12 left-10 right-10 text-white">
            <h1 className="text-[64px] font-bold leading-tight">
              We Organize.
            </h1>

            <h2 className="text-[60px] italic font-light">
              You <span className="text-[#C80000] font-semibold">CELEBRATE!</span>
            </h2>

            <hr className="w-full border-t border-[#7A7A7A] mt-6 mb-2 opacity-70" />

            <p className="text-[18px] text-gray-200">
              Vibely is your ultimate{" "}
              <span className="text-yellow-400">event planning hub.</span>
            </p>
          </div>

          <div className="absolute bottom-30 right-10 w-[34px] h-[34px] cursor-pointer">
            <Button />
          </div>
        </div>
      ),
    },

    {
      id: 1,
      content: (
        <div className="relative h-[298px] overflow-hidden">
          <img src={Mini1} className="w-full h-full object-cover" alt="Stage" />

          <div className="absolute inset-0 bg-black/30"></div>

          <p className="absolute bottom-[7px] right-0 left-0 flex justify-center items-center leading-[108%] text-white text-[18px]">
            • Premium Events Stage Sets
          </p>

          <div className="absolute bottom-14 right-[31px] w-[34px] h-[34px] cursor-pointer">
            <Button />
          </div>
        </div>
      ),
    },

    {
      id: 2,
      content: (
        <div className="relative h-[298px] overflow-hidden">
          <img src={Mini2} className="w-full h-full object-cover" alt="Outdoor" />

          <div className="absolute inset-0 bg-black/30"></div>

          <p className="absolute bottom-[7px] right-0 left-0 flex justify-center items-center leading-[108%] text-white text-[18px]">
            • Outdoor Mehendi / Family Events
          </p>

          <div className="absolute bottom-14 right-5 w-[30px] h-[30px] cursor-pointer">
            <Button />
          </div>
        </div>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % blocks.length);
      setFade(true);
    }, 200);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + blocks.length) % blocks.length);
      setFade(true);
    }, 200);
  };

  return (
    <div className="w-full flex justify-center mt-[140px] md:mt-[180px] px-6">

      <div className="max-w-[1648px] w-full gap-[4px] border-7 border-[#191919] bg-black">

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-12 gap-[4px]">

          <div className="col-span-8">
            {blocks[0].content}
          </div>

          <div className="col-span-4 flex flex-col gap-[4px]">
            {blocks.slice(1).map((block) => (
              <div key={block.id}>{block.content}</div>
            ))}
          </div>

        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative">

          <div
            className={`transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {blocks[currentIndex].content}
          </div>

          {/* Mobile Chevrons */}
          <div className="absolute top-1/2 w-full flex justify-between px-4">

            <button
              className="bg-black/40 p-2 rounded-full cursor-pointer"
              onClick={handlePrev}
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>

            <button
              className="bg-black/40 p-2 rounded-full cursor-pointer"
              onClick={handleNext}
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default HeroSection;