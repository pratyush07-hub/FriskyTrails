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
const getAllBlogs = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/admin/blogs");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
const getBlogById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/v1/admin/blog/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}

const uploadEditorImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  const response = await axiosInstance.post("/api/v1/admin/upload-editor-image", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
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

export const getCityById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/v1/admin/city/${id}`);
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

const createProduct = async (formData) => {
  try {
    const response = await axiosInstance.post("/api/v1/admin/create-product", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Get all products
const getProducts = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/admin/products");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Get single product by slug
const getProductBySlug = async (slug) => {
  try {
    const response = await axiosInstance.get(`/api/v1/admin/product/${slug}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
export const getProductById = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/api/v1/admin/product/${id}`);
    return data; 
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch product");
  }
};

const updateBlog = async (slug, formData) => {
  try {
    const response = await axiosInstance.put(`/api/v1/admin/blog/${slug}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Update product
const updateProduct = async (slug, formData) => {
  try {
    const response = await axiosInstance.put(`/api/v1/admin/product/${slug}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Delete product
const deleteProduct = async (slug) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/admin/product/${slug}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

const createProductType = async (formData) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/admin/create-productType",
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

const getProductTypeBySlug = async (slug) => {
  try{
    const response = await axiosInstance.get(`/api/v1/admin/productTypes/${slug}`);
    return response.data;
  } catch (error){
    throw error.response ? error.response.data : error.message;
  }
}
const getProductTypeById = async (id) => {
  try{
    const response = await axiosInstance.get(`/api/v1/admin/productType/${id}`);
    return response.data;
  } catch (error){
    throw error.response ? error.response.data : error.message;
  }
}
const getProductTypeBySlugWithProduct = async (slug) => {
  try{
    const response = await axiosInstance.get(`/api/v1/admin/productTypes/${slug}/product`);
    return response.data;
  } catch (error){
    throw error.response ? error.response.data : error.message;
  }
}

const getAllProductTypes = async () => {
  try{
    const response = await axiosInstance.get(`/api/v1/admin/all-productTypes`);
    return response.data;
  } catch (error){
    throw error.response ? error.response.data : error.message;
  }
}

export { createProduct, updateBlog,getBlogById,getProducts, getProductBySlug, updateProduct, deleteProduct, createBlog, createCountry, getCountries, createState, createCity, getStates, getCities, getCountryBySlug, getCountryWithBlogs, createProductType, getProductTypeBySlug, getProductTypeBySlugWithProduct, getAllProductTypes, uploadEditorImage, getAllBlogs, getProductTypeById };
