// // import { Route, Routes } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Sidebar from "./components/Sidebar";
// // import Home from "./pages/Home";
// // import Login from "./pages/Login";
// // import Courses from "./pages/Courses";
// // import Premium from "./pages/Premium";
// // import ProtectedRoute from "./components/ProtectedRoute";


// // export default function App(){
// //   return (
// //     <>
// //     <Navbar />
// //     <div className="flex">
// //       <Sidebar />
// //       <main className="flex-1 p-10 transition-all duration-500">
// //         <Routes>
// //           <Route path='/' element={<Home />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/courses" element={<Courses />} />
// //           <Route path="/premium" element={
// //             <ProtectedRoute>
// //                   <Premium />
// //           </ProtectedRoute>} />
// //         </Routes>
// //       </main>
// //     </div>
// //     </>
// //   )
// // }


// import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import { configureStore, createSlice } from "@reduxjs/toolkit";

// /* ================= REDUX ================= */

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { loggedIn: false, premium: false },
//   reducers: {
//     loginUser: (s) => { s.loggedIn = true; s.premium = false; },
//     loginPremium: (s) => { s.loggedIn = true; s.premium = true; },
//   },
// });

// const store = configureStore({
//   reducer: { auth: authSlice.reducer },
// });

// const { loginUser, loginPremium } = authSlice.actions;

// /* ================= LOGO ================= */

// function Logo() {
//   return (
//     <div className="flex items-center gap-2 font-bold tracking-widest">
//       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500" />
//       <span className="text-white text-xl">UNIQU<span className="text-purple-400">Ξ</span></span>
//     </div>
//   );
// }

// /* ================= NAVBAR ================= */

// function Navbar() {
//   return (
//     <nav className="flex items-center justify-between px-8 py-4 bg-black/40 backdrop-blur border-b border-white/10">
//       <Link to="/login"><Logo /></Link>

//       <div className="flex gap-6 text-sm text-gray-300">
//         <Link to="/" className="hover:text-white">Home</Link>
//         <Link to="/courses" className="hover:text-white">Courses</Link>
//         <Link to="/premium" className="hover:text-white">Advanced</Link>
//         <Link to="/login" className="hover:text-white">Login</Link>
//       </div>
//     </nav>
//   );
// }

// /* ================= ROUTE GUARD ================= */

// function ProtectedRoute({ children }) {
//   const { loggedIn, premium } = useSelector(s => s.auth);
//   if (!loggedIn) return <Navigate to="/login" />;
//   if (!premium) return <Navigate to="/courses" />;
//   return children;
// }

// /* ================= PAGES ================= */

// function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f1e] to-[#05070f]">
//       <div className="w-[380px] bg-black/50 p-8 rounded-xl border border-white/10 text-white">
//         <h2 className="text-2xl font-bold mb-1">Welcome Back!</h2>
//         <p className="text-sm text-gray-400 mb-6">Please login to your account</p>

//         <input className="w-full mb-3 p-3 rounded bg-black/40 outline-none" placeholder="Username" />
//         <input className="w-full mb-2 p-3 rounded bg-black/40 outline-none" type="password" placeholder="Password" />

//         <p className="text-xs text-blue-400 mb-4 cursor-pointer">Forgot Password?</p>

//         <button
//           onClick={() => { dispatch(loginUser()); navigate("/"); }}
//           className="w-full py-2 rounded bg-gradient-to-r from-cyan-500 to-purple-500 mb-3"
//         >
//           Login
//         </button>

//         <button
//           onClick={() => { dispatch(loginPremium()); navigate("/premium"); }}
//           className="w-full py-2 rounded border border-white/20"
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div className="bg-black/40 p-8 rounded-xl border border-white/10 text-white">
//       <h1 className="text-3xl font-bold mb-2">Welcome to UNIQUΞ</h1>
//       <p className="text-green-400 mb-4">Tailwind is working ✅</p>
//       <button className="px-4 py-2 rounded bg-blue-600">Explore Courses</button>
//     </div>
//   );
// }

// function Courses() {
//   return (
//     <div className="bg-black/40 p-8 rounded-xl border border-white/10 text-white">
//       <h1 className="text-2xl font-bold">Courses</h1>
//       <p className="text-gray-400 mt-2">Upgrade to premium for advanced content</p>
//     </div>
//   );
// }

// function Premium() {
//   return (
//     <div className="bg-black/40 p-8 rounded-xl border border-white/10 text-white">
//       <h1 className="text-2xl font-bold">Advanced Course 🔐</h1>
//       <p className="text-gray-400 mt-2">Premium users only</p>
//     </div>
//   );
// }

// /* ================= LAYOUT ================= */

// function Dashboard() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <Login />
//       <Home />
//       <Premium />
//     </div>
//   );
// }

// /* ================= APP ================= */

// export default function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <div className="min-h-screen bg-gradient-to-br from-[#0b1022] to-[#05070f]">
//           <Navbar />
//           <div className="p-10">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/courses" element={<Courses />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/premium" element={
//                 <ProtectedRoute><Premium /></ProtectedRoute>
//               } />
//             </Routes>
//           </div>
//         </div>
//       </BrowserRouter>
//     </Provider>
//   );
// }


// App.jsx
import React, { useState } from "react";
import "./App.css"; // Use the exact same CSS

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) alert(`Welcome, ${username}!`);
    else alert("Please enter username and password");
  };

  return (
    <div className={lightMode ? "light-mode" : ""}>
      {/* Header */}
      <header>
        <h1 id="logo" onClick={() => setModalOpen(true)}>
          MyPortfolio
        </h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Dark/Light Toggle */}
      <div className="toggle-container">
        <label>
          🌞
          <input
            type="checkbox"
            checked={lightMode}
            onChange={(e) => setLightMode(e.target.checked)}
          />
          🌙
        </label>
      </div>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h2>Hello, I'm Unique</h2>
        <p>Web Developer & Designer creating modern, dark-themed websites.</p>
        <button className="btn">Explore My Work</button>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I specialize in crafting visually appealing, responsive, and modern
          websites using HTML, CSS, and JavaScript. I love combining dark themes
          with gradients and smooth animations to create unique user experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="cards">
          <div className="card">
            <h3>Project One</h3>
            <p>
              A dark-themed landing page with animations and responsive design.
            </p>
          </div>
          <div className="card">
            <h3>Project Two</h3>
            <p>A portfolio website with modern UI and interactive elements.</p>
          </div>
          <div className="card">
            <h3>Project Three</h3>
            <p>
              A small business website with gradient buttons and hover effects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Want to work together? Send me an email or reach out on social media.</p>
      </section>

      {/* Footer */}
      <footer>&copy; 2026 Alex Portfolio</footer>

      {/* Login Modal */}
      {modalOpen && (
        <div
          className="modal"
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
        >
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>
              &times;
            </span>
            <h2>Premium Login</h2>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
