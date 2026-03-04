// import React from 'react'
// import Logo from '../../assets/logo.png';
// import { IoSearch } from "react-icons/io5";
// import { GoHeartFill } from 'react-icons/go';
// import { HiShoppingBag } from 'react-icons/hi2';

// const Navbar = ({handleScroll , setSearchTerm, isScrolled, handlePanel, totalItems,wishlist }) => {
    
//   return (
//     <header className={`bg-white fixed top-0 left-0 right-0 z-30 ${isScrolled ? 'shadow-lg' : ''}`}>
//         <nav className='max-w-[1550px] mx-auto px-12 h-[14vh] flex items-center justify-between'>
//             <a href='#' className='flex w-15 h-15 bg-zinc-100 rounded-full p-2' >
//                 {/* logo */}
//                 <img src={Logo} className='w-full  h-full object-contain'/>
//             </a>
//             {/* nav actions */}
//             <div className='flex items-center gap-x-5'>
//                 {/* Search bar */}
//                 <div className='flex p-1 rounded-full border-2 border-blue-600'>
//                     <input type='text' name='search' id='search' placeholder='Search...' autoComplete='off'
//                     className='flex-1 h-[5vh] pl-4 focus:outline-none' onFocus={handleScroll} onChange={(e)=>setSearchTerm(e.target.value)}/>
//                      {/* if we clicked on search it will take u to the category fot that im using onFocus through props  means handlescroll */}

//                     <button className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl'>
//                         <IoSearch />
//                     </button>
//                 </div>

//                 {/* Icons */}
//                 <button className='text-[1.7rem] text-zinc-800 relative cursor-pointer' onClick={()=>handlePanel('wishlist')}>
//                     <GoHeartFill />
//                         {/* for count number below heart like 1,2,3  */}
//                     {
//                         wishlist.length >0 &&
//                         <span className='flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] 
//                     absolute top-4 right-3 border-2 border-white'>
//                         {wishlist.length}
//                     </span>
//                     }

//                 </button>
//                 <button className='text-[1.7rem] text-zinc-800 relative cursor-pointer' onClick={()=>handlePanel('cart')} >
//                     <HiShoppingBag />

//                            {
//                         totalItems > 0 &&
//                         <span className='flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] 
//                     absolute top-4 right-4 border-2 border-white' >
//                      {totalItems}
//                     </span>

//                         }
//                       {/* for count number below heart like 1,2,3  */}
                    
//                 </button>
//             </div>
            
//         </nav>
//     </header>
//   )
// }

// export default Navbar

// import React from 'react'
// import Logo from '../../assets/logo.png';
// import { IoSearch } from "react-icons/io5";
// import { GoHeartFill } from 'react-icons/go';
// import { HiShoppingBag } from 'react-icons/hi2';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = ({handleScroll , setSearchTerm, isScrolled, handlePanel, totalItems, wishlist }) => {
    
//   // Badge animation for count change
//   const badgeVariants = {
//     initial: { scale: 0 },
//     animate: { scale: 1, transition: { type: 'spring', stiffness: 400, damping: 10 } },
//     exit: { scale: 0, transition: { duration: 0.2 } }
//   }

//   return (
//     <header className={`bg-white fixed top-0 left-0 right-0 z-30 ${isScrolled ? 'shadow-lg' : ''}`}>
//         <nav className='max-w-[1550px] mx-auto px-12 h-[14vh] flex items-center justify-between'>
//             <a href='#' className='flex w-15 h-15 bg-zinc-100 rounded-full p-2' >
//                 {/* logo */}
//                 <img src={Logo} className='w-full  h-full object-contain'/>
//             </a>

//             {/* nav actions */}
//             <div className='flex items-center gap-x-5'>
//                 {/* Search bar */}
//                 <div className='flex p-1 rounded-full border-2 border-blue-600'>
//                     <input
//                         type='text'
//                         name='search'
//                         id='search'
//                         placeholder='Search...'
//                         autoComplete='off'
//                         className='flex-1 h-[5vh] pl-4 focus:outline-none'
//                         onFocus={handleScroll}
//                         onChange={(e)=>setSearchTerm(e.target.value)}
//                     />
//                     <button className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl'>
//                         <IoSearch />
//                     </button>
//                 </div>

//                 {/* Wishlist icon */}
//                 <motion.button
//                     className='text-[1.7rem] text-zinc-800 relative cursor-pointer'
//                     onClick={()=>handlePanel('wishlist')}
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.95 }}
//                 >
//                     <GoHeartFill />
//                     <AnimatePresence>
//                     {wishlist.length > 0 && (
//                         <motion.span
//                             key={wishlist.length} // ensures AnimatePresence triggers on count change
//                             className='flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-3 border-2 border-white'
//                             variants={badgeVariants}
//                             initial="initial"
//                             animate="animate"
//                             exit="exit"
//                         >
//                             {wishlist.length}
//                         </motion.span>
//                     )}
//                     </AnimatePresence>
//                 </motion.button>

//                 {/* Cart icon */}
//                 <motion.button
//                     className='text-[1.7rem] text-zinc-800 relative cursor-pointer'
//                     onClick={()=>handlePanel('cart')}
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.95 }}
//                 >
//                     <HiShoppingBag />
//                     <AnimatePresence>
//                     {totalItems > 0 && (
//                         <motion.span
//                             key={totalItems}
//                             className='flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-4 border-2 border-white'
//                             variants={badgeVariants}
//                             initial="initial"
//                             animate="animate"
//                             exit="exit"
//                         >
//                             {totalItems}
//                         </motion.span>
//                     )}
//                     </AnimatePresence>
//                 </motion.button>

//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Navbar

// import React from 'react'
// import Logo from '../../assets/logo.png';
// import { IoSearch } from "react-icons/io5";
// import { GoHeartFill } from 'react-icons/go';
// import { HiShoppingBag } from 'react-icons/hi2';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from "react-router-dom"; // ✅ import navigate

// const Navbar = ({handleScroll , setSearchTerm, isScrolled, handlePanel, totalItems, wishlist }) => {

//   const navigate = useNavigate(); // ✅ hook inside component

//   // Badge animation for count change
//   const badgeVariants = {
//     initial: { scale: 0 },
//     animate: { scale: 1, transition: { type: 'spring', stiffness: 400, damping: 10 } },
//     exit: { scale: 0, transition: { duration: 0.2 } }
//   }

//   return (
//     <header className={`bg-white fixed top-0 left-0 right-0 z-30 ${isScrolled ? 'shadow-lg' : ''}`}>
//         <nav className='max-w-[1550px] mx-auto px-12 h-[14vh] flex items-center justify-between'>
            
//             {/* 🔹 Logo click navigates to login */}
//             <button 
//               onClick={() => navigate("/login")} 
//               className='flex w-15 h-15 bg-zinc-100 rounded-full p-2'
//             >
//                 <img src={Logo} className='w-full h-full object-contain' alt="logo"/>
//             </button>

//             {/* nav actions */}
//             <div className='flex items-center gap-x-5'>
//                 {/* Search bar */}
//                 <div className='flex p-1 rounded-full border-2 border-blue-600'>
//                     <input
//                         type='text'
//                         name='search'
//                         id='search'
//                         placeholder='Search...'
//                         autoComplete='off'
//                         className='flex-1 h-[5vh] pl-4 focus:outline-none'
//                         onFocus={handleScroll}
//                         onChange={(e)=>setSearchTerm(e.target.value)}
//                     />
//                     <button className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl'>
//                         <IoSearch />
//                     </button>
//                 </div>

//                 {/* Wishlist icon */}
//                 <motion.button
//                     className='text-[1.7rem] text-zinc-800 relative cursor-pointer'
//                     onClick={()=>handlePanel('wishlist')}
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.95 }}
//                 >
//                     <GoHeartFill />
//                     <AnimatePresence>
//                     {wishlist.length > 0 && (
//                         <motion.span
//                             key={wishlist.length} // ensures AnimatePresence triggers on count change
//                             className='flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-3 border-2 border-white'
//                             variants={badgeVariants}
//                             initial="initial"
//                             animate="animate"
//                             exit="exit"
//                         >
//                             {wishlist.length}
//                         </motion.span>
//                     )}
//                     </AnimatePresence>
//                 </motion.button>

//                 {/* Cart icon */}
//                 <motion.button
//                     className='text-[1.7rem] text-zinc-800 relative cursor-pointer'
//                     onClick={()=>handlePanel('cart')}
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.95 }}
//                 >
//                     <HiShoppingBag />
//                     <AnimatePresence>
//                     {totalItems > 0 && (
//                         <motion.span
//                             key={totalItems}
//                             className='flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-4 border-2 border-white'
//                             variants={badgeVariants}
//                             initial="initial"
//                             animate="animate"
//                             exit="exit"
//                         >
//                             {totalItems}
//                         </motion.span>
//                     )}
//                     </AnimatePresence>
//                 </motion.button>

//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Navbar

import React from 'react'
import Logo from '../../assets/logo.png';
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from 'react-icons/go';
import { HiShoppingBag } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom"; // ✅ import navigate

const Navbar = ({handleScroll , setSearchTerm, isScrolled, handlePanel, totalItems, wishlist }) => {

  const navigate = useNavigate(); // ✅ hook inside component

  // Badge animation for count change
  const badgeVariants = {
    initial: { scale: 0 },
    animate: { scale: 1, transition: { type: 'spring', stiffness: 400, damping: 10 } },
    exit: { scale: 0, transition: { duration: 0.2 } }
  }

  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-30 ${isScrolled ? 'shadow-lg' : ''}`}>
        <nav className='max-w-[1550px] mx-auto px-12 h-[14vh] flex items-center justify-between'>
            
            {/* 🔹 Logo click navigates to login */}
            <button 
              onClick={() => navigate("/login")} 
              className='flex w-15 h-15 bg-zinc-100 rounded-full p-2'
            >
                <img src={Logo} className='w-full h-full object-contain' alt="logo"/>
            </button>

            {/* nav actions */}
            <div className='flex items-center gap-x-5'>
                {/* Search bar */}
                <div className='flex p-1 rounded-full border-2 border-blue-600'>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        placeholder='Search...'
                        autoComplete='off'
                        className='flex-1 h-[5vh] pl-4 focus:outline-none'
                        onFocus={handleScroll}
                        onChange={(e)=>setSearchTerm(e.target.value)}
                    />
                    <button className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl'>
                        <IoSearch />
                    </button>
                </div>

                {/* Wishlist icon */}
                <motion.button
                    className='text-[1.7rem] text-zinc-800 relative cursor-pointer'
                    onClick={()=>handlePanel('wishlist')}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <GoHeartFill />
                    <AnimatePresence>
                    {wishlist.length > 0 && (
                        <motion.span
                            key={wishlist.length} // ensures AnimatePresence triggers on count change
                            className='flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-3 border-2 border-white'
                            variants={badgeVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {wishlist.length}
                        </motion.span>
                    )}
                    </AnimatePresence>
                </motion.button>

                {/* Cart icon */}
                <motion.button
                    className='text-[1.7rem] text-zinc-800 relative cursor-pointer'
                    onClick={()=>handlePanel('cart')}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <HiShoppingBag />
                    <AnimatePresence>
                    {totalItems > 0 && (
                        <motion.span
                            key={totalItems}
                            className='flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-4 border-2 border-white'
                            variants={badgeVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {totalItems}
                        </motion.span>
                    )}
                    </AnimatePresence>
                </motion.button>

            </div>
        </nav>
    </header>
  )
}

export default Navbar