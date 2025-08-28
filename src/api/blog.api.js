import axiosInstance from "../utils/axiosInstance";

const getSingleBlog = async (slug) => {
  try {
    const response = await axiosInstance.get(`/api/v1/blog/${slug}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}
export { getSingleBlog };