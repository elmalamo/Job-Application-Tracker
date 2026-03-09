import React from "react";
import ApplicationCard from "./ApplicationCard";
import "./BoardColumn.css";

function BoardColumn(props) {

const statusLabels = {
  Applied: "Υποβλήθηκε",
  Interview: "Συνέντευξη",
  Offer: "Προσφορά",
  Rejected: "Απορρίφθηκε"
};

  return (
    <div className="column">
      <div className="column-title">
        <h3>{statusLabels[props.status]}</h3>
      </div>
      <div className="cards-container">
        {props.applications.map((application) => (
          <ApplicationCard
            key={application.id}
            app={application}
            onDelete={props.onDelete}
            clickedCard={props.onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardColumn;
