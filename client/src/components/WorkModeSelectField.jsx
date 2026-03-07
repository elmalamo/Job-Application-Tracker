import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function WorkModeSelectField(props) {
  return (
    <div>
      <InputLabel id="demo-simple-select-label">Work Mode</InputLabel>
      <Select
        labelId="work-mode-select-label"
        id="work-mode-select"
        value={props.value}
        label="Work Mode"
        onChange={props.onChange}
      >
        <MenuItem value={"Onsite"}>Onsite</MenuItem>
        <MenuItem value={"Remote"}>Remote</MenuItem>
        <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
      </Select>
    </div>
  );
}


export default WorkModeSelectField;