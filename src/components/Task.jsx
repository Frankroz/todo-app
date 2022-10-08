import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./styles/Task.css";

function Task({ t, onClose, onChecked }) {
  const checkTask = useRef();

  function handleOnComplete() {
    if (!t.done) {
      t.done = true;
      document.getElementById(t.id).className = "completed";
    } else {
      t.done = false;
      document.getElementById(t.id).className = "taskText";
    }

    onChecked({name:t.name, id:t.id, done:t.done})
  }

  useEffect(() => {
    if(t.done) {
      document.getElementById(t.id).className = "completed";
      checkTask.current.checked = true;
    }
  }, [t.done, t.id])

  return (
    <div className="taskContainer">
      <input className="taskCheck" type="checkbox" onChange={handleOnComplete} ref={checkTask}/>
      <p id={t.id} className="taskText">
        {t.name.charAt(0).toUpperCase() + t.name.substring(1)}
      </p>
      <button className="taskClose" onClick={onClose}>
        <IoCloseOutline size="1.7rem" />
      </button>
    </div>
  );
}

export default Task;
