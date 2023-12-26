"use client"
import React, { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);

      // Perform authentication logic here, e.g., call an authentication API
      // Replace the following line with your actual authentication logic

      // Example: Simulating a successful login
      // const response = await YourAuthenticationApi.login({ email, password });

      // Check response and handle accordingly
      // if (response.success) {
      //   router.push("/dashboard"); // Redirect to dashboard on successful login
      // } else {
      //   toast.error(response.message); // Display error message
      // }

      // Simulating a successful login for demonstration purposes
      toast.success("Login successful!");
      // router.push("/dashboard");
    } catch (error) {
      toast.error("An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded focus:outline-none focus:border-primaryColor"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border rounded focus:outline-none focus:border-primaryColor"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-primaryColor text-white px-6 py-3 rounded-md shadow-md hover:bg-primaryColor/80 transition duration-300 w-full"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
      );
};

export default LoginForm;
