import React, { useState, lazy } from "react";
import { useAuth } from "../auth/AuthContext";
import StatusBoard from "../components/StatusBoard";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useApplications } from "../context/ApplicationContext";
import "./HomePage.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ApplicationModal = lazy(() => import('../components/ApplicationModal'));


function HomePage() {
  const { user } = useAuth();
  const { applications, addApplication, patchApplication, deleteApplication } = useApplications();

  // null = closed, {} = add mode, { ...card } = edit mode
  const [modalData, setModalData] = useState(null);
  const openAdd = () => setModalData({});
  const openEdit = (card) => setModalData(card);
  const closeModal = () => setModalData(null);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = async (event, formData) => {
    try {
      event.preventDefault();
      if (modalData?.id) {
        await patchApplication(modalData.id, formData); // edit
        setSnackbar({
          open: true,
          message: "Η αίτηση ενημερώθηκε επιτυχώς!",
          severity: "success",
        });
      } else {
        await addApplication(formData); // add
        setSnackbar({
          open: true,
          message: "Η αίτηση προστέθηκε επιτυχώς",
          severity: "success",
        });
      }
      closeModal();
    } catch (err) {
      console.log(err.response?.data);
      setSnackbar({
        open: true,
        message: "Κάτι πήγε στραβά!",
        severity: "error",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteApplication(id);
      setSnackbar({
        open: true,
        message: "Η αίτηση διαγράφηκε επιτυχώς",
        severity: "success",
      });
    } catch (err) {
      console.log(err.response?.data);
      setSnackbar({
        open: true,
        message: "Κάτι πήγε στραβά!",
        severity: "error",
      });
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
      <StatusBoard
        applications={applications}
        onDelete={handleDelete}
        onEdit={openEdit}
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default HomePage;
