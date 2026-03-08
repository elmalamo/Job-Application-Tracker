import React, { useState } from "react";
import InputField from "./InputField";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import StatusSelectField from "./StatusSelectField";
import WorkModeSelectField from "./WorkModeSelectField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./ApplicationForm.css";
import { FormLabel } from "@mui/material";

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
        <div className="textarea-container">
          <FormLabel>Παρατηρήσεις</FormLabel>
          <TextareaAutosize
            minRows={4}
            placeholder="Σημειώστε τις παρατηρήσεις σας εδώ"
            style={{ width: "100%" }}
            value={props.formData.notes}
            onChange={(event) =>
              props.changeValues({
                ...props.formData,
                notes: event.target.value,
              })
            }
          />
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default ApplicationForm;
