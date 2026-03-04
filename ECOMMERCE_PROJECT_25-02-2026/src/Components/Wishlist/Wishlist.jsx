// import React from "react";

// const Wishlist = ({ activePanel, handleClose, wishlist, addToCart, clearWishlist }) => {
//   return (
//     <div
//       className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0  z-40 left-auto w-[400px] border-1 border-zinc-300 py-7 transfrom transition-transfrom duration-300
//      ${activePanel === "wishlist" ? "translate-x-0" : "translate-x-full "}`}
//     >
//       {/* heading */}
//       <div className="px-10">
//         <h3 className="text-3xl font-bold text-zinc-800 text-center">
//           Your WishList
//         </h3>
//       </div>

//       {/* cart items */}
//       <div className="flex-1 flex flex-col gap-2">
//         {
//           wishlist.length === 0 ? ( <p className="text-zinc-800 text-center ">Your wishlist is empty</p>) :
//           (
//             wishlist.map((product, index) => {
//           return (
//             <div key = {product.id} className={`flex items-center gap-3  px-5 py-1 border-y-1 border-zinc-300
//             ${index % 2 === 0 ? 'bg-blue-100': 'bg-white'}`}>
//               {/* cart image */}
//               <div className="w-20 h-20 ">
//                 <img src={product.image} className="w-full h-full object-contain" />
//               </div>

//               {/* product detail */}

//               <div className="flex-1">
//                 <div className="flex justify-between">
//                   <h4 className="font-semibold text-zinc-800 text-lg">
//                     {product.name}
//                   </h4>
//                   <p className="text-sm text-zinc-500">Added:{product.addDate}</p>
//                 </div>

//                 {/* increment & decrement */}
//                 <div className="flex justify-between">
//                   <div>
//                     {/* oldprice */}
//                     {
//                     product.onSale && (
//                       <span className="text-zinc-600 font-semibold text-lg line-through mr-4">
//                         ${product.oldPrice.toFixed(2)}
//                       </span>
//                     )}
//                     {/* discount price */}
//                     {/* tofixed(2) for 2 digit number like 20.00 not jst 20 */}
//                     <span className="text-red-600 font-semibold text-lg">
//                       ${product.price.toFixed(2)}
//                     </span>
//                   </div>
//                   <button className="bg-blue-600 text-white text-sm px-5 py-[5px] rounded-full active:bg-blue-700 cursor-pointer" onClick={()=>addToCart(product)}>
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })
//           )
//         }
//       </div>

//       {/* buttons */}

//       <div className="flex gap-x-2 px-10">
//         <button
//           className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700"
//           onClick={handleClose}
//         >
//           Close
//         </button>
//         <button className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700" onClick={clearWishlist}>
//           Clear All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Wishlist;



// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { GoHeartFill } from "react-icons/go"; // example icon for wishlist

// const Wishlist = ({ activePanel, handleClose, wishlist, addToCart, clearWishlist }) => {
//   return (
//     <AnimatePresence>
//       {activePanel === "wishlist" && (
//         <motion.div
//           initial={{ x: "100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "100%" }}
//           transition={{ type: "tween", duration: 0.4 }}
//           className="flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 z-50 left-auto w-[400px] border-1 border-zinc-300 py-7"
//         >
//           {/* heading */}
//           <motion.div
//             className="px-10"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.3 }}
//           >
//             <h3 className="text-3xl font-bold text-zinc-800 text-center">
//               Your WishList
//             </h3>
//           </motion.div>

//           {/* wishlist items */}
//           <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
//             {wishlist.length === 0 ? (
//               <motion.p
//                 className="text-zinc-800 text-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//               >
//                 Your wishlist is empty
//               </motion.p>
//             ) : (
//               wishlist.map((product, index) => (
//                 <motion.div
//                   key={product.id}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: 50 }}
//                   transition={{ delay: index * 0.05 }}
//                   className={`flex items-center gap-3 px-5 py-1 border-y-1 border-zinc-300 ${
//                     index % 2 === 0 ? "bg-blue-100" : "bg-white"
//                   }`}
//                 >
//                   {/* cart image */}
//                   <div className="w-20 h-20">
//                     <img
//                       src={product.image}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>

//                   {/* product detail */}
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <h4 className="font-semibold text-zinc-800 text-lg">
//                         {product.name}
//                       </h4>
//                       <motion.p
//                         className="text-sm text-zinc-500 flex items-center gap-1"
//                         whileHover={{ scale: 1.1, color: "#2563eb" }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                       >
//                         <GoHeartFill /> Added: {product.addDate}
//                       </motion.p>
//                     </div>

//                     <div className="flex justify-between mt-1 items-center">
//                       <div>
//                         {product.onSale && (
//                           <span className="text-zinc-600 font-semibold text-lg line-through mr-4">
//                             ${product.oldPrice.toFixed(2)}
//                           </span>
//                         )}
//                         <span className="text-red-600 font-semibold text-lg">
//                           ${product.price.toFixed(2)}
//                         </span>
//                       </div>

//                       {/* Animated Add to Cart Button */}
//                       <motion.button
//                         className="bg-blue-600 text-white text-sm px-5 py-[5px] rounded-full cursor-pointer"
//                         whileHover={{ scale: 1.1, backgroundColor: "#1d4ed8" }}
//                         whileTap={{ scale: 0.95 }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                         onClick={() => addToCart(product)}
//                       >
//                         Add to Cart
//                       </motion.button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))
//             )}
//           </div>

//           {/* buttons */}
//           <motion.div
//             className="flex gap-x-2 px-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.3 }}
//           >
//             <motion.button
//               className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer rounded-lg"
//               whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleClose}
//             >
//               Close
//             </motion.button>

//             <motion.button
//               className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer rounded-lg"
//               whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
//               whileTap={{ scale: 0.95 }}
//               onClick={clearWishlist}
//             >
//               Clear All
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Wishlist;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoHeartFill } from "react-icons/go"; // heart icon

const Wishlist = ({ activePanel, handleClose, wishlist, addToCart, clearWishlist }) => {
  // Track which wishlist items are "hearted" (by id)
  const [heartedItems, setHeartedItems] = useState([]);

  const toggleHeart = (id) => {
    setHeartedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <AnimatePresence>
      {activePanel === "wishlist" && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.4 }}
          className="flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 z-50 left-auto w-[400px] border-1 border-zinc-300 py-7"
        >
          {/* heading */}
          <motion.div
            className="px-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-zinc-800 text-center">
              Your WishList
            </h3>
          </motion.div>

          {/* wishlist items */}
          <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
            {wishlist.length === 0 ? (
              <motion.p
                className="text-zinc-800 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Your wishlist is empty
              </motion.p>
            ) : (
              wishlist.map((product, index) => {
                const isHearted = heartedItems.includes(product.id);

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center gap-3 px-5 py-1 border-y-1 border-zinc-300 ${
                      index % 2 === 0 ? "bg-blue-100" : "bg-white"
                    }`}
                  >
                    {/* product image */}
                    <div className="w-20 h-20">
                      <img
                        src={product.image}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* product detail */}
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-zinc-800 text-lg">
                          {product.name}
                        </h4>

                        {/* ❤️ Heart Button */}
                        <button
                          onClick={() => toggleHeart(product.id)}
                          className="text-xl"
                        >
                          <GoHeartFill
                            style={{ color: isHearted ? "red" : "gray" }}
                          />
                        </button>
                      </div>

                      <div className="flex justify-between mt-1 items-center">
                        <div>
                          {product.onSale && (
                            <span className="text-zinc-600 font-semibold text-lg line-through mr-4">
                              ${product.oldPrice.toFixed(2)}
                            </span>
                          )}
                          <span className="text-red-600 font-semibold text-lg">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>

                        <motion.button
                          className="bg-blue-600 text-white text-sm px-5 py-[5px] rounded-full cursor-pointer"
                          whileHover={{ scale: 1.1, backgroundColor: "#1d4ed8" }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>

          {/* buttons */}
          <motion.div
            className="flex gap-x-2 px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <motion.button
              className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClose}
            >
              Close
            </motion.button>

            <motion.button
              className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
              whileTap={{ scale: 0.95 }}
              onClick={clearWishlist}
            >
              Clear All
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Wishlist;