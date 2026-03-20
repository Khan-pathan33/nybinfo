import React from 'react'
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Fruits from './components/Fruits/Fruits';
import Dairy from './components/Dairy/Dairy';
import SeaFood from './components/SeaFood/SeaFood';

import AllProducts from './components/AllProducts/AllProducts';
import Layout from './components/Layout/Layout';

const App = () =>{

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
         {
      path:'/fruits',
      element: <Fruits />
    },
    {
      path:'/dairy',
      element: <Dairy />
    },
    {
      path:'/seafood',
      element: <SeaFood />
    },
    {
      path:'/allproducts',
      element: <AllProducts />
    },
      ]
    },

   
  ])
  return <RouterProvider router={router}/>

}

export default App



// import React from "react";

// function App() {
//   const footerStyle = {
//     backgroundColor: "#222",
//     color: "white",
//     padding: "40px 0",
//     textAlign: "center"
//   };

//   const containerStyle = {
//     display: "flex",
//     justifyContent: "space-around",
//     flexWrap: "wrap",
//     maxWidth: "900px",
//     margin: "0 auto"
//   };

//   const sectionStyle = {
//     margin: "10px"
//   };

//   const linkStyle = {
//     listStyle: "none",
//     padding: 0
//   };

//   const linkItemStyle = {
//     marginBottom: "5px",
//     cursor: "pointer"
//   };

//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>Welcome to My Website</h1>

//       {/* Footer */}
//       <footer style={footerStyle}>
//         <div style={containerStyle}>
//           <div style={sectionStyle}>
//             <h3>My Website</h3>
//             <p>Building modern web applications using React.</p>
//           </div>

//           <div style={sectionStyle}>
//             <h4>Quick Links</h4>
//             <ul style={linkStyle}>
//               <li style={linkItemStyle}>Home</li>
//               <li style={linkItemStyle}>About</li>
//               <li style={linkItemStyle}>Services</li>
//               <li style={linkItemStyle}>Contact</li>
//             </ul>
//           </div>

//           <div style={sectionStyle}>
//             <h4>Follow Us</h4>
//             <p>Facebook | Instagram | Twitter</p>
//           </div>
//         </div>

//         <div style={{ marginTop: "20px", borderTop: "1px solid #555", paddingTop: "10px" }}>
//           <p>© 2026 MyWebsite | All Rights Reserved</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// function App() {

//   const footerStyle = {
//     backgroundColor: "#1a1a1a",
//     color: "white",
//     padding: "40px 20px",
//     marginTop: "50px"
//   };

//   const container = {
//     display: "flex",
//     justifyContent: "space-around",
//     flexWrap: "wrap",
//     textAlign: "center"
//   };

//   const section = {
//     margin: "15px"
//   };

//   const logoStyle = {
//     width: "80px",
//     marginBottom: "10px"
//   };

//   const iconStyle = {
//     fontSize: "28px",
//     margin: "10px",
//     cursor: "pointer"
//   };

//   return (
//     <div>

//       <h1 style={{textAlign:"center"}}>My React Footer Project</h1>

//       <footer style={footerStyle}>

//         <div style={container}>

//           {/* Logo Section */}
//           <div style={section}>
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
//               alt="logo"
//               style={logoStyle}
//             />
//             <h3>My Company</h3>
//           </div>

//           {/* About Us */}
//           <div style={section}>
//             <h3>About Us</h3>
//             <p>
//               We create modern web applications using React and
//               innovative technologies.
//             </p>
//           </div>

//           {/* Contact */}
//           <div style={section}>
//             <h3>Contact</h3>
//             <p>Email: mycompany@email.com</p>
//           </div>

//           {/* Social Media */}
//           <div style={section}>
//             <h3>Follow Us</h3>

//             <FaInstagram style={iconStyle} color="#E1306C"/>
//             <FaLinkedin style={iconStyle} color="#0077b5"/>
//             <FaWhatsapp style={iconStyle} color="#25D366"/>

//           </div>

//         </div>

//         <div style={{textAlign:"center", marginTop:"20px", borderTop:"1px solid gray", paddingTop:"10px"}}>
//           <p>© 2026 My Company | All Rights Reserved</p>
//         </div>

//       </footer>

//     </div>
//   );
// }

// export default App;