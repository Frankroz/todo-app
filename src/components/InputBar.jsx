import React from "react";
import "./styles/InputBar.css";

function InputBar() {
  return (
    <form
      onSubmit={() => {
        alert(document.getElementById("addBar").value);
      }}
    >
      <input id="addBar" type="text" placeholder="Task..." />
      <button className="addBtn" type="submit">
        Add
      </button>
    </form>
  );
}

export default InputBar;
