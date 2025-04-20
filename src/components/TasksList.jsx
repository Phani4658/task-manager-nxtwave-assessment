import React from "react";
import TaskCard from "./TaskCard";

export default function TasksList({tasks, toggleCompleted, deleteTask}) {
  console.log(tasks)
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} taskDetails={task} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />
      ))}
    </div>
  );
}
