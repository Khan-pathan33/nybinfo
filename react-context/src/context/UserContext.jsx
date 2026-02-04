// import { createContext, useState } from "react";

// // Create context
// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     name: "John Doe",
//     age: 25,
//   });

//   // Function to update user using spread operator
//   const updateUser = (newInfo) => {
//     setUser((prev) => ({ ...prev, ...newInfo }));
//   };

//   return (
//     <UserContext.Provider value={{ user, updateUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


import { createContext, useState } from "react";

// 1. Create the context
export const UserContext = createContext();

// 2. Create the provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 25,
  });

  // Update user using spread operator
  const updateUser = (newInfo) => {
    setUser((prev) => ({ ...prev, ...newInfo }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
