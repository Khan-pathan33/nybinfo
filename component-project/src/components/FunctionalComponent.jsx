import { useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md w-72">
      <h2 className="text-xl font-bold mb-2">
        Functional Component
      </h2>
      <p className="mb-3">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}

export default FunctionalComponent;
