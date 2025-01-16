import React from "react";
import "./UseCasesAI.css";

const UseCaseComp = () => {
  return (
    <>
      <h4 className="usecase-h4">Use Cases</h4>
    <div className="usecase-container">
      <div className="usecase-card">
        <div className="usecase-header">
          {/* <h4>Conversational AI</h4> */}
        </div>
        <img className="usecase-image" src="assets/belgium.png" alt="Shop" />
        <h3 className="usecase-title">Conversational AI</h3>
        <p className="usecase-content">
        Add seamless voice interactions to your chatbots and customer service applications.
        </p>
      </div>
      <div className="usecase-card row">
        <img className="usecase-image" src="assets/belgium.png" alt="Payment" />
        <div>
          <div className="usecase-header">
            {/* <h4>Payment</h4> */}
          </div>
          <h3 className="usecase-title">Virtual Assistants</h3>
          <p className="usecase-content">
          Power responsive and human-like virtual assistants for improved customer engagement.

          </p>
        </div>
      </div>
      <div className="usecase-card row">
        <img className="usecase-image" src="assets/belgium.png" alt="Experience" />
        <div>
          <div className="usecase-header">
            {/* <h4>Experience</h4> */}
          </div>
          <h3 className="usecase-title">IoT and Smart Devices</h3>
          <p className="usecase-content">
          Integrate voice commands and interactions into IoT applications to improve user convenience and functionality.
          </p>
        </div>
      </div>
      <div className="usecase-card">
        <div className="usecase-header">
          {/* <h4>Rating</h4> */}
        </div>
        <img className="usecase-image" src="assets/belgium.png" alt="Rating" />
        <h3 className="usecase-title">AI Model Training</h3>
        <p className="usecase-content">
        Use real-world data from voice interactions to refine AI learning algorithms.

</p>
      </div>
    </div>
    </>
  );
};

export default UseCaseComp;
