import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function WorkModeSelectField(props) {

  const selectValues = {
    onsite: "Δια Ζώσης",
    remote: "Εξ Αποστάσεως",
    hybrid: "Υβριδικό"
  }
  return (
    <div>
      <InputLabel id="demo-simple-select-label">Τρόπος εργασίας</InputLabel>
      <Select
        labelId="work-mode-select-label"
        id="work-mode-select"
        value={props.value}
        label="Work Mode"
        onChange={(event) => props.onChange(event.target.value)}
      >
        <MenuItem value={"onsite"}>{selectValues["onsite"]}</MenuItem>
        <MenuItem value={"remote"}>{selectValues["remote"]}</MenuItem>
        <MenuItem value={"hybrid"}>{selectValues["hybrid"]}</MenuItem>
      </Select>
    </div>
  );
}

export default WorkModeSelectField;
