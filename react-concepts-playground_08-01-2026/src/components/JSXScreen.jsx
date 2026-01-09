// export default function JSXScreen() {
//   const name = "JSX Example";
//   return (
//     <div className="bg-yellow-200 p-6 rounded">
//       <h2 className="text-2xl font-bold">{name}</h2>
//       <p>JSX lets you write HTML inside JavaScript.</p>
//     </div>
//   );
// }
import React from "react"; // <-- Add this
import { useState } from "react";


export default function JSXScreen() {
  const [show, setShow] = React.useState(true);

  return (
    <div className="bg-pink-200 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">🖋 JSX Demo</h1>
      <button
        onClick={() => setShow(!show)}
        className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600 mb-6"
      >
        Toggle JSX Element
      </button>
      {show ? (
        <div className="p-6 bg-white rounded shadow text-xl transition duration-500">
          <p>This JSX element appears/disappears dynamically!</p>
        </div>
      ) : (
        <div className="p-6 bg-gray-300 rounded shadow text-xl transition duration-500">
          <p>JSX allows embedding expressions in HTML!</p>
        </div>
      )}
    </div>
  );
}
