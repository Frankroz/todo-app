import React from "react";
import "./styles/InputBar.css";

function InputBar({ onAdd }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(document.getElementById("addBar").value);
        document.getElementById("addBar").value = "";
      }}
    >
      <input id="addBar" type="text" placeholder="Task..."/>
      <button className="addBtn" type="submit">
        Add
      </button>
    </form>
  );
}

export default InputBar;
