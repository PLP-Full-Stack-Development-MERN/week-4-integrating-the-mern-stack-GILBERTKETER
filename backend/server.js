// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://gilbertketer759:HKZrU3wSJEkDMMNi@task-manager.b5f70.mongodb.net/?retryWrites=true&w=majority&appName=task-manager"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Import routes
const taskRoutes = require("./routes/tasks");

// Use routes
app.use("/api/tasks", taskRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
