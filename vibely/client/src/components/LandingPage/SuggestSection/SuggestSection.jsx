// import React from 'react'
// import suggestionImg from '..//..//..//assets/suggest/suggest.png'
// const SuggestSection = () => {
//   return (
//     <div  className=' w-full  max-w-[1229px]  mx-auto h-[258px] opacity-100 border border-radius-6 flex items-center align-right justify-center py-12 bg-gradient-to-r from-[#F5E6C8] to-white' >
//          {/* Main Container */}
//       <div >
//         {/*Text Section */}
//         <div className='flex flex-col items-center justify-center text-center align-center gap-5 '>
//             <h3 className='font-poppins  font-medium  w-[1109px] h-[44px] whitespace-nowrap text-[26px]'>Not sure where to start? let us recommend the best organizer/service for your event</h3>
//         <button className='bg-red-900  text-white text-center font-semibold items-center px-8 py-2 rounded-md w-[250px] h-[54px]'>SUGGEST ME</button>
//         <p className='text-gray-600 text-sm italic'>Attend the short survey, and we will suggest you the best!</p>
//         </div>
//       <img src={suggestionImg} alt='suggest' className=' absolute align-right right-0 pb-[400px] opacity-100% w-[355px] h-[338px]  object-contain'/>
//       </div>
//     </div>
//   )
// }
//                           //mx-auto max-w-[1200px]
// export default SuggestSection

// import React from "react";
// import suggestionImg from "../../../assets/suggest/suggest.png";

// const SuggestSection = () => {
//   return (
//     <div className="w-full max-w-[1229px] mx-auto h-[258px] border rounded-md flex items-center justify-center py-12 bg-gradient-to-r from-[#F5E6C8] to-white relative">

//       {/* Text Section */}
//       <div className="flex flex-col items-center justify-center text-center gap-5">
        
//         <h3 className="font-poppins font-medium text-[26px] max-w-[900px]">
//           Not sure where to start? Let us recommend the best organizer/service for your event
//         </h3>

//         <button className="bg-red-900 text-white font-semibold px-8 py-3 rounded-md w-[250px]">
//           SUGGEST ME
//         </button>

//         <p className="text-gray-600 text-sm italic">
//           Attend the short survey, and we will suggest you the best!
//         </p>

//       </div>

//       {/* Image */}
//       <img
//         src={suggestionImg}
//         alt="suggest"
//         className="absolute right-0 bottom-0 w-[355px] h-[338px] object-contain"
//       />
      
//     </div>
//   );
// };

// export default SuggestSection;
import React from "react";
import suggestionImg from "../../../assets/suggest/suggest.png";

const SuggestSection = () => {
  return (
    <div className="w-full flex justify-center items-center">

      {/* Main Box */}
      <div className="w-[1229px] h-[258px] relative flex items-center  justify-center rounded-md bg-gradient-to-r from-[#FFEDBB] to-[#FFFEFD]">

        {/* Text Section */}
        <div className="flex flex-col items-center text-center gap-[25px]">
           <h3 className='font-poppins  font-medium  w-[1109px] h-[44px] leading-[44px] whitespace-nowrap text-[26px]'>Not sure where to start? let us recommend the best organizer/service for your event</h3>
          {/* <h3 className="font-medium text-[26px] max-w-[900px]">
            Not sure where to start? Let us recommend the best organizer/service for your event
          </h3> */}

          {/* <button className="bg-red-900 text-white font-semibold px-8 py-3 rounded-md w-[250px]">
            SUGGEST ME
          </button> */}
                   <button className='bg-[#970000]  text-white text-center font-semibold items-center  px-8 py-2 rounded-md w-[250px] h-[54px]'>SUGGEST ME</button>

          <p className='text-[#252525] text-[22px] text-sm font-light italic'>
            Attend the short survey, and we will suggest you the best!
          </p>
        </div>

        {/* Image */}
        <img
          src={suggestionImg}
          alt="suggest"
          className="absolute -right-[165px] -bottom-20 w-[355px] h-[338px] object-contain"
        />

      </div>
    </div>
  );
};

export default SuggestSection;