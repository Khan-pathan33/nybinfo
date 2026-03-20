import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ArrowButton = () => {
  return (
    <button className="w-[34px] h-[34px] flex items-center justify-center rounded-full  cursor-pointer bg-[#A70000AB] hover:bg-[#a00000] transition">
      <FaChevronRight className="text-[#FFFFFF]  text-[12px]" />
    </button>
  );
};

export default ArrowButton;