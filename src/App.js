import "./App.css";
import InputBar from "./components/InputBar";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import CompleteBtn from "./components/CompleteBtn";

function App() {
  const [tasks, setTasks] = useState([]);
  const [btn, setBtn] = useState(false);

  function onClose(id) {
    setTasks((oldTasks) => oldTasks.filter((t) => t.id !== id));
  }

  function onAdd(task) {
    if (task.length > 0) {
      task = { name: task, id: tasks.length, done: false };
      setTasks((oldTasks) => [...oldTasks, task]);
      setBtn(true);
    } else {
      alert("You should add a task");
    }
  }

  useEffect(() => {
    if (tasks.length === 0) setBtn(false);
  }, [tasks]);

  function onComplete() {
    setTasks((oldTasks) => oldTasks.filter((t) => !t.done));
  }

  function onChecked(task) {
    setTasks((oldTasks) => {oldTasks[task.id] = task; return oldTasks});
  }

  return (
    <div className="app">
      <InputBar onAdd={onAdd} />
      <div style={{minHeight: "18rem"}}>
      <Tasks tl={tasks} onClose={onClose} onChecked={onChecked}/>
      </div>
      {btn && <CompleteBtn onDelete={onComplete} />}
    </div>
  );
}

export default App;
