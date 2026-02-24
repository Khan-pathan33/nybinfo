// import React from 'react'
// import Button from '../Button/Button'
// import FreshFruits from '../../assets/fresh-fruits.png'

// const Discount = () => {
//   return (
//     <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{
//         backgroundImage:`url(${FreshFruits})`
//     }}>
//         <div className='flex max-w-[1400px] mx-auto px-10 py-10'>
//             <span className='text-9xl text-orange-500 font-bold transform -rotate-90 h-fit self-center '>20%</span>
//             <div className='max-w-[700px]'>
//                 <h3 className='text-7xl text-zinc-800 font-bold '>
//                     First Order Discount
//                 </h3>
//                 <p className='text-zinc-600 my-6'>
//                     Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fash delivery and quality guaranteed.

//                 </p>
//             </div><br/>
//             <Button content="Get a Discount" />

//         </div>
//     </section>
//   )
// }

// export default Discount


// import React from 'react'
// import Button from '../Button/Button'
// import FreshFruits from '../../assets/fresh-fruits.png'

// const Discount = () => {
//   return (
//     <section
//       className='bg-zinc-100 bg-no-repeat bg-right bg-contain'
//       style={{ backgroundImage: `url(${FreshFruits})` }}
//     >
//       <div className='flex items-center max-w-[1400px] mx-auto px-10 py-20'>

//         {/* Left Rotated 20% */}
//         <span className='text-[120px] text-orange-500 font-bold -rotate-90'>
//           20%
//         </span>

//         {/* Content */}
//         <div className='max-w-[600px] ml-10'>
//           <h3 className='text-6xl text-zinc-800 font-bold leading-tight'>
//             First Order <br /> Discount!
//           </h3>

//           <p className='text-zinc-600 my-6'>
//             Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase.
//             Fast delivery and quality guaranteed.
//           </p>

//           {/* Button under text */}
//           <Button content="Get a Discount" />
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Discount

import React from "react";
import AnimatedButton from "../Button/AnimatedButton";
import FreshFruits from "../../assets/fresh-fruits.png";

const Discount = () => {
  return (
    <section
      className="bg-zinc-100 bg-no-repeat bg-right bg-contain"
      style={{ backgroundImage: `url(${FreshFruits})` }}
    >
      <div className="md:bg-transparent bg-zinc-100  flex md:flex-row flex-col items-center max-w-[1400px] 
      mx-auto px-10 py-20">

        <span className="md:text-[120px] text-5xl text-orange-500 font-bold md:-rotate-90 self-start pl-10 md:self-center">
          20%
        </span>

        <div className="max-w-[600px] ml-10">
          <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold leading-tight">
            First Order <br /> Discount! 
          </h3>

          <p className="text-zinc-600 my-6">
            Enjoy an exclusive first order discount on our grocery website!
            Shop fresh essentials and save big on your first purchase.
            Fast delivery and quality guaranteed.
          </p>

          <AnimatedButton content="Get a Discount" />
        </div>

      </div>
    </section>
  );
};

export default Discount;
