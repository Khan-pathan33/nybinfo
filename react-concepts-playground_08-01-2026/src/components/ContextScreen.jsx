// import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

// export default function ContextScreen() {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <div className="bg-purple-200 p-6 rounded">
//       <h2 className="font-bold">Context API (Avoid Props Drilling)</h2>
//       <p>Theme: {theme}</p>
//       <button
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         className="bg-purple-600 text-white px-4 py-2 rounded"
//       >
//         Toggle Theme
//       </button>
//     </div>
//   );
// }


//context (avoiding props drilling)

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function DeepChild() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="p-4 rounded shadow mt-2">
      DeepChild: Theme is <b>{theme}</b>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="ml-4 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default function ContextScreen() {
  return (
    <div className="bg-purple-200 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">📡 Context Demo</h1>
      <DeepChild />
    </div>
  );
}
