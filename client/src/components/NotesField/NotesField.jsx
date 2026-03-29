import React from "react";
import { FormLabel } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function NotesField(props) {
  return (
    <div className="textarea-container">
      <FormLabel>Παρατηρήσεις</FormLabel>
      <TextareaAutosize
        minRows={4}
        placeholder="Σημειώστε τις παρατηρήσεις σας εδώ"
        style={{ width: "100%" }}
        value={props.notes}
        onChange={props.onChange}
      />
    </div>
  );
}


export default NotesField;
