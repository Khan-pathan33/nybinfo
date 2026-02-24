// import React from 'react'
// import Banner from '../Banner/Banner'
// import ProductList from '../ProductList/ProductList'
// import Cards from '../Cards/Cards'

// const CategoryPage = ({title, bgImage, categories=[]}) => {

//     let filteredItems = categories.includes("All") ? ProductList : ProductList.filter(item=> categories.includes(item.category))

// const renderProduct = filteredItems.map(product=>{
//     return (
//         <Cards image={product.image} name={product.name} price={product.price}/>
//     )
// })
//   return (
//     <div>
//         <Banner title={title} bgImage={bgImage} />
//         <div className='grid gird-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10'>
//             {renderProduct}
//         </div>
//     </div>
//   )
// }

// export default CategoryPage

import React from 'react'
import { motion } from "framer-motion"
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const CategoryPage = ({title, bgImage, categories=[]}) => {

    let filteredItems = categories.includes("All") 
        ? ProductList 
        : ProductList.filter(item => categories.includes(item.category))

    const renderProduct = filteredItems.map((product, index) => {
        return (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                    duration: 0.5,
                    delay: index * 0.1 
                }}
                whileHover={{ scale: 1.05 }}
            >
                <Cards 
                    image={product.image} 
                    name={product.name} 
                    price={product.price}
                />
            </motion.div>
        )
    })

    return (
        <div>
            <Banner title={title} bgImage={bgImage} />
            <div className='grid gird-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10'>
                {renderProduct}
            </div>
        </div>
    )
}

export default CategoryPage