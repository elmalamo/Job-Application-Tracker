import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputField from "../InputField/InputField";
import StatusSelectField from "../StatusSelectField/StatusSelectField";
import WorkModeSelectField from "../WorkModeSelectField/WorkModeSelectField";
import NotesField from "../NotesField/NotesField";
import "./ApplicationForm.css";

function ApplicationForm(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="form-container">
        <InputField
          required={true}
          label="Ρόλος"
          type="text"
          value={props.formData.position}
          size="small"
          sx={{ paddingTop: "10px" }}
          onChange={(event) =>
            props.changeValues({
              ...props.formData,
              position: event.target.value,
            })
          }
        />
        <InputField
          required={true}
          label="Εταιρεία"
          type="text"
          value={props.formData.company}
          size="small"
          onChange={(event) =>
            props.changeValues({
              ...props.formData,
              company: event.target.value,
            })
          }
        />
        <InputField
          label="Περιοχή"
          type="text"
          value={props.formData.location}
          size="small"
          onChange={(event) =>
            props.changeValues({
              ...props.formData,
              location: event.target.value,
            })
          }
        />
        <DatePicker
          label="Ημερομηνία αίτησης"
          value={props.formData.appliedAt}
          onChange={(newValue) =>
            props.changeValues({ ...props.formData, appliedAt: newValue })
          }
        />
        <StatusSelectField
          value={props.formData.status}
          onChange={(newValue) =>
            props.changeValues({ ...props.formData, status: newValue })
          }
        />
        <WorkModeSelectField
          value={props.formData.workMode}
          onChange={(newValue) =>
            props.changeValues({ ...props.formData, workMode: newValue })
          }
        />
        <NotesField
          notes={props.formData.notes}
          onChange={(event) =>
            props.changeValues({...props.formData, notes: event.target.value  })
          }
        />
      </div>
    </LocalizationProvider>
  );
}

export default ApplicationForm;
