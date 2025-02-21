import { useState, useEffect } from "react";
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";
import ReturnButton from "../components/ReturnButton";

const ToDoList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    if (tasks.length > 0 || localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = { id: Date.now(), text, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center relative">
      <ReturnButton />
      <h1 className="text-5xl font-extrabold text-pink-600 drop-shadow-lg mb-6">
        Mi To-Do List ✨
      </h1>

      <TaskInput onAddTask={addTask} />

      <div className="mt-6 w-full max-w-md">
        {tasks.length === 0 ? (
          <p className="text-gray-500 italic">No hay tareas aún. Agrega una ✍️</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
