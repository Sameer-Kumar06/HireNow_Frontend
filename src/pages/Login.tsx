import React, { useState } from "react";
import axios from "axios";
import loginImg from "../assets/login.svg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-5xl flex items-center justify-center lg:justify-between">
        <div className="w-full max-w-full lg:max-w-md bg-white p-10 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign in</h2>
          <p className="mb-4 text-gray-500">
            Don't have an account?{" "}
            <a href="/signup" className="text-purple-500">
              Create Account
            </a>
          </p>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-400"
              >
                👁️
              </span>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2"
                />
                <p className="text-sm text-gray-500">Remember Me</p>
              </div>
              <a href="#" className="text-sm text-purple-500">
                Forget password
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition duration-300"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <div className="hidden lg:block w-1/2">
          <img src={loginImg} alt="Illustration" className="max-w-full" />
        </div>
      </div>
    </div>
  );
};
