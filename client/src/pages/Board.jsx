import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import StatusBoard from "../components/StatusBoard";
import apiClient from "../api/apiClient";

function Board() {
  const { user, logout } = useAuth();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getUserApplications();
  }, []);

  const handleDelete = async (id) => {
    try {
      await apiClient.delete(`/applications/${id}`);
      setApplications((prev) => prev.filter((app) => app.id !== id));
    } catch (err) {
      console.log("Error deleting the application:", err);
    }
  };
  const getUserApplications = async () => {
    try {
      const userApplications = await apiClient.get("/applications/");
      setApplications(userApplications.data.applications);
      console.log(userApplications.data);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };

  return (
    <div>
      <h1>
        Οι αιτήσεις σου, {user.first_name} {user.last_name}!
      </h1>
      <StatusBoard applications={applications} onDelete={handleDelete} />
    </div>
  );
}

export default Board;
