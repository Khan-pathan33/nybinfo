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
// App.jsx
import React, { useState, createContext, useContext, useEffect } from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
import "./index.css";

// ------------------- REDUX SETUP -------------------
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});
const store = configureStore({ reducer: counterSlice.reducer });
const { increment, decrement } = counterSlice.actions;

// ------------------- CONTEXT SETUP -------------------
const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-white"} style={{ minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// ------------------- MAIN APP -------------------
export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <ThemeProvider>
      <div className="p-4">
        {/* Navigation */}
        <nav className="flex flex-wrap gap-2 mb-6">
          {[
            "Home", "JSX", "State", "Props", "PropsDrilling",
            "Context", "Redux", "Lifecycle", "Conditional", "Fragment"
          ].map((s) => (
            <button
              key={s}
              onClick={() => setScreen(s)}
              className={`px-3 py-1 rounded font-semibold ${
                screen === s ? "bg-blue-500 text-white" : "bg-gray-300 dark:bg-gray-700 dark:text-white"
              } hover:bg-blue-600 transition`}
            >
              {s}
            </button>
          ))}
        </nav>

        {/* Screens */}
        {screen === "Home" && <Home />}
        {screen === "JSX" && <JSXScreen />}
        {screen === "State" && <StateScreen />}
        {screen === "Props" && <PropsScreen />}
        {screen === "PropsDrilling" && <PropsDrillingScreen />}
        {screen === "Context" && <ContextScreen />}
        {screen === "Redux" && <ReduxScreen />}
        {screen === "Lifecycle" && <LifecycleScreen />}
        {screen === "Conditional" && <ConditionalScreen />}
        {screen === "Fragment" && <FragmentScreen />}
      </div>
    </ThemeProvider>
  );
}

// ------------------- SCREENS -------------------
function Home() {
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-pink-300 p-6 rounded-lg text-center">
      <h1 className="text-4xl font-bold mb-4">⚛️ React Concepts Lab</h1>
      <p className="text-lg">Click the buttons above to explore each concept live!</p>
    </div>
  );
}

// 1️⃣ JSX SCREEN
function JSXScreen() {
  const [show, setShow] = useState(true);
  return (
    <div className="bg-pink-200 p-6 rounded-lg min-h-[60vh] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">JSX in Action</h2>
      <button onClick={() => setShow(!show)} className="px-4 py-2 bg-pink-500 text-white rounded mb-4">
        Toggle JSX Element
      </button>
      {show ? <p className="text-xl transition">JSX lets you embed HTML in JS!</p> : <p className="text-xl text-gray-700 transition">You toggled it off!</p>}
    </div>
  );
}

// 2️⃣ STATE SCREEN
function StateScreen() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-green-200 p-6 rounded-lg min-h-[60vh] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">State Demo</h2>
      <p className="text-xl mb-4">Counter: {count}</p>
      <div className="flex gap-2">
        <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
        <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-green-500 text-white rounded">-</button>
      </div>
    </div>
  );
}

// 3️⃣ PROPS SCREEN
function PropsScreen() {
  return (
    <div className="bg-purple-200 p-6 rounded-lg min-h-[60vh] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Props Demo</h2>
      <ChildWithProps message="Hello from Parent via Props!" />
    </div>
  );
}
function ChildWithProps({ message }) {
  return <p className="text-xl">{message}</p>;
}

// 4️⃣ PROPS DRILLING SCREEN
function PropsDrillingScreen() {
  const [power, setPower] = useState(0);
  return (
    <div className="bg-red-200 p-6 rounded-lg min-h-[60vh] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Props Drilling</h2>
      <button onClick={() => setPower(power + 1)} className="px-4 py-2 bg-red-500 text-white rounded mb-4">Increase Power 🔋</button>
      <ParentDrill power={power} />
    </div>
  );
}
function ParentDrill({ power }) { return <ChildDrill power={power} />; }
function ChildDrill({ power }) { return <GrandChildDrill power={power} />; }
function GrandChildDrill({ power }) { return <p className="text-xl font-bold">GrandChild Power: {power}</p>; }

// 5️⃣ CONTEXT SCREEN
function ContextScreen() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="bg-blue-300 p-6 rounded-lg min-h-[60vh] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Context API (No Props Drilling)</h2>
      <p className="mb-4">Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="px-4 py-2 rounded bg-blue-500 text-white">
        Toggle Theme
      </button>
    </div>
  );
}

// 6️⃣ REDUX SCREEN
function ReduxScreen() {
  const count = useSelector(state => state.value);
  const dispatch = useDispatch();
  return (
    <div className="bg-indigo-200 p-6 rounded-lg min-h-[60vh] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Redux Demo (Global State)</h2>
      <p className="text-xl mb-4">Counter: {count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-indigo-500 text-white rounded">+</button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-indigo-500 text-white rounded">-</button>
      </div>
    </div>
  );
}

// 7️⃣ LIFECYCLE SCREEN
function LifecycleScreen() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="bg-yellow-200 p-6 rounded-lg min-h-[60vh] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Lifecycle Demo (useEffect)</h2>
      <p className="text-xl">Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}

// 8️⃣ CONDITIONAL SCREEN
function ConditionalScreen() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="bg-orange-200 p-6 rounded-lg min-h-[60vh] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Conditional Rendering</h2>
      <button onClick={() => setLoggedIn(!loggedIn)} className="px-4 py-2 bg-orange-500 text-white rounded mb-4">
        {loggedIn ? "Logout" : "Login"}
      </button>
      {loggedIn ? <p>Welcome, User!</p> : <p>Please log in to continue.</p>}
    </div>
  );
}

// 9️⃣ FRAGMENT SCREEN
function FragmentScreen() {
  return (
    <div className="bg-teal-200 p-6 rounded-lg min-h-[60vh] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Fragments Demo</h2>
      <>
        <p>Fragment 1</p>
        <p>Fragment 2</p>
        <p>Fragment 3</p>
      </>
    </div>
  );
}

// ------------------- MAIN ENTRY -------------------
import ReactDOM from "react-dom/client";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
