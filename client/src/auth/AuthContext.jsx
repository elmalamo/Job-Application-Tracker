import { createContext, useContext, useEffect, useState } from "react";
import apiClient from "../api/apiClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false)

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
      await apiClient.post("/auth/login", credentials);
      await checkAuth();
      return true;
    } catch (err) {
      console.log("Login failed:", err.response?.data);
      throw err; //in order to catch is in handleLogin
    }
  };

 const logout = async () => {
  try {
    setIsLoggingOut(true);
    await apiClient.post("/auth/logout")
  } catch (err) {
    console.log("Logout error:", err)
  } finally {
    setUser(null);
    setIsLoggingOut(false);
  }
}

  //register function
  const register = async (formData) => {
    try {
      const res = await apiClient.post("/auth/register", formData);   
      return true;
    } catch (err) {
      console.log("Register failed:", err.response?.data);
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, isLoggingOut, login, logout, register, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

//custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
