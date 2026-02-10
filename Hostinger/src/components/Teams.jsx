import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./store/colorSlice";

function App() {
  const color = useSelector((state) => state.color.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div 
        className="w-52 h-52 mb-6 rounded-lg transition-colors duration-500"
        style={{ backgroundColor: color }}
      ></div>
      <button 
        className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        onClick={() => dispatch(changeColor())}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;






// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./store/index.js";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );






// import { configureStore } from "@reduxjs/toolkit";
// import colorReducer from "./colorSlice";

// export const store = configureStore({
//     reducer: {
//         color: colorReducer,
//     },
// });







// import { createSlice } from "@reduxjs/toolkit";

// const getRandomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');

// const colorSlice = createSlice({
//     name: "color",
//     initialState: { value: "#3498db" },
//     reducers: {
//         changeColor: (state) => {
//             state.value = getRandomColor();
//         }
//     }
// });

// export const { changeColor } = colorSlice.actions;
// export default colorSlice.reducer;
















// import React from 'react'
// import Title from './Title'
// import { teamData } from '../assets/assets'

// const Teams = () => {
//   return (
//     <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
//         <Title title='Meet the team' desc='A passionate team of digital experts dedicated to your brands success.'/>

//         <div className='grid grig-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
//           {teamData.map((team, index)=>(
//             <div key={index} className='flex max-sm:flex-col items-center gap-5 p-4
//             rounded-xl border-gray-100 dark:border-gray-700 bg-white
//             dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5
//             hover:scale-103 transition-all duration-400'>
//               <img src={team.image} className='w-12 h-12 rounded-full' alt="" />
//               <div className='flex-1'>
//                 <h3 className='font-bold text-sm'>{team.name}</h3>
//                 <p className='text-xs opacity-60'>{team.title}</p>
//               </div>
//             </div>
//           ))}

//         </div>

//     </div>
//   )
// }

// export default Teams