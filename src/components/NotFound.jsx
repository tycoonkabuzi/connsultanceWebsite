// src/components/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/assets/logoGGS.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <img src={logo} alt="Company Logo" className="notfound-logo" />
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <button className="btn-back" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
