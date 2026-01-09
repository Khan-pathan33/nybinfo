// src/components/MemoExample.jsx
import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Child rendered");
  return <div className="p-2 text-purple-600 border rounded">{name}</div>;
});

export default function MemoExample() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="p-4 border rounded space-y-2">
      <Child name="React Memo" />
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() => setCount(c => c + 1)}
      >
        Count: {count}
      </button>
    </div>
  );
}
