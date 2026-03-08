import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function StatusSelectField(props) {
  return (
    <div>
      <InputLabel id="demo-simple-select-label">Κατάσταση αίτησης</InputLabel>
      <Select
        labelId="status-select-label"
        id="status-select"
        value={props.value}
        label="Status"
        onChange={(event) =>
          props.onChange({ ...props.formData, status: event.target.value })
        }
      >
        <MenuItem value={"Applied"}>Applied</MenuItem>
        <MenuItem value={"Inteview"}>Interview</MenuItem>
        <MenuItem value={"Offer"}>Offer</MenuItem>
        <MenuItem value={"Rejected"}>Rejected</MenuItem>
      </Select>
    </div>
  );
}

export default StatusSelectField;
