// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from "./app/store";
// import App from "./App";
// import "./index.css";
// import "./app.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

/* ======= REDUX TOOLKIT SLICE ======= */
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
});

const { increment, decrement, reset } = counterSlice.actions;

/* ======= REDUX STORE ======= */
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

/* ======= REACT COMPONENT ======= */
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Redux Toolkit One-File Demo ✅</h1>
      <h2>Count: {count}</h2>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

/* ======= RENDER APP ======= */
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

/* ======= INLINE STYLES (TAILWIND-LIKE) ======= */
const style = document.createElement("style");
style.innerHTML = `
  body { font-family: sans-serif; margin:0; padding:0; background:#f3f4f6; display:flex; justify-content:center; align-items:center; height:100vh; }
  .container { background:white; padding:2rem; border-radius:12px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.1);}
  h1 { margin-bottom:1rem; font-size:1.8rem;}
  h2 { margin-bottom:1rem; font-size:1.5rem;}
  .buttons button { margin:0 5px; padding:8px 16px; background:#2563eb; color:white; border:none; border-radius:6px; cursor:pointer; }
  .buttons button:hover { background:#1d4ed8; }
`;
document.head.appendChild(style);
