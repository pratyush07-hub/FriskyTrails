import axiosInstance from "../utils/axiosInstance";

const adventure = async ({ user, fromCity, toCity, duration, budget, date, guests }) => {
  try {
    const response = await axiosInstance.post("/api/v1/adventure/booking", { user, fromCity, toCity, duration, budget, date, guests });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}  
export { adventure };