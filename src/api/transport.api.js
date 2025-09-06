import axiosInstance from "../utils/axiosInstance";

const transport = async ({ fromLocation, toLocation, duration, transportType, date, price }) => {
  try {
    const response = await axiosInstance.post("/api/v1/transport/booking", { fromLocation, toLocation, duration, transportType, date, price });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export { transport };
