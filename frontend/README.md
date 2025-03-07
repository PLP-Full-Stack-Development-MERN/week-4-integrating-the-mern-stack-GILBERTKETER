# MERN Task Manager

A full-stack task management application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Create, read, update, and delete tasks
- Set task status (pending, in progress, completed)
- Set due dates for tasks
- Responsive design using Tailwind CSS

## Tech Stack

**Backend:**
- Node.js
- Express
- MongoDB with Mongoose
- Cors for cross-origin requests
- Dotenv for environment variables

**Frontend:**
- React
- React Router for navigation
- Axios for API requests
- Tailwind CSS for styling
- Context API for state management

## Project Structure

```
mern-task-manager/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Header.js
    │   │   ├── TaskForm.js
    │   │   ├── TaskItem.js
    │   │   └── TaskList.js
    │   ├── context/
    │   │   └── TaskContext.js
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    ├── package.json
    └── tailwind.config.js
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mern-task-manager.git
   cd mern-task-manager
   ```

2. Backend setup:
   ```bash
   cd backend
   npm install
   ```

3. Configure the environment variables:
   - Create a `.env` file in the backend directory
   - Add the following variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     PORT=5000
     ```

4. Frontend setup:
   ```bash
   cd ../frontend
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. In a new terminal, start the frontend:
   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

| Method | Endpoint       | Description      | Request Body                                         |
|--------|----------------|------------------|-----------------------------------------------------|
| GET    | /api/tasks     | Get all tasks    | -                                                   |
| GET    | /api/tasks/:id | Get single task  | -                                                   |
| POST   | /api/tasks     | Create task      | `{title, description, status, dueDate}`             |
| PUT    | /api/tasks/:id | Update task      | `{title, description, status, dueDate}` (any field) |
| DELETE | /api/tasks/:id | Delete task      | -                                                   |

## Deployment

### Backend Deployment (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the build settings:
   - Build Command: `npm install`
   - Start Command: `node server.js`
4. Add environment variables (MONGODB_URI, PORT)

### Frontend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Configure the project settings:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Add environment variable to point to the deployed backend API

## License

This project is licensed under the MIT License.