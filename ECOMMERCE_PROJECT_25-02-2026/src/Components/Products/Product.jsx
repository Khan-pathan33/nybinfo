import React, { useState } from "react";
import ProductList from "./ProductList";
import { GoHeartFill } from "react-icons/go";

const Product = ({searchTerm, addToCart}) => {
  const categories = [ "All", "Mens", "Womens", "Kids", "New Arrivals", "On Sale",
  ];

  const [activeTab, setActiveTab] = useState("All");

//   category select depend on users like all , men, women, kids etc for that im using filter 

 const filteredItems= ProductList.filter(item=>{
 const matchesCategory = (activeTab === 'All') ||
 (activeTab === 'New Arrivals' && item.NewArrival) ||
 (activeTab === 'On Sale' && item.onSale)||
 (activeTab === item.category)


 // for searching like tshirt ,dress etc

const matchesSearch = item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())

 return matchesCategory && matchesSearch
 })

  const renderProducts = filteredItems.map((product) => {
    return (
      //card

      <div className="bg-zinc-100 p-5 border-1 border-zinc-300 rounded-lg">
        <div className="flex justify-between items-center">
          <button className="text-3xl text-zinc-300">
            <GoHeartFill />
          </button>
          {/* batch */}
         <div>
            {
                (product.onSale || product.NewArrival) &&
                (
                     <span className={`px-3 py-1 text-white  ${product.onSale ? 'bg-red-600' : 'bg-green-600'}`}>
                        {product.onSale ? 'Sale' : 'New'}
                        </span>
                )
                }
         </div>
        </div>

        {/* product image */}
        <div className="w-full h-[30vh]">
            <img src={product.image} />
        </div>


        {/* product detail */}
        <div className="text-center mt-10">
          <h3 className="text-[1.4rem] font-semibold">{product.name}</h3>
          <div className="mt-1 mb-5">
            {/* oldprice */}
            {
                product.onSale && 
                (
             <span className="text-zinc-600 font-semibold text-lg line-through mr-8">${product.oldPrice.toFixed(2)}</span>

                )
            }
            {/* discount price */}
            {/* tofixed(2) for 2 digit number like 20.00 not jst 20 */}
            <span className="text-red-600 font-semibold text-lg">${product.price.toFixed(2)}</span>
          </div>
          <button className="bg-blue-600 text-white text-lg py-3 w-full rounded-lg cursor-pointer active:bg-blue-700"onClick={()=>addToCart(product)}>
            Add to Cart</button>
        </div>
      </div>
    );
  });

  return (
    <section id='product-section' className="max-w-[1550px] mx-auto px-12 py-10 mt-8">
      {/* tabs */}
      <div className="flex gap-3 justify-center items-center">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={` px-8 py-2 rounded-full text-lg cursor-pointer
                         ${activeTab === category ? "bg-blue-600 text-white" : "bg-zinc-100 text-zinc-800"} `}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* product listing */}
      <div className="grid grid-cols-4 gap-9 mt-12">
        {
        filteredItems.length === 0 ? <p className="text-center col-span-4 text-zinc-800 text-lg">No product found</p> : renderProducts
        }
        </div>
    </section>
  );
};

export default Product;
