import "./App.css";
import InputBar from "./components/InputBar";
import Task from "./components/Task";

function App() {
  return (
    <div>
      <InputBar />
      <Task task="Code" />
    </div>
  );
}

export default App;
