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
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem("tasks");
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("Failed to load tasks:", e);
      return [];
    }
  });

  const [text, setText] = useState("");

  // Save tasks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (err) {
      console.error("Failed to save tasks:", err);
    }
  }, [tasks]);

  const addTask = () => {
    if (!text.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: text.trim(), done: false },
    ]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="bg-slate-900 w-full max-w-md rounded-2xl shadow-xl p-6">
        
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          📝 Task Tracker
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Enter a new task..."
            className="flex-1 rounded-lg px-4 py-2 bg-slate-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium"
          >
            Add
          </button>
        </div>

        {/* Tasks */}
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-slate-800 px-4 py-2 rounded-lg"
            >
              <span
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer select-none ${
                  task.done
                    ? "line-through text-slate-500"
                    : "text-white"
                }`}
              >
                {task.text}
              </span>

              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-400 hover:text-red-500"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-slate-500 text-center mt-4">
            No tasks yet. The day is suspiciously quiet 🌙
          </p>
        )}
      </div>
    </div>
  );
}
