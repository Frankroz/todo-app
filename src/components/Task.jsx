import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./styles/Task.css";

function Task({ task }) {
  return (
    <div className="taskContainer">
      <input className="taskCheck" type="checkbox" />
      <p className="taskText">{task}</p>
      <button className="taskClose">
        <IoCloseOutline size="1.7rem" />
      </button>
    </div>
  );
}

export default Task;
