import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Task Manager
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200">
                Tasks
              </Link>
            </li>
            <li>
              <Link
                to="/add"
                className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800"
              >
                Add Task
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
