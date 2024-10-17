import React from "react";
import '../../styles/uifn.css';

const UifnTwoCards = () => {
  return (
    <div className="uifn-two-cards">

      <div className="uifn-card uifn-right-card">
        <h3>How UIFN Toll-Free Numbers Work        </h3>
        <ul className="uifn-ul">
          <li className="uifn-li">
          <b>Global Access with a Single Number:</b> A UIFN toll-free number allows customers across multiple countries to connect with your business through one easy-to-remember number.

          </li>
          <li className="uifn-li">
          <b>Seamless Call Routing:</b> Calls are automatically routed to your chosen destination, such as a contact center or mobile device, ensuring uninterrupted communication.
          </li>
          <li className="uifn-li">
          <b>Multi-Country Coverage:</b> UIFN numbers are activated across multiple countries, giving your business a global presence and allowing customers to call for free.
          </li>
          <li className="uifn-li">
          <b>Centralized Call Management:</b> All incoming calls are managed from one platform, simplifying communication and streamlining customer support operations.</li>
          <li className="uifn-li">
          <b>Flexible Routing Based on Time Zones:</b> Calls can be routed according to time zones or language preferences, ensuring inquiries are handled efficiently by the right team.
          </li>
          <li className="uifn-li">
          <b>Real-Time Call Analytics:</b> Gain insights from call tracking and performance metrics to optimize customer service and improve communication strategies.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UifnTwoCards;
