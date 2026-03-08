import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function WorkModeSelectField(props) {
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
        <MenuItem value={"onsite"}>Onsite</MenuItem>
        <MenuItem value={"remote"}>Remote</MenuItem>
        <MenuItem value={"hybrid"}>Hybrid</MenuItem>
      </Select>
    </div>
  );
}

export default WorkModeSelectField;
