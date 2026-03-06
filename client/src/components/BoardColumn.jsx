import React from "react";
import ApplicationCard from "./ApplicationCard";
import "./BoardColumn.css";

function BoardColumn(props) {
  return (
    <div className="column">
      <div className="column-title">
        <h3>{props.status}</h3>
      </div>
      <div className="cards-container">
        {props.applications.map((application) => (
          <ApplicationCard
            key={application.id}
            app={application}
            onDelete={props.onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardColumn;
