// // import { useState } from "react";

// // function App() {
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <div className={darkMode ? "dark" : ""}>
// //       <div className="bg-gray-50 dark:bg-gray-900 dark:text-white min-h-screen">

// //         {/* NAVBAR */}
// //         <nav className="bg-blue-600 dark:bg-gray-800 text-white p-4 shadow-md">
// //           <div className="max-w-6xl mx-auto flex justify-between items-center">
// //             <h1 className="text-xl font-bold">WebCraft</h1>

// //             <div className="space-x-6 hidden md:block">
// //               <a href="#about" className="hover:text-gray-200">About</a>
// //               <a href="#how" className="hover:text-gray-200">How It Works</a>
// //               <a href="#benefits" className="hover:text-gray-200">Benefits</a>
// //             </div>

// //             <button
// //               onClick={() => setDarkMode(!darkMode)}
// //               className="bg-white text-blue-600 px-3 py-1 rounded-md text-sm font-semibold"
// //             >
// //               {darkMode ? "Light" : "Dark"}
// //             </button>
// //           </div>
// //         </nav>

// //         {/* HERO */}
// //         <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-20">
// //           <h2 className="text-4xl md:text-5xl font-bold mb-4">
// //             How Websites Are Made
// //           </h2>
// //           <p className="text-lg max-w-2xl mx-auto">
// //             Learn how modern websites are built using React, Vite and Tailwind CSS.
// //           </p>
// //           <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200">
// //             Start Learning
// //           </button>
// //         </section>

// //         {/* ABOUT */}
// //         <section id="about" className="py-16 max-w-6xl mx-auto px-4 text-center">
// //           <h2 className="text-3xl font-bold mb-6">
// //             What is a Website?
// //           </h2>
// //           <p className="text-lg max-w-3xl mx-auto">
// //             A website is a collection of web pages hosted on servers and accessed 
// //             through browsers over the internet. Examples include search engines, 
// //             online shopping platforms, and social media sites.
// //           </p>
// //         </section>

// //         {/* HOW IT WORKS */}
// //         <section id="how" className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
// //           <h2 className="text-3xl font-bold text-center mb-10">
// //             How Websites Are Built
// //           </h2>

// //           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// //             <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
// //               <h3 className="font-bold text-xl mb-2">1. Planning</h3>
// //               <p>Define purpose, audience, and design structure.</p>
// //             </div>

// //             <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
// //               <h3 className="font-bold text-xl mb-2">2. Frontend</h3>
// //               <p>Built using HTML, CSS, JavaScript and frameworks like React.</p>
// //             </div>

// //             <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
// //               <h3 className="font-bold text-xl mb-2">3. Backend</h3>
// //               <p>Handles servers, databases, and APIs.</p>
// //             </div>

// //             <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
// //               <h3 className="font-bold text-xl mb-2">4. Testing</h3>
// //               <p>Fix bugs and improve performance.</p>
// //             </div>

// //             <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
// //               <h3 className="font-bold text-xl mb-2">5. Deployment</h3>
// //               <p>Host the website on platforms like Vercel or Netlify.</p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* BENEFITS */}
// //         <section id="benefits" className="py-16 max-w-6xl mx-auto px-4">
// //           <h2 className="text-3xl font-bold text-center mb-10">
// //             Why Websites Are Important
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             <div className="bg-blue-100 dark:bg-blue-800 p-6 rounded-lg">
// //               <h3 className="font-bold text-xl mb-2">Business Growth</h3>
// //               <p>Reach customers worldwide and increase sales.</p>
// //             </div>

// //             <div className="bg-indigo-100 dark:bg-indigo-800 p-6 rounded-lg">
// //               <h3 className="font-bold text-xl mb-2">Education</h3>
// //               <p>Provide global access to learning resources.</p>
// //             </div>

// //             <div className="bg-purple-100 dark:bg-purple-800 p-6 rounded-lg">
// //               <h3 className="font-bold text-xl mb-2">Communication</h3>
// //               <p>Connect people through social platforms and blogs.</p>
// //             </div>

// //             <div className="bg-pink-100 dark:bg-pink-800 p-6 rounded-lg">
// //               <h3 className="font-bold text-xl mb-2">Portfolio</h3>
// //               <p>Showcase skills and projects online.</p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* FOOTER */}
// //         <footer className="bg-gray-800 text-white text-center py-6 mt-10">
// //           <p>© 2026 WebCraft | Built with React + Vite + Tailwind CSS</p>
// //         </footer>

// //       </div>
// //     </div>
// //   );
// // }

// // export default App;


// // import { useState } from "react";

// // function App() {
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <div className={darkMode ? "dark" : ""}>
// //       <div className="bg-gray-50 dark:bg-gray-900 dark:text-white min-h-screen">

// //         {/* NAVBAR */}
// //         <nav className="bg-blue-600 dark:bg-gray-800 text-white p-4 shadow-md">
// //           <div className="max-w-6xl mx-auto flex justify-between items-center">
// //             <h1 className="text-xl font-bold">WebCraft</h1>

// //             <div className="space-x-6 hidden md:block">
// //               <a href="#about" className="hover:text-gray-200">About</a>
// //               <a href="#how" className="hover:text-gray-200">How It Works</a>
// //               <a href="#benefits" className="hover:text-gray-200">Benefits</a>
// //             </div>

// //             <button
// //               onClick={() => setDarkMode(!darkMode)}
// //               className="bg-white text-blue-600 px-3 py-1 rounded-md text-sm font-semibold"
// //             >
// //               {darkMode ? "Light" : "Dark"}
// //             </button>
// //           </div>
// //         </nav>

// //         {/* HERO */}
// //         <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-20">
// //           <h2 className="text-4xl md:text-5xl font-bold mb-4">
// //             How Websites Are Made
// //           </h2>
// //           <p className="text-lg max-w-2xl mx-auto">
// //             Learn how modern websites are built using React, Vite and Tailwind CSS.
// //           </p>
// //           <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200">
// //             Start Learning
// //           </button>
// //         </section>

// //         {/* ABOUT */}
// //         <section id="about" className="py-16 max-w-6xl mx-auto px-4 text-center">
// //           <h2 className="text-3xl font-bold mb-6">
// //             What is a Website?
// //           </h2>
// //           <p className="text-lg max-w-3xl mx-auto">
// //             A website is a collection of web pages hosted on servers and accessed 
// //             through browsers over the internet.
// //           </p>
// //         </section>

// //         {/* HOW IT WORKS */}
// //         <section id="how" className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
// //           <h2 className="text-3xl font-bold text-center mb-10">
// //             How Websites Are Built
// //           </h2>

// //           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// //             <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
// //               <h3 className="font-bold text-xl mb-2">1. Planning</h3>
// //               <p>Define purpose, audience, and layout.</p>
// //             </div>

// //             <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
// //               <h3 className="font-bold text-xl mb-2">2. Frontend</h3>
// //               <p>Built using HTML, CSS, JavaScript and React.</p>
// //             </div>

// //             <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
// //               <h3 className="font-bold text-xl mb-2">3. Backend</h3>
// //               <p>Handles servers, databases, and APIs.</p>
// //             </div>

// //             <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
// //               <h3 className="font-bold text-xl mb-2">4. Testing</h3>
// //               <p>Fix bugs and improve performance.</p>
// //             </div>

// //             <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
// //               <h3 className="font-bold text-xl mb-2">5. Deployment</h3>
// //               <p>Host the website on platforms like Vercel or Netlify.</p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* BENEFITS */}
// //         <section id="benefits" className="py-16 max-w-6xl mx-auto px-4">
// //           <h2 className="text-3xl font-bold text-center mb-10">
// //             Why Websites Are Important
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             <div className="bg-blue-100 dark:bg-blue-800 p-6 rounded-lg">
// //               <h3 className="font-bold text-xl mb-2">Business Growth</h3>
// //               <p>Reach customers worldwide and increase sales.</p>
// //             </div>

// //             <div className="bg-indigo-100 dark:bg-indigo-800 p-6 rounded-lg">
// //               <h3 className="font-bold text-xl mb-2">Education</h3>
// //               <p>Provide global access to learning resources.</p>
// //             </div>

// //             <div className="bg-purple-100 dark:bg-purple-800 p-6 rounded-lg">
// //               <h3 className="font-bold text-xl mb-2">Communication</h3>
// //               <p>Connect people through platforms and blogs.</p>
// //             </div>

// //             <div className="bg-pink-100 dark:bg-pink-800 p-6 rounded-lg">
// //               <h3 className="font-bold text-xl mb-2">Portfolio</h3>
// //               <p>Showcase skills and projects online.</p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* FOOTER */}
// //         <footer className="bg-gray-800 text-white text-center py-6 mt-10">
// //           <p>© 2026 WebCraft | Built with React + Vite + Tailwind CSS</p>
// //         </footer>

// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// // import { useState } from "react";

// // function App() {
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <div className={darkMode ? "dark" : ""}>
// //       <div className="bg-gray-50 dark:bg-gray-950 dark:text-white min-h-screen transition-colors duration-500">

// //         {/* NAVBAR */}
// //         <nav className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 fixed w-full z-50">
// //           <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
// //             <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// //               WebCraft
// //             </h1>

// //             <div className="space-x-8 hidden md:block font-medium">
// //               <a href="#about" className="hover:text-blue-600 transition">About</a>
// //               <a href="#how" className="hover:text-blue-600 transition">How It Works</a>
// //               <a href="#benefits" className="hover:text-blue-600 transition">Benefits</a>
// //             </div>

// //             <button
// //               onClick={() => setDarkMode(!darkMode)}
// //               className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-md hover:scale-105 transition-transform"
// //             >
// //               {darkMode ? "☀ Light" : "🌙 Dark"}
// //             </button>
// //           </div>
// //         </nav>

// //         {/* HERO */}
// //         <section className="pt-32 pb-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center px-4">
// //           <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
// //             How Modern Websites Are Made
// //           </h2>
// //           <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
// //             Learn how websites are built using React, Vite and Tailwind CSS with modern UI principles.
// //           </p>
// //           <button className="mt-8 px-8 py-3 bg-white text-blue-700 rounded-full font-bold shadow-lg hover:scale-105 hover:bg-gray-200 transition">
// //             Start Learning
// //           </button>
// //         </section>

// //         {/* ABOUT */}
// //         <section id="about" className="py-20 max-w-5xl mx-auto px-6 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-6">
// //             What is a Website?
// //           </h2>
// //           <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
// //             A website is a collection of web pages hosted on servers and accessed 
// //             through browsers over the internet.
// //           </p>
// //         </section>

// //         {/* HOW IT WORKS */}
// //         <section id="how" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors">
// //           <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
// //             How Websites Are Built
// //           </h2>

// //           <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
// //             {[
// //               "Planning",
// //               "Frontend",
// //               "Backend",
// //               "Testing",
// //               "Deployment",
// //             ].map((step, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
// //               >
// //                 <h3 className="font-bold text-xl mb-3">
// //                   {index + 1}. {step}
// //                 </h3>
// //                 <p className="text-gray-600 dark:text-gray-300">
// //                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* BENEFITS */}
// //         <section id="benefits" className="py-20 max-w-6xl mx-auto px-6">
// //           <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
// //             Why Websites Are Important
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-10">
// //             {[
// //               "Business Growth",
// //               "Education",
// //               "Communication",
// //               "Portfolio",
// //             ].map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="p-8 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:scale-105 transition-transform"
// //               >
// //                 <h3 className="font-bold text-xl mb-2">{item}</h3>
// //                 <p>
// //                   Empower people and organizations through digital presence.
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* FOOTER */}
// //         <footer className="bg-gray-900 text-gray-400 text-center py-8 mt-20">
// //           <p>© 2026 WebCraft | Built with React + Vite + Tailwind CSS</p>
// //         </footer>

// //       </div>
// //     </div>
// //   );
// // }

// // export default App;




// import { useState } from "react";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <div className="bg-gray-50 dark:bg-gray-900 dark:text-white min-h-screen">

//         {/* NAVBAR */}
//         <nav className="bg-blue-600 dark:bg-gray-800 text-white p-4 shadow-md">
//           <div className="max-w-6xl mx-auto flex justify-between items-center">
//             <h1 className="text-xl font-bold">WebCraft</h1>

//             <div className="space-x-6 hidden md:block">
//               <a href="#about" className="hover:text-gray-200">About</a>
//               <a href="#how" className="hover:text-gray-200">How It Works</a>
//               <a href="#benefits" className="hover:text-gray-200">Benefits</a>
//             </div>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="bg-white text-blue-600 px-3 py-1 rounded-md text-sm font-semibold"
//             >
//               {darkMode ? "Light" : "Dark"}
//             </button>
//           </div>
//         </nav>

//         {/* HERO */}
//         <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-20 px-4">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             How Websites Are Made
//           </h2>
//           <p className="text-lg max-w-2xl mx-auto">
//             Learn how modern websites are built using React, Vite and Tailwind CSS.
//           </p>
//           <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200">
//             Start Learning
//           </button>
//         </section>

//         {/* ABOUT */}
//         <section id="about" className="py-16 max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-6 text-center">
//             What is a Website?
//           </h2>
//           <p className="text-lg text-center">
//             A website is a collection of web pages hosted on servers and accessed 
//             through browsers over the internet.
//           </p>
//         </section>

//         {/* HOW IT WORKS */}
//         <section id="how" className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
//           <h2 className="text-3xl font-bold text-center mb-10">
//             How Websites Are Built
//           </h2>

//           <div className="max-w-4xl mx-auto space-y-8">
//             <div>
//               <h3 className="font-bold text-xl">1. Planning</h3>
//               <p>Define purpose, audience, and layout.</p>
//             </div>

//             <div>
//               <h3 className="font-bold text-xl">2. Frontend</h3>
//               <p>Built using HTML, CSS, JavaScript and React.</p>
//             </div>

//             <div>
//               <h3 className="font-bold text-xl">3. Backend</h3>
//               <p>Handles servers, databases, and APIs.</p>
//             </div>

//             <div>
//               <h3 className="font-bold text-xl">4. Testing</h3>
//               <p>Fix bugs and improve performance.</p>
//             </div>

//             <div>
//               <h3 className="font-bold text-xl">5. Deployment</h3>
//               <p>Host the website on platforms like Vercel or Netlify.</p>
//             </div>


//           </div>
//         </section>

//         {/* BENEFITS */}
//         <section id="benefits" className="py-16 max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-6 text-center">
//             Why Websites Are Important
//           </h2>
//         </section>

//         {/* FOOTER */}
//         <footer className="bg-gray-800 text-white text-center py-6 mt-10">
//           <p>© 2026 WebCraft | Built with React + Vite + Tailwind CSS</p>
//         </footer>

//       </div>
//     </div>
//   );
// }

// export default App;



import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-50 dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">

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
              className="bg-white dark:bg-gray-700 dark:text-white text-blue-600 px-4 py-2 rounded-md text-sm font-semibold transition"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-20 px-4">
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
        <section id="about" className="py-16 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What is a Website?
          </h2>
          <p className="text-lg text-center">
            A website is a collection of web pages hosted on servers and accessed 
            through browsers over the internet.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="bg-gray-100 dark:bg-gray-800 py-16 px-4 transition-colors duration-300">
          <h2 className="text-3xl font-bold text-center mb-10">
            How Websites Are Built
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="font-bold text-xl">1. Planning</h3>
              <p>Define purpose, audience, and layout.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">2. Frontend</h3>
              <p>Built using HTML, CSS, JavaScript and React.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">3. Backend</h3>
              <p>Handles servers, databases, and APIs.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">4. Testing</h3>
              <p>Fix bugs and improve performance.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">5. Deployment</h3>
              <p>Host the website on platforms like Vercel or Netlify.</p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="py-16 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Websites Are Important
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">Business Growth</h3>
              <p>Websites help businesses reach customers worldwide and increase sales.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Education</h3>
              <p>They provide global access to learning materials and online courses.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Communication</h3>
              <p>Websites connect people through blogs, social platforms, and communities.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Portfolio</h3>
              <p>Individuals can showcase their skills, resumes, and projects online.</p>
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