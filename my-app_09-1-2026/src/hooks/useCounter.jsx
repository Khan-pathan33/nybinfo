// src/hooks/useCounter.jsx
import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return { count, increment, decrement };
}

// src/components/Counter.jsx
import { useCounter } from "../hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-2">Count: {count}</h2>
      <button className="px-3 py-1 bg-blue-500 text-white mr-2 rounded" onClick={increment}>+</button>
      <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={decrement}>-</button>
    </div>
  );
}
