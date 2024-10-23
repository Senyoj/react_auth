import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="text-center p-6 bg-white rounded-lg ">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Cerebrum Network
        </h1>

        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handleRegister}
              className="text-blue-500 hover:underline font-semibold cursor-pointer"
            >
              Register
            </button>
            <span className="text-gray-700">or</span>
            <button
              onClick={handleLogin}
              className="text-blue-500 hover:underline font-semibold cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
