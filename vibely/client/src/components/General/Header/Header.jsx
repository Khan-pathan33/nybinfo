import React, { useState, useEffect } from "react";
import Frame from "..//..//../assets/headerImage/Frame.png";
import UserIcon from "..//..//../assets/headerImage/UserIcon.png";
import { Search } from "lucide-react";
import { TbMenu2, TbMenu3 } from "react-icons/tb";

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [prevSearches, setPrevSearches] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const savedSearch =
      JSON.parse(localStorage.getItem("navbarSearches")) || [];
    setPrevSearches(savedSearch);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      const searchLower = search.toLowerCase();

      const exists = prevSearches.some(
        (item) => item.toLowerCase() === searchLower
      );

      if (!exists) {
        const updatedSearches = [search, ...prevSearches];
        setPrevSearches(updatedSearches);
       
      }

      setSearch("");
    }
  };

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-[140px] flex justify-center items-center bg-[#FFFCF6] z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <nav className="w-full max-w-[1621.08px] h-[120px] flex items-center justify-between px-4 md:px-8 lg:px-[53px]">

          {/* Left */}
          <div className="flex items-center gap-[85px] pl-10 md:pl-0">
            <div className="flex items-center w-[113.08px]">
              <img src={Frame} alt="logo" className="object-contain" />
            </div>

            <div className="hidden lg:flex items-center gap-[60px] font-poppins text-[#252525] h-[33px]">
              <p className="text-[#C80000] text-[22px] font-semibold cursor-pointer">
                HOME
              </p>
              <p className="hover:text-[#C80000] text-[22px] font-medium cursor-pointer">
                EVENT ORGANIZERS
              </p>
              <p className="hover:text-[#C80000] text-[22px] font-medium cursor-pointer">
                SERVICE PROVIDERS
              </p>
              <p className="hover:text-[#C80000] text-[22px] font-medium cursor-pointer">
                ABOUT US
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-[12px] md:gap-[41px]">

            {/* Desktop Search */}
            <div className="hidden md:flex items-center justify-center border border-[#7A0000] rounded-full h-[61px] w-[453px] pl-5 pr-4 gap-[10px]">
              <div className="w-[375px] h-[27px] flex items-center gap-[10px]">
                <Search className="w-[21.13px] h-[21.13px] text-[#000000]" />
                <input
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  onKeyDown={handleSearchSubmit}
                  placeholder="Search for Events, Organizers, Services"
                  className="flex-1 text-[#9F9F9F] outline-none bg-transparent text-[18px]"
                />
              </div>
            </div>

            {/* Mobile Search */}
            <div className="flex md:hidden items-center justify-center border border-[#7A0000] rounded-full h-[45px] w-[220px] pl-4 pr-3 gap-[8px]">
              <Search className="w-[18px] h-[18px]" />
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                onKeyDown={handleSearchSubmit}
                placeholder="Search"
                className="flex-1 text-[#9F9F9F] outline-none bg-transparent text-[14px]"
              />
            </div>

            {/* Desktop User */}
            <div className="hidden md:flex w-[58px] h-[58px] rounded-full overflow-hidden border border-[#E7E7E7]">
              <img src={UserIcon} alt="user" className="w-full h-full object-cover" />
            </div>

            {/* Hamburger */}
            <button
              className="text-3xl text-[#7A0000] lg:hidden"
              onClick={toggleMenu}
            >
              {showMenu ? <TbMenu3 /> : <TbMenu2 />}
            </button>

          </div>
        </nav>
      </header>

      {showMenu && (
        <div className="lg:hidden fixed top-[140px] left-0 w-full bg-[#FFFCF6] shadow-md z-40 h-[360px] flex flex-col items-center p-10 backdrop-blur-xl">

          <div className="flex flex-col items-center font-poppins  gap-[41px] py-8">

            <div className="w-[58px] h-[58px] rounded-full overflow-hidden border border-[#E7E7E7]">
              <img src={UserIcon} alt="user" className="w-full h-full object-cover" />
            </div>

            <p className="text-[#C80000] text-[22px] font-semibold">
              HOME
            </p>

            <p className="text-[22px] font-medium hover:text-[#C80000]">
              EVENT ORGANIZERS
            </p>

            <p className="text-[22px] font-medium hover:text-[#C80000]">
              SERVICE PROVIDERS
            </p>

            <p className="text-[22px] font-medium hover:text-[#C80000]">
              ABOUT US
            </p>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;