// import React from 'react'
// import BgSeaFood from '../../assets/seafood-banner.jpg'
// import CategoryPage from '../CategoryPage/CategoryPage'

// const SeaFood = () => {
//   return (
//     <div>
//        <CategoryPage title='Meat & SeaFood' bgImage={BgSeaFood} categories={['Meat', 'SeaFood']}/>
//     </div>
//   )
// }

// export default SeaFood

import React from 'react'
import { motion } from 'framer-motion'
import BgSeaFood from '../../assets/seafood-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'

const SeaFood = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
       <CategoryPage 
         title='Meat & SeaFood' 
         bgImage={BgSeaFood} 
         categories={['Meat', 'SeaFood']}
       />
    </motion.div>
  )
}

export default SeaFood