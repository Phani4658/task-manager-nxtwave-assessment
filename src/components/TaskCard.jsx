import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

export default function TaskCard({ taskDetails, toggleCompleted, deleteTask }) {
  const onClickTask = () => {
    toggleCompleted(taskDetails.id);
  };
  const onClickDelete = () => {
    deleteTask(taskDetails.id);
  };
  return (
    <div className="border border-gray-300 py-1 px-2 flex justify-between items-center rounded-md">
      <div className="flex items-center gap-3">
        <IoIosCloseCircleOutline
          onClick={onClickTask}
          className="hover:text-violet-950 cursor-pointer" size={16}
        />
        <p
          className={`${
            taskDetails.completed
              ? "line-through transition-all text-gray-800"
              : ""
          }`}
        >
          {taskDetails.name}
        </p>
      </div>
      <MdDeleteOutline
        onClick={onClickDelete}
        size={16}
        className="hover:text-red-800 cursor-pointer"
      />
    </div>
  );
}
