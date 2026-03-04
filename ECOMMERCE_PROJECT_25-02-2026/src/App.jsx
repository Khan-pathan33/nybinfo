// // import React from 'react'
// // import Home from './Components/Home/Home'

// // const App = () => {
// //   return (
// //     <div>
// //         <Home />
// //     </div>
// //   )
// // }

// // export default App




// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from './Components/Home/Home'
// import Login from './Components/Login/Login'

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//     </Routes>
//   )
// }

// export default App

// import React from "react";
// import Home from "./Components/Home/Home";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//   return (
//     <div>
//       <Home />
//       <ToastContainer 
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={true}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </div>
//   );
// };

// export default App;
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App