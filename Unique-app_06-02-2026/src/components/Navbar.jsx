// import { useDispatch } from "react-redux";
// import { toggleSidebar } from "../features/uiSlice";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//     const dispatch= useDispatch;
//     return (
//         <nav className="flex items-center justify-between px-6 py-4 backdrop-blur bg-white/5">
//             <div className="flex items-center gap-4">
//                 <button onClick={()=> dispatch(toggleSidebar())} className="md:hidden">
                    
//                 </button>

//                 {/*logo */}
//                 <Link to="/login" className="text-xl font-bold tracking-wide">
//                     UNIQUE 
//                 </Link>
//             </div>
//         </nav>
//     )
// }


import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#0b0f1a] text-white">
      <Link to="/login">
        <Logo />
      </Link>

      <div className="flex gap-6 text-sm">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/courses" className="hover:text-blue-400">Courses</Link>
        <Link to="/premium" className="hover:text-purple-400">Advanced</Link>
        <Link to="/login" className="hover:text-pink-400">Login</Link>
      </div>
    </nav>
  );
}
