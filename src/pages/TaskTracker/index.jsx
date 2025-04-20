import React, { useState } from "react";
import AddTask from "../../components/AddTask";
import TasksList from "../../components/TasksList";

export default function TaskTracker() {
  const [tasks, setTasks] = useState([]);

  const onClickAddTask = (taskName) => {
    const newTask = { id: tasks.length + 1, name: taskName, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="bg-white p-4 rounded-md w-[90%] lg:max-w-lg shadow-xl">
      <h1 className="font-bold text-xl mb-3">Task Tracker</h1>
      <AddTask addNewTask={onClickAddTask} />
      <TasksList tasks={tasks} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />
    </div>
  );
}
