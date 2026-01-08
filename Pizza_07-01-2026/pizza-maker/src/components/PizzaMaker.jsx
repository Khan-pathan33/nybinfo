import React, { useState } from "react";

const PIZZA_SIZES = [
  { name: "Small", price: 5 },
  { name: "Medium", price: 8 },
  { name: "Large", price: 12 },
];

const TOPPINGS = [
  { name: "Cheese", price: 1 },
  { name: "Pepperoni", price: 2 },
  { name: "Mushrooms", price: 1.5 },
  { name: "Olives", price: 1 },
];

export default function PizzaMaker() {
  const [size, setSize] = useState(PIZZA_SIZES[0]);
  const [toppings, setToppings] = useState([]);

  const toggleTopping = (topping) => {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter((t) => t !== topping));
    } else {
      setToppings([...toppings, topping]);
    }
  };

  const totalPrice = size.price + toppings.reduce((acc, t) => acc + t.price, 0);

  const handleOrder = () => {
    alert(`Order placed! Total: $${totalPrice.toFixed(2)}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">🍕 Pizza Maker</h1>

      {/* Pizza Size */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Select Size:</h2>
        <div className="flex gap-3">
          {PIZZA_SIZES.map((s) => (
            <button
              key={s.name}
              onClick={() => setSize(s)}
              className={`px-4 py-2 rounded border ${
                size.name === s.name ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              {s.name} (${s.price})
            </button>
          ))}
        </div>
      </div>

      {/* Toppings */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Select Toppings:</h2>
        <div className="flex flex-wrap gap-3">
          {TOPPINGS.map((t) => (
            <button
              key={t.name}
              onClick={() => toggleTopping(t)}
              className={`px-4 py-2 rounded border ${
                toppings.includes(t) ? "bg-yellow-400 text-white" : "bg-gray-200"
              }`}
            >
              {t.name} (+${t.price})
            </button>
          ))}
        </div>
      </div>

      {/* Total Price */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold">Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>

      {/* Order Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleOrder}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
