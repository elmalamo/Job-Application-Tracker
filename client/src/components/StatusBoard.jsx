import React from "react";
import BoardColumn from "./BoardColumn";

import "./StatusBoard.css";

function StatusBoard(props) {
  const statuses = ["Applied", "Interview", "Offer", "Rejected"];

  return (
    <div className="board-grid">
      {statuses.map((status) => {
        const filtered = props.applications.filter(
          (application) => application.status === status,
        );
        return (
          <BoardColumn
            key={status}
            status={status}
            applications={filtered}
            totalApplicationsWithStatus={filtered.length}
            onDelete={props.onDelete}
            onEdit={props.onEdit}
          />
        );
      })}
    </div>
  );
}

export default StatusBoard;
