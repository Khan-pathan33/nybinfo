// import React from 'react'

// const OrderPlace = ({setOrderPlaced}) => {
//   return (
//    <section className='flex justify-center items-center bg-black/95 fixed inset-0 z-40'>
//     <div className='bg-zinc-100 p-8 w-[400px] text-center rounded-lg border-1 border-zinc-300 '>
//         <h2 className='text-3xl text-green-600 font-bold'>Order Placed!</h2>
//         <p className='text-zinc-800 my-4'>Thanks for your purchase!</p>
//         <button className='px-6 py-3 bg-blue-600 active:bg-blue-700 text-white rounded-lg' onClick={()=>setOrderPlaced(false)}>Close</button>
//     </div>

//    </section>
//   )
// }

// export default OrderPlace


import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const OrderPlace = ({ setOrderPlaced }) => {

  // Modal variants for entrance/exit animation
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 15 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  }

  return (
    <AnimatePresence>
      <motion.section
        className='flex justify-center items-center bg-black/95 fixed inset-0 z-40'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className='bg-zinc-100 p-8 w-[400px] text-center rounded-lg border-1 border-zinc-300'
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.h2
            className='text-3xl text-green-600 font-bold'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
          >
            Order Placed!
          </motion.h2>

          <motion.p
            className='text-zinc-800 my-4'
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          >
            Thanks for your purchase!
          </motion.p>

          <motion.button
            className='px-6 py-3 bg-blue-600 active:bg-blue-700 text-white rounded-lg'
            onClick={() => setOrderPlaced(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Close
          </motion.button>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  )
}

export default OrderPlace