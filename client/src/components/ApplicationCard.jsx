import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CardActions from "@mui/material/CardActions";
import "./ApplicationCard.css";



function ApplicationCard(props) {
  return (
    <Card className="card-box" onClick={()=>{props.clickedCard(props.app)}}>
      <CardContent>
        <h3 className="application-preview">{props.app.position}</h3>
        <p className="application-preview">στη</p>
        <h3 className="application-preview">{props.app.company}</h3>
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
          onClick={(event) =>{
            event.stopPropagation(); 
            props.onDelete(props.app.id)
          }}
        >
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ApplicationCard;
