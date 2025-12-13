import axiosInstance from "../utils/axiosInstance";

const createActivity = async ({ activityType, location, date, description }) => {
  try {
    const response = await axiosInstance.post("/api/v1/activity", {
      activityType,
      location,
      date,
      description,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export { createActivity };

// const activity = async ({ activityType, location, date, description }) => {
//   try {
//     const response = await axiosInstance.post("/api/v1/activity", { activityType, location, date, description });
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : error.message;
//   }
// };

// export { activity };
