import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function StatusSelectField(props) {

const statusLabels = {
  Applied: "Υποβλήθηκε",
  Interview: "Συνέντευξη",
  Offer: "Προσφορά",
  Rejected: "Απορρίφθηκε"
};
  return (
    <div>
      <InputLabel id="demo-simple-select-label">Κατάσταση αίτησης</InputLabel>
      <Select
        labelId="status-select-label"
        id="status-select"
        value={props.value}
        label="Status"
        onChange={(event) => props.onChange(event.target.value)}
      >
        <MenuItem value={"Applied"}>{statusLabels["Applied"]}</MenuItem>
        <MenuItem value={"Interview"}>{statusLabels["Interview"]}</MenuItem>
        <MenuItem value={"Offer"}>{statusLabels["Offer"]}</MenuItem>
        <MenuItem value={"Rejected"}>{statusLabels["Rejected"]}</MenuItem>
      </Select>
    </div>
  );
}

export default StatusSelectField;
