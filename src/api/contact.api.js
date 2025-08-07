import axiosInstance from "../utils/axiosInstance";

const contactUs = async ({ name, email, mobile, message }) => {
  try {
    const response = await axiosInstance.post("/api/v1/contact/client", { name, email, mobile, message });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}  
export { contactUs };