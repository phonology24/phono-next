// VirtualNumberCards.js
import React from "react";
import "../../styles/messagingservices.css";

const MessagingServicesCards = () => {
  return (
    <div className="messaging-services-cards-container">
      <h2 className="ms-main-heading">Get Messaging for</h2>
      <div className="ms-section-container">
        <div className="ms-card">
          <h2 className="ms-card-heading">Notifications</h2>
          <p className="ms-card-paragraph">
          Guarantee that important dates, appointments, deliveries, and renewals are always remembered and never missed.
          </p>
          <ul className="ms-bullet-points">
            {/* <li>Bullet Point 1</li>
            <li>Bullet Point 2</li>
            <li>Bullet Point 3</li> */}
          </ul>
        </div>
        <div className="ms-card">
          <h2 className="ms-card-heading">OTP Verification</h2>
          <p className="ms-card-paragraph">
          Elevate user authentication and security measures by implementing one-time passwords and two-factor authentication for enhanced protection.
          </p>
          <ul className="ms-bullet-points">
            {/* <li>Bullet Point 1</li>
            <li>Bullet Point 2</li>
            <li>Bullet Point 3</li> */}
          </ul>
        </div>
        <div className="ms-card">
          <h2 className="ms-card-heading">Marketing</h2>
          <p className="ms-card-paragraph">
          Increase engagement by implementing special offers, loyalty promotions, and discounts to drive business growth.
          </p>
          <ul className="ms-bullet-points">
            {/* <li>Bullet Point 1</li>
            <li>Bullet Point 2</li>
            <li>Bullet Point 3</li> */}
          </ul>
        </div>
        <div className="ms-card">
          <h2 className="ms-card-heading">Support</h2>
          <p className="ms-card-paragraph">
          Efficiently streamline customer support processes by effectively managing tickets and providing timely updates to enhance overall customer satisfaction.
          </p>
          <ul className="ms-bullet-points">
            {/* <li>Bullet Point 1</li>
            <li>Bullet Point 2</li>
            <li>Bullet Point 3</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MessagingServicesCards;