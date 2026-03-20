import { createContext, useContext, useState, useEffect } from "react";
import apiClient from "../api/apiClient";
import { useAuth } from "../auth/AuthContext";

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const {user} = useAuth();

  const fetchApplications = async () => {
    try {
      const res = await apiClient.get("/applications");
      setApplications(res.data.applications);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if(!user){
      return;
    }
    fetchApplications();
  }, [user]);

  const addApplication = async (formData) => {
    try {
      //change the format of the date picker value
      const payload = {
        ...formData,
        appliedAt: formData.appliedAt?.format("YYYY-MM-DD"),
      };

      await apiClient.post("/applications", payload);

      //refresh after addition
      fetchApplications();
    } catch (err) {
      console.log("status:", err.response?.status);
      console.log("data:", err.response?.data);
      console.log("headers:", err.response?.headers);
    }
  };

  const patchApplication = async (id, formData) => {
    try {
      //change the format of the date picker value
      const payload = {
        ...formData,
        appliedAt: formData.appliedAt?.format("YYYY-MM-DD"),
      };
      await apiClient.patch(`/applications/${id}`, payload);

      //refresh after editing
      fetchApplications();
    } catch (error) {
      console.log("status:", error.response?.status);
      console.log("data:", error.response?.data);
      console.log("headers:", error.response?.headers);
    }
  };
  const deleteApplication = async (id) => {
    await apiClient.delete(`/applications/${id}`);
    setApplications((prev) => prev.filter((app) => app.id !== id));
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        fetchApplications,
        addApplication,
        patchApplication,
        deleteApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplications = () => {
  return useContext(ApplicationContext);
};
