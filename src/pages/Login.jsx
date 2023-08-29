import React, { useState } from "react";
import Header from "../components/Header";
import { server_login } from "../server";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(`${server_login}`, { username, password });
      console.log(response.data); // Display the response from the server
      navigate("/admin");
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Invalid credentials. Please try again.");
    }
  }

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center bg-[url(./assets/login-bg.jpeg)] h-screen">
        <div className="bg-white p-8 rounded shadow-md">
          <p className="text-center text-gray-700 text-lg mb-4">Admin Login</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="w-full p-2 border rounded-md outline-none"
                type="text"
                placeholder="Enter your email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-2 border rounded-md outline-none"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              type="submit"
            >
              Log In
            </button>
            {loginError && <p className="text-red-500 mt-2">{loginError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
