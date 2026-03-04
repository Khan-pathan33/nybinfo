import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
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
  const [showPassword, setShowPassword] = useState(false);

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
      toast.success("OTP Sent Successfully!");
    }, 1000);
  };

  // ================= VERIFY OTP =================
  const verifyOtp = () => {
    if (enteredOtp === generatedOtp) {
      toast.success("Login Successful!");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      toast.error("Wrong OTP! Try Again.");
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
    setGeneratedOtp(otpCode);
    setShowOtpInput(true);

    alert(`Password Reset OTP: ${otpCode}`);
    toast.success("Reset OTP Sent!");
  };

  return (
    // 🔥 BLACK BACKGROUND OVER WEBSITE
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <ToastContainer />

      <div className="bg-white p-8 rounded-xl shadow-xl w-[400px]">

        {/* LOGO */}
        <div className="flex flex-col items-center mb-6">
          <img src={Logo} alt="Logo" className="w-16 h-16 mb-2" />
          <h2 className="text-2xl font-bold">
            {isSignup ? "Create Account" : "Welcome Back!"}
          </h2>
        </div>

        {/* LOGIN METHOD TOGGLE */}
        {!isSignup && (
          <div className="flex justify-between mb-4 text-sm font-medium">
            <button onClick={() => setLoginMethod("emailOtp")}>
              Email OTP
            </button>
            <button onClick={() => setLoginMethod("phoneOtp")}>
              Phone OTP
            </button>
            <button onClick={() => setLoginMethod("password")}>
              Password
            </button>
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
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
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
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
        )}

        {/* PASSWORD */}
        {(loginMethod === "password" || isSignup) && (
          <div className="mb-3 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border p-3 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
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
              onClick={verifyOtp}
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
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          {isSignup
            ? "Sign Up"
            : loginMethod === "password"
            ? "Login"
            : "Send OTP"}
        </button>

        {/* FORGOT PASSWORD */}
        {!isSignup && loginMethod === "password" && (
          <p
            onClick={handleForgotPassword}
            className="text-sm text-blue-600 mt-4 text-center cursor-pointer"
          >
            Forgot Password?
          </p>
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