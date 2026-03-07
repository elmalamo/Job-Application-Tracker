import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import ApplicationForm from "./ApplicationForm";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";


function AddApplicationModal(props) {
  return (
    <Dialog open={props.isOpen} onClose={props.onClose}>
      <DialogTitle>Προθήκη νέας αίτησης</DialogTitle>
      <DialogContent>
        <ApplicationForm />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="error" variant="outlined">
            Ακυρωση
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddApplicationModal;
