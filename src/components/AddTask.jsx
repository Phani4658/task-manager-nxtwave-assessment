import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function AddTask({addNewTask}) {
  const [taskName, setTaskName] = useState("");

  const onChangeTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") {
      alert("Please enter a task name");
      return;
    }
    addNewTask(taskName);
    setTaskName("");
  };
  return (
    <form className="flex gap-3 mb-4" onSubmit={onSubmitForm}>
      <input
        type="text"
        required
        className="border border-gray-400 flex-1 rounded-md px-2 py-1 outline-violet-400"
        placeholder="Add a new task"
        value={taskName}
        onChange={onChangeTaskName}
      />
      <button className="text-white bg-violet-500 border-none flex gap-2 rounded-md items-center px-2 py-1 cursor-pointer">
        <IoIosAddCircleOutline />
        Add Task
      </button>
    </form>
  );
}
