import axiosInstance from "../utils/axiosInstance";

const bookProduct = async ({ productSlug, name, email, date, guests }) => {
  try {
    const response = await axiosInstance.post("/api/v1/admin/bookings", { productSlug, name, email, date, guests });
    return response.data;
  }
    catch (error) {
    throw error.response ? error.response.data : error.message;
    }
};
const bookingsByProduct = async (slug) => {
  try {
    const response = await axiosInstance.get(`/api/v1/admin/bookings/${slug}`); 
    return response.data;
    } catch (error) {
    throw error.response ? error.response.data : error.message;
    }
};
export { bookProduct, bookingsByProduct };