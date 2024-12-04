import React from "react";
import "../styles/utils/LoadingSpinner.css"; // Add appropriate styling file

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
