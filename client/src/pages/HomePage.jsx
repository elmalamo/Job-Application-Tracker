import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import StatusBoard from "../components/StatusBoard";
import apiClient from "../api/apiClient";
import "./HomePage.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AddApplicationModal from "../components/AddApplicationModal";
import { useApplications } from "../context/ApplicationContext";

function HomePage() {
  const { user, logout } = useAuth();
  const { applications, fetchApplications, addApplication, deleteApplication } = useApplications();

  const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleClose() {
    setModalIsOpen(false);
  }

  const handleDelete = async (id) => {
    try {
      await deleteApplication(id);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };

  const handleAddition = async(event, formData) => {
    try{
      event.preventDefault();           
      await addApplication(formData);
      handleClose();
    }catch(err){
      console.log(err.response?.data);
      console.log(err);
      
      
    }
  };


  const getUserApplications = async () => {
    try {
      await fetchApplications();
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };

  function handleOpen() {
    setModalIsOpen(true);
  }

  function handleClose() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className="home-page-container">
        <h1 className="heading">
          Οι αιτήσεις σου, {user.first_name} {user.last_name}!
        </h1>
        <Button variant="contained" className="add-button" onClick={handleOpen}>
          <AddIcon /> Προσθηκη
        </Button>
        <AddApplicationModal isOpen={modalIsOpen} onClose={handleClose} onSubmit={handleAddition}/>
      </div>
      <StatusBoard applications={applications} onDelete={handleDelete} />
    </div>
  );
}

export default HomePage;
