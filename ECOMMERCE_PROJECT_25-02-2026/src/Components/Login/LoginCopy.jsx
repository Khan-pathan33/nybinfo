// // // // import React, { useState } from "react";

// // // // const Login = () => {
// // // //   const [email, setEmail] = useState("");

// // // //   const handleSendOtp = () => {
// // // //     // Here you will integrate backend OTP API
// // // //     console.log("Send OTP to:", email);
// // // //   };

// // // //   return (
// // // //     <div className="h-screen flex justify-center items-center bg-gray-100">
// // // //       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
// // // //         <h2 className="text-2xl font-bold mb-6 text-center">Login with OTP</h2>

// // // //         <input
// // // //           type="email"
// // // //           placeholder="Enter your email"
// // // //           className="w-full border p-3 rounded-lg mb-4 focus:outline-none"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //         />

// // // //         <button
// // // //           onClick={handleSendOtp}
// // // //           className="w-full bg-blue-600 text-white py-3 rounded-lg"
// // // //         >
// // // //           Send OTP
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;



// // // // // import React, { useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // const Login = () => {
// // // // //   const navigate = useNavigate();

// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [isOtpMode, setIsOtpMode] = useState(true); // OTP login by default
// // // // //   const [otp, setOtp] = useState("");
// // // // //   const [isSignup, setIsSignup] = useState(false); // toggle for new users

// // // // //   // Simulated backend action
// // // // //   const handleLogin = () => {
// // // // //     if (isOtpMode) {
// // // // //       if (!email) return alert("Please enter your email");
// // // // //       console.log("Send OTP to:", email);
// // // // //       alert(`OTP sent to ${email}`);
// // // // //       // simulate OTP verification
// // // // //       localStorage.setItem("isLoggedIn", "true");
// // // // //       navigate("/");
// // // // //     } else {
// // // // //       if (!email || !password) return alert("Please enter email and password");
// // // // //       console.log("Login with password:", email, password);
// // // // //       // simulate password verification
// // // // //       localStorage.setItem("isLoggedIn", "true");
// // // // //       navigate("/");
// // // // //     }
// // // // //   };

// // // // //   const handleForgotPassword = () => {
// // // // //     if (!email) return alert("Enter your email to reset password");
// // // // //     console.log("Reset password for:", email);
// // // // //     alert(`Password reset link sent to ${email}`);
// // // // //   };

// // // // //   const handleSignup = () => {
// // // // //     if (!email || !password) return alert("Enter email and password to sign up");
// // // // //     console.log("Sign up:", email, password);
// // // // //     alert(`Account created for ${email}`);
// // // // //     localStorage.setItem("isLoggedIn", "true");
// // // // //     navigate("/");
// // // // //   };

// // // // //   return (
// // // // //     <div className="h-screen flex justify-center items-center bg-gray-100">
// // // // //       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
// // // // //         <h2 className="text-2xl font-bold mb-6 text-center">
// // // // //           {isSignup ? "Sign Up" : "Login"}
// // // // //         </h2>

// // // // //         {/* Email input */}
// // // // //         <input
// // // // //           type="email"
// // // // //           placeholder="Enter your email"
// // // // //           className="w-full border p-3 rounded-lg mb-4 focus:outline-none"
// // // // //           value={email}
// // // // //           onChange={(e) => setEmail(e.target.value)}
// // // // //         />

// // // // //         {/* Password input if not OTP mode */}
// // // // //         {!isOtpMode && (
// // // // //           <input
// // // // //             type="password"
// // // // //             placeholder="Enter your password"
// // // // //             className="w-full border p-3 rounded-lg mb-4 focus:outline-none"
// // // // //             value={password}
// // // // //             onChange={(e) => setPassword(e.target.value)}
// // // // //           />
// // // // //         )}

// // // // //         {/* OTP input if OTP mode */}
// // // // //         {isOtpMode && otp && (
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Enter OTP"
// // // // //             className="w-full border p-3 rounded-lg mb-4 focus:outline-none"
// // // // //             value={otp}
// // // // //             onChange={(e) => setOtp(e.target.value)}
// // // // //           />
// // // // //         )}

// // // // //         {/* Login / Sign Up button */}
// // // // //         <button
// // // // //           onClick={isSignup ? handleSignup : handleLogin}
// // // // //           className="w-full bg-blue-600 text-white py-3 rounded-lg mb-2"
// // // // //         >
// // // // //           {isSignup ? "Sign Up" : isOtpMode ? "Send OTP / Login" : "Login"}
// // // // //         </button>

// // // // //         {/* Toggle OTP / Password */}
// // // // //         {!isSignup && (
// // // // //           <p
// // // // //             className="text-sm text-blue-600 cursor-pointer mb-2"
// // // // //             onClick={() => setIsOtpMode((prev) => !prev)}
// // // // //           >
// // // // //             {isOtpMode ? "Use password login" : "Use OTP login"}
// // // // //           </p>
// // // // //         )}

// // // // //         {/* Forgot password */}
// // // // //         {!isSignup && !isOtpMode && (
// // // // //           <p
// // // // //             className="text-sm text-red-600 cursor-pointer mb-2"
// // // // //             onClick={handleForgotPassword}
// // // // //           >
// // // // //             Forgot password?
// // // // //           </p>
// // // // //         )}

// // // // //         {/* Signup toggle */}
// // // // //         <p className="text-sm text-gray-600 mt-4">
// // // // //           {isSignup ? "Already have an account? " : "New here? "}
// // // // //           <span
// // // // //             className="text-blue-600 cursor-pointer"
// // // // //             onClick={() => setIsSignup((prev) => !prev)}
// // // // //           >
// // // // //             {isSignup ? "Login" : "Sign Up"}
// // // // //           </span>
// // // // //         </p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Login;


// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { toast } from "react-toastify";
// // // // // import "react-toastify/dist/ReactToastify.css";

// // // // // toast.configure();

// // // // // const Login = () => {
// // // // //   const navigate = useNavigate();

// // // // //   const [loginMethod, setLoginMethod] = useState("emailOtp"); // emailOtp, phoneOtp, password
// // // // //   const [isSignup, setIsSignup] = useState(false);

// // // // //   const [email, setEmail] = useState("");
// // // // //   const [phone, setPhone] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // //   const [otp, setOtp] = useState("");

// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [errors, setErrors] = useState({});
// // // // //   const [otpTimer, setOtpTimer] = useState(0);
// // // // //   const [termsAccepted, setTermsAccepted] = useState(false);

// // // // //   // OTP countdown timer
// // // // //   useEffect(() => {
// // // // //     let timer;
// // // // //     if (otpTimer > 0) {
// // // // //       timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
// // // // //     }
// // // // //     return () => clearTimeout(timer);
// // // // //   }, [otpTimer]);

// // // // //   const validate = () => {
// // // // //     const newErrors = {};
// // // // //     if (loginMethod === "emailOtp" || loginMethod === "password") {
// // // // //       if (!email) newErrors.email = "Email is required";
// // // // //       else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
// // // // //         newErrors.email = "Invalid email format";
// // // // //     }
// // // // //     if (loginMethod === "phoneOtp") {
// // // // //       if (!phone) newErrors.phone = "Phone number is required";
// // // // //       else if (!/^\d{10}$/.test(phone))
// // // // //         newErrors.phone = "Phone number must be 10 digits";
// // // // //     }
// // // // //     if (!isSignup && loginMethod === "password" && !password) {
// // // // //       newErrors.password = "Password is required";
// // // // //     }
// // // // //     if (isSignup && !password) {
// // // // //       newErrors.password = "Password is required for sign up";
// // // // //     }
// // // // //     if (isSignup && !termsAccepted) {
// // // // //       newErrors.terms = "You must accept terms & privacy policy";
// // // // //     }
// // // // //     setErrors(newErrors);
// // // // //     return Object.keys(newErrors).length === 0;
// // // // //   };

// // // // //   const sendOtp = () => {
// // // // //     if (!validate()) return;
// // // // //     setLoading(true);
// // // // //     setTimeout(() => {
// // // // //       setLoading(false);
// // // // //       setOtpTimer(60); // 1 minute timer
// // // // //       toast.success("OTP sent successfully!");
// // // // //     }, 1500); // simulate API call
// // // // //   };

// // // // //   const handleLogin = () => {
// // // // //     if (!validate()) return;
// // // // //     setLoading(true);
// // // // //     setTimeout(() => {
// // // // //       setLoading(false);
// // // // //       toast.success("Login successful!");
// // // // //       localStorage.setItem("isLoggedIn", "true");
// // // // //       navigate("/");
// // // // //     }, 1500);
// // // // //   };

// // // // //   const handleSignup = () => {
// // // // //     if (!validate()) return;
// // // // //     setLoading(true);
// // // // //     setTimeout(() => {
// // // // //       setLoading(false);
// // // // //       toast.success("Account created successfully!");
// // // // //       localStorage.setItem("isLoggedIn", "true");
// // // // //       navigate("/");
// // // // //     }, 1500);
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-white">
// // // // //       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
// // // // //         <div className="flex flex-col items-center mb-6">
// // // // //           <img
// // // // //             src="/logo.png"
// // // // //             alt="Brand Logo"
// // // // //             className="w-16 h-16 mb-2"
// // // // //           />
// // // // //           <h2 className="text-2xl font-bold text-center">
// // // // //             {isSignup ? "Create Your Account" : "Welcome Back!"}
// // // // //           </h2>
// // // // //           {!isSignup && <p className="text-gray-500 mt-1">Login to continue shopping</p>}
// // // // //         </div>

// // // // //         {/* Login method toggle */}
// // // // //         {!isSignup && (
// // // // //           <div className="flex justify-between mb-4 text-sm">
// // // // //             <button
// // // // //               className={`flex-1 py-2 ${loginMethod === "emailOtp" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// // // // //               onClick={() => setLoginMethod("emailOtp")}
// // // // //             >
// // // // //               Email OTP
// // // // //             </button>
// // // // //             <button
// // // // //               className={`flex-1 py-2 ${loginMethod === "phoneOtp" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// // // // //               onClick={() => setLoginMethod("phoneOtp")}
// // // // //             >
// // // // //               Phone OTP
// // // // //             </button>
// // // // //             <button
// // // // //               className={`flex-1 py-2 ${loginMethod === "password" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// // // // //               onClick={() => setLoginMethod("password")}
// // // // //             >
// // // // //               Password
// // // // //             </button>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Email input */}
// // // // //         {(loginMethod === "emailOtp" || loginMethod === "password") && (
// // // // //           <div className="mb-3">
// // // // //             <input
// // // // //               type="email"
// // // // //               placeholder="Email"
// // // // //               className="w-full border p-3 rounded-lg focus:outline-none"
// // // // //               value={email}
// // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // //             />
// // // // //             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Phone input */}
// // // // //         {loginMethod === "phoneOtp" && (
// // // // //           <div className="mb-3">
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Phone number"
// // // // //               className="w-full border p-3 rounded-lg focus:outline-none"
// // // // //               value={phone}
// // // // //               onChange={(e) => setPhone(e.target.value)}
// // // // //             />
// // // // //             {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Password input */}
// // // // //         {(loginMethod === "password" || isSignup) && (
// // // // //           <div className="mb-3 relative">
// // // // //             <input
// // // // //               type={showPassword ? "text" : "password"}
// // // // //               placeholder="Password"
// // // // //               className="w-full border p-3 rounded-lg focus:outline-none"
// // // // //               value={password}
// // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // //             />
// // // // //             <button
// // // // //               type="button"
// // // // //               className="absolute right-3 top-3 text-gray-500"
// // // // //               onClick={() => setShowPassword(!showPassword)}
// // // // //             >
// // // // //               {showPassword ? "Hide" : "Show"}
// // // // //             </button>
// // // // //             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// // // // //           </div>
// // // // //         )}

// // // // //         {/* OTP input */}
// // // // //         {(loginMethod === "emailOtp" || loginMethod === "phoneOtp") && otpTimer > 0 && (
// // // // //           <div className="mb-3">
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Enter OTP"
// // // // //               className="w-full border p-3 rounded-lg focus:outline-none"
// // // // //               value={otp}
// // // // //               onChange={(e) => setOtp(e.target.value)}
// // // // //             />
// // // // //             <p className="text-gray-500 text-sm mt-1">
// // // // //               OTP expires in: {Math.floor(otpTimer / 60)}:{otpTimer % 60 < 10 ? `0${otpTimer % 60}` : otpTimer % 60}
// // // // //             </p>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Terms checkbox */}
// // // // //         {isSignup && (
// // // // //           <div className="mb-3 flex items-center text-sm">
// // // // //             <input
// // // // //               type="checkbox"
// // // // //               className="mr-2"
// // // // //               checked={termsAccepted}
// // // // //               onChange={() => setTermsAccepted(!termsAccepted)}
// // // // //             />
// // // // //             <span>
// // // // //               I accept the <a href="#" className="text-blue-600 underline">Terms of Service</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>
// // // // //             </span>
// // // // //             {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Action button */}
// // // // //         <button
// // // // //           onClick={isSignup ? handleSignup : loginMethod.includes("Otp") ? sendOtp : handleLogin}
// // // // //           disabled={loading}
// // // // //           className={`w-full bg-blue-600 text-white py-3 rounded-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
// // // // //         >
// // // // //           {loading ? "Processing..." : isSignup ? "Sign Up" : loginMethod.includes("Otp") ? "Send OTP / Login" : "Login"}
// // // // //         </button>

// // // // //         {/* Resend OTP */}
// // // // //         {(loginMethod === "emailOtp" || loginMethod === "phoneOtp") && otpTimer === 0 && !isSignup && (
// // // // //           <p
// // // // //             className="text-sm text-blue-600 mt-2 cursor-pointer"
// // // // //             onClick={sendOtp}
// // // // //           >
// // // // //             Resend OTP
// // // // //           </p>
// // // // //         )}

// // // // //         {/* Signup / toggle */}
// // // // //         <p className="text-sm text-gray-600 mt-4 text-center">
// // // // //           {isSignup ? "Already have an account? " : "New here? "}
// // // // //           <span
// // // // //             className="text-blue-600 cursor-pointer"
// // // // //             onClick={() => setIsSignup(!isSignup)}
// // // // //           >
// // // // //             {isSignup ? "Login" : "Sign Up"}
// // // // //           </span>
// // // // //         </p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // export default Login;

// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { toast } from "react-toastify";
// // // // // import "react-toastify/dist/ReactToastify.css";

// // // // // const Login = () => {
// // // // //   const navigate = useNavigate();

// // // // //   const [loginMethod, setLoginMethod] = useState("emailOtp"); // emailOtp, phoneOtp, password
// // // // //   const [isSignup, setIsSignup] = useState(false);

// // // // //   const [email, setEmail] = useState("");
// // // // //   const [phone, setPhone] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // //   const [otp, setOtp] = useState("");

// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [errors, setErrors] = useState({});
// // // // //   const [otpTimer, setOtpTimer] = useState(0);
// // // // //   const [termsAccepted, setTermsAccepted] = useState(false);

// // // // //   // OTP countdown timer
// // // // //   useEffect(() => {
// // // // //     let timer;
// // // // //     if (otpTimer > 0) {
// // // // //       timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
// // // // //     }
// // // // //     return () => clearTimeout(timer);
// // // // //   }, [otpTimer]);

// // // // //   const validate = () => {
// // // // //     const newErrors = {};
// // // // //     if (loginMethod === "emailOtp" || loginMethod === "password") {
// // // // //       if (!email) newErrors.email = "Email is required";
// // // // //       else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
// // // // //         newErrors.email = "Invalid email format";
// // // // //     }
// // // // //     if (loginMethod === "phoneOtp") {
// // // // //       if (!phone) newErrors.phone = "Phone number is required";
// // // // //       else if (!/^\d{10}$/.test(phone))
// // // // //         newErrors.phone = "Phone number must be 10 digits";
// // // // //     }
// // // // //     if (!isSignup && loginMethod === "password" && !password) {
// // // // //       newErrors.password = "Password is required";
// // // // //     }
// // // // //     if (isSignup && !password) {
// // // // //       newErrors.password = "Password is required for sign up";
// // // // //     }
// // // // //     if (isSignup && !termsAccepted) {
// // // // //       newErrors.terms = "You must accept terms & privacy policy";
// // // // //     }
// // // // //     setErrors(newErrors);
// // // // //     return Object.keys(newErrors).length === 0;
// // // // //   };

// // // // //   const sendOtp = () => {
// // // // //     if (!validate()) return;
// // // // //     setLoading(true);
// // // // //     setTimeout(() => {
// // // // //       setLoading(false);
// // // // //       setOtpTimer(60); // 1 minute timer
// // // // //       toast.success("OTP sent successfully!");
// // // // //     }, 1500); // simulate API call
// // // // //   };

// // // // //   const handleLogin = () => {
// // // // //     if (!validate()) return;
// // // // //     setLoading(true);
// // // // //     setTimeout(() => {
// // // // //       setLoading(false);
// // // // //       toast.success("Login successful!");
// // // // //       localStorage.setItem("isLoggedIn", "true");
// // // // //       navigate("/");
// // // // //     }, 1500);
// // // // //   };

// // // // //   const handleSignup = () => {
// // // // //     if (!validate()) return;
// // // // //     setLoading(true);
// // // // //     setTimeout(() => {
// // // // //       setLoading(false);
// // // // //       toast.success("Account created successfully!");
// // // // //       localStorage.setItem("isLoggedIn", "true");
// // // // //       navigate("/");
// // // // //     }, 1500);
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-white">
// // // // //       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
// // // // //         <div className="flex flex-col items-center mb-6">
// // // // //           <img
// // // // //             src="/logo.png"
// // // // //             alt="Brand Logo"
// // // // //             className="w-16 h-16 mb-2"
// // // // //           />
// // // // //           <h2 className="text-2xl font-bold text-center">
// // // // //             {isSignup ? "Create Your Account" : "Welcome Back!"}
// // // // //           </h2>
// // // // //           {!isSignup && <p className="text-gray-500 mt-1">Login to continue shopping</p>}
// // // // //         </div>

// // // // //         {/* Login method toggle */}
// // // // //         {!isSignup && (
// // // // //           <div className="flex justify-between mb-4 text-sm">
// // // // //             <button
// // // // //               className={`flex-1 py-2 ${loginMethod === "emailOtp" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// // // // //               onClick={() => setLoginMethod("emailOtp")}
// // // // //             >
// // // // //               Email OTP
// // // // //             </button>
// // // // //             <button
// // // // //               className={`flex-1 py-2 ${loginMethod === "phoneOtp" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// // // // //               onClick={() => setLoginMethod("phoneOtp")}
// // // // //             >
// // // // //               Phone OTP
// // // // //             </button>
// // // // //             <button
// // // // //               className={`flex-1 py-2 ${loginMethod === "password" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// // // // //               onClick={() => setLoginMethod("password")}
// // // // //             >
// // // // //               Password
// // // // //             </button>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Email input */}
// // // // //         {(loginMethod === "emailOtp" || loginMethod === "password") && (
// // // // //           <div className="mb-3">
// // // // //             <input
// // // // //               type="email"
// // // // //               placeholder="Email"
// // // // //               className="w-full border p-3 rounded-lg focus:outline-none"
// // // // //               value={email}
// // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // //             />
// // // // //             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Phone input */}
// // // // //         {loginMethod === "phoneOtp" && (
// // // // //           <div className="mb-3">
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Phone number"
// // // // //               className="w-full border p-3 rounded-lg focus:outline-none"
// // // // //               value={phone}
// // // // //               onChange={(e) => setPhone(e.target.value)}
// // // // //             />
// // // // //             {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Password input */}
// // // // //         {(loginMethod === "password" || isSignup) && (
// // // // //           <div className="mb-3 relative">
// // // // //             <input
// // // // //               type={showPassword ? "text" : "password"}
// // // // //               placeholder="Password"
// // // // //               className="w-full border p-3 rounded-lg focus:outline-none"
// // // // //               value={password}
// // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // //             />
// // // // //             <button
// // // // //               type="button"
// // // // //               className="absolute right-3 top-3 text-gray-500"
// // // // //               onClick={() => setShowPassword(!showPassword)}
// // // // //             >
// // // // //               {showPassword ? "Hide" : "Show"}
// // // // //             </button>
// // // // //             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// // // // //           </div>
// // // // //         )}

// // // // //         {/* OTP input */}
// // // // //         {(loginMethod === "emailOtp" || loginMethod === "phoneOtp") && otpTimer > 0 && (
// // // // //           <div className="mb-3">
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Enter OTP"
// // // // //               className="w-full border p-3 rounded-lg focus:outline-none"
// // // // //               value={otp}
// // // // //               onChange={(e) => setOtp(e.target.value)}
// // // // //             />
// // // // //             <p className="text-gray-500 text-sm mt-1">
// // // // //               OTP expires in: {Math.floor(otpTimer / 60)}:{otpTimer % 60 < 10 ? `0${otpTimer % 60}` : otpTimer % 60}
// // // // //             </p>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Terms checkbox */}
// // // // //         {isSignup && (
// // // // //           <div className="mb-3 flex items-center text-sm">
// // // // //             <input
// // // // //               type="checkbox"
// // // // //               className="mr-2"
// // // // //               checked={termsAccepted}
// // // // //               onChange={() => setTermsAccepted(!termsAccepted)}
// // // // //             />
// // // // //             <span>
// // // // //               I accept the <a href="#" className="text-blue-600 underline">Terms of Service</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>
// // // // //             </span>
// // // // //             {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Action button */}
// // // // //         <button
// // // // //           onClick={isSignup ? handleSignup : loginMethod.includes("Otp") ? sendOtp : handleLogin}
// // // // //           disabled={loading}
// // // // //           className={`w-full bg-blue-600 text-white py-3 rounded-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
// // // // //         >
// // // // //           {loading ? "Processing..." : isSignup ? "Sign Up" : loginMethod.includes("Otp") ? "Send OTP / Login" : "Login"}
// // // // //         </button>

// // // // //         {/* Resend OTP */}
// // // // //         {(loginMethod === "emailOtp" || loginMethod === "phoneOtp") && otpTimer === 0 && !isSignup && (
// // // // //           <p
// // // // //             className="text-sm text-blue-600 mt-2 cursor-pointer"
// // // // //             onClick={sendOtp}
// // // // //           >
// // // // //             Resend OTP
// // // // //           </p>
// // // // //         )}

// // // // //         {/* Signup toggle */}
// // // // //         <p className="text-sm text-gray-600 mt-4 text-center">
// // // // //           {isSignup ? "Already have an account? " : "New here? "}
// // // // //           <span
// // // // //             className="text-blue-600 cursor-pointer"
// // // // //             onClick={() => setIsSignup(!isSignup)}
// // // // //           >
// // // // //             {isSignup ? "Login" : "Sign Up"}
// // // // //           </span>
// // // // //         </p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Login;

// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // const Login = () => {
// // //   const navigate = useNavigate();

// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [isOtpMode, setIsOtpMode] = useState(true); // OTP login by default
// // //   const [otp, setOtp] = useState("");
// // //   const [isSignup, setIsSignup] = useState(false); // toggle for new users

// // //   // Simulated backend action
// // //   const handleLogin = () => {
// // //     if (isOtpMode) {
// // //       if (!email) return alert("Please enter your email");
// // //       console.log("Send OTP to:", email);
// // //       alert(`OTP sent to ${email}`);
// // //       // simulate OTP verification
// // //       localStorage.setItem("isLoggedIn", "true");
// // //       navigate("/");
// // //     } else {
// // //       if (!email || !password) return alert("Please enter email and password");
// // //       console.log("Login with password:", email, password);
// // //       // simulate password verification
// // //       localStorage.setItem("isLoggedIn", "true");
// // //       navigate("/");
// // //     }
// // //   };

// // //   const handleForgotPassword = () => {
// // //     if (!email) return alert("Enter your email to reset password");
// // //     console.log("Reset password for:", email);
// // //     alert(`Password reset link sent to ${email}`);
// // //   };

// // //   const handleSignup = () => {
// // //     if (!email || !password) return alert("Enter email and password to sign up");
// // //     console.log("Sign up:", email, password);
// // //     alert(`Account created for ${email}`);
// // //     localStorage.setItem("isLoggedIn", "true");
// // //     navigate("/");
// // //   };

// // //   return (
// // //     <div className="h-screen flex justify-center items-center bg-gray-100">
// // //       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
// // //         <h2 className="text-2xl font-bold mb-6 text-center">
// // //           {isSignup ? "Sign Up" : "Login"}
// // //         </h2>

// // //         {/* Email input */}
// // //         <input
// // //           type="email"
// // //           placeholder="Enter your email"
// // //           className="w-full border p-3 rounded-lg mb-4 focus:outline-none"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //         />

// // //         {/* Password input if not OTP mode */}
// // //         {!isOtpMode && (
// // //           <input
// // //             type="password"
// // //             placeholder="Enter your password"
// // //             className="w-full border p-3 rounded-lg mb-4 focus:outline-none"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //           />
// // //         )}

// // //         {/* OTP input if OTP mode */}
// // //         {isOtpMode && otp && (
// // //           <input
// // //             type="text"
// // //             placeholder="Enter OTP"
// // //             className="w-full border p-3 rounded-lg mb-4 focus:outline-none"
// // //             value={otp}
// // //             onChange={(e) => setOtp(e.target.value)}
// // //           />
// // //         )}

// // //         {/* Login / Sign Up button */}
// // //         <button
// // //           onClick={isSignup ? handleSignup : handleLogin}
// // //           className="w-full bg-blue-600 text-white py-3 rounded-lg mb-2"
// // //         >
// // //           {isSignup ? "Sign Up" : isOtpMode ? "Send OTP / Login" : "Login"}
// // //         </button>

// // //         {/* Toggle OTP / Password */}
// // //         {!isSignup && (
// // //           <p
// // //             className="text-sm text-blue-600 cursor-pointer mb-2"
// // //             onClick={() => setIsOtpMode((prev) => !prev)}
// // //           >
// // //             {isOtpMode ? "Use password login" : "Use OTP login"}
// // //           </p>
// // //         )}

// // //         {/* Forgot password */}
// // //         {!isSignup && !isOtpMode && (
// // //           <p
// // //             className="text-sm text-red-600 cursor-pointer mb-2"
// // //             onClick={handleForgotPassword}
// // //           >
// // //             Forgot password?
// // //           </p>
// // //         )}

// // //         {/* Signup toggle */}
// // //         <p className="text-sm text-gray-600 mt-4">
// // //           {isSignup ? "Already have an account? " : "New here? "}
// // //           <span
// // //             className="text-blue-600 cursor-pointer"
// // //             onClick={() => setIsSignup((prev) => !prev)}
// // //           >
// // //             {isSignup ? "Login" : "Sign Up"}
// // //           </span>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;

// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // toast.configure();

// // const Login = () => {
// //   const navigate = useNavigate();

// //   const [loginMethod, setLoginMethod] = useState("emailOtp"); // emailOtp, phoneOtp, password
// //   const [isSignup, setIsSignup] = useState(false);

// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [otp, setOtp] = useState("");

// //   const [loading, setLoading] = useState(false);
// //   const [errors, setErrors] = useState({});
// //   const [otpTimer, setOtpTimer] = useState(0);
// //   const [termsAccepted, setTermsAccepted] = useState(false);

// //   // OTP countdown timer
// //   useEffect(() => {
// //     let timer;
// //     if (otpTimer > 0) {
// //       timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
// //     }
// //     return () => clearTimeout(timer);
// //   }, [otpTimer]);

// //   const validate = () => {
// //     const newErrors = {};
// //     if (loginMethod === "emailOtp" || loginMethod === "password") {
// //       if (!email) newErrors.email = "Email is required";
// //       else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
// //         newErrors.email = "Invalid email format";
// //     }
// //     if (loginMethod === "phoneOtp") {
// //       if (!phone) newErrors.phone = "Phone number is required";
// //       else if (!/^\d{10}$/.test(phone))
// //         newErrors.phone = "Phone number must be 10 digits";
// //     }
// //     if (!isSignup && loginMethod === "password" && !password) {
// //       newErrors.password = "Password is required";
// //     }
// //     if (isSignup && !password) {
// //       newErrors.password = "Password is required for sign up";
// //     }
// //     if (isSignup && !termsAccepted) {
// //       newErrors.terms = "You must accept terms & privacy policy";
// //     }
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const sendOtp = () => {
// //     if (!validate()) return;
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       setOtpTimer(60); // 1 minute timer
// //       toast.success("OTP sent successfully!");
// //     }, 1500); // simulate API call
// //   };

// //   const handleLogin = () => {
// //     if (!validate()) return;
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       toast.success("Login successful!");
// //       localStorage.setItem("isLoggedIn", "true");
// //       navigate("/");
// //     }, 1500);
// //   };

// //   const handleSignup = () => {
// //     if (!validate()) return;
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       toast.success("Account created successfully!");
// //       localStorage.setItem("isLoggedIn", "true");
// //       navigate("/");
// //     }, 1500);
// //   };

// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-white">
// //       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
// //         <div className="flex flex-col items-center mb-6">
// //           <img
// //             src="/logo.png"
// //             alt="Brand Logo"
// //             className="w-16 h-16 mb-2"
// //           />
// //           <h2 className="text-2xl font-bold text-center">
// //             {isSignup ? "Create Your Account" : "Welcome Back!"}
// //           </h2>
// //           {!isSignup && <p className="text-gray-500 mt-1">Login to continue shopping</p>}
// //         </div>

// //         {/* Login method toggle */}
// //         {!isSignup && (
// //           <div className="flex justify-between mb-4 text-sm">
// //             <button
// //               className={`flex-1 py-2 ${loginMethod === "emailOtp" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// //               onClick={() => setLoginMethod("emailOtp")}
// //             >
// //               Email OTP
// //             </button>
// //             <button
// //               className={`flex-1 py-2 ${loginMethod === "phoneOtp" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// //               onClick={() => setLoginMethod("phoneOtp")}
// //             >
// //               Phone OTP
// //             </button>
// //             <button
// //               className={`flex-1 py-2 ${loginMethod === "password" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// //               onClick={() => setLoginMethod("password")}
// //             >
// //               Password
// //             </button>
// //           </div>
// //         )}

// //         {/* Email input */}
// //         {(loginMethod === "emailOtp" || loginMethod === "password") && (
// //           <div className="mb-3">
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               className="w-full border p-3 rounded-lg focus:outline-none"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //           </div>
// //         )}

// //         {/* Phone input */}
// //         {loginMethod === "phoneOtp" && (
// //           <div className="mb-3">
// //             <input
// //               type="text"
// //               placeholder="Phone number"
// //               className="w-full border p-3 rounded-lg focus:outline-none"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //             />
// //             {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
// //           </div>
// //         )}

// //         {/* Password input */}
// //         {(loginMethod === "password" || isSignup) && (
// //           <div className="mb-3 relative">
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               placeholder="Password"
// //               className="w-full border p-3 rounded-lg focus:outline-none"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //             <button
// //               type="button"
// //               className="absolute right-3 top-3 text-gray-500"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               {showPassword ? "Hide" : "Show"}
// //             </button>
// //             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// //           </div>
// //         )}

// //         {/* OTP input */}
// //         {(loginMethod === "emailOtp" || loginMethod === "phoneOtp") && otpTimer > 0 && (
// //           <div className="mb-3">
// //             <input
// //               type="text"
// //               placeholder="Enter OTP"
// //               className="w-full border p-3 rounded-lg focus:outline-none"
// //               value={otp}
// //               onChange={(e) => setOtp(e.target.value)}
// //             />
// //             <p className="text-gray-500 text-sm mt-1">
// //               OTP expires in: {Math.floor(otpTimer / 60)}:{otpTimer % 60 < 10 ? `0${otpTimer % 60}` : otpTimer % 60}
// //             </p>
// //           </div>
// //         )}

// //         {/* Terms checkbox */}
// //         {isSignup && (
// //           <div className="mb-3 flex items-center text-sm">
// //             <input
// //               type="checkbox"
// //               className="mr-2"
// //               checked={termsAccepted}
// //               onChange={() => setTermsAccepted(!termsAccepted)}
// //             />
// //             <span>
// //               I accept the <a href="#" className="text-blue-600 underline">Terms of Service</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>
// //             </span>
// //             {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
// //           </div>
// //         )}

// //         {/* Action button */}
// //         <button
// //           onClick={isSignup ? handleSignup : loginMethod.includes("Otp") ? sendOtp : handleLogin}
// //           disabled={loading}
// //           className={`w-full bg-blue-600 text-white py-3 rounded-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
// //         >
// //           {loading ? "Processing..." : isSignup ? "Sign Up" : loginMethod.includes("Otp") ? "Send OTP / Login" : "Login"}
// //         </button>

// //         {/* Resend OTP */}
// //         {(loginMethod === "emailOtp" || loginMethod === "phoneOtp") && otpTimer === 0 && !isSignup && (
// //           <p
// //             className="text-sm text-blue-600 mt-2 cursor-pointer"
// //             onClick={sendOtp}
// //           >
// //             Resend OTP
// //           </p>
// //         )}

// //         {/* Signup / toggle */}
// //         <p className="text-sm text-gray-600 mt-4 text-center">
// //           {isSignup ? "Already have an account? " : "New here? "}
// //           <span
// //             className="text-blue-600 cursor-pointer"
// //             onClick={() => setIsSignup(!isSignup)}
// //           >
// //             {isSignup ? "Login" : "Sign Up"}
// //           </span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // // export default Login;

// // import React, { useState, useEffect } from "react";
// // import Logo from '../../assets/logo.png';
// // import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Login = () => {
// //   const navigate = useNavigate();

// //   const [loginMethod, setLoginMethod] = useState("emailOtp"); // emailOtp, phoneOtp, password
// //   const [isSignup, setIsSignup] = useState(false);

// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [otp, setOtp] = useState("");

// //   const [loading, setLoading] = useState(false);
// //   const [errors, setErrors] = useState({});
// //   const [otpTimer, setOtpTimer] = useState(0);
// //   const [termsAccepted, setTermsAccepted] = useState(false);

// //   // OTP countdown timer
// //   useEffect(() => {
// //     let timer;
// //     if (otpTimer > 0) {
// //       timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
// //     }
// //     return () => clearTimeout(timer);
// //   }, [otpTimer]);

// //   const validate = () => {
// //     const newErrors = {};
// //     if (loginMethod === "emailOtp" || loginMethod === "password") {
// //       if (!email) newErrors.email = "Email is required";
// //       else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
// //         newErrors.email = "Invalid email format";
// //     }
// //     if (loginMethod === "phoneOtp") {
// //       if (!phone) newErrors.phone = "Phone number is required";
// //       else if (!/^\d{10}$/.test(phone))
// //         newErrors.phone = "Phone number must be 10 digits";
// //     }
// //     if (!isSignup && loginMethod === "password" && !password) {
// //       newErrors.password = "Password is required";
// //     }
// //     if (isSignup && !password) {
// //       newErrors.password = "Password is required for sign up";
// //     }
// //     if (isSignup && !termsAccepted) {
// //       newErrors.terms = "You must accept terms & privacy policy";
// //     }
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const sendOtp = () => {
// //     if (!validate()) return;
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       setOtpTimer(60); // 1 minute timer
// //       toast.success("OTP sent successfully!");
// //     }, 1500); // simulate API call
// //   };

// //   const handleLogin = () => {
// //     if (!validate()) return;
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       toast.success("Login successful!");
// //       localStorage.setItem("isLoggedIn", "true");
// //       navigate("/");
// //     }, 1500);
// //   };

// //   const handleSignup = () => {
// //     if (!validate()) return;
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       toast.success("Account created successfully!");
// //       localStorage.setItem("isLoggedIn", "true");
// //       navigate("/");
// //     }, 1500);
// //   };

// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-white">
// //       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
// //         <div className="flex flex-col items-center mb-6">
// //           <img
// //             src={Logo}
// //             alt="Brand Logo"
// //             className="w-16 h-16 mb-2"
// //           />
// //           <h2 className="text-2xl font-bold text-center">
// //             {isSignup ? "Create Your Account" : "Welcome Back!"}
// //           </h2>
// //           {!isSignup && <p className="text-gray-500 mt-1">Login to continue shopping</p>}
// //         </div>

// //         {/* Login method toggle */}
// //         {!isSignup && (
// //           <div className="flex justify-between mb-4 text-sm">
// //             <button
// //               className={`flex-1 py-2 ${loginMethod === "emailOtp" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// //               onClick={() => setLoginMethod("emailOtp")}
// //             >
// //               Email OTP
// //             </button>
// //             <button
// //               className={`flex-1 py-2 ${loginMethod === "phoneOtp" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// //               onClick={() => setLoginMethod("phoneOtp")}
// //             >
// //               Phone OTP
// //             </button>
// //             <button
// //               className={`flex-1 py-2 ${loginMethod === "password" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// //               onClick={() => setLoginMethod("password")}
// //             >
// //               Password
// //             </button>
// //           </div>
// //         )}

// //         {/* Email input */}
// //         {(loginMethod === "emailOtp" || loginMethod === "password") && (
// //           <div className="mb-3">
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               className="w-full border p-3 rounded-lg focus:outline-none"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //           </div>
// //         )}

// //         {/* Phone input */}
// //         {loginMethod === "phoneOtp" && (
// //           <div className="mb-3">
// //             <input
// //               type="text"
// //               placeholder="Phone number"
// //               className="w-full border p-3 rounded-lg focus:outline-none"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //             />
// //             {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
// //           </div>
// //         )}

// //         {/* Password input */}
// //         {(loginMethod === "password" || isSignup) && (
// //           <div className="mb-3 relative">
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               placeholder="Password"
// //               className="w-full border p-3 rounded-lg focus:outline-none"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //             <button
// //               type="button"
// //               className="absolute right-3 top-3 text-gray-500"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               {showPassword ? "Hide" : "Show"}
// //             </button>
// //             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// //           </div>
// //         )}

// //         {/* OTP input */}
// //         {(loginMethod === "emailOtp" || loginMethod === "phoneOtp") && otpTimer > 0 && (
// //           <div className="mb-3">
// //             <input
// //               type="text"
// //               placeholder="Enter OTP"
// //               className="w-full border p-3 rounded-lg focus:outline-none"
// //               value={otp}
// //               onChange={(e) => setOtp(e.target.value)}
// //             />
// //             <p className="text-gray-500 text-sm mt-1">
// //               OTP expires in: {Math.floor(otpTimer / 60)}:{otpTimer % 60 < 10 ? `0${otpTimer % 60}` : otpTimer % 60}
// //             </p>
// //           </div>
// //         )}

// //         {/* Terms checkbox */}
// //         {isSignup && (
// //           <div className="mb-3 flex items-center text-sm">
// //             <input
// //               type="checkbox"
// //               className="mr-2"
// //               checked={termsAccepted}
// //               onChange={() => setTermsAccepted(!termsAccepted)}
// //             />
// //             <span>
// //               I accept the <a href="#" className="text-blue-600 underline">Terms of Service</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>
// //             </span>
// //             {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
// //           </div>
// //         )}

// //         {/* Action button */}
// //         <button
// //           onClick={isSignup ? handleSignup : loginMethod.includes("Otp") ? sendOtp : handleLogin}
// //           disabled={loading}
// //           className={`w-full bg-blue-600 text-white py-3 rounded-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
// //         >
// //           {loading ? "Processing..." : isSignup ? "Sign Up" : loginMethod.includes("Otp") ? "Send OTP / Login" : "Login"}
// //         </button>

// //         {/* Resend OTP */}
// //         {(loginMethod === "emailOtp" || loginMethod === "phoneOtp") && otpTimer === 0 && !isSignup && (
// //           <p
// //             className="text-sm text-blue-600 mt-2 cursor-pointer"
// //             onClick={sendOtp}
// //           >
// //             Resend OTP
// //           </p>
// //         )}

// //         {/* Signup / toggle */}
// //         <p className="text-sm text-gray-600 mt-4 text-center">
// //           {isSignup ? "Already have an account? " : "New here? "}
// //           <span
// //             className="text-blue-600 cursor-pointer"
// //             onClick={() => setIsSignup(!isSignup)}
// //           >
// //             {isSignup ? "Login" : "Sign Up"}
// //           </span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



// // import React, { useState, useEffect } from "react";
// // import Logo from '../../assets/logo.png';
// // import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Login = () => {
// //   const navigate = useNavigate();

// //   const [loginMethod, setLoginMethod] = useState("emailOtp"); // emailOtp, phoneOtp, password
// //   const [isSignup, setIsSignup] = useState(false);
// //   const [isForgotPassword, setIsForgotPassword] = useState(false); // For Forgot Password toggle

// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [otp, setOtp] = useState("");
// //   const [enteredOtp, setEnteredOtp] = useState(""); // State for OTP entered by the user

// //   const [loading, setLoading] = useState(false);
// //   const [errors, setErrors] = useState({});
// //   const [otpTimer, setOtpTimer] = useState(0);
// //   const [termsAccepted, setTermsAccepted] = useState(false);
// //   const [isOtpVerified, setIsOtpVerified] = useState(false); // State to track if OTP is verified

// //   // OTP countdown timer
// //   useEffect(() => {
// //     let timer;
// //     if (otpTimer > 0) {
// //       timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
// //     }
// //     return () => clearTimeout(timer);
// //   }, [otpTimer]);

// //   const validate = () => {
// //     const newErrors = {};
// //     if (loginMethod === "emailOtp" || loginMethod === "password") {
// //       if (!email) newErrors.email = "Email is required";
// //       else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
// //         newErrors.email = "Invalid email format";
// //     }
// //     if (loginMethod === "phoneOtp") {
// //       if (!phone) newErrors.phone = "Phone number is required";
// //       else if (!/^\d{10}$/.test(phone))
// //         newErrors.phone = "Phone number must be 10 digits";
// //     }
// //     if (!isSignup && loginMethod === "password" && !password) {
// //       newErrors.password = "Password is required";
// //     }
// //     if (isSignup && !password) {
// //       newErrors.password = "Password is required for sign up";
// //     }
// //     if (isSignup && !termsAccepted) {
// //       newErrors.terms = "You must accept terms & privacy policy";
// //     }
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const generateOtp = () => {
// //     const otpCode = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
// //     alert(`Your OTP is: ${otpCode}`); // Show the OTP in an alert popup
// //     return otpCode;
// //   };

// //   const sendOtp = () => {
// //     if (!validate()) return;
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       setOtp(generateOtp()); // Generate OTP on sending OTP
// //       setOtpTimer(60); // 1 minute timer
// //       toast.success("OTP sent successfully!");
// //     }, 1500); // simulate API call
// //   };

// //   const handleLogin = () => {
// //     if (!validate()) return;
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       toast.success("Login successful!");
// //       localStorage.setItem("isLoggedIn", "true");
// //       navigate("/"); // Navigate to the home page
// //     }, 1500);
// //   };

// //   const handleSignup = () => {
// //     if (!validate()) return;
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       toast.success("Account created successfully!");
// //       localStorage.setItem("isLoggedIn", "true");
// //       navigate("/"); // Navigate to the home page
// //     }, 1500);
// //   };

// //   // Forgot password handler
// //   const handleForgotPassword = () => {
// //     if (!email) {
// //       setErrors({ email: "Email is required to reset password" });
// //       return;
// //     }
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       const otpCode = generateOtp(); // Generate OTP on Forgot Password request
// //       toast.success("Password reset link sent to your email!");
// //       setIsForgotPassword(false); // Close forgot password form after success
// //     }, 1500); // Simulating an API call
// //   };

// //   // OTP verification function
// //   const verifyOtp = () => {
// //     if (enteredOtp === otp) {
// //       setIsOtpVerified(true); // OTP is verified
// //       toast.success("OTP Verified Successfully!");
// //       localStorage.setItem("isLoggedIn", "true"); // Store login status
// //       navigate("/"); // Navigate to home page after OTP verification
// //     } else {
// //       toast.error("Invalid OTP! Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex justify-center items-center  bg-black/80 fixed inset-0 z-40">
// //       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
// //         <div className="flex flex-col items-center mb-6">
// //           <img src={Logo} alt="Brand Logo" className="w-16 h-16 mb-2" />
// //           <h2 className="text-2xl font-bold text-center">
// //             {isSignup ? "Create Your Account" : isForgotPassword ? "Reset Password" : "Welcome Back!"}
// //           </h2>
// //           {!isSignup && !isForgotPassword && <p className="text-gray-500 mt-1">Login to continue shopping</p>}
// //         </div>

// //         {/* Forgot Password Form */}
// //         {isForgotPassword ? (
// //           <div>
// //             <div className="mb-3">
// //               <input
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 className="w-full border p-3 rounded-lg focus:outline-none"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //             </div>
// //             <button
// //               onClick={handleForgotPassword}
// //               disabled={loading}
// //               className={`w-full bg-blue-600 text-white py-3 rounded-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
// //             >
// //               {loading ? "Processing..." : "Send Reset Link"}
// //             </button>
// //             <p
// //               className="text-sm text-blue-600 mt-4 text-center cursor-pointer"
// //               onClick={() => setIsForgotPassword(false)}
// //             >
// //               Back to Login
// //             </p>
// //           </div>
// //         ) : (
// //           <div>
// //             {/* Login method toggle */}
// //             {!isSignup && (
// //               <div className="flex justify-between mb-4 text-sm">
// //                 <button
// //                   className={`flex-1 py-2 ${loginMethod === "emailOtp" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// //                   onClick={() => setLoginMethod("emailOtp")}
// //                 >
// //                   Email OTP
// //                 </button>
// //                 <button
// //                   className={`flex-1 py-2 ${loginMethod === "phoneOtp" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// //                   onClick={() => setLoginMethod("phoneOtp")}
// //                 >
// //                   Phone OTP
// //                 </button>
// //                 <button
// //                   className={`flex-1 py-2 ${loginMethod === "password" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
// //                   onClick={() => setLoginMethod("password")}
// //                 >
// //                   Password
// //                 </button>
// //               </div>
// //             )}

// //             {/* Email input */}
// //             {(loginMethod === "emailOtp" || loginMethod === "password") && (
// //               <div className="mb-3">
// //                 <input
// //                   type="email"
// //                   placeholder="Email"
// //                   className="w-full border p-3 rounded-lg focus:outline-none"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //               </div>
// //             )}

// //             {/* Phone input */}
// //             {loginMethod === "phoneOtp" && (
// //               <div className="mb-3">
// //                 <input
// //                   type="text"
// //                   placeholder="Phone number"
// //                   className="w-full border p-3 rounded-lg focus:outline-none"
// //                   value={phone}
// //                   onChange={(e) => setPhone(e.target.value)}
// //                 />
// //                 {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
// //               </div>
// //             )}

// //             {/* Password input */}
// //             {(loginMethod === "password" || isSignup) && (
// //               <div className="mb-3 relative">
// //                 <input
// //                   type={showPassword ? "text" : "password"}
// //                   placeholder="Password"
// //                   className="w-full border p-3 rounded-lg focus:outline-none"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                 />
// //                 <button
// //                   type="button"
// //                   className="absolute right-3 top-3 text-gray-500"
// //                   onClick={() => setShowPassword(!showPassword)}
// //                 >
// //                   {showPassword ? "Hide" : "Show"}
// //                 </button>
// //                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// //               </div>
// //             )}

// //             {/* OTP input */}
// //             {(loginMethod === "emailOtp" || loginMethod === "phoneOtp") && otpTimer > 0 && (
// //               <div className="mb-3">
// //                 <input
// //                   type="text"
// //                   placeholder="Enter OTP"
// //                   className="w-full border p-3 rounded-lg focus:outline-none"
// //                   value={enteredOtp}
// //                   onChange={(e) => setEnteredOtp(e.target.value)}
// //                 />
// //                 <p className="text-gray-500 text-sm mt-1">
// //                   OTP expires in: {Math.floor(otpTimer / 60)}:{otpTimer % 60 < 10 ? `0${otpTimer % 60}` : otpTimer % 60}
// //                 </p>
// //               </div>
// //             )}

// //             {/* Action button */}
// //             <button
// //               onClick={isSignup ? handleSignup : loginMethod.includes("Otp") ? sendOtp : handleLogin}
// //               disabled={loading}
// //               className={`w-full bg-blue-600 text-white py-3 rounded-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
// //             >
// //               {loading ? "Processing..." : isSignup ? "Sign Up" : loginMethod.includes("Otp") ? "Send OTP / Login" : "Login"}
// //             </button>

// //             {/* Forgot Password Link */}
// //             {!isSignup && !isForgotPassword && (
// //               <p
// //                 className="text-sm text-blue-600 mt-4 text-center cursor-pointer"
// //                 onClick={() => setIsForgotPassword(true)}
// //               >
// //                 Forgot Password?
// //               </p>
// //             )}

// //             {/* Signup / toggle */}
// //             <p className="text-sm text-gray-600 mt-4 text-center">
// //               {isSignup ? "Already have an account? " : "New here? "}
// //               <span
// //                 className="text-blue-600 cursor-pointer"
// //                 onClick={() => setIsSignup(!isSignup)}
// //               >
// //                 {isSignup ? "Login" : "Sign Up"}
// //               </span>
// //             </p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Login = () => {
// //   const navigate = useNavigate();

// //   const [loginMethod, setLoginMethod] = useState("emailOtp"); 
// //   const [isSignup, setIsSignup] = useState(false);
// //   const [isForgotPassword, setIsForgotPassword] = useState(false);

// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [password, setPassword] = useState("");

// //   const [generatedOtp, setGeneratedOtp] = useState("");
// //   const [enteredOtp, setEnteredOtp] = useState("");
// //   const [showOtpInput, setShowOtpInput] = useState(false);

// //   const [loading, setLoading] = useState(false);
// //   const [errors, setErrors] = useState({});

// //   // ================= VALIDATION =================
// //   const validate = () => {
// //     const newErrors = {};

// //     if (loginMethod === "emailOtp" || loginMethod === "password") {
// //       if (!email) newErrors.email = "Email is required";
// //     }

// //     if (loginMethod === "phoneOtp") {
// //       if (!phone) newErrors.phone = "Phone number is required";
// //     }

// //     if ((loginMethod === "password" || isSignup) && !password) {
// //       newErrors.password = "Password is required";
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   // ================= SEND OTP =================
// //   const sendOtp = () => {
// //     if (!validate()) return;

// //     setLoading(true);

// //     setTimeout(() => {
// //       setLoading(false);

// //       const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
// //       setGeneratedOtp(otpCode);
// //       setShowOtpInput(true);

// //       alert(`Your OTP is: ${otpCode}`);
// //       toast.success("OTP sent successfully!");
// //     }, 1000);
// //   };

// //   // ================= VERIFY OTP =================
// //   const verifyOtpAndLogin = () => {
// //     if (enteredOtp === generatedOtp) {
// //       toast.success("Login Successful!");
// //       localStorage.setItem("isLoggedIn", "true");
// //       navigate("/"); // Opens Ecommerce Website
// //     } else {
// //       toast.error("Wrong OTP! Please try again.");
// //     }
// //   };

// //   // ================= PASSWORD LOGIN =================
// //   const handlePasswordLogin = () => {
// //     if (!validate()) return;

// //     toast.success("Login Successful!");
// //     localStorage.setItem("isLoggedIn", "true");
// //     navigate("/");
// //   };

// //   // ================= SIGNUP =================
// //   const handleSignup = () => {
// //     if (!validate()) return;

// //     toast.success("Account Created Successfully!");
// //     localStorage.setItem("isLoggedIn", "true");
// //     navigate("/");
// //   };

// //   // ================= FORGOT PASSWORD =================
// //   const handleForgotPassword = () => {
// //     if (!email) {
// //       setErrors({ email: "Enter your email" });
// //       return;
// //     }

// //     const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
// //     alert(`Password Reset OTP: ${otpCode}`);
// //     toast.success("Password reset OTP sent!");
// //   };

// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-white">
// //       <ToastContainer />
// //       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

// //         <h2 className="text-2xl font-bold text-center mb-6">
// //           {isSignup ? "Create Account" : "Welcome Back"}
// //         </h2>

// //         {/* LOGIN METHOD TOGGLE */}
// //         {!isSignup && (
// //           <div className="flex justify-between mb-4 text-sm">
// //             <button onClick={() => setLoginMethod("emailOtp")}>Email OTP</button>
// //             <button onClick={() => setLoginMethod("phoneOtp")}>Phone OTP</button>
// //             <button onClick={() => setLoginMethod("password")}>Password</button>
// //           </div>
// //         )}

// //         {/* EMAIL */}
// //         {(loginMethod === "emailOtp" || loginMethod === "password") && (
// //           <div className="mb-3">
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               className="w-full border p-3 rounded-lg"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
// //           </div>
// //         )}

// //         {/* PHONE */}
// //         {loginMethod === "phoneOtp" && (
// //           <div className="mb-3">
// //             <input
// //               type="text"
// //               placeholder="Phone Number"
// //               className="w-full border p-3 rounded-lg"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //             />
// //             {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
// //           </div>
// //         )}

// //         {/* PASSWORD */}
// //         {(loginMethod === "password" || isSignup) && (
// //           <div className="mb-3">
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               className="w-full border p-3 rounded-lg"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //             {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
// //           </div>
// //         )}

// //         {/* OTP INPUT */}
// //         {showOtpInput && (
// //           <div className="mb-3">
// //             <input
// //               type="text"
// //               placeholder="Enter OTP"
// //               className="w-full border p-3 rounded-lg"
// //               value={enteredOtp}
// //               onChange={(e) => setEnteredOtp(e.target.value)}
// //             />
// //             <button
// //               onClick={verifyOtpAndLogin}
// //               className="w-full bg-green-600 text-white py-2 rounded-lg mt-2"
// //             >
// //               Verify OTP
// //             </button>
// //           </div>
// //         )}

// //         {/* MAIN BUTTON */}
// //         <button
// //           onClick={
// //             isSignup
// //               ? handleSignup
// //               : loginMethod === "password"
// //               ? handlePasswordLogin
// //               : sendOtp
// //           }
// //           disabled={loading}
// //           className="w-full bg-blue-600 text-white py-3 rounded-lg"
// //         >
// //           {isSignup
// //             ? "Sign Up"
// //             : loginMethod === "password"
// //             ? "Login"
// //             : "Send OTP"}
// //         </button>

// //         {/* FORGOT PASSWORD */}
// //         {!isSignup && (
// //           <p
// //             onClick={() => setIsForgotPassword(true)}
// //             className="text-sm text-blue-600 mt-4 text-center cursor-pointer"
// //           >
// //             Forgot Password?
// //           </p>
// //         )}

// //         {isForgotPassword && (
// //           <div className="mt-3">
// //             <button
// //               onClick={handleForgotPassword}
// //               className="w-full bg-purple-600 text-white py-2 rounded-lg"
// //             >
// //               Send Reset OTP
// //             </button>
// //           </div>
// //         )}

// //         {/* SIGNUP TOGGLE */}
// //         <p className="text-sm text-gray-600 mt-4 text-center">
// //           {isSignup ? "Already have an account? " : "New here? "}
// //           <span
// //             className="text-blue-600 cursor-pointer"
// //             onClick={() => setIsSignup(!isSignup)}
// //           >
// //             {isSignup ? "Login" : "Sign Up"}
// //           </span>
// //         </p>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



// // import React, { useState, useEffect } from "react";
// // import Logo from "../../assets/logo.png";
// // import { useNavigate } from "react-router-dom";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Login = () => {
// //   const navigate = useNavigate();

// //   const [loginMethod, setLoginMethod] = useState("emailOtp");
// //   const [isSignup, setIsSignup] = useState(false);
// //   const [isForgotPassword, setIsForgotPassword] = useState(false);

// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);

// //   const [generatedOtp, setGeneratedOtp] = useState("");
// //   const [enteredOtp, setEnteredOtp] = useState("");
// //   const [showOtpInput, setShowOtpInput] = useState(false);

// //   const [loading, setLoading] = useState(false);
// //   const [errors, setErrors] = useState({});

// //   // ================= VALIDATION =================
// //   const validate = () => {
// //     const newErrors = {};

// //     if (loginMethod === "emailOtp" || loginMethod === "password") {
// //       if (!email) newErrors.email = "Email is required";
// //     }

// //     if (loginMethod === "phoneOtp") {
// //       if (!phone) newErrors.phone = "Phone number is required";
// //     }

// //     if ((loginMethod === "password" || isSignup) && !password) {
// //       newErrors.password = "Password is required";
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   // ================= SEND OTP =================
// //   const sendOtp = () => {
// //     if (!validate()) return;

// //     setLoading(true);

// //     setTimeout(() => {
// //       setLoading(false);

// //       const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
// //       setGeneratedOtp(otpCode);
// //       setShowOtpInput(true);

// //       alert(`Your OTP is: ${otpCode}`);
// //       toast.success("OTP Sent Successfully!");
// //     }, 1000);
// //   };

// //   // ================= VERIFY OTP =================
// //   const verifyOtp = () => {
// //     if (enteredOtp === generatedOtp) {
// //       toast.success("Login Successful!");
// //       localStorage.setItem("isLoggedIn", "true");
// //       navigate("/");
// //     } else {
// //       toast.error("Wrong OTP! Try Again.");
// //     }
// //   };

// //   // ================= PASSWORD LOGIN =================
// //   const handlePasswordLogin = () => {
// //     if (!validate()) return;

// //     toast.success("Login Successful!");
// //     localStorage.setItem("isLoggedIn", "true");
// //     navigate("/");
// //   };

// //   // ================= SIGNUP =================
// //   const handleSignup = () => {
// //     if (!validate()) return;

// //     toast.success("Account Created Successfully!");
// //     localStorage.setItem("isLoggedIn", "true");
// //     navigate("/");
// //   };

// //   // ================= FORGOT PASSWORD =================
// //   const handleForgotPassword = () => {
// //     if (!email) {
// //       setErrors({ email: "Enter your email" });
// //       return;
// //     }

// //     const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
// //     setGeneratedOtp(otpCode);
// //     setShowOtpInput(true);

// //     alert(`Password Reset OTP: ${otpCode}`);
// //     toast.success("Reset OTP Sent!");
// //   };

// //   return (
// //     // 🔥 BLACK BACKGROUND OVER WEBSITE
// //     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
// //       <ToastContainer />

// //       <div className="bg-white p-8 rounded-xl shadow-xl w-[400px]">

// //         {/* LOGO */}
// //         <div className="flex flex-col items-center mb-6">
// //           <img src={Logo} alt="Logo" className="w-16 h-16 mb-2" />
// //           <h2 className="text-2xl font-bold">
// //             {isSignup ? "Create Account" : "Welcome Back!"}
// //           </h2>
// //         </div>

// //         {/* LOGIN METHOD TOGGLE */}
// //         {!isSignup && (
// //           <div className="flex justify-between mb-4 text-sm font-medium">
// //             <button onClick={() => setLoginMethod("emailOtp")}>
// //               Email OTP
// //             </button>
// //             <button onClick={() => setLoginMethod("phoneOtp")}>
// //               Phone OTP
// //             </button>
// //             <button onClick={() => setLoginMethod("password")}>
// //               Password
// //             </button>
// //           </div>
// //         )}

// //         {/* EMAIL */}
// //         {(loginMethod === "emailOtp" || loginMethod === "password") && (
// //           <div className="mb-3">
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               className="w-full border p-3 rounded-lg"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //             {errors.email && (
// //               <p className="text-red-500 text-sm">{errors.email}</p>
// //             )}
// //           </div>
// //         )}

// //         {/* PHONE */}
// //         {loginMethod === "phoneOtp" && (
// //           <div className="mb-3">
// //             <input
// //               type="text"
// //               placeholder="Phone Number"
// //               className="w-full border p-3 rounded-lg"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //             />
// //             {errors.phone && (
// //               <p className="text-red-500 text-sm">{errors.phone}</p>
// //             )}
// //           </div>
// //         )}

// //         {/* PASSWORD */}
// //         {(loginMethod === "password" || isSignup) && (
// //           <div className="mb-3 relative">
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               placeholder="Password"
// //               className="w-full border p-3 rounded-lg"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //             <button
// //               type="button"
// //               className="absolute right-3 top-3 text-gray-500"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               {showPassword ? "Hide" : "Show"}
// //             </button>
// //             {errors.password && (
// //               <p className="text-red-500 text-sm">{errors.password}</p>
// //             )}
// //           </div>
// //         )}

// //         {/* OTP INPUT */}
// //         {showOtpInput && (
// //           <div className="mb-3">
// //             <input
// //               type="text"
// //               placeholder="Enter OTP"
// //               className="w-full border p-3 rounded-lg"
// //               value={enteredOtp}
// //               onChange={(e) => setEnteredOtp(e.target.value)}
// //             />
// //             <button
// //               onClick={verifyOtp}
// //               className="w-full bg-green-600 text-white py-2 rounded-lg mt-2"
// //             >
// //               Verify OTP
// //             </button>
// //           </div>
// //         )}

// //         {/* MAIN BUTTON */}
// //         <button
// //           onClick={
// //             isSignup
// //               ? handleSignup
// //               : loginMethod === "password"
// //               ? handlePasswordLogin
// //               : sendOtp
// //           }
// //           className="w-full bg-blue-600 text-white py-3 rounded-lg"
// //         >
// //           {isSignup
// //             ? "Sign Up"
// //             : loginMethod === "password"
// //             ? "Login"
// //             : "Send OTP"}
// //         </button>

// //         {/* FORGOT PASSWORD */}
// //         {!isSignup && loginMethod === "password" && (
// //           <p
// //             onClick={handleForgotPassword}
// //             className="text-sm text-blue-600 mt-4 text-center cursor-pointer"
// //           >
// //             Forgot Password?
// //           </p>
// //         )}

// //         {/* SIGNUP TOGGLE */}
// //         <p className="text-sm text-gray-600 mt-4 text-center">
// //           {isSignup ? "Already have an account? " : "New here? "}
// //           <span
// //             className="text-blue-600 cursor-pointer"
// //             onClick={() => setIsSignup(!isSignup)}
// //           >
// //             {isSignup ? "Login" : "Sign Up"}
// //           </span>
// //         </p>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ForgotPassword = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [enteredOtp, setEnteredOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [showOtpInput, setShowOtpInput] = useState(false);
//   const [showResetFields, setShowResetFields] = useState(false);

//   // ================= SEND OTP =================
//   const handleSendOtp = () => {
//     if (!email) {
//       toast.error("Please enter your email");
//       return;
//     }

//     const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(otpCode);
//     setShowOtpInput(true);

//     alert(`Your OTP is: ${otpCode}`);
//     toast.success("OTP Sent Successfully!");
//   };

//   // ================= VERIFY OTP =================
//   const handleVerifyOtp = () => {
//     if (enteredOtp === generatedOtp) {
//       toast.success("OTP Verified!");
//       setShowResetFields(true);
//     } else {
//       toast.error("Wrong OTP! Try again.");
//     }
//   };

//   // ================= RESET PASSWORD =================
//   const handleResetPassword = () => {
//     if (!newPassword || !confirmPassword) {
//       toast.error("Fill all password fields");
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     toast.success("Password Reset Successfully!");
    
//     setTimeout(() => {
//       navigate("/login"); // redirect to login page
//     }, 1500);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
//       <ToastContainer />

//       <div className="bg-white p-8 rounded-xl shadow-xl w-[400px]">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Forgot Password
//         </h2>

//         {/* EMAIL FIELD */}
//         {!showOtpInput && (
//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border p-3 rounded-lg"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button
//               onClick={handleSendOtp}
//               className="w-full bg-blue-600 text-white py-3 rounded-lg mt-3"
//             >
//               Send OTP
//             </button>
//           </div>
//         )}

//         {/* OTP INPUT */}
//         {showOtpInput && !showResetFields && (
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               className="w-full border p-3 rounded-lg"
//               value={enteredOtp}
//               onChange={(e) => setEnteredOtp(e.target.value)}
//             />
//             <button
//               onClick={handleVerifyOtp}
//               className="w-full bg-green-600 text-white py-3 rounded-lg mt-3"
//             >
//               Verify OTP
//             </button>
//           </div>
//         )}

//         {/* NEW PASSWORD FIELDS */}
//         {showResetFields && (
//           <div>
//             <input
//               type="password"
//               placeholder="New Password"
//               className="w-full border p-3 rounded-lg mb-3"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />

//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full border p-3 rounded-lg"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />

//             <button
//               onClick={handleResetPassword}
//               className="w-full bg-purple-600 text-white py-3 rounded-lg mt-3"
//             >
//               Reset Password
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


// // import React, { useState, useEffect } from "react";
// // import Logo from "../../assets/logo.png";
// // import { useNavigate } from "react-router-dom";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Login = () => {
// //   const navigate = useNavigate();

// //   const [loginMethod, setLoginMethod] = useState("emailOtp");
// //   const [isSignup, setIsSignup] = useState(false);
// //   const [isForgotPassword, setIsForgotPassword] = useState(false);

// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);

// //   const [generatedOtp, setGeneratedOtp] = useState("");
// //   const [enteredOtp, setEnteredOtp] = useState("");
// //   const [showOtpInput, setShowOtpInput] = useState(false);

// //   const [loading, setLoading] = useState(false);
// //   const [errors, setErrors] = useState({});

// //   // ================= VALIDATION =================
// //   const validate = () => {
// //     const newErrors = {};

// //     if (loginMethod === "emailOtp" || loginMethod === "password") {
// //       if (!email) newErrors.email = "Email is required";
// //     }

// //     if (loginMethod === "phoneOtp") {
// //       if (!phone) newErrors.phone = "Phone number is required";
// //     }

// //     if ((loginMethod === "password" || isSignup) && !password) {
// //       newErrors.password = "Password is required";
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   // ================= SEND OTP =================
// //   const sendOtp = () => {
// //     if (!validate()) return;

// //     setLoading(true);

// //     setTimeout(() => {
// //       setLoading(false);

// //       const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
// //       setGeneratedOtp(otpCode);
// //       setShowOtpInput(true);

// //       alert(`Your OTP is: ${otpCode}`);
// //       toast.success("OTP Sent Successfully!");
// //     }, 1000);
// //   };

// //   // ================= VERIFY OTP =================
// //   const verifyOtp = () => {
// //     if (enteredOtp === generatedOtp) {
// //       toast.success("Login Successful!");
// //       localStorage.setItem("isLoggedIn", "true");
// //       navigate("/");
// //     } else {
// //       toast.error("Wrong OTP! Try Again.");
// //     }
// //   };

// //   // ================= PASSWORD LOGIN =================
// //   const handlePasswordLogin = () => {
// //     if (!validate()) return;

// //     toast.success("Login Successful!");
// //     localStorage.setItem("isLoggedIn", "true");
// //     navigate("/");
// //   };

// //   // ================= SIGNUP =================
// //   const handleSignup = () => {
// //     if (!validate()) return;

// //     toast.success("Account Created Successfully!");
// //     localStorage.setItem("isLoggedIn", "true");
// //     navigate("/");
// //   };

// //   // ================= FORGOT PASSWORD =================
// //   const handleForgotPassword = () => {
// //     if (!email) {
// //       setErrors({ email: "Enter your email" });
// //       return;
// //     }

// //     const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
// //     setGeneratedOtp(otpCode);
// //     setShowOtpInput(true);

// //     alert(`Password Reset OTP: ${otpCode}`);
// //     toast.success("Reset OTP Sent!");
// //   };

// //   return (
// //     // 🔥 BLACK BACKGROUND OVER WEBSITE
// //     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
// //       <ToastContainer />

// //       <div className="bg-white p-8 rounded-xl shadow-xl w-[400px]">

// //         {/* LOGO */}
// //         <div className="flex flex-col items-center mb-6">
// //           <img src={Logo} alt="Logo" className="w-16 h-16 mb-2" />
// //           <h2 className="text-2xl font-bold">
// //             {isSignup ? "Create Account" : "Welcome Back!"}
// //           </h2>
// //         </div>

// //         {/* LOGIN METHOD TOGGLE */}
// //         {!isSignup && (
// //           <div className="flex justify-between mb-4 text-sm font-medium">
// //             <button onClick={() => setLoginMethod("emailOtp")}>
// //               Email OTP
// //             </button>
// //             <button onClick={() => setLoginMethod("phoneOtp")}>
// //               Phone OTP
// //             </button>
// //             <button onClick={() => setLoginMethod("password")}>
// //               Password
// //             </button>
// //           </div>
// //         )}

// //         {/* EMAIL */}
// //         {(loginMethod === "emailOtp" || loginMethod === "password") && (
// //           <div className="mb-3">
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               className="w-full border p-3 rounded-lg"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //             {errors.email && (
// //               <p className="text-red-500 text-sm">{errors.email}</p>
// //             )}
// //           </div>
// //         )}

// //         {/* PHONE */}
// //         {loginMethod === "phoneOtp" && (
// //           <div className="mb-3">
// //             <input
// //               type="text"
// //               placeholder="Phone Number"
// //               className="w-full border p-3 rounded-lg"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //             />
// //             {errors.phone && (
// //               <p className="text-red-500 text-sm">{errors.phone}</p>
// //             )}
// //           </div>
// //         )}

// //         {/* PASSWORD */}
// //         {(loginMethod === "password" || isSignup) && (
// //           <div className="mb-3 relative">
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               placeholder="Password"
// //               className="w-full border p-3 rounded-lg"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //             <button
// //               type="button"
// //               className="absolute right-3 top-3 text-gray-500"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               {showPassword ? "Hide" : "Show"}
// //             </button>
// //             {errors.password && (
// //               <p className="text-red-500 text-sm">{errors.password}</p>
// //             )}
// //           </div>
// //         )}

// //         {/* OTP INPUT */}
// //         {showOtpInput && (
// //           <div className="mb-3">
// //             <input
// //               type="text"
// //               placeholder="Enter OTP"
// //               className="w-full border p-3 rounded-lg"
// //               value={enteredOtp}
// //               onChange={(e) => setEnteredOtp(e.target.value)}
// //             />
// //             <button
// //               onClick={verifyOtp}
// //               className="w-full bg-green-600 text-white py-2 rounded-lg mt-2"
// //             >
// //               Verify OTP
// //             </button>
// //           </div>
// //         )}

// //         {/* MAIN BUTTON */}
// //         <button
// //           onClick={
// //             isSignup
// //               ? handleSignup
// //               : loginMethod === "password"
// //               ? handlePasswordLogin
// //               : sendOtp
// //           }
// //           className="w-full bg-blue-600 text-white py-3 rounded-lg"
// //         >
// //           {isSignup
// //             ? "Sign Up"
// //             : loginMethod === "password"
// //             ? "Login"
// //             : "Send OTP"}
// //         </button>

// //         {/* FORGOT PASSWORD */}
// //         {!isSignup && loginMethod === "password" && (
// //           <p
// //             onClick={handleForgotPassword}
// //             className="text-sm text-blue-600 mt-4 text-center cursor-pointer"
// //           >
// //             Forgot Password?
// //           </p>
// //         )}

// //         {/* SIGNUP TOGGLE */}
// //         <p className="text-sm text-gray-600 mt-4 text-center">
// //           {isSignup ? "Already have an account? " : "New here? "}
// //           <span
// //             className="text-blue-600 cursor-pointer"
// //             onClick={() => setIsSignup(!isSignup)}
// //           >
// //             {isSignup ? "Login" : "Sign Up"}
// //           </span>
// //         </p>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useState } from "react";
// import Logo from "../../assets/logo.png";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [loginMethod, setLoginMethod] = useState("emailOtp");
//   const [isSignup, setIsSignup] = useState(false);
//   const [isForgotPassword, setIsForgotPassword] = useState(false);

//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [enteredOtp, setEnteredOtp] = useState("");
//   const [showOtpInput, setShowOtpInput] = useState(false);

//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showResetFields, setShowResetFields] = useState(false);

//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   // ================= VALIDATION =================
//   const validate = () => {
//     const newErrors = {};
//     if ((loginMethod === "emailOtp" || loginMethod === "password") && !email)
//       newErrors.email = "Email is required";

//     if (loginMethod === "phoneOtp" && !phone)
//       newErrors.phone = "Phone number is required";

//     if ((loginMethod === "password" || isSignup) && !password)
//       newErrors.password = "Password is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // ================= SEND OTP =================
//   const sendOtp = () => {
//     if (!validate()) return;

//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);

//       const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
//       setGeneratedOtp(otpCode);
//       setShowOtpInput(true);

//       alert(`Your OTP is: ${otpCode}`);
//       toast.success("OTP Sent Successfully!");
//     }, 1000);
//   };

//   // ================= VERIFY OTP =================
//   const verifyOtp = () => {
//     if (enteredOtp === generatedOtp) {
//       toast.success("OTP Verified!");
//       setShowResetFields(true);
//     } else {
//       toast.error("Wrong OTP! Try Again.");
//     }
//   };

//   // ================= RESET PASSWORD =================
//   const handleResetPassword = () => {
//     if (!newPassword || !confirmPassword) {
//       toast.error("Fill all password fields");
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     toast.success("Password Reset Successfully!");
//     setTimeout(() => {
//       setIsForgotPassword(false);
//       setShowOtpInput(false);
//       setShowResetFields(false);
//       setEmail("");
//       setPassword("");
//       navigate("/login");
//     }, 1500);
//   };

//   // ================= PASSWORD LOGIN =================
//   const handlePasswordLogin = () => {
//     if (!validate()) return;
//     toast.success("Login Successful!");
//     localStorage.setItem("isLoggedIn", "true");
//     navigate("/");
//   };

//   // ================= SIGNUP =================
//   const handleSignup = () => {
//     if (!validate()) return;
//     toast.success("Account Created Successfully!");
//     localStorage.setItem("isLoggedIn", "true");
//     navigate("/");
//   };

//   // ================= FORGOT PASSWORD =================
//   const handleForgotPasswordClick = () => {
//     if (!email) {
//       setErrors({ email: "Enter your email" });
//       return;
//     }

//     const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(otpCode);
//     setShowOtpInput(true);
//     setIsForgotPassword(true);

//     alert(`Password Reset OTP: ${otpCode}`);
//     toast.success("Reset OTP Sent!");
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
//       <ToastContainer />

//       <div className="bg-white p-8 rounded-xl shadow-xl w-[400px]">

//         {/* LOGO */}
//         <div className="flex flex-col items-center mb-6">
//           <img src={Logo} alt="Logo" className="w-16 h-16 mb-2" />
//           <h2 className="text-2xl font-bold">
//             {isSignup ? "Create Account" : isForgotPassword ? "Reset Password" : "Welcome Back!"}
//           </h2>
//         </div>

//         {/* LOGIN METHOD TOGGLE */}
//         {!isSignup && !isForgotPassword && (
//           <div className="flex justify-between mb-4 text-sm font-medium">
//             <button onClick={() => setLoginMethod("emailOtp")}>Email OTP</button>
//             <button onClick={() => setLoginMethod("phoneOtp")}>Phone OTP</button>
//             <button onClick={() => setLoginMethod("password")}>Password</button>
//           </div>
//         )}

//         {/* EMAIL */}
//         {(!showOtpInput || isForgotPassword) && (loginMethod === "emailOtp" || loginMethod === "password" || isForgotPassword) && (
//           <div className="mb-3">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full border p-3 rounded-lg"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>
//         )}

//         {/* PHONE */}
//         {loginMethod === "phoneOtp" && !isForgotPassword && (
//           <div className="mb-3">
//             <input
//               type="text"
//               placeholder="Phone Number"
//               className="w-full border p-3 rounded-lg"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//           </div>
//         )}

//         {/* PASSWORD */}
//         {(loginMethod === "password" || isSignup) && !isForgotPassword && (
//           <div className="mb-3 relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="w-full border p-3 rounded-lg"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-3 text-gray-500"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//             {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//           </div>
//         )}

//         {/* OTP INPUT */}
//         {showOtpInput && !showResetFields && (
//           <div className="mb-3">
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               className="w-full border p-3 rounded-lg"
//               value={enteredOtp}
//               onChange={(e) => setEnteredOtp(e.target.value)}
//             />
//             <button
//               onClick={verifyOtp}
//               className="w-full bg-green-600 text-white py-2 rounded-lg mt-2"
//             >
//               Verify OTP
//             </button>
//           </div>
//         )}

//         {/* NEW PASSWORD FIELDS */}
//         {showResetFields && (
//           <div>
//             <input
//               type="password"
//               placeholder="New Password"
//               className="w-full border p-3 rounded-lg mb-3"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full border p-3 rounded-lg mb-3"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <button
//               onClick={handleResetPassword}
//               className="w-full bg-purple-600 text-white py-3 rounded-lg"
//             >
//               Reset Password
//             </button>
//           </div>
//         )}

//         {/* MAIN BUTTON */}
//         {!isForgotPassword && !showOtpInput && !isSignup && (
//           <button
//             onClick={
//               isSignup
//                 ? handleSignup
//                 : loginMethod === "password"
//                 ? handlePasswordLogin
//                 : sendOtp
//             }
//             className="w-full bg-blue-600 text-white py-3 rounded-lg"
//           >
//             {isSignup ? "Sign Up" : loginMethod === "password" ? "Login" : "Send OTP"}
//           </button>
//         )}

//         {/* FORGOT PASSWORD */}
//         {!isSignup && loginMethod === "password" && !isForgotPassword && (
//           <p
//             onClick={handleForgotPasswordClick}
//             className="text-sm text-blue-600 mt-4 text-center cursor-pointer"
//           >
//             Forgot Password?
//           </p>
//         )}

//         {/* SIGNUP TOGGLE */}
//         {!isForgotPassword && (
//           <p className="text-sm text-gray-600 mt-4 text-center">
//             {isSignup ? "Already have an account? " : "New here? "}
//             <span
//               className="text-blue-600 cursor-pointer"
//               onClick={() => setIsSignup(!isSignup)}
//             >
//               {isSignup ? "Login" : "Sign Up"}
//             </span>
//           </p>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState, useEffect } from "react";
// import Logo from '../../assets/logo.png';
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [loginMethod, setLoginMethod] = useState("emailOtp"); // emailOtp, phoneOtp, password
//   const [isSignup, setIsSignup] = useState(false);
//   const [isForgotPassword, setIsForgotPassword] = useState(false); // For Forgot Password toggle

//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [enteredOtp, setEnteredOtp] = useState(""); // State for OTP entered by the user

//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [otpTimer, setOtpTimer] = useState(0);
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false); // State to track if OTP is verified

//   // OTP countdown timer
//   useEffect(() => {
//     let timer;
//     if (otpTimer > 0) {
//       timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [otpTimer]);

//   const validate = () => {
//     const newErrors = {};
//     if (loginMethod === "emailOtp" || loginMethod === "password") {
//       if (!email) newErrors.email = "Email is required";
//       else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
//         newErrors.email = "Invalid email format";
//     }
//     if (loginMethod === "phoneOtp") {
//       if (!phone) newErrors.phone = "Phone number is required";
//       else if (!/^\d{10}$/.test(phone))
//         newErrors.phone = "Phone number must be 10 digits";
//     }
//     if (!isSignup && loginMethod === "password" && !password) {
//       newErrors.password = "Password is required";
//     }
//     if (isSignup && !password) {
//       newErrors.password = "Password is required for sign up";
//     }
//     if (isSignup && !termsAccepted) {
//       newErrors.terms = "You must accept terms & privacy policy";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const generateOtp = () => {
//     const otpCode = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
//     alert(`Your OTP is: ${otpCode}`); // Show the OTP in an alert popup
//     return otpCode;
//   };

//   const sendOtp = () => {
//     if (!validate()) return;
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setOtp(generateOtp()); // Generate OTP on sending OTP
//       setOtpTimer(60); // 1 minute timer
//       toast.success("OTP sent successfully!");
//     }, 1500); // simulate API call
//   };

//   const handleLogin = () => {
//     if (!validate()) return;
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       toast.success("Login successful!");
//       localStorage.setItem("isLoggedIn", "true");
//       navigate("/"); // Navigate to the home page
//     }, 1500);
//   };

//   const handleSignup = () => {
//     if (!validate()) return;
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       toast.success("Account created successfully!");
//       localStorage.setItem("isLoggedIn", "true");
//       navigate("/"); // Navigate to the home page
//     }, 1500);
//   };

//   // Forgot password handler
//   const handleForgotPassword = () => {
//     if (!email) {
//       setErrors({ email: "Email is required to reset password" });
//       return;
//     }
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       const otpCode = generateOtp(); // Generate OTP on Forgot Password request
//       toast.success("Password reset link sent to your email!");
//       setIsForgotPassword(false); // Close forgot password form after success
//     }, 1500); // Simulating an API call
//   };

//   // OTP verification function
//   const verifyOtp = () => {
//     if (enteredOtp === otp) {
//       setIsOtpVerified(true); // OTP is verified
//       toast.success("OTP Verified Successfully!");
//       localStorage.setItem("isLoggedIn", "true"); // Store login status
//       navigate("/"); // Navigate to home page after OTP verification
//     } else {
//       toast.error("Invalid OTP! Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center  bg-black/80 fixed inset-0 z-40">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
//         <div className="flex flex-col items-center mb-6">
//           <img src={Logo} alt="Brand Logo" className="w-16 h-16 mb-2" />
//           <h2 className="text-2xl font-bold text-center">
//             {isSignup ? "Create Your Account" : isForgotPassword ? "Reset Password" : "Welcome Back!"}
//           </h2>
//           {!isSignup && !isForgotPassword && <p className="text-gray-500 mt-1">Login to continue shopping</p>}
//         </div>

//         {/* Forgot Password Form */}
//         {isForgotPassword ? (
//           <div>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full border p-3 rounded-lg focus:outline-none"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//             </div>
//             <button
//               onClick={handleForgotPassword}
//               disabled={loading}
//               className={`w-full bg-blue-600 text-white py-3 rounded-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
//             >
//               {loading ? "Processing..." : "Send Reset Link"}
//             </button>
//             <p
//               className="text-sm text-blue-600 mt-4 text-center cursor-pointer"
//               onClick={() => setIsForgotPassword(false)}
//             >
//               Back to Login
//             </p>
//           </div>
//         ) : (
//           <div>
//             {/* Login method toggle */}
//             {!isSignup && (
//               <div className="flex justify-between mb-4 text-sm">
//                 <button
//                   className={`flex-1 py-2 ${loginMethod === "emailOtp" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
//                   onClick={() => setLoginMethod("emailOtp")}
//                 >
//                   Email OTP
//                 </button>
//                 <button
//                   className={`flex-1 py-2 ${loginMethod === "phoneOtp" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
//                   onClick={() => setLoginMethod("phoneOtp")}
//                 >
//                   Phone OTP
//                 </button>
//                 <button
//                   className={`flex-1 py-2 ${loginMethod === "password" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
//                   onClick={() => setLoginMethod("password")}
//                 >
//                   Password
//                 </button>
//               </div>
//             )}

//             {/* Email input */}
//             {(loginMethod === "emailOtp" || loginMethod === "password") && (
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full border p-3 rounded-lg focus:outline-none"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//               </div>
//             )}

//             {/* Phone input */}
//             {loginMethod === "phoneOtp" && (
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   placeholder="Phone number"
//                   className="w-full border p-3 rounded-lg focus:outline-none"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//                 {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//               </div>
//             )}

//             {/* Password input */}
//             {(loginMethod === "password" || isSignup) && (
//               <div className="mb-3 relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   className="w-full border p-3 rounded-lg focus:outline-none"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-3 text-gray-500"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//               </div>
//             )}

//             {/* OTP input */}
//             {(loginMethod === "emailOtp" || loginMethod === "phoneOtp") && otpTimer > 0 && (
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   className="w-full border p-3 rounded-lg focus:outline-none"
//                   value={enteredOtp}
//                   onChange={(e) => setEnteredOtp(e.target.value)}
//                 />
//                 <p className="text-gray-500 text-sm mt-1">
//                   OTP expires in: {Math.floor(otpTimer / 60)}:{otpTimer % 60 < 10 ? `0${otpTimer % 60}` : otpTimer % 60}
//                 </p>
//               </div>
//             )}

//             {/* Action button */}
//             <button
//               onClick={isSignup ? handleSignup : loginMethod.includes("Otp") ? sendOtp : handleLogin}
//               disabled={loading}
//               className={`w-full bg-blue-600 text-white py-3 rounded-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
//             >
//               {loading ? "Processing..." : isSignup ? "Sign Up" : loginMethod.includes("Otp") ? "Send OTP / Login" : "Login"}
//             </button>

//             {/* Forgot Password Link */}
//             {!isSignup && !isForgotPassword && (
//               <p
//                 className="text-sm text-blue-600 mt-4 text-center cursor-pointer"
//                 onClick={() => setIsForgotPassword(true)}
//               >
//                 Forgot Password?
//               </p>
//             )}

//             {/* Signup / toggle */}
//             <p className="text-sm text-gray-600 mt-4 text-center">
//               {isSignup ? "Already have an account? " : "New here? "}
//               <span
//                 className="text-blue-600 cursor-pointer"
//                 onClick={() => setIsSignup(!isSignup)}
//               >
//                 {isSignup ? "Login" : "Sign Up"}
//               </span>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginMethod, setLoginMethod] = useState("emailOtp"); 
  const [isSignup, setIsSignup] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // ================= VALIDATION =================
  const validate = () => {
    const newErrors = {};

    if (loginMethod === "emailOtp" || loginMethod === "password") {
      if (!email) newErrors.email = "Email is required";
    }

    if (loginMethod === "phoneOtp") {
      if (!phone) newErrors.phone = "Phone number is required";
    }

    if ((loginMethod === "password" || isSignup) && !password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= SEND OTP =================
  const sendOtp = () => {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(otpCode);
      setShowOtpInput(true);

      alert(`Your OTP is: ${otpCode}`);
      toast.success("OTP sent successfully!");
    }, 1000);
  };

  // ================= VERIFY OTP =================
  const verifyOtpAndLogin = () => {
    if (enteredOtp === generatedOtp) {
      toast.success("Login Successful!");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/"); // Opens Ecommerce Website
    } else {
      toast.error("Wrong OTP! Please try again.");
    }
  };

  // ================= PASSWORD LOGIN =================
  const handlePasswordLogin = () => {
    if (!validate()) return;

    toast.success("Login Successful!");
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  // ================= SIGNUP =================
  const handleSignup = () => {
    if (!validate()) return;

    toast.success("Account Created Successfully!");
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  // ================= FORGOT PASSWORD =================
  const handleForgotPassword = () => {
    if (!email) {
      setErrors({ email: "Enter your email" });
      return;
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`Password Reset OTP: ${otpCode}`);
    toast.success("Password reset OTP sent!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-white">
      <ToastContainer />
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        {/* LOGIN METHOD TOGGLE */}
        {!isSignup && (
          <div className="flex justify-between mb-4 text-sm">
            <button onClick={() => setLoginMethod("emailOtp")}>Email OTP</button>
            <button onClick={() => setLoginMethod("phoneOtp")}>Phone OTP</button>
            <button onClick={() => setLoginMethod("password")}>Password</button>
          </div>
        )}

        {/* EMAIL */}
        {(loginMethod === "emailOtp" || loginMethod === "password") && (
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        )}

        {/* PHONE */}
        {loginMethod === "phoneOtp" && (
          <div className="mb-3">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
        )}

        {/* PASSWORD */}
        {(loginMethod === "password" || isSignup) && (
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
        )}

        {/* OTP INPUT */}
        {showOtpInput && (
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full border p-3 rounded-lg"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
            />
            <button
              onClick={verifyOtpAndLogin}
              className="w-full bg-green-600 text-white py-2 rounded-lg mt-2"
            >
              Verify OTP
            </button>
          </div>
        )}

        {/* MAIN BUTTON */}
        <button
          onClick={
            isSignup
              ? handleSignup
              : loginMethod === "password"
              ? handlePasswordLogin
              : sendOtp
          }
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          {isSignup
            ? "Sign Up"
            : loginMethod === "password"
            ? "Login"
            : "Send OTP"}
        </button>

        {/* FORGOT PASSWORD */}
        {!isSignup && (
          <p
            onClick={() => setIsForgotPassword(true)}
            className="text-sm text-blue-600 mt-4 text-center cursor-pointer"
          >
            Forgot Password?
          </p>
        )}

        {isForgotPassword && (
          <div className="mt-3">
            <button
              onClick={handleForgotPassword}
              className="w-full bg-purple-600 text-white py-2 rounded-lg"
            >
              Send Reset OTP
            </button>
          </div>
        )}

        {/* SIGNUP TOGGLE */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          {isSignup ? "Already have an account? " : "New here? "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;