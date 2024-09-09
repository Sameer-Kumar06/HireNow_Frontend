import React, { useState } from "react";
import signup from "../assets/signup.png";

import { useRedirectToDashboard } from "../hooks/useRedirect";

export const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useRedirectToDashboard();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl flex items-center justify-center lg:justify-between">
        <div className="w-full max-w-full lg:max-w-md bg-white p-10 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Create account.
          </h2>
          <p className="mb-4 text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-purple-500">
              Log In
            </a>
          </p>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
              {success}
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
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
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mr-2"
              />
              <p className="text-sm text-gray-500">
                I've read and agree with your{" "}
                <a href="#" className="text-purple-500">
                  Terms of Services
                </a>
              </p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition duration-300"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>
        </div>

        <div className="hidden lg:block mx-5 ">
          <img src={signup} alt="Illustration" width={900} />
        </div>
      </div>
    </div>
  );
};
