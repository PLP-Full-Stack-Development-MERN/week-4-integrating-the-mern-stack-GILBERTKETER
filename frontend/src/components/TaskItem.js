import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TaskContext from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  // Function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "No due date";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Get status badge class
  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(task._id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
        <span
          className={`text-xs px-2 py-1 rounded-full border ${getStatusClass(
            task.status
          )}`}
        >
          {task.status}
        </span>
      </div>

      <p className="text-gray-600 mb-4">
        {task.description || "No description"}
      </p>

      <div className="text-sm text-gray-500 mb-4">
        Due date: {formatDate(task.dueDate)}
      </div>

      <div className="flex justify-end space-x-2">
        <Link
          to={`/edit/${task._id}`}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
