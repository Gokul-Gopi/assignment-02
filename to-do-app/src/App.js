import { useState } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { AddTask } from "./components/AddTask";
import { Task } from "./components/Task";
function App() {
  const [tasklist, setTasklist] = useState([]);

  const addTask = (taskName) => {
    if (taskName.length > 0) {
      setTasklist((preState) => [
        ...preState,
        { id: tasklist.length, taskName, isCompleted: false },
      ]);
    }
  };

  const completeTask = (event, taskId) => {
    const updatedTasklist = tasklist.map((task) => {
      if (taskId === task.id) {
        return { ...task, isCompleted: event.target.checked };
      }
      return task;
    });
    setTasklist(updatedTasklist);
  };

  const deleteTask = (taskId) => {
    const updatedTasklist = tasklist.filter((task) => task.id !== taskId);
    setTasklist(updatedTasklist);
  };

  return (
    <div className="App">
      <h1>
        <IoCheckmarkDoneCircleOutline />
        TO DO
      </h1>

      <main>
        <AddTask addTask={addTask} />
        <div className="task-list">
          {tasklist.map((task, i) => {
            return (
              <Task
                key={`task${i}`}
                taskDetails={task}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
