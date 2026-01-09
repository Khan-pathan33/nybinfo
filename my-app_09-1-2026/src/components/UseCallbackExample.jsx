// src/components/UseCallbackExample.jsx
import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button rendered");
  return (
    <button
      className="px-3 py-1 bg-blue-500 text-white rounded"
      onClick={onClick}
    >
      Click Me
    </button>
  );
});

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div className="p-4 border rounded space-y-2">
      <p>Count: {count}</p>
      <div className="flex space-x-2">
        <button
          className="px-3 py-1 bg-green-500 text-white rounded"
          onClick={() => setCount(c => c + 1)}
        >
          Increment
        </button>
        <Button onClick={handleClick} />
      </div>
    </div>
  );
}
