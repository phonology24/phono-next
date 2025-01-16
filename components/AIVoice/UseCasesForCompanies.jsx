import React from "react";
import "./UseCasesAI.css";

const UseCaseComp = () => {
  return (
    <div className="usecase-container">
      <div className="usecase-card">
        <div className="usecase-header">
          <h4>Shop</h4>
        </div>
        <img className="usecase-image" src="assets/belgium.png" alt="Shop" />
        <h3 className="usecase-title">Easy & convenient to use</h3>
        <p className="usecase-content">
          In id sed etiam diam lacus fames consequat eu accumsan.
        </p>
      </div>
      <div className="usecase-card row">
        <div className="usecase-header">
          <h4>Payment</h4>
        </div>
        <img className="usecase-image" src="assets/belgium.png" alt="Shop" />
        <h3 className="usecase-title">Easy, complete & secure transactions</h3>
        <p className="usecase-content">
          Potenti tellus iaculis. Potenti tellus iaculis.
        </p>
      </div>
      <div className="usecase-card">
        <div className="usecase-header">
          <h4>Experience</h4>
        </div>
        <img className="usecase-image" src="assets/belgium.png" alt="Shop" />
        <h3 className="usecase-title">A pleasant shopping experience</h3>
        <p className="usecase-content">
          Potenti tellus iaculis. Potenti tellus iaculis.
        </p>
      </div>
      <div className="usecase-card row">
        <div className="usecase-header">
          <h4>Rating</h4>
        </div>
        <img className="usecase-image" src="assets/belgium.png" alt="Shop" />
        <h3 className="usecase-title">Be the best for you</h3>
        <p className="usecase-content">
          Potenti tellus iaculis. Potenti tellus iaculis.
        </p>
      </div>
    </div>
  );
};

export default UseCaseComp;
