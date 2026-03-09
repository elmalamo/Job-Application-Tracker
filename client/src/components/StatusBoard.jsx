import React from "react";
import BoardColumn from "./BoardColumn";

import "./StatusBoard.css";


function StatusBoard(props) {

    const statuses = ["Applied", "Interview", "Offer", "Rejected"];

    return (
        <div className="board-grid">
            {statuses.map(status => (
                <BoardColumn
                    key={status}
                    status={status}
                    applications={props.applications.filter(application => application.status === status)}
                    onDelete={props.onDelete}     
                    onEdit={props.onEdit}           
                />
            ))}
        </div>
    )


}

export default StatusBoard;
