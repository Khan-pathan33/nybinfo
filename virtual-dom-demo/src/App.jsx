// import React, { useState, useEffect, useRef } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [virtualHighlight, setVirtualHighlight] = useState(false);
//   const [realHighlight, setRealHighlight] = useState(false);
//   const realRef = useRef();

//   const handleIncrement = () => {
//     // Highlight Virtual DOM first
//     setVirtualHighlight(true);
//     setTimeout(() => {
//       setCount((prev) => prev + 1); // Virtual DOM updates internally
//       setVirtualHighlight(false);

//       // Highlight Real DOM after diffing
//       setRealHighlight(true);
//       setTimeout(() => setRealHighlight(false), 700);
//     }, 400);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 p-6 gap-8">
//       <h1 className="text-4xl font-bold text-center text-slate-800 dark:text-white">
//         Virtual DOM vs Real DOM
//       </h1>

//       <p className="text-center max-w-xl text-slate-600 dark:text-slate-300">
//         Click Increment to see how <span className="font-bold">Virtual DOM</span> updates first,
//         then React efficiently updates the <span className="font-bold">Real DOM</span>.
//       </p>

//       {/* Side-by-Side DOM Boxes */}
//       <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl items-center justify-center">
//         {/* Virtual DOM */}
//         <div
//           className={`flex-1 p-8 rounded-xl border-4 border-yellow-400 transition-all duration-300 transform ${
//             virtualHighlight ? "bg-yellow-100 scale-105 animate-bounce" : "bg-white"
//           }`}
//         >
//           <h2 className="font-bold text-2xl mb-6 text-yellow-700 text-center">Virtual DOM</h2>
//           <div className="text-4xl font-extrabold text-center text-slate-800 dark:text-white">
//             {count + 1}
//           </div>
//         </div>

//         {/* Real DOM */}
//         <div
//           ref={realRef}
//           className={`flex-1 p-8 rounded-xl border-4 border-green-500 transition-all duration-300 transform ${
//             realHighlight ? "bg-green-100 scale-105 animate-pulse" : "bg-white"
//           }`}
//         >
//           <h2 className="font-bold text-2xl mb-6 text-green-600 text-center">Real DOM</h2>
//           <div className="text-4xl font-extrabold text-center text-slate-800 dark:text-white">
//             {count}
//           </div>
//         </div>
//       </div>

//       {/* Diff Arrows */}
//       <div className="flex items-center gap-2 mt-4 text-xl text-gray-500 dark:text-gray-400">
//         <span>Virtual DOM</span>
//         <span className="animate-bounce">⬇️</span>
//         <span>Real DOM</span>
//       </div>

//       {/* Button */}
//       <button
//         onClick={handleIncrement}
//         className="mt-6 px-8 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105"
//       >
//         Increment
//       </button>

//       {/* Explanatory Text */}
//       <div className="max-w-3xl text-center mt-8 text-slate-700 dark:text-slate-300 space-y-2">
//         <p>
//           ✅ <span className="font-bold">Virtual DOM</span>: Lightweight representation in memory, updated first.
//         </p>
//         <p>
//           ✅ <span className="font-bold">Real DOM</span>: Actual browser DOM, updated only where changes occur.
//         </p>
//         <p className="font-semibold mt-2">
//           Virtual DOM improves UI performance by minimizing direct changes to the Real DOM.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default App;



import React, { useState } from "react";

const App = () => {
  // Parent state for RGB
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-200 p-6 gap-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Color Mixer Demo</h1>

      {/* Parent Component */}
      <Parent
        red={red}
        green={green}
        blue={blue}
        setRed={setRed}
        setGreen={setGreen}
        setBlue={setBlue}
      />
    </div>
  );
};

/* =====================
   Parent Component
===================== */
const Parent = ({ red, green, blue, setRed, setGreen, setBlue }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center">
      {/* Controls */}
      <div className="flex flex-col gap-4">
        <ChildA red={red} green={green} setRed={setRed} setGreen={setGreen} />
        <ChildB blue={blue} setBlue={setBlue} />
      </div>

      {/* Color Display */}
      <ChildC red={red} green={green} blue={blue} />
    </div>
  );
};

/* Child A: Red & Green Controls */
const ChildA = ({ red, green, setRed, setGreen }) => {
  return (
    <div className="p-4 bg-red-100 rounded-xl shadow-md flex flex-col gap-3 w-40">
      <h2 className="font-bold text-red-700 text-center">Red & Green</h2>
      <button
        onClick={() => setRed((prev) => (prev + 25) % 256)}
        className="p-2 bg-red-500 text-white rounded-lg"
      >
        Increase Red ({red})
      </button>
      <button
        onClick={() => setGreen((prev) => (prev + 25) % 256)}
        className="p-2 bg-green-500 text-white rounded-lg"
      >
        Increase Green ({green})
      </button>
    </div>
  );
};

/* =====================
   Child B: Blue Control
===================== */
const ChildB = ({ blue, setBlue }) => {
  return (
    <div className="p-4 bg-blue-100 rounded-xl shadow-md w-40">
      <h2 className="font-bold text-blue-700 text-center mb-2">Blue</h2>
      <button
        onClick={() => setBlue((prev) => (prev + 25) % 256)}
        className="p-2 bg-blue-500 text-white rounded-lg w-full"
      >
        Increase Blue ({blue})
      </button>
    </div>
  );
};

/* =====================
   Child C: Color Display
===================== */
const ChildC = ({ red, green, blue }) => {
  return (
    <div
      className="w-60 h-60 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-xl"
      style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
    >
      rgb({red}, {green}, {blue})
    </div>
  );
};

export default App;
