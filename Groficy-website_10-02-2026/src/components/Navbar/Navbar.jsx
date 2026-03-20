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



import React, { useEffect, useState } from 'react';
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    hover: { scale: 1.05, rotate: 2, transition: { duration: 0.3 } }
  };

  const searchVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.08)]' : 'shadow-none'}`}>
      <nav className='max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex items-center justify-between'>

        {/* Logo */}
        <motion.div
          className='text-3xl font-bold cursor-pointer'
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Link to='/'>
            Gr<span className='text-orange-500 bold uppercase'>O</span>cify
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className='md:flex items-center gap-x-15 hidden'>
          {['Home', 'About Us', 'Process', 'Contact Us'].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
            >
              <a
                href="#"
                className={`font-semibold tracking-wider ${
                  item === 'Home'
                    ? 'text-orange-500'
                    : 'text-zinc-800 hover:text-orange-500'
                }`}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Action Icons */}
        <div className='flex items-center gap-x-5'>

          {/* Searchbar */}
          <motion.div
            className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'
            variants={searchVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <motion.input
              type="text"
              placeholder='Search...'
              className='flex-1 h-[5vh] px-3 focus:outline-none'
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.button
              className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              <IoSearch />
            </motion.button>
          </motion.div>

          {/* Heart and Cart */}
          {[GoHeartFill, HiShoppingBag].map((Icon, idx) => (
            <motion.a
              key={idx}
              href="#"
              className='text-zinc-800 text-2xl'
              whileHover={{ scale: 1.2 }}
            >
              <Icon />
            </motion.a>
          ))}

          {/* Mobile Hamburger */}
          <motion.a
            href="#"
            className='text-zinc-800 text-3xl md:hidden'
            onClick={toggleMenu}
            whileHover={{ scale: 1.2 }}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </motion.a>
        </div>

        {/* ✅ Perfect Center Sliding Mobile Menu */}
        <motion.ul
          className='flex flex-col gap-y-12 bg-orange-500/25 backdrop-blur-xl 
          shadow-xl rounded-xl p-10 items-center md:hidden 
          absolute top-28 left-1/2'
          initial={{ x: '-150%', opacity: 0 }}
          animate={{
            x: showMenu ? '-50%' : '-150%',
            opacity: showMenu ? 1 : 0
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {['Home', 'About Us', 'Process', 'Contact Us'].map(item => (
            <li key={item}>
              <a
                href="#"
                className={`font-semibold tracking-wider ${
                  item === 'Home'
                    ? 'text-orange-500'
                    : 'text-zinc-800 hover:text-orange-500'
                }`}
              >
                {item}
              </a>
            </li>
          ))}

          {/* Mobile Search */}
          <li className='flex p-1 border-2 border-orange-500 rounded-full w-full'>
            <input
              type="text"
              placeholder='Search...'
              className='flex-1 h-[5vh] px-3 focus:outline-none'
            />
            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
              <IoSearch />
            </button>
          </li>
        </motion.ul>

      </nav>
    </header>
  );
};

export default Navbar;





//vibely what are u planning for code
// import Weddings from '..//..//../assets/whatAreYouPlanningForImage/Weddings.png'
// import MiceEvents from '..//..//../assets/whatAreYouPlanningForImage/MiceEvents.png'
// import DJNight from '..//..//../assets/whatAreYouPlanningForImage/DJNight.png'
// import GetTogether from '..//..//../assets/whatAreYouPlanningForImage/GetTogether.png'
// import Birthdays from '..//..//../assets/whatAreYouPlanningForImage/Birthdays.png'
// import ThemeParties from '..//..//../assets/whatAreYouPlanningForImage/ThemeParties.png'
// import SocialEvents from '..//..//../assets/whatAreYouPlanningForImage/SocialEvents.png'

// export default function EventPlanning() {
//   const events = [
//     {
//       title: "Weddings",
//       img: Weddings,
//       w: "w-[502px]",
//       h: "h-[384px]",
//       top: "top-[4px]",
//       left: "left-[0px]",
//       rectangleColor: "bg-[#FFBB00]",
//       rectangleHeight: "h-[16px]"
//     },
//     {
//       title: "Mice / Corporate Events",
//       img: MiceEvents,
//       w: "w-[544px]",
//       h: "h-[443px]",
//       top: "top-[3px]",
//       left: "left-[512px]",
//       rectangleColor: "bg-[#D33E39]",
//       rectangleHeight: "h-[34px]"
//     },
//     {
//       title: "Concerts / DJ Nights",
//       img: DJNight,
//       w: "w-[556px]",
//       h: "h-[323px]",
//       top: "top-[0px]",
//       left: "left-[1065px]",
//       rectangleColor: null,
//       rectangleHeight: null
//     },
//     {
//       title: "Family / Get Togethers",
//       img: GetTogether,
//       w: "w-[502px]",
//       h: "h-[366px]",
//       top: "top-[417px]",
//       left: "left-[1px]",
//       rectangleColor: null,
//       rectangleHeight: null
//     },
//     {
//       title: "Birthdays / Anniversaries",
//       img: Birthdays,
//       w: "w-[545px]",
//       h: "h-[286px]",
//       top: "top-[497px]",
//       left: "left-[512px]",
//       rectangleColor: null,
//       rectangleHeight: null
//     },
//     {
//       title: "Theme Parties",
//       img: ThemeParties,
//       w: "w-[274px]",
//       h: "h-[400px]",
//       top: "top-[382px]",
//       left: "left-[1066px]",
//       rectangleColor: null,
//       rectangleHeight: null
//     },
//     {
//       title: "Social Events",
//       img: SocialEvents,
//       w: "w-[273px]",
//       h: "h-[456px]",
//       top: "top-[327px]",
//       left: "left-[1350px]",
//       rectangleColor: null,
//       rectangleHeight: null
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#26273A] to-[#000000] relative pt-[120px]">

//       {/* Centered Heading */}
//       <div className="w-full flex justify-center items-center  mb-10">
//         <h2 className="text-white font-poppins font-medium text-[34px] leading-[44px] text-center">
//           What Are You Planning For ?
//         </h2>
//       </div>

//       {events.map(
//         ({ title, img, w, h, top, left, rectangleColor, rectangleHeight }, index) => (
//           <div key={index} className={`absolute ${top} ${left} flex flex-col items-start`}>
            
//             <div className={`relative rounded-lg overflow-hidden shadow-lg group ${w} ${h}`}>
//               <img
//                 src={img}
//                 alt={title}
//                 className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition"
//                 loading="lazy"
//               />

//               <div className="absolute bottom-6 left-4 font-semibold drop-shadow-lg text-[#E3E3E3] text-base">
//                 • {title}
//               </div>
//             </div>

//             {rectangleColor && rectangleHeight && (
//               <div className={`mt-1 ${w} ${rectangleHeight} ${rectangleColor}`} />
//             )}
//           </div>
//         )
//       )}

//       <div
//         className="absolute"
//         style={{
//           width: "271.23687744140625px",
//           height: "33.90460968017578px",
//           top: "335.87px",
//           left: "1066.93px",
//           background: "#FFBB00",
//           opacity: 1
//         }}
//       />
//     </div>
//   );
// }