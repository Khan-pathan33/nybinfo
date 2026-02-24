// import React, { useState } from 'react'
// import Heading from '../Heading/Heading'
// import ProductList from '../ProductList/ProductList'
// import Cards from '../Cards/Cards'

// const Products = () => {
//     const categories = [
//         'All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
//         const [activeTab, setActiveTab] =useState('All')

//         const renderCards = ProductList.slice(0, ).map(product=>{
//             return (
//                 <Cards image={product.image} name={product.name} price={product.price}/>
//             )
//         })

//   return (

//     <section>
//     <div className='max-w-[1400px] mx-auto px-10 py-20'>
//         <Heading highlight='Our' heading='Products' />
//         {/* Tabs like all, fruits etc */}
//         <div className='flex gap-3 justify-center mt-10'>
//             {categories.map(category=>{
//                 return (
//                     <button key={category} className={`px-5 py-2 text-lg rounded-lg cursor-pointer
//                          ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
//                     onClick={()=>setActiveTab(category)}>
//                         {category}
//                     </button>
//                 )
//             })}
//         </div>

//         {/* Product Listing */}
//         <div className='grid grid-cols-4 gap-9 mt-20'>
//             {renderCards}
//         </div>
//     </div>
//     </section>
//   )
// }

// export default Products
import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Products = () => {
    const categories = [
        'All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'
    ]

    const [activeTab, setActiveTab] = useState('All')

    let filteredItems = activeTab === 'All' ? ProductList : ProductList.filter(item => item.category === activeTab)

    const renderCards = filteredItems.slice(0).map((product, index) => {
        return (
            <motion.div
                key={product.id || index}
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
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
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight='Our' heading='Products' />

                {/* Tabs */}
                <div className='flex flex-wrap gap-3 justify-center mt-10'>
                    {categories.map(category => {
                        return (
                            <button
                                key={category}
                                className={`px-5 py-2 text-lg rounded-lg cursor-pointer
                                ${activeTab === category
                                    ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white'
                                    : 'bg-zinc-100'}`}
                                onClick={() => setActiveTab(category)}
                            >
                                {category}
                            </button>
                        )
                    })}
                </div>

                {/* Product Listing with hover animations */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
                    {renderCards}
                </div>

                <div className='mt-15 mx-auto w-fit'>
                    <Link to='/allproducts' className='bg-gradient-to-b from-orange-400 to-orange-500
                    text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600
                    transition-all duration-300 cursor-pointer '>
                        View all
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Products