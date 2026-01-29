// // Components.jsx
// import React, { useState } from "react";

// export default function A() {
//   // State lifted to A
//   const [liftedCount, setLiftedCount] = useState(0);

//   return (
//     <div className="p-6 space-y-6 font-sans max-w-xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-4"></h1>

//       {/* A has lifted state */}
//       <div className="p-4 border rounded bg-gray-100">
//         <h2 className="font-semibold">A (lifted state)</h2>
//         <p>Count in A: {liftedCount}</p>
//         <button
//           className="px-3 py-1 bg-blue-500 text-white rounded mt-2"
//           onClick={() => setLiftedCount(liftedCount + 1)}
//         >
//           Increment A Count
//         </button>
//         <B liftedCount={liftedCount} setLiftedCount={setLiftedCount} />
//       </div>
//     </div>
//   );
// }

// // B has its own local state
// function B({ liftedCount, setLiftedCount }) {
//   const [bCount, setBCount] = useState(0);

//   return (
//     <div className="ml-4 mt-4 p-3 border-l-4 border-blue-300">
//       <h3 className="font-semibold">B (local state)</h3>
//       <p>B's local count: {bCount}</p>
//       <button
//         className="px-2 py-1 bg-purple-500 text-white rounded"
//         onClick={() => setBCount(bCount + 1)}
//       >
//         Increment B
//       </button>
//       <C liftedCount={liftedCount} setLiftedCount={setLiftedCount} />
//     </div>
//   );
// }

// // C uses lifted state from A
// function C({ liftedCount, setLiftedCount }) {
//   return (
//     <div className="ml-4 mt-4 p-3 border-l-4 border-green-300">
//       <h4 className="font-semibold">C (uses lifted state)</h4>
//       <p>Lifted count from A: {liftedCount}</p>
//       <button
//         className="px-2 py-1 bg-green-500 text-white rounded"
//         onClick={() => setLiftedCount(liftedCount + 1)}
//       >
//         Increment Lifted Count
//       </button>
//       <D />
//     </div>
//   );
// }

// // D has no state, just shows props
// function D() {
//   return (
//     <div className="ml-4 mt-4 p-3 border-l-4 border-yellow-300">
//       <h5 className="font-semibold">D (no state)</h5>
//       <p>Just a display component, no state here.</p>
//       <E />
//     </div>
//   );
// }

// // E has local state
// function E() {
//   const [eCount, setECount] = useState(0);
//   return (
//     <div className="ml-4 mt-4 p-3 border-l-4 border-red-300">
//       <h5 className="font-semibold">E (local state)</h5>
//       <p>E's local count: {eCount}</p>
//       <button
//         className="px-2 py-1 bg-red-500 text-white rounded"
//         onClick={() => setECount(eCount + 1)}
//       >
//         Increment E
//       </button>
//       <F />
//     </div>
//   );
// }

// // F has no state
// function F() {
//   return (
//     <div className="ml-4 mt-4 p-3 border-l-4 border-pink-300">
//       <h5 className="font-semibold">F (no state)</h5>
//       <p>Display only, no state here.</p>
//       <G />
//     </div>
//   );
// }

// // G uses lifted state from A
// function G({ liftedCount }) {
//   return (
//     <div className="ml-4 mt-4 p-3 border-l-4 border-indigo-300">
//       <h5 className="font-semibold">G (uses lifted state)</h5>
//       <p>Lifted count from A: {liftedCount}</p>
//       <H />
//     </div>
//   );
// }

// // H local state
// function H() {
//   const [hCount, setHCount] = useState(0);
//   return (
//     <div className="ml-4 mt-4 p-3 border-l-4 border-teal-300">
//       <h5 className="font-semibold">H (local state)</h5>
//       <p>H's local count: {hCount}</p>
//       <button
//         className="px-2 py-1 bg-teal-500 text-white rounded"
//         onClick={() => setHCount(hCount + 1)}
//       >
//         Increment H
//       </button>
//       <I />
//     </div>
//   );
// }

// // I no state, just displays
// function I() {
//   return (
//     <div className="ml-4 mt-4 p-3 border-l-4 border-gray-500">
//       <h5 className="font-semibold">I (no state)</h5>
//       <p>Just a final display component.</p>
//     </div>
//   );
// }


// src/Components.jsx
import React, { useState } from "react";

// Parent Component demonstrating state lifting vs local state
export default function App() {
  // -------------------------
  // Lifted state (shared)
  // -------------------------
  const [liftedCount, setLiftedCount] = useState(0);

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-10 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">State Lifting</h1>

      {/* -------------------------
          Local State Example
      ------------------------- */}
      <section className="p-6 border rounded shadow bg-gray-100">
        <h2 className="text-xl font-semibold mb-2">Local State (child manages)</h2>
        <p className="text-gray-700 mb-4">
          This counter is inside B. Parent cannot see or change it.
        </p>
        <B />
      </section>

      {/* -------------------------
          Lifted State Example
      ------------------------- */}
      <section className="p-6 border rounded shadow bg-green-50">
        <h2 className="text-xl font-semibold mb-2">Lifted State (parent manages)</h2>
        <p className="text-gray-700 mb-4">
          This counter is in A (parent). Child C updates it, and parent sees changes.
        </p>
        <div className="flex items-center gap-4 mb-4">
          <p className="font-bold">Parent sees: {liftedCount}</p>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => setLiftedCount(liftedCount + 1)}
          >
            Increment in Parent
          </button>
        </div>
        <C liftedCount={liftedCount} setLiftedCount={setLiftedCount} />
      </section>
    </div>
  );
}

// -------------------------
// Local State Component
// -------------------------
function B() {
  const [localCount, setLocalCount] = useState(0);

  return (
    <div className="p-4 border rounded bg-white">
      <p>Local count in B: {localCount}</p>
      <button
        className="px-3 py-1 mt-2 bg-purple-500 text-white rounded"
        onClick={() => setLocalCount(localCount + 1)}
      >
        Increment Local Count
      </button>
    </div>
  );
}

// -------------------------
// Lifted State Component
// -------------------------
function C({ liftedCount, setLiftedCount }) {
  return (
    <div className="p-4 border rounded bg-white">
      <p>Lifted count in child C: {liftedCount}</p>
      <button
        className="px-3 py-1 mt-2 bg-green-500 text-white rounded"
        onClick={() => setLiftedCount(liftedCount + 1)}
      >
        Increment Lifted Count
      </button>
    </div>
  );
}
