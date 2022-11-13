import React, { useState } from "react";
import "./components.css";
import { IoIosAddCircleOutline } from "react-icons/io";

export const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Add your task.."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          setTask("");
          addTask(task);
        }}
      >
        <IoIosAddCircleOutline />
      </button>
    </div>
  );
};
