// import { UserProvider } from "./context/UserContext";
// import A from "./components/A";
// import "./app.css";

// function App() {
//   return (
//     <UserProvider>
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <A />
//       </div>
//     </UserProvider>
//   );
// }

// export default App;
import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const MyContext = createContext();

// 2. Provider
const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello from Context!");

  const updateValue = (newValue) => setValue(newValue);

  return (
    <MyContext.Provider value={{ value, updateValue }}>
      {children}
    </MyContext.Provider>
  );
};

// 3. Component A
const A = () => (
  <div className="border-2 border-blue-500 p-4 m-4 rounded">
    <h2 className="text-blue-600 font-bold">Component A</h2>
    <B />
  </div>
);

// 4. Component B
const B = () => (
  <div className="border-2 border-green-500 p-4 m-4 rounded">
    <h3 className="text-green-600 font-semibold">Component B</h3>
    <C />
  </div>
);

// 5. Component C
const C = () => (
  <div className="border-2 border-orange-500 p-4 m-4 rounded">
    <h4 className="text-orange-600 font-medium">Component C</h4>
    <D />
  </div>
);

// 6. Component D (Uses Context)
const D = () => {
  const { value, updateValue } = useContext(MyContext);

  return (
    <div className="border-2 border-red-500 p-4 m-4 rounded">
      <h5 className="text-red-600 font-medium">Component D</h5>
      <p className="mb-2">Context Value: {value}</p>
      <button
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => updateValue("Context Updated!")}
      >
        Update Context
      </button>
    </div>
  );
};

// 7. App Component
const App = () => {
  return (
    <MyProvider>
      <div className="p-6 font-sans">
        <h1 className="text-2xl font-bold mb-4">
          React + Vite + Tailwind Context API Example
        </h1>
        <A />
      </div>
    </MyProvider>
  );
};

export default App;
