// import React from 'react';
// import assets from '../assets/assets';

// const Hero = () => {
//   return (
//     <div
//       id="hero"
//       className="flex flex-col items-center gap-6 px-4 py-20 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden
//         text-gray-700 dark:text-white transition-colors duration-300"
//     >
//       <div
//         className="inline-flex items-center gap-2 border border-gray-300
//         p-1.5 pr-4 rounded-full dark:border-gray-600"
//       >
//         <img className="w-20" src={assets.group_profile} alt="" />
//         <p className="text-xs font-medium">Trusted by 10k+ people</p>
//       </div>

//       <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px]
//             font-medium xl:leading-[95px] max-w-5xl">
//         Turning imagination into
//         <span
//           className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent"
//         >
//           digital
//         </span>
//         impact.
//       </h1>
//       <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
//         Creating meaningful connections and turning big ideas into interactive digital experiences.
//       </p>

//       <div className="relative">
//         <img src={assets.hero_img} alt="" className="w-full max-w-6xl" />

//           <img src={assets.bgImage1} alt='' className='absolute -top-100 -right-0 
//           sm:-top-100 sm:right-0 -z-1 dark:hidden' />

//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import assets from '../assets/assets';

// const Hero = () => {
//   return (
//     <div
//       id="hero"
//       className="relative flex flex-col items-center gap-6 px-4 py-20
//         sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden
//         text-gray-700 dark:text-white transition-colors duration-300"
//     >
//       {/* Blue glow — wide spread from "digital impact" to image */}
//       <img
//         src={assets.bgImage1}
//         alt=""
//         className="
//           absolute
//           top-10
//           left-1/2
//           translate-x-[10%]
//           w-[1150px]
//           max-w-none
//           opacity-90
//           -z-10
//           dark:hidden
//         "
//       />

//       <div
//         className="inline-flex items-center gap-2 border border-gray-300
//         p-1.5 pr-4 rounded-full dark:border-gray-600"
//       >
//         <img className="w-20" src={assets.group_profile} alt="" />
//         <p className="text-xs font-medium">Trusted by 10k+ people</p>
//       </div>

//       <h1
//         className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px]
//         font-medium xl:leading-[95px] max-w-5xl"
//       >
//         Turning imagination into{' '}
//         <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
//           digital
//         </span>{' '}
//         impact.
//       </h1>

//       <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-lg pb-3">
//         Creating meaningful connections and turning big ideas into interactive digital experiences.
//       </p>

//       <img src={assets.hero_img} alt="" className="w-full max-w-6xl" />
//     </div>
//   );
// };

// export default Hero;


import React from 'react';
import assets from '../assets/assets';

const Hero = () => {
  return (
    <div
      id="hero"
      className="
        relative flex flex-col items-center gap-6 px-4 py-20
        sm:px-12 lg:px-24 xl:px-40 text-center w-full
        overflow-visible
        text-gray-700 dark:text-white
        transition-colors duration-300
      "
    >
      {/* Blue glow background */}
     <img
  src={assets.bgImage1}
  alt=""
  className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2
    w-[1400px]
    max-w-none
    opacity-100
    blur-[120px]
    z-[-1]
    pointer-events-none
    dark:opacity-60
  "
/>


      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full dark:border-gray-600">
        <img className="w-20" src={assets.group_profile} alt="" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">
        Turning imagination into{' '}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{' '}
        impact.
      </h1>

      <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-lg pb-3">
        Creating meaningful connections and turning big ideas into interactive digital experiences.
      </p>

      <img
        src={assets.hero_img}
        alt=""
        className="w-full max-w-6xl relative z-10"
      />
    </div>
  );
};

export default Hero;
