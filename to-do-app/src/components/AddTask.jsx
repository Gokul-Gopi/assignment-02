import React from "react";
import "./components.css";
import { IoIosAddCircleOutline } from "react-icons/io";

export const AddTask = () => {
  return (
    <div className="add-task">
      <input type="text" placeholder="Add your task.." />
      <button>
        <IoIosAddCircleOutline />
      </button>
    </div>
  );
};
