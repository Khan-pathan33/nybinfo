import React, { useState } from "react";
import Main from "..//..//../assets/heroImage/Main.png";
import Mini1 from "..//..//../assets/heroImage/Mini1.png";
import Mini2 from "..//..//../assets/heroImage/Mini2.png";
import ButtonSmall from "../../General/ButtonSmall/ButtonSmall";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {

  const blocks = [

    {
      id: 0,
      content: (
        <div className="relative h-[802.62px] overflow-hidden">

          <img
            src={Main}
            className="w-full h-full object-cover"
            alt="Hero"
          />

          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute bottom-7 left-10 right-10 text-[#FFFFFF]">

            <h1 className="text-[64px] font-bold font-poppins leading-108%">
              We Organize.
            </h1>

            <h2 className="text-[60px] italic font-regular text-[#FFFFFF] font-OliverOblique">
              You <span className="text-[#C80000] font-regular font-OliverOblique">CELEBRATE!</span>
            </h2>

            <hr className="w-full border-t border-[#686868] mt-6 mb-2 opacity-70" />

            <p className="text-[18px] text-[#E8E7E7] font-light leading-108%">
              Vibely is your ultimate{" "}
              <span className="bg-gradient-to-r from-[#FFE600] via-[#FFE046] to-[#C66000] bg-clip-text text-transparent">
                event planning hub.
              </span>
            </p>

          </div>

          <div className="absolute bottom-30 right-10 w-[34px] h-[34px] cursor-pointer">
            <ButtonSmall />
          </div>

        </div>
      ),
    },

    {
      id: 1,
      content: (
        <div className="relative h-[306.33px] overflow-hidden">

          <img
            src={Mini1}
            className="w-full h-full object-cover"
            alt="Stage"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <p className="absolute bottom-[7px] right-0 left-0 flex justify-center items-center leading-[108%] text-[#FFFFFF] text-[18px]">
            • Premium Events Stage Sets
          </p>

          <div className="absolute bottom-14 right-[31px] w-[34px] h-[34px] cursor-pointer">
            <ButtonSmall />
          </div>

        </div>
      ),
    },

    {
      id: 2,
      content: (
        <div className="relative h-[489.33px] overflow-hidden">

          <img
            src={Mini2}
            className="w-full h-full object-cover"
            alt="Outdoor"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <p className="absolute bottom-[7px] right-0 left-0 flex justify-center items-center leading-[108%] text-[#FFFFFF] text-[18px]">
            • Outdoor Mehendi / Family Events
          </p>

          <div className="absolute bottom-14 right-5 w-[30px] h-[30px] cursor-pointer">
            <ButtonSmall />
          </div>

        </div>
      ),
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blocks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + blocks.length) % blocks.length);
  };

  return (

    <div className="w-full flex justify-center pt-[140px] px-6">

      <div className="max-w-[1648px] w-full h-[815.55px] border-7 border-[#191919] bg-[#191919]">

        {/* Desktop Layout */}

        <div className="hidden md:grid grid-cols-12 gap-[4px]">

          {/* Main Image */}

          <div className="col-span-8">
            {blocks[0].content}
          </div>

          {/* Right Column */}

          <div className="col-span-4 flex flex-col gap-[4px]">

            <div>
              {blocks[1].content}
            </div>

            <div>
              {blocks[2].content}
            </div>

          </div>

        </div>

        {/* Mobile Layout */}

        <div className="md:hidden relative">

          {blocks[currentIndex].content}

          {/* Carousel Buttons */}

          <div className="absolute top-1/2 w-full flex justify-between px-4">

            <button
              className="bg-black/40 p-2 rounded-full cursor-pointer"
              onClick={handlePrev}
            >
              <ChevronLeft className="text-[#FFFFFF] w-6 h-6" />
            </button>

            <button
              className="bg-black/40 p-2 rounded-full cursor-pointer"
              onClick={handleNext}
            >
              <ChevronRight className="text-[#FFFFFF] w-6 h-6" />
            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default HeroSection;