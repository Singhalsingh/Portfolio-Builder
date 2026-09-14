import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homepage";
import CreatePortfolio from "./create";
import Login from "./login";
import Register from "./register";
import Dashboard from "./dashboard"; // Import the new Dashboard component

// Global CSS is imported here to ensure styling is applied everywhere.
import './style.css'; 

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Added New Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);