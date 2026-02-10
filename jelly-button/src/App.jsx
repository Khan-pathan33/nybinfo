// import JellyButton from "./components/JellyButton.jsx"

// function App() {
//   return (
//     <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
//       <JellyButton />
//     </div>
//   )
// }

// export default App


import React, { useReducer } from "react";

// 1️⃣ Initial state definition
const initialState = {
  count: 0,
  name: "",
  language: "JavaScript",
};

// 2️⃣ Reducer function to manage state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "updateName":
      return { ...state, name: action.payload };
    case "updateLanguage":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

const App = () => {
  // 3️⃣ Using useReducer with the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "20px" }}>
      {/* Displaying the current count */}
      <h2>Count: {state.count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      </div>

      {/* Displaying and updating name using input */}
      <div style={{ marginTop: "20px" }}>
        <label htmlFor="name">Enter your name: </label>
        <input
          id="name"
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "updateName", payload: e.target.value })
          }
          placeholder="Type your name"
        />
      </div>

      {/* Displaying and updating favorite language using select dropdown */}
      <div style={{ marginTop: "20px" }}>
        <label htmlFor="language">Choose your favorite language: </label>
        <select
          id="language"
          value={state.language}
          onChange={(e) =>
            dispatch({ type: "updateLanguage", payload: e.target.value })
          }
        >
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="React">React</option>
          <option value="Go">Go</option>
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Your name is: {state.name}</h3>
        <h3>Your favorite language is: {state.language}</h3>
      </div>
    </div>
  );
};

export default App;
