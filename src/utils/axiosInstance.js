import axios from "axios";

const axiosInstance = axios.create({
    baseURL:
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_LOCAL,
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Request interceptor to add auth token to requests
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        config.withCredentials = true;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Variables for refresh token handling
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Response interceptor with token refresh logic
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    
    // If error is not 401 or it's a retry request, reject
    if (error.response?.status !== 401 || originalRequest._retry) {
      if (error.response?.status === 401) {
        // Clear auth state and redirect to login
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('userName');
        window.localStorage.removeItem('firstName');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }

    // If we're already refreshing, add to queue
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
      .then(token => {
        originalRequest.headers['Authorization'] = 'Bearer ' + token;
        return axiosInstance(originalRequest);
      })
      .catch(err => {
        return Promise.reject(err);
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      // Try to refresh the token
      const response = await axiosInstance.post('/api/v1/user/refresh-token');
      const { accessToken } = response.data;
      
      // Update the stored token
      localStorage.setItem('accessToken', accessToken);
      
      // Update the Authorization header
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
      
      // Process the queue
      processQueue(null, accessToken);
      
      // Retry the original request
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      // If refresh fails, clear everything and redirect to login
      processQueue(refreshError, null);
      window.localStorage.removeItem('accessToken');
      window.localStorage.removeItem('userName');
      window.localStorage.removeItem('firstName');
      window.location.href = '/login';
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

export default axiosInstance;
