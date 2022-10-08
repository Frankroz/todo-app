import React from "react";
import "./styles/CompleteBtn.css";

function CompleteBtn({ onDelete }) {
  return (
    <div>
      <button onClick={onDelete} className="deleteBtn">
        Delete Completed
      </button>
    </div>
  );
}

export default CompleteBtn;
