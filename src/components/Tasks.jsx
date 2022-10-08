import React from "react";
import Task from "./Task";
import "./styles/Tasks.css";

function Tasks({ tl, onClose, onChecked}) {
  if (tl.length > 0) {
    return (
      <div className="tasks">
        {tl.map((t) => {
          return (
            <Task
              key={t.name + t.id}
              t={t}
              onClose={() => {
                onClose(t.id);
              }}
              onChecked={onChecked}
            />
          );
        })}
      </div>
    );
  } else {
    return <h3 style={{margin: "5rem", fontWeight: "400", fontSize: "1.5rem"}}>There are no tasks in the list...</h3>;
  }
}

export default Tasks;
