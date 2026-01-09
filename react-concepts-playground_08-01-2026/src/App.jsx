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
// // import { useState } from "react";
// // import Home from "./components/Home";
// // import JSXScreen from "./components/JSXScreen";
// // import StateScreen from "./components/StateScreen";
// // import PropsScreen from "./components/PropsScreen";
// // import PropsDrillingScreen from "./components/PropsDrillingScreen";
// // import ContextScreen from "./components/ContextScreen";
// // import ReduxScreen from "./components/ReduxScreen";
// // import LifecycleScreen from "./components/LifecycleScreen";
// // import ConditionalScreen from "./components/ConditionalScreen";
// // import FragmentScreen from "./components/FragmentScreen";

// // export default function App() {
// //   const [screen, setScreen] = useState("home");

// //   const screens = {
// //     home: <Home setScreen={setScreen} />,
// //     jsx: <JSXScreen />,
// //     state: <StateScreen />,
// //     props: <PropsScreen />,
// //     drill: <PropsDrillingScreen />,
// //     context: <ContextScreen />,
// //     redux: <ReduxScreen />,
// //     life: <LifecycleScreen />,
// //     conditional: <ConditionalScreen />,
// //     fragment: <FragmentScreen />
// //   };

// //   return (
// //     <div className="p-6">
// //       <div className="flex flex-wrap gap-2 mb-6">
// //         {Object.keys(screens).map(key => (
// //           <button
// //             key={key}
// //             onClick={() => setScreen(key)}
// //             className="px-3 py-1 bg-blue-600 text-white rounded"
// //           >
// //             {key}
// //           </button>
// //         ))}
// //       </div>
// //       {screens[screen]}
// //     </div>
// //   );
// // }
// // App.jsx
// import React, { useState, createContext, useContext } from "react";
// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// // ------------------- REDUX SETUP -------------------
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { value: 0 },
//   reducers: { increment: (state) => { state.value += 1; } }
// });
// const { increment } = counterSlice.actions;
// const store = configureStore({ reducer: counterSlice.reducer });

// // ------------------- CONTEXT SETUP -------------------
// const PowerContext = createContext();

// // ------------------- MAIN APP -------------------
// function App() {
//   const [screen, setScreen] = useState("home");
//   const [theme, setTheme] = useState("light");

//   return (
//     <PowerContext.Provider value={{ theme, setTheme }}>
//       <div className={theme === "light" ? "bg-gradient-to-br from-yellow-100 to-white text-gray-800 min-h-screen transition-colors duration-500" : "bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen transition-colors duration-500"}>
//         <div className="p-4">
//           {/* Navigation */}
//           <nav className="flex flex-wrap gap-2 mb-6">
//             {["Home", "PropsDrilling", "Context", "Redux", "State"].map(s => (
//               <button
//                 key={s}
//                 onClick={() => setScreen(s)}
//                 className={`px-3 py-1 rounded font-semibold ${screen === s ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700 dark:text-white"} hover:scale-105 transform transition`}
//               >
//                 {s}
//               </button>
//             ))}
//           </nav>

//           {/* Screens */}
//           {screen === "Home" && <Home />}
//           {screen === "PropsDrilling" && <PropsDrillingScreen />}
//           {screen === "Context" && <ContextScreen />}
//           {screen === "Redux" && <ReduxScreen />}
//           {screen === "State" && <StateScreen />}
//         </div>
//       </div>
//     </PowerContext.Provider>
//   );
// }

// // ------------------- SCREENS -------------------
// function Home() {
//   return (
//     <div className="bg-gradient-to-br from-pink-200 via-yellow-200 to-green-200 p-6 rounded-lg shadow-lg text-center">
//       <h1 className="text-5xl font-bold mb-4 text-purple-700">⚛️ React Living Concepts</h1>
//       <p className="text-xl font-semibold text-gray-700">Click above to see Props Drilling, Context, Redux, and State in action!</p>
//     </div>
//   );
// }

// // 1️⃣ PROPS DRILLING SCREEN (Animated Wires)
// function PropsDrillingScreen() {
//   const [power, setPower] = useState(0);

//   return (
//     <div className="bg-gradient-to-br from-red-200 via-red-300 to-red-400 p-6 rounded-lg min-h-[60vh] flex flex-col items-center justify-center shadow-lg">
//       <h2 className="text-4xl font-bold mb-6 text-red-800">⚡ Props Drilling (Wired Mode)</h2>
//       <button
//         onClick={() => setPower(power + 1)}
//         className="px-4 py-2 mb-6 bg-red-600 text-white rounded hover:bg-red-700 transition"
//       >
//         Increase Power 🔋
//       </button>
//       <Parent power={power} />
//     </div>
//   );
// }
// function Parent({ power }) {
//   return (
//     <div className="relative flex flex-col items-center">
//       <div className="p-3 bg-red-300 rounded mb-2 w-40 text-center">Parent</div>
//       <div className="h-6 w-1 bg-yellow-300 animate-pulse"></div>
//       <Child power={power} />
//     </div>
//   );
// }
// function Child({ power }) {
//   return (
//     <div className="relative flex flex-col items-center">
//       <div className="p-3 bg-red-400 rounded mb-2 w-40 text-center">Child</div>
//       <div className="h-6 w-1 bg-yellow-300 animate-pulse"></div>
//       <GrandChild power={power} />
//     </div>
//   );
// }
// function GrandChild({ power }) {
//   return (
//     <div className="p-3 bg-red-500 rounded w-40 text-center font-bold text-yellow-100 animate-bounce">
//       GrandChild Power: {power}
//     </div>
//   );
// }

// // 2️⃣ CONTEXT SCREEN (Instant Wireless)
// function ContextScreen() {
//   const { theme, setTheme } = useContext(PowerContext);
//   const [power, setPower] = useState(0);

//   return (
//     <div className="bg-gradient-to-br from-purple-300 via-purple-400 to-indigo-400 p-6 rounded-lg min-h-[60vh] flex flex-col items-center justify-center shadow-lg">
//       <h2 className="text-4xl font-bold mb-6 text-purple-900">📡 Context Mode (Wireless)</h2>
//       <button
//         onClick={() => setPower(power + 1)}
//         className="px-4 py-2 mb-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
//       >
//         Increase Power 🔋
//       </button>
//       <button
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         className="px-4 py-2 mb-6 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//       >
//         Toggle Theme
//       </button>
//       <GrandChildContext power={power} />
//     </div>
//   );
// }
// function GrandChildContext({ power }) {
//   return (
//     <div className="p-3 bg-purple-700 rounded w-40 text-center font-bold text-yellow-200 animate-pulse">
//       GrandChild Power: {power}
//     </div>
//   );
// }

// // 3️⃣ REDUX SCREEN (Global Brain)
// function ReduxScreen() {
//   const count = useSelector((state) => state.value);
//   const dispatch = useDispatch();
//   return (
//     <div className="bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-400 p-6 rounded-lg min-h-[60vh] flex flex-col items-center justify-center shadow-lg">
//       <h2 className="text-4xl font-bold mb-6 text-indigo-900">🛰️ Redux Global State</h2>
//       <p className="text-3xl mb-4 font-bold text-indigo-800">Counter: {count}</p>
//       <div className="flex gap-4">
//         <button onClick={() => dispatch(increment())} className="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">Increment</button>
//       </div>
//     </div>
//   );
// }

// // 4️⃣ STATE SCREEN
// function StateScreen() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="bg-gradient-to-br from-green-200 via-green-300 to-green-400 p-6 rounded-lg min-h-[60vh] flex flex-col items-center justify-center shadow-lg">
//       <h2 className="text-4xl font-bold mb-6 text-green-900">🔋 State Ownership</h2>
//       <p className="text-3xl font-semibold mb-4 text-green-800">Counter: {count}</p>
//       <div className="flex gap-4">
//         <button onClick={() => setCount(count + 1)} className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">+</button>
//         <button onClick={() => setCount(count - 1)} className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">-</button>
//       </div>
//     </div>
//   );
// }

// // ------------------- RENDER -------------------
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
// export default App;

import React, { useState, useContext, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/store.js";
import { ThemeContext } from "./context/ThemeContext.jsx";

// Context for Props Drilling Demo
export const PowerContext = createContext();

export default function App() {
  const { theme, setTheme } = useContext(ThemeContext); // Theme toggle
  const counter = useSelector(state => state.value); // Redux
  const dispatch = useDispatch();

  // State for Props Drilling Demo
  const [power, setPower] = useState(0);

  return (
    <div className={theme === "light" ? "bg-yellow-50 min-h-screen text-gray-900" : "bg-gray-900 min-h-screen text-white"}>

      <header className="p-4 flex justify-between items-center bg-gradient-to-r from-blue-400 to-purple-600 text-white">
        <h1 className="text-2xl font-bold">⚡ Living React Concepts App</h1>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-2 rounded bg-white text-black hover:bg-gray-200 transition"
        >
          Toggle Theme
        </button>
      </header>

      <main className="p-6 space-y-12">

        {/* JSX Demo */}
        <section className="p-4 bg-pink-100 rounded shadow">
          <h2 className="text-xl font-bold mb-2">JSX Demo</h2>
          <p className="text-lg">JSX allows you to write HTML inside JavaScript:</p>
          <p className="italic text-blue-700">{"<div>Hello JSX!</div>"}</p>
        </section>

        {/* State Demo */}
        <section className="p-4 bg-green-100 rounded shadow">
          <h2 className="text-xl font-bold mb-2">State Demo (useState)</h2>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            onClick={() => setPower(power + 1)}
          >
            Increase Power 🔋
          </button>
          <p className="mt-2 text-lg">Current Power: {power}</p>
        </section>

        {/* Props Demo */}
        <section className="p-4 bg-yellow-100 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Props Demo</h2>
          <ChildExample message="Hello from App via Props!" />
        </section>

        {/* Props Drilling Demo */}
        <section className="p-4 bg-red-100 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Props Drilling Demo (Pain)</h2>
          <PowerContext.Provider value={{ power, setPower }}>
            <ParentDrill />
          </PowerContext.Provider>
        </section>

        {/* Redux Demo */}
        <section className="p-4 bg-indigo-100 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Redux Demo (Global Store)</h2>
          <p className="mb-2">Counter: {counter}</p>
          <button
            className="px-4 py-2 bg-indigo-500 text-white rounded mr-2 hover:bg-indigo-600"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </section>

        {/* Conditional Rendering Demo */}
        <section className="p-4 bg-teal-100 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Conditional Rendering</h2>
          {power > 5 ? (
            <p className="text-green-700 font-bold">Power is strong! 💪</p>
          ) : (
            <p className="text-red-700 font-bold">Power is low ⚠️</p>
          )}
        </section>

        {/* Fragment Demo */}
        <section className="p-4 bg-purple-100 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Fragment Demo</h2>
          <FragmentExample />
        </section>

      </main>
    </div>
  );
}

// Child for Props Demo
function ChildExample({ message }) {
  return <p className="text-lg text-purple-700">{message}</p>;
}

// Props Drilling Example
function ParentDrill() {
  return <ChildDrill />;
}

function ChildDrill() {
  return <GrandChildDrill />;
}

function GrandChildDrill() {
  const { power, setPower } = useContext(PowerContext);
  return (
    <div className="p-4 bg-red-300 rounded shadow">
      <p>GrandChild sees power: {power}</p>
      <button
        onClick={() => setPower(power + 1)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mt-2"
      >
        Boost Power ⚡
      </button>
    </div>
  );
}

// Fragment Demo
function FragmentExample() {
  return (
    <>
      <p className="text-blue-700">This is inside a Fragment 1️⃣</p>
      <p className="text-blue-800">This is inside a Fragment 2️⃣</p>
    </>
  );
}
