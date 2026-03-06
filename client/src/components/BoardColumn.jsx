import React from "react";
import ApplicationCard from "./ApplicationCard";
import "./BoardColumn.css";

function BoardColumn(props) {

    
  return (
    <div className="column">
      <h3>{props.status}</h3>
      {props.applications.map((application) => (
        <ApplicationCard key={application.id} app={application}  onDelete={props.onDelete}/>
      ))}
    </div>
  );
}

export default BoardColumn;
