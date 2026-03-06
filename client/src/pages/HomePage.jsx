import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import StatusBoard from "../components/StatusBoard";
import apiClient from "../api/apiClient";
import "./HomePage.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function HomePage() {
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
      <div className="home-page-container">
        <h1 className="heading">
          Οι αιτήσεις σου, {user.first_name} {user.last_name}!
        </h1>
        <Button variant="contained" className="add-button">
          <AddIcon /> Προσθηκη
        </Button>
      </div>
      <StatusBoard applications={applications} onDelete={handleDelete} />
    </div>
  );
}

export default HomePage;
