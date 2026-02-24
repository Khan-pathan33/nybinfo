// import React from 'react'
// import { IoIosArrowForward } from "react-icons/io";

// const Footer = () => {
//   return (
//    <footer className='py-20 bg-zinc-100'>

//     <div className='flex flex-wrap md:gap-y-12 gap-y-8 max-w-[1400px] mx-auto px-10'>
//         <div className='flex-1 basis-[300px]'>
//                <a href='#' className='text-3xl font-bold' >
//                 Gr<span className='text-orange-500 font-bold uppercase'>O</span>cify</a> 
//                 <p className='text-zinc-600 mt-6 max-w-[350px]'>
//                     Bred for a high content of beneficial substances. Our products are all fresh and healthy. 
//                 </p>
//                 <p className='text-zinc-800 mt-4'>
//                     2025 &copy; all rights reserved
//                 </p>
//         </div>
//         <ul className='flex-1'>
//             <li>
//                 <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
//             </li>
//             <li className='flex-1 mt-6'>
//                 <a href='#'className='text-zinc-800 hover:text-orange-500 '>About</a>
//             </li>
//             <li className='mt-6'>
//                 <a href='#'className='text-zinc-800 hover:text-orange-500 '>FAQ</a>
//             </li>
//         </ul>

//         <ul className='flex-1'>
//             <li>
//                 <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
//             </li>
//             <li className='mt-6'>
//                 <a href='#'className='text-zinc-800 hover:text-orange-500 '>Support Center</a>
//             </li>
//             <li className='mt-6'>
//                 <a href='#'className='text-zinc-800 hover:text-orange-500 '>Feedback</a>
//             </li>
//             <li className='mt-6'>
//                 <a href='#'className='text-zinc-800 hover:text-orange-500 '>Contact Us</a>
//             </li>
//         </ul>

//         <div className='flex-1'>
//             <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
//             <p className='mt-6 text-zinc-600' >Questions or Feedback?<br/> we'd love to hear from you.</p>
//             <div className='flex bg-white p-1 rounded-lg mt-6 '>
//                 <input type='email' name='email' id='email' autoComplete='off' placeholder='Email Address'className='h-[5vh] pl-4 flex-1 focus:outline-none'/>
//                 <button className='  bg-gradient-to-b from-orange-400  to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'>
//                     <IoIosArrowForward />
//                 </button>
//             </div>
//         </div>

        
//         </div>
//    </footer>
//   )
// }

// export default Footer


import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='bg-zinc-100 pt-16 pb-10'>

      <div className='max-w-[1400px] mx-auto px-6 lg:px-10'>

        {/* Grid Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>

          {/* Logo Section */}
          <div>
            <a href='#' className='text-3xl font-bold'>
              Gr<span className='text-orange-500 uppercase'>O</span>cify
            </a>

            <p className='text-zinc-600 mt-6 max-w-[350px]'>
              Bred for a high content of beneficial substances.
              Our products are all fresh and healthy.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5 className='text-zinc-800 text-xl font-bold'>Company</h5>
            <ul className='mt-6 space-y-4'>
              <li>
                <a href='#' className='text-zinc-700 hover:text-orange-500 transition'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='text-zinc-700 hover:text-orange-500 transition'>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className='text-zinc-800 text-xl font-bold'>Support</h5>
            <ul className='mt-6 space-y-4'>
              <li>
                <a href='#' className='text-zinc-700 hover:text-orange-500 transition'>
                  Support Center
                </a>
              </li>
              <li>
                <a href='#' className='text-zinc-700 hover:text-orange-500 transition'>
                  Feedback
                </a>
              </li>
              <li>
                <a href='#' className='text-zinc-700 hover:text-orange-500 transition'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className='text-zinc-800 text-xl font-bold'>Stay Connected</h5>

            <p className='mt-6 text-zinc-600'>
              Questions or Feedback?<br />
              We'd love to hear from you.
            </p>

            <div className='flex bg-white p-1 rounded-lg mt-6 '>
              <input
                type='email'
                placeholder='Email Address'
                className='h-[5vh] pl-4 flex-1 focus:outline-none'
              />

              <button className='bg-gradient-to-b from-orange-400 to-orange-500 px-5
               rounded-lg sm:rounded-r-lg text-white text-xl hover:to-orange-600 transition'>
                <IoIosArrowForward />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className='border-t border-zinc-300 mt-12 pt-6 text-center text-zinc-600 text-sm'>
          2025 &copy; All rights reserved
        </div>

      </div>
    </footer>
  )
}

export default Footer
