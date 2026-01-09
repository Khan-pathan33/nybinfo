// import { createContext, useState } from "react";

// export const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <div className={theme === "light" ? "bg-gray-100 text-black" : "bg-black text-white"} style={{ minHeight: "100vh" }}>
//         {children}
//       </div>
//     </ThemeContext.Provider>
//   );
// }


import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === "light" ? "bg-yellow-50 min-h-screen" : "bg-gray-900 text-white min-h-screen"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
