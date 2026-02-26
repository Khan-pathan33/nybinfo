// import { topicsList } from "../data/topicsData";

// const Navbar = () => {
//   return (
//     <nav className="fixed w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg z-50">
//       <div className="px-6 py-3 flex flex-wrap gap-4">
//         {topicsList.map(topic => (
//           <a
//             key={topic.id}
//             href={`#${topic.id}`}
//             className="hover:text-yellow-300 transition text-sm"
//           >
//             {topic.label}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState } from 'react'
// import { GoHeartFill} from "react-icons/go"
// import { HiShoppingBag } from "react-icons/hi2"
// import { IoSearch } from "react-icons/io5";
// import { TbMenu2, TbMenu3 } from "react-icons/tb";
// import { Link } from 'react-router-dom';



// const Navbar = () => {

//         const [showMenu, setShowMenu] = useState(false)
//         const [isScrolled, setScrolled] = useState(false)


//         const toggleMenu =() => {
//             setShowMenu(!showMenu);
//         }

//         useEffect(()=> {
//             const handleScroll= ()=>{
//                 setScrolled(window.scrollY > 10)
//             }

//             window.addEventListener('scroll', handleScroll)
//             return ()=> window.removeEventListener('scroll', handleScroll)
//         },[])

//   return (
// //     <header className={`bg-white fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
// //     isScrolled ? 'shadow-lg' : 'shadow-none'
// //   }`}>
// <header
//   className={`bg-white fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
//     isScrolled
//       ? 'shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
//       : 'shadow-none'
//   }`}
// >
//         <nav className='max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex items-center justify-between'>

//             {/* Logo */}
//             <Link to='/' className='text-3xl font-bold' >
//                 Gr<span className='text-orange-500 bold uppercase'>O</span>cify</Link>


//             {/* header Menu */}
//             <ul className='md:flex items-center gap-x-15 hidden'>
//                 <li>
//                     <a href='#' className='font-semibold tracking-wider text-orange-500'>Home</a>
                    
//                 </li>
//                 <li>
//                     <a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                    
//                 </li>
//                 <li>
//                     <a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                    
//                 </li>
//                 <li>
//                     <a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    
//                 </li>
//             </ul>

//             {/* Nav Action heart and shopping bag icons for that npm install react-icons */}
//             <div className='flex items-center gap-x-5'>
//                 {/* Input Field searchbar*/}
//                 <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
//                     <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off'
//                     className='flex-1 h-[5vh] px-3 focus:outline-none'  />
//                     <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 
//                     h-10 flex justify-center items-center rounded-full text-xl'>
//                         <IoSearch />
//                     </button>
//                 </div>
//                 <a href="" className='text-zinc-800 text-2xl'>
//                     <GoHeartFill />
//                 </a>
//                 <a href="" className='text-zinc-800  text-2xl'>
//                     <HiShoppingBag />
//                 </a>
//                     {/* Hamburger/menu icon*/}
//                     <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
//                         {showMenu ? <TbMenu3 /> :<TbMenu2 /> }

//                     </a>
//             </div>

//                 {/* Mobile Menu */}
//                  <ul className={`flex flex-col gap-y-12 bg-orange-500/25 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center 
//                  gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ''} `}>
//                 <li>
//                     <a href='#' className='font-semibold tracking-wider text-orange-500'>Home</a>
                    
//                 </li>
//                 <li>
//                     <a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                    
//                 </li>
//                 <li>
//                     <a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                    
//                 </li>
//                 <li>
//                     <a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    
//                 </li>
//                  <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
//                     <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off'
//                     className='flex-1 h-[5vh] px-3 focus:outline-none'  />
//                     <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 
//                     h-10 flex justify-center items-center rounded-full text-xl'>
//                         <IoSearch />
//                     </button>
//                 </li>
//             </ul>

            
//         </nav>
//     </header>
//   )
// }

// export default Navbar

// import React, { useEffect, useState } from 'react'
// import { GoHeartFill } from "react-icons/go"
// import { HiShoppingBag } from "react-icons/hi2"
// import { IoSearch } from "react-icons/io5";
// import { TbMenu2, TbMenu3 } from "react-icons/tb";
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [isScrolled, setScrolled] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={`bg-white fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled
//         ? 'shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
//         : 'shadow-none'
//       }`}
//     >
//       <nav className='max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex items-center justify-between'>
//         {/* Logo */}
//         <Link to='/' className='text-3xl font-bold'>
//           Gr<span className='text-orange-500 bold uppercase'>O</span>cify
//         </Link>

//         {/* Header Menu */}
//         <ul className='md:flex items-center gap-x-15 hidden'>
//           <li>
//             <a href='#' className='font-semibold tracking-wider text-orange-500'>
//               Home
//             </a>
//           </li>
//           <li>
//             <a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>
//               About Us
//             </a>
//           </li>
//           <li>
//             <a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>
//               Process
//             </a>
//           </li>
//           <li>
//             <a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>
//               Contact Us
//             </a>
//           </li>
//         </ul>

//         {/* Nav Action (heart, shopping bag, searchbar, and menu toggle) */}
//         <div className='flex items-center gap-x-5'>
//           {/* Searchbar */}
//           <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
//             <input
//               type="text"
//               name="text"
//               id="text"
//               placeholder='Search...'
//               autoComplete='off'
//               className='flex-1 h-[5vh] px-3 focus:outline-none'
//             />
//             <button
//               className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'
//               aria-label="Search"
//             >
//               <IoSearch />
//             </button>
//           </div>

//           {/* Heart and Cart Icons */}
//           <a href="#" className='text-zinc-800 text-2xl' aria-label="Favorites">
//             <GoHeartFill />
//           </a>
//           <a href="#" className='text-zinc-800 text-2xl' aria-label="Shopping Bag">
//             <HiShoppingBag />
//           </a>

//           {/* Hamburger Icon for Mobile */}
//           <a
//             href="#"
//             className='text-zinc-800 text-3xl md:hidden'
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             {showMenu ? <TbMenu3 /> : <TbMenu2 />}
//           </a>
//         </div>

//         {/* Mobile Menu */}
//         <ul
//           className={`flex flex-col gap-y-12 bg-orange-500/25 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}
//         >
//           <li>
//             <a href='#' className='font-semibold tracking-wider text-orange-500'>
//               Home
//             </a>
//           </li>
//           <li>
//             <a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>
//               About Us
//             </a>
//           </li>
//           <li>
//             <a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>
//               Process
//             </a>
//           </li>
//           <li>
//             <a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>
//               Contact Us
//             </a>
//           </li>

//           {/* Searchbar in Mobile Menu */}
//           <li className='flex p-1 border-2 border-orange-500 rounded-full'>
//             <input
//               type="text"
//               name="text"
//               id="text"
//               placeholder='Search...'
//               autoComplete='off'
//               className='flex-1 h-[5vh] px-3 focus:outline-none'
//             />
//             <button
//               className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'
//               aria-label="Search"
//             >
//               <IoSearch />
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState } from "react";
// import { GoHeartFill } from "react-icons/go";
// import { HiShoppingBag } from "react-icons/hi2";
// import { IoSearch } from "react-icons/io5";
// import { TbMenu2, TbMenu3 } from "react-icons/tb";
// import { motion } from "framer-motion";
// import { topicsList } from "../data/topicsData"; // Make sure first item is "Topics"

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [isScrolled, setScrolled] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false); // Dropdown state

//   const toggleMenu = () => setShowMenu(!showMenu);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//   };

//   return (
//     <header
//       className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)]" : "shadow-none"
//       }`}
//     >
//       <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex items-center justify-between">

//         {/* Logo */}
//         <div className="text-3xl font-bold cursor-pointer">
//           Re<span className="text-orange-500 bold uppercase">A</span>ct
//         </div>

//         {/* Desktop Menu */}
//         <ul className="md:flex items-center gap-x-10 hidden relative">
//           {/* Topics Dropdown */}
//           <li
//             className="relative cursor-pointer font-semibold text-zinc-800"
//             onMouseEnter={() => setShowDropdown(true)}
//             onMouseLeave={() => setShowDropdown(false)}
//           >
//             Topics
//             <motion.ul
//               className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-3 w-40 flex flex-col"
//               initial="hidden"
//               animate={showDropdown ? "visible" : "hidden"}
//               variants={dropdownVariants}
//             >
//               {topicsList
//                 .filter((topic) => topic.id !== "topics") // Exclude "Topics" itself
//                 .map((topic) => (
//                   <li key={topic.id} className="px-4 py-2 hover:bg-orange-100">
//                     <a href={`#${topic.id}`} className="text-zinc-800 font-medium">
//                       {topic.label}
//                     </a>
//                   </li>
//                 ))}
//             </motion.ul>
//           </li>
//         </ul>

//         {/* Action Icons + Search + Mobile Hamburger */}
//         <div className="flex items-center gap-x-5">
//           {/* Searchbar */}
//           <div className="hidden md:flex p-1 border-2 border-orange-500 rounded-full">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="flex-1 h-[5vh] px-3 focus:outline-none"
//             />
//             <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
//               <IoSearch />
//             </button>
//           </div>

//           {/* Heart & Cart */}
//           {[GoHeartFill, HiShoppingBag].map((Icon, idx) => (
//             <a key={idx} href="#" className="text-zinc-800 text-2xl">
//               <Icon />
//             </a>
//           ))}

//           {/* Mobile Hamburger */}
//           <button
//             type="button"
//             className="text-zinc-800 text-3xl md:hidden"
//             onClick={toggleMenu}
//           >
//             {showMenu ? <TbMenu3 /> : <TbMenu2 />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {showMenu && (
//           <ul className="flex flex-col gap-y-6 bg-orange-500/25 backdrop-blur-xl shadow-xl rounded-xl p-6 absolute top-20 left-1/2 -translate-x-1/2 md:hidden">
//             {topicsList.map((topic) => (
//               <li key={topic.id}>
//                 <a
//                   href={`#${topic.id}`}
//                   className="font-semibold text-zinc-800"
//                 >
//                   {topic.label}
//                 </a>
//               </li>
//             ))}

//             {/* Mobile Search */}
//             <li className="flex p-1 border-2 border-orange-500 rounded-full w-full">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="flex-1 h-[5vh] px-3 focus:outline-none"
//               />
//               <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
//                 <IoSearch />
//               </button>
//             </li>
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState } from "react";
// import { GoHeartFill } from "react-icons/go";
// import { HiShoppingBag } from "react-icons/hi2";
// import { IoSearch } from "react-icons/io5";
// import { TbMenu2, TbMenu3 } from "react-icons/tb";
// import { motion } from "framer-motion";
// import { topicsList } from "../data/topicsData";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [isScrolled, setScrolled] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleMenu = () => setShowMenu(!showMenu);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//   };

//   return (
//     <header
//       className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)]" : "shadow-none"
//       }`}
//     >
//       <nav className="max-w-[1400px] mx-auto px-6 md:h-[14vh] h-[12vh] flex items-center justify-between">

//         {/* Logo */}
//         <div className="text-3xl font-bold cursor-pointer">
//           Re<span className="text-orange-500 bold uppercase">A</span>ct
//         </div>

//         {/* Desktop Menu Row */}
//         <div className="hidden md:flex items-center gap-x-8 relative">
//           {/* Topics Dropdown */}
//           <div
//             className="relative font-semibold text-zinc-800 cursor-pointer"
//             onMouseEnter={() => setShowDropdown(true)}
//             onMouseLeave={() => setShowDropdown(false)}
//           >
//             Topics
//             <motion.ul
//               className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 flex flex-col z-50"
//               initial="hidden"
//               animate={showDropdown ? "visible" : "hidden"}
//               variants={dropdownVariants}
//             >
//               {topicsList
//                 .filter((topic) => topic.id !== "topics") // Exclude "Topics"
//                 .map((topic) => (
//                   <li
//                     key={topic.id}
//                     className="px-4 py-2 hover:bg-orange-100 rounded-md"
//                   >
//                     <a href={`#${topic.id}`} className="text-zinc-800 font-medium">
//                       {topic.label}
//                     </a>
//                   </li>
//                 ))}
//             </motion.ul>
//           </div>

//           {/* Search bar inline */}
//           <div className="flex items-center border-2 border-orange-500 rounded-full px-2">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="h-[5vh] px-3 focus:outline-none rounded-l-full"
//             />
//             <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-r-full text-xl">
//               <IoSearch />
//             </button>
//           </div>

//           {/* Heart & Cart Icons */}
//           <GoHeartFill className="text-zinc-800 text-2xl cursor-pointer" />
//           <HiShoppingBag className="text-zinc-800 text-2xl cursor-pointer" />
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden flex items-center gap-x-4">
//           <button
//             type="button"
//             className="text-zinc-800 text-3xl"
//             onClick={toggleMenu}
//           >
//             {showMenu ? <TbMenu3 /> : <TbMenu2 />}
//           </button>
//         </div>

//         {/* Mobile Sliding Menu */}
//         {showMenu && (
//           <ul className="flex flex-col gap-y-4 bg-orange-500/25 backdrop-blur-xl shadow-xl rounded-xl p-6 absolute top-20 left-1/2 -translate-x-1/2 md:hidden z-50">
//             {topicsList.map((topic) => (
//               <li key={topic.id}>
//                 <a
//                   href={`#${topic.id}`}
//                   className="font-semibold text-zinc-800"
//                 >
//                   {topic.label}
//                 </a>
//               </li>
//             ))}

//             {/* Mobile Search */}
//             <li className="flex p-1 border-2 border-orange-500 rounded-full w-full">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="flex-1 h-[5vh] px-3 focus:outline-none"
//               />
//               <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
//                 <IoSearch />
//               </button>
//             </li>
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { motion } from "framer-motion";
import { topicsList } from "../data/topicsData";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)]" : "shadow-none"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:h-[14vh] h-[12vh] flex items-center justify-between">

        {/* Logo + Topics */}
        <div className="flex items-center gap-x-4 cursor-pointer font-bold text-2xl text-zinc-800">
          <span>React</span>
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Topics
            {/* Dropdown under Topics */}
            <motion.ul
              className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 flex flex-col z-50"
              initial="hidden"
              animate={showDropdown ? "visible" : "hidden"}
              variants={dropdownVariants}
            >
              {topicsList
                .filter((topic) => topic.id !== "topics")
                .map((topic) => (
                  <li
                    key={topic.id}
                    className="px-4 py-2 hover:bg-orange-100 rounded-md"
                  >
                    <a href={`#${topic.id}`} className="text-zinc-800 font-medium">
                      {topic.label}
                    </a>
                  </li>
                ))}
            </motion.ul>
          </div>
        </div>

        {/* Desktop Row: Search + Icons */}
        <div className="hidden md:flex items-center gap-x-4">
          <div className="flex items-center border-2 border-orange-500 rounded-full px-2">
            <input
              type="text"
              placeholder="Search..."
              className="h-[5vh] px-3 focus:outline-none rounded-l-full"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-r-full text-xl">
              <IoSearch />
            </button>
          </div>
          <GoHeartFill className="text-zinc-800 text-2xl cursor-pointer" />
          <HiShoppingBag className="text-zinc-800 text-2xl cursor-pointer" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-x-4">
          <button
            type="button"
            className="text-zinc-800 text-3xl"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Sliding Menu */}
        {showMenu && (
          <ul className="flex flex-col gap-y-4 bg-orange-500/25 backdrop-blur-xl shadow-xl rounded-xl p-6 absolute top-20 left-1/2 -translate-x-1/2 md:hidden z-50">
            {topicsList.map((topic) => (
              <li key={topic.id}>
                <a
                  href={`#${topic.id}`}
                  className="font-semibold text-zinc-800"
                >
                  {topic.label}
                </a>
              </li>
            ))}

            {/* Mobile Search */}
            <li className="flex p-1 border-2 border-orange-500 rounded-full w-full">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 h-[5vh] px-3 focus:outline-none"
              />
              <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                <IoSearch />
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;