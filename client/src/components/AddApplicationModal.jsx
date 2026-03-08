import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import ApplicationForm from "./ApplicationForm";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import dayjs from "dayjs";



function AddApplicationModal(props) {



  const [formData, setFormData] = useState({
    position: "",
    company: "",
    location: "",
    workMode: "onsite",
    appliedAt: dayjs(),
    status: "Applied",
    notes: ""
  });

  return (
    <Dialog open={props.isOpen} onClose={props.onClose} fullWidth maxWidth="sm">
      <form onSubmit={(event) => props.onSubmit(event, formData)}>
        <DialogTitle>Προθήκη νέας αίτησης</DialogTitle>
        <DialogContent>
          <ApplicationForm formData={formData} changeValues={setFormData}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="error" variant="outlined">
            Ακυρωση
          </Button>
          <Button type="submit" variant="contained">
            Προσθηκη
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddApplicationModal;
