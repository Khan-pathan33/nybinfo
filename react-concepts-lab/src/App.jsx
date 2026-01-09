// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState, createContext, useContext } from "react";
import "./index.css"; // Make sure Tailwind + animations are included

/* ---------------- THEME CONTEXT ---------------- */
const ThemeContext = createContext();

/* ---------------- CONCEPTS ---------------- */
const CONCEPTS = {
  JSX: {
    bg: "from-indigo-600 via-purple-600 to-pink-600",
    boxes: [
      { t: "🎁 Surprise", type: "surprise", c: "JSX lets you write HTML inside JavaScript. It is transformed by Babel." },
      { t: "ℹ️ Reality", type: "info", c: "Anything inside {} is JS. JSX makes UI declarative and readable." },
      { t: "💣 Bomb", type: "bomb", c: "JSX must return a single parent element." },
    ]
  },
  State: {
    bg: "from-pink-500 via-rose-500 to-red-500",
    boxes: [
      { t: "🎁 Surprise", type: "surprise", c: "useState stores component-specific memory. Changing state re-renders UI." },
      { t: "ℹ️ Use Case", type: "info", c: "Counters, toggles, inputs, and flags depend on state." },
      { t: "💣 Bomb", type: "bomb", c: "State updates are async. Logging immediately can mislead." },
    ]
  },
  Props: {
    bg: "from-orange-500 via-amber-500 to-yellow-500",
    boxes: [
      { t: "🎁 Surprise", type: "surprise", c: "Props pass data & behavior from parent to child components." },
      { t: "ℹ️ Truth", type: "info", c: "Props are read-only; child cannot modify them." },
      { t: "⚠️ Warning", type: "warning", c: "Too many nested props = props drilling." },
      { t: "💣 Bomb", type: "bomb", c: "Mutating props breaks React's one-way data flow." },
    ]
  },
  Hooks: {
    bg: "from-violet-500 via-purple-600 to-fuchsia-600",
    boxes: [
      { t: "🎁 Surprise", type: "surprise", c: "Hooks give functional components state & lifecycle powers." },
      { t: "ℹ️ Handles", type: "info", c: "useState = state, useEffect = side effects, useContext = global access." },
      { t: "⚠️ Rules", type: "warning", c: "Hooks must be called at top level." },
      { t: "💣 Bomb", type: "bomb", c: "Wrong dependencies in useEffect cause infinite re-renders." },
    ]
  },
  Context: {
    bg: "from-sky-500 via-blue-500 to-indigo-500",
    boxes: [
      { t: "🎁 Surprise", type: "surprise", c: "Context removes props drilling by sharing data globally." },
      { t: "ℹ️ Reality", type: "info", c: "Best for themes, auth, language—not frequent updates." },
      { t: "💣 Bomb", type: "bomb", c: "Too much context usage causes unnecessary re-renders." },
    ]
  },
};

/* ---------------- APP COMPONENT ---------------- */
export default function App() {
  const [active, setActive] = useState("JSX");
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark }}>
      <div className={`${dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} h-screen flex`}>
        {/* SIDEBAR */}
        <aside className="w-72 bg-black/30 backdrop-blur-xl text-white p-6 space-y-4 flex flex-col">
          <h1 className="text-2xl font-bold">⚛ React Gen-Z Lab</h1>
          {Object.keys(CONCEPTS).map(k => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`w-full text-left px-4 py-3 rounded-xl transition ${
                active === k ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              {k}
            </button>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="mt-auto py-3 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500"
          >
            {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </aside>

        {/* MAIN CONTENT */}
        <main
          className={`flex-1 flex items-center justify-center bg-gradient-to-br bg-move ${CONCEPTS[active].bg}`}
        >
          <GlassCard title={active}>
            <div className="grid md:grid-cols-2 gap-6">
              {CONCEPTS[active].boxes.map((b, i) => (
                <FloatingBox key={i} {...b} />
              ))}
            </div>
          </GlassCard>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

/* ---------------- GLASS CARD ---------------- */
function GlassCard({ title, children }) {
  return (
    <div className="bg-white/20 backdrop-blur-2xl rounded-3xl p-10 text-white text-center max-w-5xl w-full shadow-2xl">
      <h2 className="text-4xl font-extrabold mb-8">{title}</h2>
      {children}
    </div>
  );
}

/* ---------------- FLOATING BOX ---------------- */
function FloatingBox({ t, c, type }) {
  const [open, setOpen] = useState(false);

  const colors = {
    info: "from-sky-400 to-indigo-500",
    surprise: "from-pink-500 to-fuchsia-600",
    warning: "from-yellow-400 to-amber-500",
    bomb: "from-red-500 to-orange-600",
  };

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`animate-float cursor-pointer bg-gradient-to-br ${colors[type]} rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]`}
    >
      <h3 className="text-xl font-bold">{t}</h3>
      {open && <p className="mt-4 text-sm animate-reveal leading-relaxed">{c}</p>}
    </div>
  );
}
