/* eslint-disable react/prop-types */
import { MdDone, MdDelete } from "react-icons/md";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-3 bg-pink-300 rounded-lg shadow-md transition-all">
      <span
        className={`flex-1 text-lg cursor-pointer ${
          task.completed ? "line-through text-gray-600" : "text-gray-800"
        }`}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-md transition-all"
        >
          <MdDone className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-all"
        >
          <MdDelete className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
