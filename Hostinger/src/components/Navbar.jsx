// import React from 'react';
// import ThemeToggleBtn from './ThemeToggleBtn';
// import assets from '../assets/assets';

// const Navbar = ({ theme, setTheme }) => {
//   return (
//     <nav
//       className={`flex items-center justify-between px-10 py-4 sticky top-0 z-50
//         ${
//           theme === 'dark'
//             ? 'bg-gray-900 text-white'
//             : 'bg-white text-gray-900'
//         }
//         transition-colors duration-300`}
//     >
//       {/* Logo */}
//       <img
//         src={theme === 'dark' ? assets.logo_dark : assets.logo}
//         alt="agency.ai logo"
//         className="w-32 sm:w-40"
//       />

//       {/* Menu */}
//       <ul className="hidden md:flex space-x-8 font-medium">
//         <li><a href="#" className="hover:underline">Home</a></li>
//         <li><a href="#services" className="hover:underline">Services</a></li>
//         <li><a href="#our-work" className="hover:underline">Our Work</a></li>
//         <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
//       </ul>

//       {/* Right side */}
//       <div className="flex items-center space-x-6">
//         <ThemeToggleBtn theme={theme} setTheme={setTheme} />
//         <button
//           className={`hidden md:inline-flex items-center px-5 py-2 rounded-full
//             ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}
//             hover:opacity-90 transition`}
//         >
//           Connect <img src={assets.arrow_icon} alt="Arrow" className="ml-2" />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import ThemeToggleBtn from './ThemeToggleBtn';
import assets from '../assets/assets';

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav
      className={`flex items-center justify-between px-10 py-4 sticky top-0 z-50
        ${
          theme === 'dark'
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-900'
        }
        transition-colors duration-300`}
    >
      {/* Logo */}
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        alt="agency.ai logo"
        className="w-32 sm:w-40"
      />

      {/* Menu */}
      <ul className="hidden md:flex space-x-8 font-medium">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#services" className="hover:underline">Services</a></li>
        <li><a href="#our-work" className="hover:underline">Our Work</a></li>
        <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
      </ul>

      {/* Right side */}
      <div className="flex items-center space-x-6">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <button
          className={`hidden md:inline-flex items-center px-5 py-2 rounded-full
            ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}
            hover:opacity-90 transition`}
        >
          Connect <img src={assets.arrow_icon} alt="Arrow" className="ml-2" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
