import axiosInstance from "../utils/axiosInstance";

const flight = async ({ fromCity, toCity, departureDate, returnDate, travelClass, passengers, price, airline }) => {
  try {
    const response = await axiosInstance.post("/api/v1/flight/booking", { fromCity, toCity, departureDate, returnDate, travelClass, passengers, price, airline });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export { flight };
