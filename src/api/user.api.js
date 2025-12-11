import axiosInstance from "../utils/axiosInstance";

const registerUser = async ({ firstName, lastName, email, password }) => {
  try {
    // Backend expects: email, password, name (not firstName, lastName, userName)
    const response = await axiosInstance.post("/api/v1/user/signup", { 
      email, 
      password, 
      name: firstName || email.split('@')[0] 
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}  

const loginUser = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post("/api/v1/user/login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}  

const logoutUser = async ( ) => {
  try {
    const response = await axiosInstance.post("/api/v1/user/logout");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}  

const getCurrentUser = async ( ) => {
  try {
    // Backend uses GET /me, not POST /get-user
    const response = await axiosInstance.get("/api/v1/user/me");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}  

// Google OAuth - backend uses GET /google (redirects to Google)
// This redirects the user to the backend Google OAuth endpoint
const googleAuth = () => {
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  window.location.href = `${apiUrl}/api/v1/user/google`;
};


export { loginUser, registerUser , logoutUser , getCurrentUser, googleAuth };