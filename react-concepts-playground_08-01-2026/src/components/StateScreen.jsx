// import { useState } from "react";

// export default function StateScreen() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="bg-green-200 p-6 rounded">
//       <h2 className="text-xl font-bold">State & Data Binding</h2>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)} className="bg-green-600 text-white px-4 py-2 rounded">
//         Increment
//       </button>
//     </div>
//   );
// }

import { useState } from "react";

export default function StateScreen() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-green-200 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">⚡ State Demo</h1>
      <div className="p-6 bg-white rounded shadow mb-4 text-2xl">
        Current Count: {count}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +1
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -1
        </button>
      </div>
    </div>
  );
}
