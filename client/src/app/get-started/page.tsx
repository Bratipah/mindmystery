// pages/get-started.js
"use client"
import React, { useState } from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css"; // Make sure to import Tailwind CSS

const GetStartedPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setLoading(true);

      // Perform registration logic here
      // ...

      // Simulating a successful registration for demonstration purposes
      console.log("User registered successfully!");
    } catch (error) {
      console.error("An error occurred during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6 text-primaryColor">Get Started</h1>
        <p className="text-gray-700 mb-6">
          Welcome. Follow the steps below to get started.
        </p>
        <div className="mb-6 text-left text-gray-700">
          <div className="mb-4">
            <span className="bg-primaryColor text-white rounded-full p-2 mr-3">1</span>
            <span className="font-semibold">Create an account</span>
          </div>
          
          <div>
            <span className="bg-primaryColor text-white rounded-full p-2 mr-3">3</span>
            <span className="font-semibold">Start exploring and enjoying our app!</span>
          </div>
        </div>
        {/* Registration Form */}
        <div className="mb-6">
          {/* <label htmlFor="name" className="block text-gray-600 mb-2">
            Name:
          </label> */}
          <input
            type="text"
            id="name"
            className="w-full p-3 border rounded focus:outline-none focus:border-primaryColor mb-2"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* <label htmlFor="email" className="block text-gray-600 mb-2">
            Email:
          </label> */}
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded focus:outline-none focus:border-primaryColor mb-2"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
{/* 
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password:
          </label> */}
          <input
            type="password"
            id="password"
            className="w-full p-3 border rounded focus:outline-none focus:border-primaryColor mb-2"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
{/* 
          <label htmlFor="confirmPassword" className="block text-gray-600 mb-2">
            Confirm Password:
          </label> */}
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-3 border rounded focus:outline-none focus:border-primaryColor mb-4"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleRegister}
          className="bg-primaryColor text-white px-6 py-3 rounded-md shadow-md hover:bg-primaryColor/80 transition duration-300 w-full"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <Link href="/login">
            <p className="text-primaryColor">Login here</p>
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default GetStartedPage;
