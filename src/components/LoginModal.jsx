"use client";
import { useEffect, useState } from "react";
import { loginUser, registerUser, googleAuth } from "../api/user.api";
import { useGoogleLogin } from "@react-oauth/google";

const LoginModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes dynamically
  const handleChange = (e) => {
    console.log(`Field changed: ${e.target.name} = ${e.target.value}`);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Google login flow
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (authResult) => {
      console.log("Google OAuth Success Response:", authResult);
      try {
        if (authResult.code) {
          console.log("Google Auth Code:", authResult.code);
          setLoading(true);

          const response = await googleAuth(authResult.code);
          console.log("Google Auth API Response:", response);

          if (response.success) {
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("userName", response.data.user.userName);
            localStorage.setItem("firstName", response.data.user.firstName);
            console.log("User stored in localStorage:", response.data.user);
            onClose();
          } else {
            console.warn("Google login failed: No success flag in response");
          }
        } else {
          console.warn("Google login did not return a code");
        }
      } catch (error) {
        console.error("Google Login Error:", error);
        alert(error.message || "Google login failed");
      } finally {
        setLoading(false);
      }
    },
    onError: (err) => {
      console.error("Google OAuth Error:", err);
      alert("Google login failed");
    },
    flow: "auth-code",
  });

  // Form submission for Login / Register
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log("Form submitted. Mode:", isLogin ? "Login" : "Register", "Form Data:", form);

    try {
      if (isLogin) {
        console.log("Attempting login with:", { email: form.email });
        const response = await loginUser({
          email: form.email,
          password: form.password,
        });
        // console.log("Login API Response:", response);

        if (response.success) {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("userName", response.data.user.userName);
          localStorage.setItem("firstName", response.data.user.firstName);
          // console.log("Login successful. User stored:", response.data.user);
          onClose();
        } else {
          alert("Login failed: No success flag in response");
        }
      } else {
        console.log("Attempting registration with:", form);
        const response = await registerUser(form);
        console.log("Register API Response:", response);

        if (response.success) {
          alert("Registration successful. Please login.");
          setIsLogin(true);
        } else {
          console.warn("Registration failed: No success flag in response");
        }
      }
    } catch (error) {
      console.error("Form Submit Error:", error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Disable scroll when modal is open
  useEffect(() => {
    console.log("LoginModal mounted. Disabling scroll");
    document.body.style.overflow = "hidden";
    return () => {
      console.log("LoginModal unmounted. Restoring scroll");
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] bg-white/90 lg:bg-neutral-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white border border-gray-300 rounded-xl shadow-xl p-6 relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={() => {
            console.log("Modal closed");
            onClose();
          }}
          className="absolute top-2 right-3 text-2xl font-bold text-gray-500 hover:text-black"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* Auth Form */}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="userName"
                placeholder="Username"
                value={form.userName}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
                required
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded hover:bg-amber-500 transition-all disabled:opacity-50"
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Register"}
          </button>
        </form>

        {/* Google OAuth */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 mb-2">or</p>
          <button
            onClick={() => {
              console.log("Google login button clicked");
              handleGoogleLogin();
            }}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition disabled:opacity-50"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Sign in with Google</span>
          </button>
        </div>

        {/* Toggle Login/Register */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                console.log("Toggled mode:", !isLogin ? "Login" : "Register");
              }}
              className="text-blue-500 hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;