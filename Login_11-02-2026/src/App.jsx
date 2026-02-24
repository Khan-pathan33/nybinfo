// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import HrLogin from "./components/HrLogin";
// import AdminLogin from "./components/AdminLogin";
// import ManagerLogin from "./components/ManagerLogin";
// import EmployeeLogin from "./components/EmployeeLogin";

// function App() {
//  const [page, setPage] = useState("home");

//   return (
    
      
//       {/* Home Page */}
//       {page === "home" && (
//         <>
//           <h2>Are you a ?</h2>

//           <button onClick={() => setPage("hr")}>HR</button>
//           <button onClick={() => setPage("admin")}>Admin</button>
//           <button onClick={() => setPage("manager")}>Manager</button>
//           <button onClick={() => setPage("employee")}>Employee</button>
//         </>
        
//       )}


// export default App;




// import { useState } from "react";

// function App() {
//   const [page, setPage] = useState("home");

//   return (
//     <div>
      
//       {/* Home Page */}
//       {page === "home" && (
//         <>
//           <h2>Are you a ?</h2>

//           <button onClick={() => setPage("hr")}>HR</button>
//           <button onClick={() => setPage("admin")}>Admin</button>
//           <button onClick={() => setPage("manager")}>Manager</button>
//           <button onClick={() => setPage("employee")}>Employee</button>
//         </>
//       )}

//       {/* HR Login */}
//       {page === "hr" && (
//         <>
//           <h2>HR Login Page</h2>
//           {/* <input type="text" placeholder="HR Username" /><br /><br />
//           <input type="password" placeholder="Password" /><br /><br />
//           <button>Login</button><br /><br /> */}
//           <button onClick={() => setPage("home")}>Back</button>
//         </>
//       )}

//       {/* Admin Login */}
//       {page === "admin" && (
//         <>
//           <h2>Admin Login Page</h2>
//           {/* <input type="text" placeholder="Admin Username" /><br /><br />
//           <input type="password" placeholder="Password" /><br /><br />
//           <button>Login</button><br /><br /> */}
//           <button onClick={() => setPage("home")}>Back</button>
//         </>
//       )}

//       {/* Manager Login */}
//       {page === "manager" && (
//         <>
//           <h2>Manager Login Page</h2>
//           {/* <input type="text" placeholder="Manager Username" /><br /><br />
//           <input type="password" placeholder="Password" /><br /><br />
//           <button>Login</button><br /><br /> */}
//           <button onClick={() => setPage("home")}>Back</button>
//         </>
//       )}

//       {/* Employee Login */}
//       {page === "employee" && (
//         <>
//           <h2>Employee Login Page</h2>
//           {/* <input type="text" placeholder="Employee Username" /><br /><br />
//           <input type="password" placeholder="Password" /><br /><br />
//           <button>Login</button><br /><br /> */}
//           <button onClick={() => setPage("home")}>Back</button>
//         </>
//       )}

//     </div>
//   );
// }

// export default App;


// import { useState, useEffect } from "react";

// function App() {
//   const [page, setPage] = useState("home");

//   // State for login form
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [token, setToken] = useState("");

//   // Load saved token and username from localStorage on mount
//   useEffect(() => {
//     const savedToken = localStorage.getItem("token");
//     const savedUsername = localStorage.getItem("username");
//     const savedRole = localStorage.getItem("role");

//     if (savedToken && savedUsername && savedRole) {
//       setToken(savedToken);
//       setUsername(savedUsername);
//       setRole(savedRole);
//       setPage("dashboard");
//     }
//   }, []);

//   // Handle login
//   const handleLogin = (roleType) => {
//     if (!username || !password) {
//       alert("Please enter username and password");
//       return;
//     }

//     // Simulate a backend token
//     const fakeToken = `${roleType}-token-12345`;

//     // Save to localStorage
//     localStorage.setItem("token", fakeToken);
//     localStorage.setItem("username", username);
//     localStorage.setItem("role", roleType);

//     // Update state
//     setToken(fakeToken);
//     setRole(roleType);
//     setPage("dashboard");
//   };

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("username");
//     localStorage.removeItem("role");
//     setToken("");
//     setUsername("");
//     setRole("");
//     setPage("home");
//   };

//   // Dashboard Page
//   const Dashboard = () => (
//     <>
//       <h2>Welcome, {username}!</h2>
//       <p>Role: {role}</p>
//       <button onClick={handleLogout}>Logout</button>
//     </>
//   );

//   // Login Form Component
//   const LoginForm = ({ roleType }) => (
//     <>
//       <h2>{roleType} Login Page</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br /><br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br /><br />
//       <button onClick={() => handleLogin(roleType)}>Login</button>

//       <button onClick={() => setPage("home")}>Back</button>
//     </>
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       {/* Show dashboard if logged in */}
//       {token && page === "dashboard" && <Dashboard />}

//       {/* Home Page */}
//       {!token && page === "home" && (
//         <>
//           <h2>Are you a ?</h2>
//           <button onClick={() => setPage("hr")}>HR</button>
//           <button onClick={() => setPage("admin")}>Admin</button>
//           <button onClick={() => setPage("manager")}>Manager</button>
//           <button onClick={() => setPage("employee")}>Employee</button>
//         </>
//       )}

//       {/* Role Login Pages */}
//       {!token && page === "hr" && <LoginForm roleType="HR" />}
//       {!token && page === "admin" && <LoginForm roleType="Admin" />}
//       {!token && page === "manager" && <LoginForm roleType="Manager" />}
//       {!token && page === "employee" && <LoginForm roleType="Employee" />}
//     </div>
//   );
// }

// export default App;


// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState("");
//   const [width, setWidth] = useState(window.innerWidth);
//   const [time, setTime] = useState(0);

//   // 1️⃣ Run once on mount (Fetch API + Load localStorage)
//   useEffect(() => {
//     console.log("Component Mounted ✅");

//     // Fetch API
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));

//     // Load from localStorage
//     const savedName = localStorage.getItem("name");
//     if (savedName) setName(savedName);
//   }, []);

//   // 2️⃣ Run when count changes (Update title)
//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   // 3️⃣ Save to localStorage when name changes
//   useEffect(() => {
//     localStorage.setItem("name", name);
//   }, [name]);

//   // 4️⃣ Timer with cleanup
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   // 5️⃣ Window resize listener with cleanup
//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>All useEffect  🚀</h1>

//       {/* Counter */}
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       <hr />

//       {/* Timer */}
//       <h2>Timer: {time} seconds</h2>

//       <hr />

//       {/* LocalStorage */}
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <h3>Hello {name}</h3>

//       <hr />

//       {/* Window Width */}
//       <h3>Window Width: {width}px</h3>

//       <hr />

//       {/* API Data */}
//       <h3>User List:</h3>
//       {users.slice(0, 3).map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// // export default App;
// import { useState, useEffect } from "react";

// /* =========================
//    🪝 Custom Hook #1 - useCounter
// ========================= */
// function useCounter(initialValue = 0, step = 1) {
//   const [count, setCount] = useState(initialValue);

//   const increment = () => setCount((prev) => prev + step);
//   const decrement = () => setCount((prev) => prev - step);
//   const reset = () => setCount(initialValue);

//   return { count, increment, decrement, reset };
// }

// /* =========================
//    🪝 Custom Hook #2 - useLocalStorage (Safe)
// ========================= */
// function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     try {
//       const stored = localStorage.getItem(key);
//       return stored ? JSON.parse(stored) : initialValue;
//     } catch (error) {
//       console.warn("Invalid localStorage value, resetting to initial:", error);
//       return initialValue;
//     }
//   });

//   useEffect(() => {
//     try {
//       localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.warn("Failed to save to localStorage:", error);
//     }
//   }, [key, value]);

//   return [value, setValue];
// }

// /* =========================
//    🪝 Custom Hook #3 - useToggle
// ========================= */
// function useToggle(initial = false) {
//   const [state, setState] = useState(initial);
//   const toggle = () => setState((prev) => !prev);
//   return [state, toggle];
// }

// /* =========================
//    🪝 Custom Hook #4 - useFetch (with error & refetch)
// ========================= */
// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     const controller = new AbortController();

//     try {
//       const res = await fetch(url, { signal: controller.signal });
//       if (!res.ok) throw new Error("Failed to fetch");
//       const json = await res.json();
//       setData(json);
//     } catch (err) {
//       if (err.name !== "AbortError") setError(err.message);
//     } finally {
//       setLoading(false);
//     }

//     return () => controller.abort();
//   };

//   useEffect(() => {
//     fetchData();
//   }, [url]);

//   return { data, loading, error, refetch: fetchData };
// }

// /* =========================
//    🎯 Main Component
// ========================= */
// export default function App() {
//   const { count, increment, decrement, reset } = useCounter(0, 1);

//   const [name, setName] = useLocalStorage("username", "");

//   const [isDark, toggleDark] = useToggle(false);

//   const { data, loading, error, refetch } = useFetch(
//     "https://jsonplaceholder.typicode.com/todos/1"
//   );

//   return (
//     <div
//       className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-300 ${
//         isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
//       }`}
//     >
//       <h1 className="text-3xl font-bold mb-6">Custom Hooks Practice</h1>

//       {/* Counter */}
//       <div className="bg-white text-black p-4 rounded shadow mb-6 w-80 text-center">
//         <h2 className="font-semibold mb-2">Counter</h2>
//         <p className="text-2xl mb-4">{count}</p>
//         <div className="flex justify-center gap-2">
//           <button
//             onClick={increment}
//             className="px-3 py-1 bg-green-500 text-white rounded"
//           >
//             +
//           </button>
//           <button
//             onClick={decrement}
//             className="px-3 py-1 bg-red-500 text-white rounded"
//           >
//             -
//           </button>
//           <button
//             onClick={reset}
//             className="px-3 py-1 bg-gray-500 text-white rounded"
//           >
//             Reset
//           </button>
//         </div>
//       </div>

//       {/* Local Storage */}
//       <div className="bg-white text-black p-4 rounded shadow mb-6 w-80">
//         <h2 className="font-semibold mb-2">Local Storage</h2>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//           className="w-full border px-2 py-1 rounded"
//         />
//         <p className="mt-2">Saved Name: {name}</p>
//       </div>

//       {/* Toggle Theme */}
//       <button
//         onClick={toggleDark}
//         className="mb-6 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Toggle Theme
//       </button>

//       {/* Fetch */}
//       <div className="bg-white text-black p-4 rounded shadow w-80">
//         <h2 className="font-semibold mb-2">Fetch Example</h2>
//         {loading && <p>Loading...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//         {data && <pre className="text-sm overflow-auto">{JSON.stringify(data, null, 2)}</pre>}
//         <button
//           onClick={refetch}
//           className="mt-2 px-2 py-1 bg-purple-500 text-white rounded"
//         >
//           Refetch
//         </button>
//       </div>
//     </div>
//   );
// }




import { useState, useEffect, useRef, useMemo, useCallback } from "react";

export default function App() {
  // useState
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  // useRef
  const inputRef = useRef(null);

  // useEffect (page title change)
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // useMemo (filtered todos)
  const filteredTodos = useMemo(() => {
    return todos.filter(todo =>
      todo.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, todos]);

  // useCallback (add todo)
  const addTodo = useCallback(() => {
    if (input.trim() === "") return;
    setTodos(prev => [...prev, input]);
    setInput("");
    inputRef.current.focus();
  }, [input]);

  return (
    <div className={`${dark ? "dark bg-zinc-900 text-white" : ""}`}>
      <div className="min-h-screen p-8 transition-all duration-300">

        <h1 className="text-4xl font-bold mb-8 text-center">
          React Hooks Mini Project
        </h1>

        {/* Dark Mode */}
        <div className="text-center mb-8">
          <button
            onClick={() => setDark(!dark)}
            className="px-5 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-lg"
          >
            Toggle Dark Mode
          </button>
        </div>

        {/* Counter */}
        <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Counter</h2>
          <p className="text-3xl mb-4">{count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded mr-2"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Decrement
          </button>
        </div>

        {/* Todo Section */}
        <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Todo List</h2>

          <div className="flex gap-3 mb-4">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Add todo..."
              className="flex-1 px-4 py-2 rounded border dark:bg-zinc-700"
            />
            <button
              onClick={addTodo}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add
            </button>
          </div>

          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search todo..."
            className="w-full px-4 py-2 rounded border mb-4 dark:bg-zinc-700"
          />

          <ul className="space-y-2">
            {filteredTodos.map((todo, index) => (
              <li
                key={index}
                className="p-2 bg-white dark:bg-zinc-700 rounded shadow"
              >
                {todo}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
