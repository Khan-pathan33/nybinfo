// import React from 'react'

// const Banner = ({title, bgImage}) => {
//   return (
//     <div className=' h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover relative '
//     style={{backgroundImage: `url(${bgImage})`}}>
//         <h2 className='text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10'>{title}</h2>
//         <div className='bg-black/50 absolute inset-0'>

//         </div>
//         </div>
//   )
// }

// export default Banner


import React from 'react'
import { motion } from 'framer-motion'

const Banner = ({title, bgImage}) => {
  return (
    <motion.div 
      className='h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover relative'
      style={{backgroundImage: `url(${bgImage})`}}
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      <motion.h2 
        className='text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10'
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {title}
      </motion.h2>

      <div className='bg-black/50 absolute inset-0'></div>
    </motion.div>
  )
}

export default Banner