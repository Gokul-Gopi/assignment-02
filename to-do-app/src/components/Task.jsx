import React from "react";
import "./components.css";
import { AiOutlineDelete } from "react-icons/ai";

export const Task = ({ taskDetails, completeTask, deleteTask }) => {
  const { id, isCompleted, taskName } = taskDetails;
  return (
    <div className="task" style={{ opacity: isCompleted ? 0.3 : 1 }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => completeTask(e, id)}
      />
      <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {taskName}
      </span>
      <button onClick={() => deleteTask(id)}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};
