import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import ApplicationForm from "../ApplicationForm/ApplicationForm";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function ApplicationModal(props) {
  const isEditing = !!props.card?.id;

  const [formData, setFormData] = useState({
    position: props.card?.position ?? "",
    company: props.card?.company ?? "",
    location: props.card?.location ?? "",
    workMode: props.card?.work_mode ?? "onsite",
    appliedAt: props.card?.applied_at ? dayjs(props.card.applied_at) : dayjs(),
    status: props.card?.status ?? "Applied",
    notes: props.card?.notes ?? "",
  });

  return (
    <Dialog open={true} onClose={props.onClose} fullWidth maxWidth="sm">
      <form onSubmit={(event) => props.onSubmit(event, formData)}>
        <DialogTitle>
          {isEditing ? "Επεξεργασία της αίτησης" : "Προσθήκη νέας αίτησης"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={props.onClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <ApplicationForm formData={formData} changeValues={setFormData} />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="error" variant="outlined">
            Ακυρωση
          </Button>
          <Button type="submit" variant="contained">
            {isEditing ? "Αποθηκευση" : "Προσθηκη"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default ApplicationModal;
