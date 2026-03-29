import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function InputField(props) {

  return (
    <TextField
      required={props.required}
      label={props.label}
      type={props.type}
      size={props.size}
      value={props.value}
      onChange={props.onChange}
      color="black"
    />
  );
}

export default InputField;
