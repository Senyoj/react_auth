import axios from "axios";

const API_URL = "http://ec2-54-173-169-161.compute-1.amazonaws.com:8000/"; // [API_HERE]

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// log in user
export const loginUser = async (email, password) => {
  try {
    console.log("Sending login request:", { email, password });

    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    console.log("Login response:", response.data);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
    } else {
      console.error("Network or unknown error:", error.message);
    }

    throw error;
  }
};
// register user
export const registerUser = async (email, password) => {
  return axiosInstance.post("/auth/register", { email, password });
};
