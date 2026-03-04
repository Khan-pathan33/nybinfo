// import React, { useState } from "react";
// import ProductList from "./ProductList";
// import { GoHeartFill } from "react-icons/go";

// const Product = ({searchTerm, addToCart, addToWishlist, wishlist}) => {
//   const categories = [ "All", "Mens", "Womens", "Kids", "New Arrivals", "On Sale",
//   ];

//   const [activeTab, setActiveTab] = useState("All");

// //   category select depend on users like all , men, women, kids etc for that im using filter 

//  const filteredItems= ProductList.filter(item=>{
//  const matchesCategory = (activeTab === 'All') ||
//  (activeTab === 'New Arrivals' && item.NewArrival) ||
//  (activeTab === 'On Sale' && item.onSale)||
//  (activeTab === item.category)


//  // for searching purpos like tshirt ,dress etc

// const matchesSearch = item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())

//  return matchesCategory && matchesSearch
//  })

//   const renderProducts = filteredItems.map((product)  => {
//     return (
//       //card

//       <div key={product.id} className="bg-zinc-100 p-5 border-1 border-zinc-300 rounded-lg">
//         <div className="flex justify-between items-center">
//           <button className={`text-3xl cursor-pointer ${wishlist.some(item=> item.id === product.id) ? 'text-red-600' : 'text-zinc-300'}`}
//           onClick={()=>addToWishlist(product)}>
//             <GoHeartFill />
//           </button>
//           {/* batch */}
//          <div>
//             {
//                 (product.onSale || product.NewArrival) &&
//                 (
//                      <span className={`px-3 py-1 text-white  ${product.onSale ? 'bg-red-600' : 'bg-green-600'}`}>
//                         {product.onSale ? 'Sale' : 'New'}
//                         </span>
//                 )
//                 }
//          </div>
//         </div>

//         {/* product image */}
//         <div className="w-full h-[30vh]">
//             <img src={product.image} />
//         </div>


//         {/* product detail */}
//         <div className="text-center mt-10">
//           <h3 className="text-[1.4rem] font-semibold">{product.name}</h3>
//           <div className="mt-1 mb-5">
//             {/* oldprice */}
//             {
//                 product.onSale && 
//                 (
//              <span className="text-zinc-600 font-semibold text-lg line-through mr-8">${product.oldPrice.toFixed(2)}</span>

//                 )
//             }
//             {/* discount price */}
//             {/* tofixed(2) for 2 digit number like 20.00 not jst 20 */}
//             <span className="text-red-600 font-semibold text-lg">${product.price.toFixed(2)}</span>
//           </div>
//           <button className="bg-blue-600 text-white text-lg py-3 w-full rounded-lg cursor-pointer active:bg-blue-700"onClick={()=>addToCart(product)}>
//             Add to Cart</button>
//         </div>
//       </div>
//     );
//   });

//   return (
//     <section id='product-section' className="max-w-[1550px] mx-auto px-12 py-10 mt-8">
//       {/* tabs */}
//       <div className="flex gap-3 justify-center items-center">
//         {categories.map((category) => {
//           return (
//             <button
//               key={category}
//               className={` px-8 py-2 rounded-full text-lg cursor-pointer
//                          ${activeTab === category ? "bg-blue-600 text-white" : "bg-zinc-100 text-zinc-800"} `}
//               onClick={() => setActiveTab(category)}
//             >
//               {category}
//             </button>
//           );
//         })}
//       </div>

//       {/* product listing */}
//       <div className="grid grid-cols-4 gap-9 mt-12">
//         {
//         filteredItems.length === 0 ? <p className="text-center col-span-4 text-zinc-800 text-lg">No product found</p> : renderProducts
//         }
//         </div>
//     </section>
//   );
// };

// export default Product;





import React, { useState } from "react";
import ProductList from "./ProductList";
import { GoHeartFill } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const Product = ({ searchTerm, addToCart, addToWishlist, wishlist }) => {
  const categories = ["All", "Mens", "Womens", "Kids", "New Arrivals", "On Sale"];
  const [activeTab, setActiveTab] = useState("All");

  // Filter products based on category and search
  const filteredItems = ProductList.filter((item) => {
    const matchesCategory =
      activeTab === "All" ||
      (activeTab === "New Arrivals" && item.NewArrival) ||
      (activeTab === "On Sale" && item.onSale) ||
      activeTab === item.category;

    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="product-section" className="max-w-[1550px] mx-auto px-12 py-10 mt-8">
      {/* Tabs */}
      <div className="flex gap-3 justify-center items-center">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-8 py-2 rounded-full text-lg cursor-pointer ${
              activeTab === category ? "bg-blue-600 text-white" : "bg-zinc-100 text-zinc-800"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product listing */}
      <div className="grid grid-cols-4 gap-9 mt-12">
        <AnimatePresence>
          {filteredItems.length === 0 ? (
            <motion.p
              className="text-center col-span-4 text-zinc-800 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No product found
            </motion.p>
          ) : (
            filteredItems.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-zinc-100 p-5 border-1 border-zinc-300 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
              >
                <div className="flex justify-between items-center">
                  {/* Animated Heart Icon */}
                  <motion.button
                    className={`text-3xl cursor-pointer ${
                      wishlist.some((item) => item.id === product.id) ? "text-red-600" : "text-zinc-300"
                    }`}
                    onClick={() => addToWishlist(product)}
                    whileHover={{ scale: 1.3, color: "#ef4444" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GoHeartFill />
                  </motion.button>

                  {/* Badge */}
                  <div>
                    {(product.onSale || product.NewArrival) && (
                      <span
                        className={`px-3 py-1 text-white ${
                          product.onSale ? "bg-red-600" : "bg-green-600"
                        }`}
                      >
                        {product.onSale ? "Sale" : "New"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Image */}
                <div className="w-full h-[30vh] mt-4">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                </div>

                {/* Product Details */}
                <div className="text-center mt-5">
                  <h3 className="text-[1.4rem] font-semibold">{product.name}</h3>
                  <div className="mt-1 mb-5">
                    {product.onSale && (
                      <span className="text-zinc-600 font-semibold text-lg line-through mr-8">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-red-600 font-semibold text-lg">${product.price.toFixed(2)}</span>
                  </div>

                  {/* Animated Add to Cart Button */}
                  <motion.button
                    className="bg-blue-600 text-white text-lg py-3 w-full rounded-lg cursor-pointer"
                    onClick={() => addToCart(product)}
                    whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Product;