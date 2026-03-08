import { createContext, useContext, useState, useEffect } from "react";
import apiClient from "../api/apiClient";

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const res = await apiClient.get("/applications");
      setApplications(res.data.applications);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

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
      console.log("data:", err.response?.data); // ← what does this say?
      console.log("headers:", err.response?.headers);
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
