// SelfServiceBanner.js
import React from "react";
import YourImage from "../../Assets/polygon-scatter-haikei.png";
import "../../styles/voice-termination.css";
import Image from "next/image";

const SelfServiceBanner = () => {
  return (
    <div className="self-service-banner">
      <div className="content-container">
        <div className="text-content">
          <h2 className="text-contenth2">
            Powerful features of the self-service portal
          </h2>
          <p className="subheading">
            Our feature-rich, mobile compatible, user-friendly, account portal
            empowers you to run your business the way you want.
          </p>
          <div className="four-bold-text-fields">
            <p className="bold-text">Order and provision DIDs</p>
            <p className="bold-text">Change IPs in just a few simple clicks </p>
            <p className="bold-text">Set up routing options</p>
            <p className="bold-text">Choose local POPs</p>
          </div>
        </div>
        <div className="image-container-vn">
          <Image src={YourImage} alt="Your Image" />
        </div>
      </div>
    </div>
  );
};

export default SelfServiceBanner;
