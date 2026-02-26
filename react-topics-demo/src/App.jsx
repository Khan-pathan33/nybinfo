// // // src/App.jsx
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import { topicsList } from "./data/topicsData";

// // import Introduction from "./topics/Introduction";
// // import JSXDemo from "./topics/JSXDemo";

// // const componentMap = {
// //   intro: Introduction,
// //   jsx: JSXDemo,
// // };

// // const App = () => {
// //   return (
// //     <>
// //       <Navbar />

// //       <div className="pt-20 px-6">
// //         {topicsList.map((topic) => {
// //           const Component = componentMap[topic.id];

// //           return Component ? (
// //             <Component key={topic.id} />
// //           ) : (
// //             <div key={topic.id} id={topic.id} className="mb-10">
// //               <h2 className="text-xl font-bold text-gray-400">
// //                 {topic.label} Demo Not Created Yet
// //               </h2>
// //             </div>
// //           );
// //         })}
// //       </div>

// //       <Footer />
// //     </>
// //   );
// // };

// // export default App;

// import React, { useState } from "react";

// // Sample Topics Data
// const topicsList = [
//   { id: "javascript", label: "JavaScript", description: "JS is a programming language" },
//   { id: "react", label: "React", description: "React is a JS library for building UI" },
//   { id: "css", label: "CSS", description: "CSS styles your website" },
//   { id: "html", label: "HTML", description: "HTML is the markup language" },
//   { id: "node", label: "NodeJS", description: "NodeJS runs JS on server" },
// ];

// const App = () => {
//   const [selectedTopic, setSelectedTopic] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center p-4 bg-black text-white relative">
//         {/* Logo */}
//         <div className="text-2xl font-bold cursor-pointer">React</div>

//         {/* Topics Dropdown */}
//         <div
//           className="relative"
//           onMouseEnter={() => setShowDropdown(true)}
//           onMouseLeave={() => setShowDropdown(false)}
//         >
//           <div className="cursor-pointer font-semibold">Topics</div>
//           {showDropdown && (
//             <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg z-50">
//               {topicsList.map((topic) => (
//                 <li
//                   key={topic.id}
//                   className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
//                   onClick={() => setSelectedTopic(topic)}
//                 >
//                   {topic.label}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Searchbar */}
//         <div className="flex items-center border border-white rounded-full px-2">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-black text-white outline-none px-2 py-1 rounded-l-full"
//           />
//           <button className="bg-white text-black px-3 py-1 rounded-r-full">Search</button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="p-10 bg-gray-100 flex-1">
//         <h1 className="text-3xl font-bold mb-6">
//           {selectedTopic ? selectedTopic.label : "All React Topics"}
//         </h1>
//         <p className="text-lg mb-6">
//           {selectedTopic
//             ? selectedTopic.description
//             : "Select a topic from the navbar to see details here."}
//         </p>

//         {/* Optional: Show all topics as cards */}
//         {!selectedTopic && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {topicsList.map((topic) => (
//               <div
//                 key={topic.id}
//                 className="p-4 bg-white rounded shadow hover:shadow-lg cursor-pointer"
//                 onClick={() => setSelectedTopic(topic)}
//               >
//                 <h2 className="text-xl font-semibold mb-2">{topic.label}</h2>
//                 <p>{topic.description}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Footer */}
//       <footer className="p-6 bg-black text-white text-center">
//         © 2026 React Topics Project
//       </footer>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// // Updated Topics List
// const topicsList = [
//   { id: "javascript", label: "JavaScript", description: "JS is a programming language" },
//   { id: "react", label: "React", description: "React is a JS library for building UI" },
//   { id: "jsx", label: "JSX", description: "JSX allows writing HTML in React" },
//   { id: "props", label: "Props", description: "Props allow passing data to components" },
//   { id: "state", label: "State", description: "State allows components to manage internal data" },
//   { id: "hooks", label: "Hooks", description: "Hooks let you use state and lifecycle methods in functional components" },
//   { id: "context", label: "Context API", description: "Context API avoids props drilling by providing global state" },
//   { id: "useEffect", label: "useEffect", description: "useEffect lets you handle side-effects in components" },
//   { id: "routing", label: "React Router", description: "React Router manages navigation between pages" },
//   { id: "redux", label: "Redux", description: "Redux is a state management library for React apps" },
// ];

// const App = () => {
//   const [selectedTopic, setSelectedTopic] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center p-4 bg-black text-white relative">
//         <div className="text-2xl font-bold cursor-pointer">React</div>

//         <div
//           className="relative"
//           onMouseEnter={() => setShowDropdown(true)}
//           onMouseLeave={() => setShowDropdown(false)}
//         >
//           <div className="cursor-pointer font-semibold">Topics</div>
//           {showDropdown && (
//             <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg z-50">
//               {topicsList.map((topic) => (
//                 <li
//                   key={topic.id}
//                   className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
//                   onClick={() => setSelectedTopic(topic)}
//                 >
//                   {topic.label}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="flex items-center border border-white rounded-full px-2">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-black text-white outline-none px-2 py-1 rounded-l-full"
//           />
//           <button className="bg-white text-black px-3 py-1 rounded-r-full">Search</button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="p-10 bg-gray-100 flex-1">
//         <h1 className="text-3xl font-bold mb-6">
//           {selectedTopic ? selectedTopic.label : "All React Topics"}
//         </h1>
//         <p className="text-lg mb-6">
//           {selectedTopic
//             ? selectedTopic.description
//             : "Select a topic from the navbar to see details here."}
//         </p>

//         {!selectedTopic && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {topicsList.map((topic) => (
//               <div
//                 key={topic.id}
//                 className="p-4 bg-white rounded shadow hover:shadow-lg cursor-pointer"
//                 onClick={() => setSelectedTopic(topic)}
//               >
//                 <h2 className="text-xl font-semibold mb-2">{topic.label}</h2>
//                 <p>{topic.description}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       <footer className="p-6 bg-black text-white text-center">
//         © 2026 React Topics Project
//       </footer>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   // Event handler
//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   const handleInputChange = (event) => {
//     console.log("Input value:", event.target.value);
//   };

//   return (
//     <div className="container">
//       <h1 className="text-2xl font-bold mb-4">React Event</h1>

//       {/* Button click event */}
//       <button className="button-custom mb-4" onClick={handleClick}>
//         Click Me
//       </button>
//       <p className="mb-4">Button clicked: {count} times</p>

//       {/* Input change event */}
//       <input
//         type="text"
//         placeholder="Type something..."
//         className="border border-gray-300 p-2 rounded w-full"
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// }

// export default App;


import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [hovered, setHovered] = useState(false);
  const [keyPressed, setKeyPressed] = useState("");

  // Simple click event
  const handleClick = () => setCount(count + 1);

  // Click event with parameter
  const handleClickWithParam = (name) => alert(`Hello, ${name}!`);

  // Input change
  const handleInputChange = (e) => setInputValue(e.target.value);

  // Mouse enter / leave
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  // Keyboard event
  const handleKeyDown = (e) => setKeyPressed(e.key);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">React Event Binding</h1>

      {/* Button click */}
      <button className="button-custom" onClick={handleClick}>
        Click Me
      </button>
      <p>Button clicked: {count} times</p>

      {/* Button click with parameter */}
      <button
        className="button-red"
        onClick={() => handleClickWithParam("React User")}
      >
        Greet Me
      </button><br/><br/>

      {/* Input event */}
      <input
        type="text"
        placeholder="Type something..."
        className="input-custom"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Input value: {inputValue}</p>

      {/* Mouse events */}
      <div
        className={`event-box ${hovered ? "bg-green-300" : "bg-green-100"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me!
      </div>
      <p className="box">{hovered ? "Mouse is over the box!" : "Mouse is outside the box"}</p>

      {/* Keyboard event */}
      <input
        type="text"
        placeholder="Press any key..."
        className="input-custom"
        onKeyDown={handleKeyDown}
      />
      <p>Last key pressed: {keyPressed}</p>
    </div>
  );
}

export default App;