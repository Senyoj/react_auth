import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await loginUser(email, password);
      if (response?.token) {
        console.log({ email, password });
        localStorage.setItem("token", response.token);
      } else {
        navigate("/nomad");
      }
    } catch (err) {
      if (err.response) {
        switch (err.response.status) {
          case 404:
            setError("User does not exist.");
            break;
          case 401:
            setError("Incorrect email or password.");
            break;
          default:
            setError("");
        }
      } else {
        setError("An error occurred. Please check your network.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        {error && <div className="mb-4 text-center text-red-500">{error}</div>}

        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              disabled={loading}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className={`w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-all duration-150 ease-in-out ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
