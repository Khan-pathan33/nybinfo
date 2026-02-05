import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);








// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { colorSlice } from '../store';

// function ColorChanger() {
//   const bgColor = useSelector(state => state.color.bgColor);
//   const dispatch = useDispatch();

//   return (
//     <div className="p-4 border rounded mb-4">
//       <h2 className="text-xl font-bold mb-2">Color Slice</h2>
//       <div className={`h-20 mb-2 w-full rounded`} style={{ backgroundColor: bgColor }}></div>
//       <div className="flex gap-2">
//         <button onClick={() => dispatch(colorSlice.actions.setRed())}
//          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Red</button>
//         <button onClick={() => dispatch(colorSlice.actions.setGreen())}
//          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Green</button>
//         <button onClick={() => dispatch(colorSlice.actions.setBlue())} 
//         className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Blue</button>
//       </div>
//     </div>
//   );
// }

// export default ColorChanger;





















// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { counterSlice } from '../store';

// function Counter() {
//   const count = useSelector(state => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div className="p-4 border rounded mb-4">
//       <h2 className="text-xl font-bold mb-2">Counter Slice</h2>
//       <p className="mb-2">Value: {count}</p>
//       <div className="flex gap-2">
//         <button onClick={() => dispatch(counterSlice.actions.increment())} 
//         className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Increment</button>
//         <button onClick={() => dispatch(counterSlice.actions.decrement())} 
//         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Decrement</button>
//         <button onClick={() => dispatch(counterSlice.actions.reset())}
//          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">Reset</button>
//       </div>
//     </div>
//   );
// }

// export default Counter;



















// import { configureStore, createSlice } from '@reduxjs/toolkit';

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { value: 0 },
//   reducers: {
//     increment: state => { state.value += 1 },
//     decrement: state => { state.value -= 1 },
//     reset: state => { state.value = 0 }
//   }
// });

// export const colorSlice = createSlice({
//   name: 'color',
//   initialState: { bgColor: 'white' },
//   reducers: {
//     setRed: state => { state.bgColor = 'red' },
//     setGreen: state => { state.bgColor = 'green' },
//     setBlue: state => { state.bgColor = 'blue' },
//   }
// });

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//     color: colorSlice.reducer
//   }
// });
