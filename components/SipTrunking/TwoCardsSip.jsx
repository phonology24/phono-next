import React from "react";
import "../../styles/siptrunking.css";
const TwoCardsSip = () => {
  return (
    <div className="two-cards-sip-container">
      <div className="left-section-sip">
        <div className="industry-quote">
          <h1 className="quote-heading">
            <span className="solved-sip">Benefits</span> of Phonology SIP
            Trunking
          </h1>
          <p className="sip-left-p">
          Let your customers keep their current phone system and phone number.
         SIP Trunking benefits include:
          </p>
        </div>
      </div>

      <div className="right-section-sip">
        <ul className="sip-ul">
          <li>Lower call charges.</li>
          <p className="sip-p">
          Propose limitless calling in the US & Canada or anywhere!          </p>
          <li>Lower monthly fees.</li>
          <p className="sip-p">
          Price per telephone line or cluster of minutes so your customers <br></br>  solely pay for what they need
          </p>
          <li>Increased flexibility.</li>
          <p className="sip-p">
          Add lines, re-route calls, and make modifications whenever you need.
                    </p>
        </ul>
      </div>
    </div>
  );
};

export default TwoCardsSip;
