import React from "react";
import logo from "./../assets/Images/logo.jpg";
import {
  HiHome,
  HiSearch,
  HiStar,
  HiPlay,
  HiDesktopComputer,
  HiPlus,
  HiDotsVertical
} from "react-icons/hi";

function Header() {
  const menu = [
    { 
        name: "HOME", 
        icon: HiHome 
    },
    {
         name: "SEARCH", 
        icon: HiSearch
     },
    {
         name: "WATCH LIST",
         icon: HiPlus
         },
    { 
        name: "ORIGINALS",
         icon: HiStar
         },
    {
         name: "MOVIES",
          icon: HiPlay

     },
    {
         name: "SERIES",
     icon: HiDesktopComputer
     }
  ];

  return (
    <div className="flex items-center gap-8 p-4">
      <img
        src={logo}
        className="w-[80px] md:w-[115px] object-cover"
        alt="logo"

      />

      <div className="flex gap-6">
        {menu.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 cursor-pointer hover:text-white"
          >
            <item.icon className="text-xl" />
            <span className="hidden md:block">{item.name}</span>
          </div>
        ))}
      </div>

      <HiDotsVertical className="text-xl ml-auto cursor-pointer" />
    </div>
  );
}

export default Header;
