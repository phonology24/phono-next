import React, { useState } from "react";
import "../../styles/pricingform.css";
const PricingForm = () => {
  const [voiceProducts, setVoiceProducts] = useState([]);
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const voiceProductOptions = [
    "Voice Termination",
    "DID Numbers",
    "SMS",
    "BYOC",
    "Stir/Shaken Tool",
    "Spam Detector Tool",
    "Other",
  ];

  const handleVoiceProductClick = (option) => {
    if (voiceProducts.includes(option)) {
      setVoiceProducts(voiceProducts.filter((item) => item !== option));
    } else {
      setVoiceProducts([...voiceProducts, option]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="parent-wrapper">
      <h1 className="get-pricing-texth1">Get Your Price.</h1>
      <h5 className="get-pricing-textp">
        Our experts are here to help you every step of the way.Try our products
        to see how Phonology <br></br> can benefit your company.
      </h5>
      <div className="pricing-form-container">
        <form className="pricing-form" onSubmit={handleSubmit}>
          <div className="pricing-form-group">
            <label className="pricing-label">
              Which voice product would you like to know the pricing for?
            </label>
            <div className="radio-buttons">
              {voiceProductOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`pricing-button ${
                    voiceProducts.includes(option) ? "selected" : ""
                  }`}
                  onClick={() => handleVoiceProductClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="pricing-form-group">
            <input
              type="text"
              className="pricing-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
            />
          </div>

          <div className="pricing-form-group">
            <input
              type="text"
              className="pricing-input"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Contact Number"
            />
          </div>

          <div className="pricing-form-group">
            <input
              type="email"
              className="pricing-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className="pricing-form-group">
            <button type="submit" className="pricing-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="small-banner">
        <p>
          Do you have any questions about pricing? Don’t worry, we can help you
          solve them,<br></br> just feel free to write to us.
        </p>
      </div>
    </div>
  );
};

export default PricingForm;
