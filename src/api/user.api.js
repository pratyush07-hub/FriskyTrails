import axiosInstance from "../utils/axiosInstance";

const registerUser = async ({ userName, email, password }) => {
  try {
    const response = await axiosInstance.post("/api/v1/user/registerUser", { userName, email, password });
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

export { loginUser, registerUser , logoutUser };