"use client";
import { useEffect, useState } from "react";
import { loginUser, registerUser, googleAuth } from "../api/user.api";

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGoogleLogin = () => {
    // Redirect to backend Google OAuth endpoint
    // The backend will handle the OAuth flow and redirect back with a cookie
    googleAuth();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        const response = await loginUser({
          email: form.email,
          password: form.password,
        });
        if (response.success) {
          // Token is stored in httpOnly cookie by backend, no need to store in localStorage
          // Store user info for display purposes
          if (response.user?.name) {
            localStorage.setItem("userName", response.user.name);
            localStorage.setItem("firstName", response.user.name.split(' ')[0] || response.user.name);
          }
          onClose();
          // Reload to update auth state
          window.location.reload();
        } else {
          alert("Login failed");
        }
      } else {
        const response = await registerUser(form);
        if (response.success) {
          alert("Registration successful. Please login.");
          setIsLogin(true);
        } else {
          alert("Registration failed");
        }
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] bg-white flex justify-center items-center px-4">
      <div className="relative w-full max-w-sm p-6 bg-white rounded-xl shadow-xl animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-black"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* Form */}
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
            {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Google OAuth */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 mb-2">or</p>
          <button
            onClick={handleGoogleLogin}
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
              onClick={() => setIsLogin(!isLogin)}
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
