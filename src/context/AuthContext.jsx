// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);   // NEW
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates if component unmounts

    const checkAuth = async () => {
      try {
        // Backend uses GET /me, not POST /get-user
        // Token is in HTTP-only cookie, sent automatically with withCredentials: true
        const response = await axiosInstance.get('/api/v1/user/me');
        const userData = response?.data?.user;
        console.log("admin:", response);
        console.log("userdata", userData)
        console.log("userdata admin", userData.admin)

        if (isMounted) {
          if (userData) {
            setUser(userData);
            setIsAdmin(userData?.admin === true);
          } else {
            setUser(null);
            setIsAdmin(false);
          }
        }
      } catch (error) {
        // Silently handle 401 errors (user not authenticated)
        // Only log other errors
        if (isMounted) {
          if (error.response?.status !== 401) {
            console.error('Auth check error', error?.response?.data || error.message);
          }
          setUser(null);
          setIsAdmin(false);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    checkAuth();

    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsAdmin(userData?.admin === true);
  };

  const logout = async () => {
    try {
      await axiosInstance.post('/api/v1/user/logout');
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setUser(null);
      setIsAdmin(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
