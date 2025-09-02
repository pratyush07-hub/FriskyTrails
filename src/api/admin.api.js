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


const createCountry = async (formData) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/admin/create-country",
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
const createState = async (formData) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/admin/create-state",
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
const createCity = async (formData) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/admin/create-city",
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

const getCountries = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/admin/countries");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
const getCountryBySlug = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/admin/country/:slug");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
const getCountryWithBlogs = async (slug) => {
  try {
    const response = await axiosInstance.get(`/api/v1/admin/country/${slug}/blogs`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};


const getStates = async (countryId) => {
  try {
    const response = await axiosInstance.get(`/api/v1/admin/states/${countryId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getStateWithBlogs = async (slug) => {
  try {
    const response = await axiosInstance.get(`/api/v1/admin/state/${slug}/blogs`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

const getCities = async (stateId) => {
  try {
    const response = await axiosInstance.get(`/api/v1/admin/cities/${stateId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};


export const getCityWithBlogs = async (slug) => {
  try {
    const response = await axiosInstance.get(`/api/v1/admin/city/${slug}/blogs`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};



export { createBlog, createCountry, getCountries, createState, createCity, getStates, getCities, getCountryBySlug, getCountryWithBlogs};
