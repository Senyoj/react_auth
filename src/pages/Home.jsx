import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation to the register page
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Cerebrum Network
        </h1>

        {/* Uncomment and style this button if needed */}
        {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Enter Node
        </button> */}

        <div className="flex justify-center items-center gap-2 mt-4">
          <span className="text-gray-700">Please</span>
          <span>
            <button 
              onClick={handleRegister} 
              className="text-blue-500 hover:underline font-semibold cursor-pointer"
            >
              Register
            </button>
          </span>
          <span className="text-gray-700">to continue</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
