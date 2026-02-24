
// import React from 'react'
// import Heading from '../Heading/Heading'
// import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb'
// import { PiFactory, PiPlant } from "react-icons/pi";
// import { SlBadge } from "react-icons/sl";
// import { BsTruck } from "react-icons/bs";

// const Process = () => {

//     const renderSteps =steps.map((item, index) =>{
//         return (
//         <div key={index} className={`flex-1 basis-[300px] ${item.id % 2 === 0 ? 'md:-mt-100': ''}`}>
//             <span className='flex w-18 h-18 rounded-full mx-auto justify-center items-center text-8xl bg-zinc-800 text-white
//              outline-[3px] outline-offset-7 outline-zinc-800 text-white outline-dotted'>
//                 {item.number}
//             </span>
//             <div className='flex items-center mt-10 gap-x-5'>
//                 <span className='flex justify-center items-center text-3xl  bg-gradient-to-b from-orange-400 to-orange-500
//                  text-white h-15 w-15 rounded-full'>{item.icon}</span>
                
//                 <div>
//                     <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
//                     <p className='text-zinc-600 mt-2'>{item.para}</p>
//                 </div>

//             </div>
//         </div>
//         )
//     })
//   return (
//     <section>
//         <div className='max-w-[1400px] mx-auto px-10 py-20'>
//           <div className='w-fit mr-auto '>
//               <Heading highlight='Our' heading='Process'/>
//           </div>

//         <div className='flex flex-wrap gap-y-17 items-center justify-center md:mt-20 mt-10 md:pt-50
//         '>
//             { renderSteps}
//         </div>

//         </div>

//     </section>
//   )
// }

// export default Process

// const steps=[
//     {
//         id:1,
//         number: <TbCircleNumber1Filled />,
//         title: 'Sourcing',
//         para: 'It is a long established fact that a reader',
//         icon: <PiPlant />
//     },
//     {
//         id:2,
//         number: <TbCircleNumber2Filled />,
//         title: 'Manufacturing',
//         para: 'It is a long established fact that a reader',
//         icon: <PiFactory />
//     },
//     {
//         id: 3,
//         number: <TbCircleNumber3Filled />,
//         title: 'Quality Control',
//         para: 'It is a long established fact that a reader',
//         icon: <SlBadge />
//     },
//     {
//         id: 4,
//         number: <TbCircleNumber4Filled />,
//         title: 'Logistics',
//         para: 'It is a long established fact that a reader',
//         icon: <BsTruck />
//     },
// ]

// import React from 'react'
// import Heading from '../Heading/Heading'
// import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb'
// import { PiFactory, PiPlant } from "react-icons/pi";
// import { SlBadge } from "react-icons/sl";
// import { BsTruck } from "react-icons/bs";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const Process = () => {

//   const renderSteps = steps.map((item, index) =>{
//     return (
//       <motion.div
//         key={index}
//         variants={itemVariants}
//         whileHover={{
//           y: -15,
//           x: item.id % 2 === 0 ? 35 : -35,
//           transition: { duration: 0.3 }
//         }}
//         className={`flex-1 basis-[300px] ${item.id % 2 === 0 ? 'md:-mt-32' : ''}`}
//       >
//         {/* Number Circle */}
//         <motion.span
//           whileHover={{ scale: 1.15 }}
//           className='flex w-18 h-18 rounded-full mx-auto justify-center items-center text-8xl bg-zinc-800 text-white
//           outline-[3px] outline-offset-7 outline-zinc-800 outline-dotted'
//         >
//           {item.number}
//         </motion.span>

//         {/* Content */}
//         <div className='flex items-center mt-10 gap-x-5'>
//           <motion.span
//             whileHover={{ rotate: 12, scale: 1.1 }}
//             className='flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500
//             text-white h-15 w-15 rounded-full'
//           >
//             {item.icon}
//           </motion.span>
                
//           <div>
//             <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
//             <p className='text-zinc-600 mt-2'>{item.para}</p>
//           </div>
//         </div>
//       </motion.div>
//     )
//   })

//   return (
//     <section>
//       <div className='max-w-[1400px] mx-auto px-10 py-20'>
//         <div className='w-fit mr-auto'>
//           <Heading highlight='Our' heading='Process'/>
//         </div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className='flex flex-wrap gap-y-17 items-center justify-center md:mt-20 mt-10 md:pt-50'
//         >
//           {renderSteps}
//         </motion.div>

//       </div>
//     </section>
//   )
// }

// export default Process

// const steps=[
//   {
//     id:1,
//     number: <TbCircleNumber1Filled />,
//     title: 'Sourcing',
//     para: 'It is a long established fact that a reader',
//     icon: <PiPlant />
//   },
//   {
//     id:2,
//     number: <TbCircleNumber2Filled />,
//     title: 'Manufacturing',
//     para: 'It is a long established fact that a reader',
//     icon: <PiFactory />
//   },
//   {
//     id: 3,
//     number: <TbCircleNumber3Filled />,
//     title: 'Quality Control',
//     para: 'It is a long established fact that a reader',
//     icon: <SlBadge />
//   },
//   {
//     id: 4,
//     number: <TbCircleNumber4Filled />,
//     title: 'Logistics',
//     para: 'It is a long established fact that a reader',
//     icon: <BsTruck />
//   },
// ]
import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb'
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Process = () => {
  const renderSteps = steps.map((item, index) => {
    return (
      <motion.div
        key={index}
        variants={itemVariants}
        whileHover={{
          y: -15,
          x: item.id % 2 === 0 ? 30 : -30,
          transition: { duration: 0.3 },
        }}
        className={`flex-1 basis-[300px] ${
          item.id % 2 === 0 ? 'md:-mt-32' : ''
        }`}
      >
        {/* Number Circle */}
        <motion.span
          whileHover={{ scale: 1.15 }}
          className="flex w-18 h-18 rounded-full mx-auto justify-center items-center text-8xl bg-zinc-800 text-white
          outline-[3px] outline-offset-7 outline-zinc-800 outline-dotted"
        >
          {item.number}
        </motion.span>

        {/* Content */}
        <div className="flex items-center mt-10 gap-x-5">
          <motion.span
            whileHover={{ rotate: 12, scale: 1.1 }}
            className="flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500
            text-white h-15 w-15 rounded-full"
          >
            {item.icon}
          </motion.span>

          <div>
            <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
            <p className="text-zinc-600 mt-2">{item.para}</p>
          </div>
        </div>
      </motion.div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-y-17 items-center justify-center md:mt-20 mt-10 md:pt-50"
        >
          {renderSteps}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: 'Sourcing',
    para: 'It is a long established fact that a reader',
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: 'Manufacturing',
    para: 'It is a long established fact that a reader',
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: 'Quality Control',
    para: 'It is a long established fact that a reader',
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: 'Logistics',
    para: 'It is a long established fact that a reader',
    icon: <BsTruck />,
  },
];