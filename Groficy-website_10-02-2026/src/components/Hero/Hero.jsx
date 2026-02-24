// import React from "react";
// import Grocery from '../../assets/grocery.png'
// import Button from "../Button/Button"



// const Hero = () => {
//   return (
//     <section>
//       <div className="min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row
//        flex-col items-center md:pt-25 pt-35 ">
//         {/* Hero Content  */}
//         <div className="flex-1 ">
//             <span className="bg-orange-100 text-orange-500 px-5 py-2 text-lg rounded-full ">Export Best Quality...</span>
//             <h1 className="md:text-7xl/20 text-5xl/14 font-bold mt-4 ">
//                 Tasty organic <br/>
//                 <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span><br /> In Your City
//             </h1> 

//             <p className=" text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10 ">
//                 Bred for a high content of beneficial substances. Our products are all fresh & healthy.
//             </p>
//             <Button  content="Shop Now"/>

//         </div>
//         {/* Hero Image */}
//         <div className="flex-1">
//             <img src={Grocery} alt="Hero Image" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { motion } from "framer-motion";
import Grocery from '../../assets/grocery.png';
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35">

        {/* Hero Content */}
        <motion.div
          className="flex-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-orange-100 text-orange-500 px-5 py-2 text-lg rounded-full">
            Export Best Quality...
          </span>

          <motion.h1
            className="md:text-7xl/20 text-5xl/14 font-bold mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Tasty organic <br/>
            <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span><br /> In Your City
          </motion.h1>

          <motion.p
            className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Bred for a high content of beneficial substances. Our products are all fresh & healthy.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button content="Shop Now" />
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex-1"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={Grocery} alt="Hero Image" className="w-full" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;