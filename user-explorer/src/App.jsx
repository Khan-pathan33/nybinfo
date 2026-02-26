// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }

//         const data = await response.json();
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">
//         User Explorer
//       </h1>

//       {loading && <p className="text-center">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       <div className="grid md:grid-cols-3 gap-6">
//         {users.map((user) => (
//           <div
//             key={user.id}
//             className="bg-white shadow-md rounded-xl p-4"
//           >
//             <h2 className="text-xl font-semibold">{user.name}</h2>
//             <p>{user.email}</p>
//             <p className="text-sm text-gray-500">{user.phone}</p>
//             <p className="text-blue-500 text-sm">{user.website}</p>
//           </div>
//         ))}
//       </div>
//       <div className="bg-red-500 text-white p-5">
//   Tailwind Test
// </div>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-50 dark:bg-gray-900 dark:text-white min-h-screen">

        {/* NAVBAR */}
        <nav className="bg-blue-600 dark:bg-gray-800 text-white p-4 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">WebCraft</h1>

            <div className="space-x-6 hidden md:block">
              <a href="#about" className="hover:text-gray-200">About</a>
              <a href="#how" className="hover:text-gray-200">How It Works</a>
              <a href="#benefits" className="hover:text-gray-200">Benefits</a>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white text-blue-600 px-3 py-1 rounded-md text-sm font-semibold"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How Websites Are Made
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Learn how modern websites are built using React, Vite and Tailwind CSS.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200">
            Start Learning
          </button>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-16 max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            What is a Website?
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            A website is a collection of web pages hosted on servers and accessed 
            through browsers over the internet.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            How Websites Are Built
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">1. Planning</h3>
              <p>Define purpose, audience, and layout.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">2. Frontend</h3>
              <p>Built using HTML, CSS, JavaScript and React.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">3. Backend</h3>
              <p>Handles servers, databases, and APIs.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">4. Testing</h3>
              <p>Fix bugs and improve performance.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">5. Deployment</h3>
              <p>Host the website on platforms like Vercel or Netlify.</p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="py-16 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Websites Are Important
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-100 dark:bg-blue-800 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Business Growth</h3>
              <p>Reach customers worldwide and increase sales.</p>
            </div>

            <div className="bg-indigo-100 dark:bg-indigo-800 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Education</h3>
              <p>Provide global access to learning resources.</p>
            </div>

            <div className="bg-purple-100 dark:bg-purple-800 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Communication</h3>
              <p>Connect people through platforms and blogs.</p>
            </div>

            <div className="bg-pink-100 dark:bg-pink-800 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Portfolio</h3>
              <p>Showcase skills and projects online.</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-800 text-white text-center py-6 mt-10">
          <p>© 2026 WebCraft | Built with React + Vite + Tailwind CSS</p>
        </footer>

      </div>
    </div>
  );
}

export default App;

