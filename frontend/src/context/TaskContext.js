import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:5000/api/tasks";

  // Fetch all tasks
  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
      setError(null);
    } catch (err) {
      setError("Error fetching tasks. Please try again later.");
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new task
  const addTask = async (task) => {
    try {
      const response = await axios.post(API_URL, task);
      setTasks([response.data, ...tasks]);
      return response.data;
    } catch (err) {
      setError("Error adding task. Please try again.");
      console.error("Error adding task:", err);
      throw err;
    }
  };

  // Update a task
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedTask);
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
      return response.data;
    } catch (err) {
      setError("Error updating task. Please try again.");
      console.error("Error updating task:", err);
      throw err;
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      setError("Error deleting task. Please try again.");
      console.error("Error deleting task:", err);
      throw err;
    }
  };

  // Get a single task by ID
  const getTask = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      setError("Error fetching task details. Please try again.");
      console.error("Error fetching task:", err);
      throw err;
    }
  };

  // Fetch tasks on initial load
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        fetchTasks,
        addTask,
        updateTask,
        deleteTask,
        getTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
