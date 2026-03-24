import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./SearchField.css";

function SearchField(props) {
  return (
    <TextField
      value={props.searchTerm}
      placeholder="Ψάξε εταιρεία ή ρόλο"
      onChange={props.onChange}
      size="small"
      className="search-field"
      type="search"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 0,
          "&.Mui-focused fieldset": {
            borderColor: "black",
            borderRadius: 0,
          },
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "black",
        },
      }}
    />
  );
}

export default SearchField;
