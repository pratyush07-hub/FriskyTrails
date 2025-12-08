import axiosInstance from "../utils/axiosInstance";

const registerUser = async ({ firstName, lastName, userName, email, password }) => {
  try {
    const response = await axiosInstance.post("/api/v1/user/registerUser", { firstName, lastName, userName, email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}  
const loginUser = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post("/api/v1/user/loginUser", { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}  
const logoutUser = async ( ) => {
  try {
    const response = await axiosInstance.post("/api/v1/user/logoutUser");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}  
const getCurrentUser = async ( ) => {
  try {
    const response = await axiosInstance.post("/api/v1/user/get-user");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}  


const googleAuth = async (code, redirect_uri) => {
  try {
    const response = await axiosInstance.post("/api/v1/user/google-auth", { code, redirect_uri });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: error.message };
  }
};


export { loginUser, registerUser , logoutUser , getCurrentUser, googleAuth };