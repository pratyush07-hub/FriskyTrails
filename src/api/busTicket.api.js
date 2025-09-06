import axiosInstance from "../utils/axiosInstance";

const busTicket = async ({ fromCity, toCity, departureDate, returnDate, passengers, price }) => {
  try {
    const response = await axiosInstance.post("/api/v1/bus/booking", { fromCity, toCity, departureDate, returnDate, passengers, price });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export { busTicket };
