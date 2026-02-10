// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginAsUser, loginAsPremium } from "../features/authSlice"

// export default function Login(){
//     const dispatch =useDispatch();
//     const navigate= useNavigate();

//     const handleUser= () => {
//         dispatch(loginAsUser());
//         navigate("/")
//     };

//     const handlePremium = () => {
//         dispatch(loginAsPremium());
//         navigate("/premium")
//     }

//     return (
//         <section className="max-w-md mx-auto space-y-6">
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400
//              to-rose-500 bg-clip-text text-transparent">Login</h1>

//              <p className="text-neutral-400">
//                 Choose how you want to enter the platform.
//              </p>

//              <button onClick={handleUser} className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
//              Login as Normal User
//              </button>

//              <button onClick={handlePremium} className="w-full py-3 rounded-xl bg-gradient-to-r 
//              from-fuchsia-500 to-purple-600 transition">
//                 Login as Premium User
//              </button>
//         </section>
//     )
// }


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, loginPremium } from "../store";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070a13]">
      <div className="bg-[#0f172a] p-8 rounded-xl w-[360px] text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-6">Welcome Back!</h2>

        <input
          placeholder="Username"
          className="w-full mb-3 p-3 rounded bg-black/40 outline-none"
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full mb-2 p-3 rounded bg-black/40 outline-none"
        />

        <p className="text-xs text-blue-400 mb-4 cursor-pointer">
          Forgot password?
        </p>

        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-2 rounded mb-3"
          onClick={() => {
            dispatch(loginUser());
            navigate("/");
          }}
        >
          Login
        </button>

        <button
          className="w-full border border-white/20 py-2 rounded"
          onClick={() => {
            dispatch(loginPremium());
            navigate("/premium");
          }}
        >
          Login as Premium
        </button>
      </div>
    </div>
  );
}
