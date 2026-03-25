import { createContext, useContext, useEffect, useState } from "react";
import apiClient from "../api/apiClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //check session on app load
  const checkAuth = async () => {
    try {
      const res = await apiClient.get("/auth/me");
      setUser(res.data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  //login function
  const login = async (credentials) => {
    try {
      const res = await apiClient.post("/auth/login", credentials);
      setUser(res.data.user);
      // await checkAuth();
      return true;
    } catch (err) {
      throw err; //in order to catch it in handleLogin
    }
  };

const logout = async () => {
  try {
    await apiClient.post("/auth/logout");
    setUser(null);
  } catch (err) {
  }
};

  //register function
  const register = async (formData) => {
    try {
      const res = await apiClient.post("/auth/register", formData);   
      return true;
    } catch (err) {
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

//custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
