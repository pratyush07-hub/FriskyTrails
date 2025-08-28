import axiosInstance from "../utils/axiosInstance";

const createBlog = async (formData) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/admin/create-blog",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
const createLocation = async (formData) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/admin/locations",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

const getLocations = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/admin/locations");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

const getLocationWithBlogs = async (slug) => {
  try {
    const response = await axiosInstance.get(`/api/v1/admin/locations/${slug}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};



export { createBlog, createLocation, getLocations, getLocationWithBlogs };
