import axiosInstance from "../utils/axiosInstance";

const hotelBooking = async ({ city, property, checkInDate, checkOutDate, guests, price }) => {
  try {
    const response = await axiosInstance.post("/api/v1/hotel/booking", { city, property, checkInDate, checkOutDate, guests, price });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export { hotelBooking };
