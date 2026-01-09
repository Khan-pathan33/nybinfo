// import { useState } from "react";

// export default function ConditionalScreen() {
//   const [show, setShow] = useState(true);

//   return (
//     <div className="bg-pink-200 p-6 rounded">
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <p>This appears conditionally!</p>}
//     </div>
//   );
// }

import { useState } from "react";

export default function ConditionalScreen() {
  const [show, setShow] = useState(true);

  return (
    <div className="bg-teal-200 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">🔀 Conditional Rendering</h1>
      <button
        onClick={() => setShow(!show)}
        className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 mb-4"
      >
        Toggle Element
      </button>
      {show ? (
        <div className="p-6 bg-white rounded shadow text-xl">
          ✅ Element is visible
        </div>
      ) : (
        <div className="p-6 bg-gray-300 rounded shadow text-xl">
          ❌ Element is hidden
        </div>
      )}
    </div>
  );
}
