import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CardActions from "@mui/material/CardActions";
import apiClient from "../api/apiClient";

function ApplicationCard(props) {
  return (
    <Card>
      <CardContent>
        <h3>{props.app.position}</h3>
        <h3>{props.app.company}</h3>
        <h4>{props.app.location}</h4>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton
          sx={{
            color: "#999",
            transition: "0.2s",
            "&:hover": {
              color: "#ff0033",
            },
          }}
          aria-label="delete"
          onClick={() => props.onDelete(props.app.id)}
        >
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ApplicationCard;
