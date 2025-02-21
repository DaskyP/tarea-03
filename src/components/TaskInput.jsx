/* eslint-disable react/prop-types */
import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Añadir una nueva tarea..."
        className="w-64 px-4 py-2 border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
      >
        ➕
      </button>
    </form>
  );
};

export default TaskInput;
