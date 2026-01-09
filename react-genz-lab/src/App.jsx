// // // import { useState } from 'react'
// // // import reactLogo from './assets/react.svg'
// // // import viteLogo from '/vite.svg'
// // // import './App.css'

// // // function App() {
// // //   const [count, setCount] = useState(0)

// // //   return (
// // //     <>
// // //       <div>
// // //         <a href="https://vite.dev" target="_blank">
// // //           <img src={viteLogo} className="logo" alt="Vite logo" />
// // //         </a>
// // //         <a href="https://react.dev" target="_blank">
// // //           <img src={reactLogo} className="logo react" alt="React logo" />
// // //         </a>
// // //       </div>
// // //       <h1>Vite + React</h1>
// // //       <div className="card">
// // //         <button onClick={() => setCount((count) => count + 1)}>
// // //           count is {count}
// // //         </button>
// // //         <p>
// // //           Edit <code>src/App.jsx</code> and save to test HMR
// // //         </p>
// // //       </div>
// // //       <p className="read-the-docs">
// // //         Click on the Vite and React logos to learn more
// // //       </p>
// // //     </>
// // //   )
// // // }

// // // export default App

// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
// // import "./index.css";

// // /* ---------------- CONCEPT DATA ---------------- */
// // const CONCEPTS = [
// //   { name: "JSX", gradient: "from-peach-400 via-orange-300 to-rose-400" },
// //   { name: "State", gradient: "from-olive-400 via-lime-400 to-green-400" },
// //   { name: "Props", gradient: "from-yellow-300 via-amber-400 to-orange-300" },
// //   { name: "Hooks", gradient: "from-purple-400 via-violet-500 to-fuchsia-400" },
// //   { name: "Context", gradient: "from-sky-400 via-cyan-400 to-indigo-400" },
// // ];

// // const CONCEPT_CONTENT = {
// //   JSX: [
// //     { title: "💥 Code + HTML Mashup", content: "JSX = JavaScript + HTML vibes 💻✨" },
// //     { title: "🤯 Curly Magic", content: "Curly braces {} let JS pop anywhere!" },
// //     { title: "🧨 Single Parent", content: "JSX needs one parent container. Chaos otherwise 💣." },
// //   ],
// //   State: [
// //     { title: "⚡ Mood Ring", content: "useState tracks component moods & vibes." },
// //     { title: "🎛️ Counter Wizard", content: "Buttons, sliders, toggles – state-controlled!" },
// //     { title: "⏳ Async Trap", content: "State updates aren’t instant. Chill & wait." },
// //   ],
// //   Props: [
// //     { title: "📦 Data Carrier", content: "Props move data parent → child safely." },
// //     { title: "🛑 Read-Only Rule", content: "Children cannot mutate props. Respect it!" },
// //     { title: "🌪️ Drilling Pain", content: "Nested props too deep? Context saves 🌀." },
// //   ],
// //   Hooks: [
// //     { title: "🪄 Functional Magic", content: "Hooks give superpowers to functional components." },
// //     { title: "📈 Side Effects", content: "useEffect handles API calls, logging, and more." },
// //     { title: "💀 Dependency Trap", content: "Wrong deps = infinite loops. Danger!" },
// //   ],
// //   Context: [
// //     { title: "🌍 Global Mind", content: "Context shares state across multiple components." },
// //     { title: "🎨 Theme Genie", content: "Perfect for dark mode or theme toggles." },
// //     { title: "💣 Overuse Alert", content: "All consumers re-render. Use wisely!" },
// //   ],
// // };

// // /* ---------------- HOME PAGE ---------------- */
// // function Home({ dark, setDark }) {
// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <header className="p-6 shadow-md flex justify-between items-center">
// //         <h1 className="text-3xl font-bold">React 2026 Lab 🌟</h1>
// //         <button
// //           onClick={() => setDark(!dark)}
// //           className="py-2 px-4 rounded-xl bg-gradient-to-r from-pink-400 to-indigo-400 text-white font-bold"
// //         >
// //           {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
// //         </button>
// //       </header>

// //       <main className="flex-1 flex flex-col items-center justify-center p-10">
// //         <h2 className="text-4xl font-extrabold mb-10">Explore React Concepts</h2>
// //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl justify-items-center">
// //           {CONCEPTS.map((concept) => (
// //             <Link
// //               key={concept.name}
// //               to={`/concept/${concept.name}`}
// //               className={`bg-gradient-to-br ${concept.gradient} rounded-3xl p-8 shadow-2xl text-white w-72 text-center transform transition hover:scale-105`}
// //             >
// //               <h3 className="text-2xl font-bold">{concept.name}</h3>
// //             </Link>
// //           ))}
// //         </div>
// //       </main>

// //       <footer className="p-6 shadow-inner text-center">
// //         © 2026 Gen-Z React Lab - Learn & Explore 🚀
// //       </footer>
// //     </div>
// //   );
// // }

// // /* ---------------- CONCEPT PAGE ---------------- */
// // function ConceptPage({ dark }) {
// //   const { conceptName } = useParams();
// //   const contentBoxes = CONCEPT_CONTENT[conceptName] || [];
// //   const [openBox, setOpenBox] = useState(null);

// //   const gradientMap = CONCEPTS.reduce((acc, cur) => {
// //     acc[cur.name] = cur.gradient;
// //     return acc;
// //   }, {});

// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <header className="p-6 shadow-md flex justify-between items-center">
// //         <Link to="/" className="text-xl font-bold hover:underline">🏠 Home</Link>
// //         <h1 className="text-2xl font-extrabold">{conceptName}</h1>
// //       </header>

// //       <main className="flex-1 flex flex-col items-center justify-center p-10">
// //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl justify-items-center">
// //           {contentBoxes.map((box, i) => (
// //             <div
// //               key={i}
// //               onClick={() => setOpenBox(openBox === i ? null : i)}
// //               className={`bg-gradient-to-br ${gradientMap[conceptName]} rounded-3xl p-8 shadow-2xl text-white w-72 cursor-pointer transform transition hover:scale-105`}
// //             >
// //               <h3 className="text-xl font-bold text-center">{box.title}</h3>
// //               {openBox === i && (
// //                 <p className="mt-4 text-sm text-center">{box.content}</p>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </main>

// //       <footer className="p-6 shadow-inner text-center">
// //         © 2026 Gen-Z React Lab - {conceptName} Page 🚀
// //       </footer>
// //     </div>
// //   );
// // }

// // /* ---------------- MAIN APP ---------------- */
// // export default function App() {
// //   const [dark, setDark] = useState(false);

// //   return (
// //     <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-500`}>
// //       <Router>
// //         <Routes>
// //           <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
// //           <Route path="/concept/:conceptName" element={<ConceptPage dark={dark} />} />
// //         </Routes>
// //       </Router>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
// import "./index.css";

// /* ---------------- CONCEPT DATA ---------------- */
// const CONCEPTS = [
//   { name: "JSX", gradient: "from-peach-400 via-orange-300 to-rose-400" },
//   { name: "State", gradient: "from-lime-400 via-olive-400 to-green-400" },
//   { name: "Props", gradient: "from-yellow-300 via-amber-400 to-orange-300" },
//   { name: "Hooks", gradient: "from-purple-400 via-violet-500 to-fuchsia-400" },
//   { name: "Context", gradient: "from-sky-400 via-cyan-400 to-indigo-400" },
// ];

// const CONCEPT_CONTENT = {
//   JSX: [
//     { title: "💥 Code + HTML", content: "JSX blends JavaScript & HTML like magic ✨" },
//     { title: "🤯 Curly Magic", content: "Curly braces {} let JS pop anywhere in JSX." },
//     { title: "🧨 Single Parent", content: "JSX needs one parent container to work smoothly." },
//   ],
//   State: [
//     { title: "⚡ Mood Tracker", content: "useState keeps track of component state dynamically." },
//     { title: "🎛️ Counter Wizard", content: "Control counters, sliders & toggles with state." },
//     { title: "⏳ Async Trap", content: "State updates are async — plan accordingly." },
//   ],
//   Props: [
//     { title: "📦 Data Carrier", content: "Props move data parent → child safely." },
//     { title: "🛑 Read-Only Rule", content: "Children cannot mutate props directly." },
//     { title: "🌪️ Drilling Pain", content: "Deep nested props can be tricky — Context helps." },
//   ],
//   Hooks: [
//     { title: "🪄 Functional Magic", content: "Hooks bring powers to functional components." },
//     { title: "📈 Side Effects", content: "useEffect handles API calls, logging, and more." },
//     { title: "💀 Dependency Trap", content: "Wrong deps = infinite loops. Watch out!" },
//   ],
//   Context: [
//     { title: "🌍 Global Mind", content: "Context shares state across multiple components." },
//     { title: "🎨 Theme Genie", content: "Perfect for dark mode or global state toggles." },
//     { title: "💣 Overuse Alert", content: "Too many consumers re-render. Use wisely!" },
//   ],
// };

// /* ---------------- HOME PAGE ---------------- */
// function Home({ dark, setDark }) {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="p-6 shadow-md flex justify-between items-center bg-white dark:bg-black transition-colors duration-500">
//         <h1 className="text-3xl font-extrabold text-black dark:text-white">React Innovation Lab</h1>
//         <button
//           onClick={() => setDark(!dark)}
//           className="py-2 px-4 rounded-xl bg-gradient-to-r from-peach-400 to-olive-400 text-white font-bold"
//         >
//           {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
//         </button>
//       </header>

//       <main className="flex-1 flex flex-col items-center justify-center p-10 bg-white dark:bg-black transition-colors duration-500">
//         <h2 className="text-4xl font-extrabold mb-10 text-black dark:text-white">Explore React Concepts</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl justify-items-center">
//           {CONCEPTS.map((concept) => (
//             <Link
//               key={concept.name}
//               to={`/concept/${concept.name}`}
//               className={`bg-gradient-to-br ${concept.gradient} rounded-3xl p-8 shadow-2xl text-white w-72 text-center transform transition hover:scale-105`}
//             >
//               <h3 className="text-2xl font-bold">{concept.name}</h3>
//             </Link>
//           ))}
//         </div>
//       </main>

//       <footer className="p-6 shadow-inner text-center bg-white dark:bg-black transition-colors duration-500 text-black dark:text-white">
//         © 2026 React Innovation Lab - Learn & Explore 🚀
//       </footer>
//     </div>
//   );
// }

// /* ---------------- CONCEPT PAGE ---------------- */
// function ConceptPage({ dark }) {
//   const { conceptName } = useParams();
//   const contentBoxes = CONCEPT_CONTENT[conceptName] || [];
//   const [openBox, setOpenBox] = useState(null);

//   const gradientMap = CONCEPTS.reduce((acc, cur) => {
//     acc[cur.name] = cur.gradient;
//     return acc;
//   }, {});

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="p-6 shadow-md flex justify-between items-center bg-white dark:bg-black transition-colors duration-500">
//         <Link to="/" className="text-xl font-bold text-black dark:text-white hover:underline">🏠 Home</Link>
//         <h1 className="text-2xl font-extrabold text-black dark:text-white">{conceptName}</h1>
//       </header>

//       <main className="flex-1 flex flex-col items-center justify-center p-10 bg-white dark:bg-black transition-colors duration-500">
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl justify-items-center">
//           {contentBoxes.map((box, i) => (
//             <div
//               key={i}
//               onClick={() => setOpenBox(openBox === i ? null : i)}
//               className={`bg-gradient-to-br ${gradientMap[conceptName]} rounded-3xl p-8 shadow-2xl text-white w-72 cursor-pointer transform transition hover:scale-105`}
//             >
//               <h3 className="text-xl font-bold text-center">{box.title}</h3>
//               {openBox === i && (
//                 <p className="mt-4 text-sm text-center">{box.content}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </main>

//       <footer className="p-6 shadow-inner text-center bg-white dark:bg-black transition-colors duration-500 text-black dark:text-white">
//         © 2026 React Innovation Lab - {conceptName} Page 🚀
//       </footer>
//     </div>
//   );
// }

// /* ---------------- MAIN APP ---------------- */
// export default function App() {
//   const [dark, setDark] = useState(false);

//   return (
//     <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-500`}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
//           <Route path="/concept/:conceptName" element={<ConceptPage dark={dark} />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./index.css";

/* ---------------- CONCEPT DATA ---------------- */
const CONCEPTS = [
  { name: "JSX", gradient: "from-peach-400 via-orange-300 to-rose-400" },
  { name: "State", gradient: "from-lime-400 via-olive-400 to-green-400" },
  { name: "Props", gradient: "from-yellow-300 via-amber-400 to-orange-300" },
  { name: "Hooks", gradient: "from-purple-400 via-violet-500 to-fuchsia-400" },
  { name: "Context", gradient: "from-sky-400 via-cyan-400 to-indigo-400" },
];

const CONCEPT_CONTENT = {
  JSX: [
    { title: "💥 Code + HTML", content: "JSX blends JavaScript & HTML like magic ✨" },
    { title: "🤯 Curly Magic", content: "Curly braces {} let JS pop anywhere in JSX." },
    { title: "🧨 Single Parent", content: "JSX needs one parent container to work smoothly." },
  ],
  State: [
    { title: "⚡ Mood Tracker", content: "useState keeps track of component state dynamically." },
    { title: "🎛️ Counter Wizard", content: "Control counters, sliders & toggles with state." },
    { title: "⏳ Async Trap", content: "State updates are async — plan accordingly." },
  ],
  Props: [
    { title: "📦 Data Carrier", content: "Props move data parent → child safely." },
    { title: "🛑 Read-Only Rule", content: "Children cannot mutate props directly." },
    { title: "🌪️ Drilling Pain", content: "Deep nested props can be tricky — Context helps." },
  ],
  Hooks: [
    { title: "🪄 Functional Magic", content: "Hooks bring powers to functional components." },
    { title: "📈 Side Effects", content: "useEffect handles API calls, logging, and more." },
    { title: "💀 Dependency Trap", content: "Wrong deps = infinite loops. Watch out!" },
  ],
  Context: [
    { title: "🌍 Global Mind", content: "Context shares state across multiple components." },
    { title: "🎨 Theme Genie", content: "Perfect for dark mode or global state toggles." },
    { title: "💣 Overuse Alert", content: "Too many consumers re-render. Use wisely!" },
  ],
};

/* ---------------- HEADER ---------------- */
function Header({ dark, setDark }) {
  return (
    <header className={`flex justify-between items-center px-6 py-4 shadow-md transition-colors duration-500 ${dark ? "bg-black" : "bg-white"}`}>
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-black dark:text-white">🚀 React Lab</h1>
        <nav className="hidden md:flex space-x-6 text-black dark:text-white font-semibold">
          <Link to="/">Home</Link>
          <Link to="/concept/JSX">JSX</Link>
          <Link to="/concept/State">State</Link>
          <Link to="/concept/Props">Props</Link>
          <Link to="/concept/Hooks">Hooks</Link>
          <Link to="/concept/Context">Context</Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search concepts..."
          className="px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-400 dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={() => setDark(!dark)}
          className="py-2 px-4 rounded-xl bg-gradient-to-r from-peach-400 to-olive-400 text-white font-bold"
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ dark }) {
  return (
    <div className={`flex flex-col items-center justify-center py-20 transition-colors duration-500 ${dark ? "bg-gray-900" : "bg-peach-100"}`}>
      <h1 className="text-6xl font-extrabold text-center text-black dark:text-white animate-pulse">
        React Innovation Lab
      </h1>
      <p className="mt-4 text-xl text-black dark:text-gray-300">
        Explore interactive React concepts 🌟
      </p>
    </div>
  );
}

/* ---------------- HOME PAGE ---------------- */
function Home({ dark, setDark }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <main className={`flex-1 p-10 transition-colors duration-500 ${dark ? "bg-gray-800" : "bg-white"}`}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {CONCEPTS.map((concept) => (
            <Link
              key={concept.name}
              to={`/concept/${concept.name}`}
              className={`w-64 h-40 rounded-3xl shadow-2xl bg-gradient-to-br ${concept.gradient} flex items-center justify-center text-white text-2xl font-bold transform transition hover:scale-105 hover:shadow-3xl`}
            >
              {concept.name}
            </Link>
          ))}
        </div>
      </main>
      <footer className={`p-6 text-center transition-colors duration-500 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
        © 2026 React Innovation Lab - Learn & Explore 🚀
      </footer>
    </div>
  );
}

/* ---------------- CONCEPT PAGE ---------------- */
function ConceptPage({ dark }) {
  const { conceptName } = useParams();
  const contentBoxes = CONCEPT_CONTENT[conceptName] || [];
  const [openBox, setOpenBox] = useState(null);

  const gradientMap = CONCEPTS.reduce((acc, cur) => {
    acc[cur.name] = cur.gradient;
    return acc;
  }, {});

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`flex justify-between items-center px-6 py-4 shadow-md transition-colors duration-500 ${dark ? "bg-black" : "bg-white"}`}>
        <Link to="/" className="text-xl font-bold text-black dark:text-white hover:underline">🏠 Home</Link>
        <h1 className="text-2xl font-extrabold text-black dark:text-white">{conceptName}</h1>
      </header>

      <main className={`flex-1 p-10 transition-colors duration-500 ${dark ? "bg-gray-900" : "bg-peach-50"}`}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {contentBoxes.map((box, i) => (
            <div
              key={i}
              onClick={() => setOpenBox(openBox === i ? null : i)}
              className={`w-64 rounded-3xl p-6 shadow-2xl bg-gradient-to-br ${gradientMap[conceptName]} text-white cursor-pointer transform transition hover:scale-105 hover:shadow-3xl`}
            >
              <h3 className="text-xl font-bold text-center">{box.title}</h3>
              {openBox === i && (
                <p className="mt-4 text-sm text-center">{box.content}</p>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className={`p-6 text-center transition-colors duration-500 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
        © 2026 React Innovation Lab - {conceptName} Page 🚀
      </footer>
    </div>
  );
}

/* ---------------- MAIN APP ---------------- */
export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen transition-colors duration-500`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
          <Route path="/concept/:conceptName" element={<ConceptPage dark={dark} />} />
        </Routes>
      </Router>
    </div>
  );
}
