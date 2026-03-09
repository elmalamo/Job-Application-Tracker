import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import StatusBoard from "../components/StatusBoard";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ApplicationModal from "../components/ApplicationModal";
import { useApplications } from "../context/ApplicationContext";
import "./HomePage.css";


function HomePage() {
  const { user } = useAuth();
  const { applications, addApplication, patchApplication, deleteApplication } = useApplications();

  // null = closed, {} = add mode, { ...card } = edit mode
  const [modalData, setModalData] = useState(null);

  const openAdd = () => setModalData({});
  const openEdit = (card) => setModalData(card);
  const closeModal = () => setModalData(null);

  const handleSubmit = async (event, formData) => {
    try {
      event.preventDefault();
      if (modalData?.id) {
        await patchApplication(modalData.id, formData); // edit
      } else {
        await addApplication(formData); // add
      }
      closeModal();
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteApplication(id);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <div>
      <div className="home-page-container">
        <h1 className="heading">
          Οι αιτήσεις σου, {user.first_name} {user.last_name}!
        </h1>
        <Button variant="contained" className="add-button" onClick={openAdd}>
          <AddIcon /> Προσθηκη
        </Button>

        {modalData !== null && (
          <ApplicationModal
            card={modalData}
            onClose={closeModal}
            onSubmit={handleSubmit}
          />
        )}
      </div>
      <StatusBoard applications={applications} onDelete={handleDelete} onEdit={openEdit} />
    </div>
  );
}

export default HomePage;