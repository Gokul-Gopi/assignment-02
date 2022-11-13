import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { AddTask } from "./components/AddTask";
import { Task } from "./components/Task";
function App() {
  return (
    <div className="App">
      <h1>
        <IoCheckmarkDoneCircleOutline />
        TO DO
      </h1>

      <main>
        <AddTask />
        <div className="task-list">
          <Task
            taskDetails={{ id: 1, isCompleted: true, taskName: "Do Homework" }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
