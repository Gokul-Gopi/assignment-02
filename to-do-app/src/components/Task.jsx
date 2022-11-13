import React from "react";
import "./components.css";
import { AiOutlineDelete } from "react-icons/ai";

export const Task = ({ taskDetails }) => {
  const { id, isCompleted, taskName } = taskDetails;
  return (
    <div className="task" style={{ opacity: isCompleted ? 0.4 : 1 }}>
      <input type="checkbox" checked={isCompleted} />
      <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {taskName}
      </span>
      <button>
        <AiOutlineDelete />
      </button>
    </div>
  );
};
