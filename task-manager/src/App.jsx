// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
// import { useState, useEffect, useContext } from "react";
// import { ThemeContext } from "./context/ThemeContext";
// import TaskList from "./components/TaskList";
// import ThemeToggle from "./components/ThemeToggle";
// import { useSelector } from "react-redux";

// export default function App() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");
//   const { theme } = useContext(ThemeContext);
//   const completedCount = useSelector(state => state.completed);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
//     setTasks(saved);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = () => {
//     if (input.trim() === "") return;
//     setTasks([...tasks, { text: input, id: Date.now(), done: false }]);
//     setInput("");
//   };

//   const toggleTask = id => {
//     setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
//   };

//   const deleteTask = id => {
//     setTasks(tasks.filter(t => t.id !== id));
//   };

//   return (
//     <>
//       <div className="max-w-xl mx-auto p-6">
//         <ThemeToggle />
//         <h1 className="text-3xl font-bold mb-4">🌟 Task Manager</h1>

//         <div className="flex mb-4 gap-2">
//           <input
//             type="text"
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             className="flex-1 p-2 rounded border"
//             placeholder="Add new task..."
//           />
//           <button onClick={addTask} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
//             Add
//           </button>
//         </div>

//         <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />

//         <p className={`mt-4 font-bold ${tasks.length === 0 ? "text-red-500" : "text-green-500"}`}>
//           Total Tasks: {tasks.length} | Completed Tasks: {completedCount}
//         </p>

//         {tasks.length === 0 && <p className="text-yellow-400 mt-2">Add tasks to get started!</p>}
//       </div>
//     </>
//   );
// }
import { useState, useEffect, useContext, Fragment } from "react";
import { ThemeContext } from "./context/ThemeContext";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import { useSelector } from "react-redux";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const { theme } = useContext(ThemeContext); // Context API
  const completed = useSelector(state => state.completed); // Redux

  // Lifecycle (useEffect)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTask = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <Fragment>
      <div className="max-w-2xl mx-auto p-6 space-y-6">

        {/* Context API */}
        <div className="p-4 rounded-xl bg-purple-500 text-white">
          <h2 className="font-bold text-lg">🟣 Context API</h2>
          <ThemeToggle />
          <p>Theme controlled without props</p>
        </div>

        {/* JSX + State */}
        <div className="p-4 rounded-xl bg-yellow-400 text-black">
          <h2 className="font-bold text-lg">🟡 State + Event Handling</h2>
          <div className="flex gap-2 mt-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)} // Data Binding
              className="flex-1 p-2 rounded"
              placeholder="Type task..."
            />
            <button
              onClick={addTask}
              className="px-4 py-2 bg-black text-white rounded"
            >
              Add
            </button>
          </div>
        </div>

        {/* Props Drilling */}
        <div className="p-4 rounded-xl bg-blue-500 text-white">
          <h2 className="font-bold text-lg">🔵 Props Drilling</h2>
          <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>

        {/* Redux */}
        <div className="p-4 rounded-xl bg-green-500 text-white">
          <h2 className="font-bold text-lg">🟢 Redux</h2>
          <p>Completed Tasks Count: {completed}</p>
        </div>

        {/* Conditional Rendering */}
        {tasks.length === 0 && (
          <div className="p-4 rounded-xl bg-red-500 text-white">
            🔴 No tasks yet — add one!
          </div>
        )}

      </div>
    </Fragment>
  );
}
