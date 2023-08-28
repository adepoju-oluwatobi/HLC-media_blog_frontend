import React from "react";
import Header from "../components/Header";

function Login() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center bg-[url(./assets/login-bg.jpeg)] h-screen">
        <div className="bg-white p-8 rounded shadow-md">
          <p className="text-center text-gray-700 text-lg mb-4">Admin Login</p>
          <form action="">
            <div className="mb-4">
              <input
                className="w-full p-2 border rounded-md outline-none"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-2 border rounded-md outline-none"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              type="submit"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
