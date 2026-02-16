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

// export default App;


// src/App.jsx
import React, { useState } from "react";

// HOC to wrap any form with layout, title, and submit handling
const withFormWrapper = (WrappedComponent, title, description) => {
  return function FormWrapper(props) {
    const handleSubmit = (formData) => {
      // In real websites, you would send this to an API
      console.log("Form Submitted:", formData);
      alert("Thank you for signing up!");
    };

    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-100 to-indigo-100 px-4">
        <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2 text-center text-purple-700">{title}</h1>
          <p className="text-gray-600 mb-6 text-center">{description}</p>
          <WrappedComponent onSubmit={handleSubmit} {...props} />
        </div>
      </div>
    );
  };
};

// Realistic Newsletter Signup Form
const NewsletterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  // Simple validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      setFormData({ name: "", email: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="John Doe"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition font-semibold"
      >
        Subscribe
      </button>
    </form>
  );
};

// Wrap the form in HOC
const WrappedNewsletterForm = withFormWrapper(
  NewsletterForm,
  "Join Our Newsletter",
  "Get the latest updates and exclusive offers delivered straight to your inbox."
);

export default function App() {
  return <WrappedNewsletterForm />;
}
