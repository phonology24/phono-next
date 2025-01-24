import React from "react";
import "./VoicemailUseCases.css";
import Image from "next/image";
import image from "../../../../../public/Assets/bc.jpg"
const UseCaseComp = () => {
  return (
    <>
      <h4 className="usecase-h4">4 Use Case Scenarios for Phonology’s Voicemail</h4>
    <div className="usecase-container">
      <div className="usecase-card">
        <div className="usecase-header">
          {/* <h4>Conversational AI</h4> */}
        </div>
        <Image className="usecase-image" src="/Assets/bc.jpg" alt="Shop" width={500} height={500} />
        <h3 className="usecase-title">Busy Sales Professionals
        </h3>
        <p className="usecase-content">
        Sales executives and managers often engaged in meetings or on the move can rely on Voicemail to capture missed calls and follow up promptly.
        </p>
      </div>
      <div className="usecase-card row">
      <Image className="usecase-image" src="/Assets/abc.jpg" alt="Shop" width={400} height={500} />
      <div>
          <div className="usecase-header">
            {/* <h4>Payment</h4> */}
          </div>
          <h3 className="usecase-title">Global Teams </h3>
          <p className="usecase-content">
          Companies with international operations benefit from Voicemail’s round-the-clock functionality, enabling effective communication across time zones.

          </p>
        </div>
      </div>
      <div className="usecase-card row">
      <Image className="usecase-image" src={image} alt="Shop" width={400} height={500}/>
      <div>
          <div className="usecase-header">
            {/* <h4>Experience</h4> */}
          </div>
          <h3 className="usecase-title">Customer Support Departments
          </h3>
          <p className="usecase-content">
          Use Voicemail to ensure every customer inquiry is captured, even during peak hours or off-business hours, improving customer satisfaction.
          </p>
        </div>
      </div>
      <div className="usecase-card">
        <div className="usecase-header">
          {/* <h4>Rating</h4> */} 
        </div>
        <Image className="usecase-image" src={image} alt="Shop" width={500} height={500} />
        <h3 className="usecase-title">Small Businesses and Startups
        </h3>
        <p className="usecase-content">
        For growing teams with limited staff, Voicemail ensures that no call is left unattended, allowing you to scale your customer engagement efficiently.
</p> 
      </div>
    </div>
    </>
  );
};

export default UseCaseComp;
