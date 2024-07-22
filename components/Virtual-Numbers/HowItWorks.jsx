// SelfServiceBanner.js
import React from "react";
import YourImage from "../../Assets/polygon-scatter-haikei.png";
import "../../styles/virtualnumbers.css";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="virtual-numbers-banner">
      <div className="content-container">
        <div className="text-content">
          <h2>How it works</h2>
          <p className="subheading">
            Our DID purchase process is simple, and you can get account up and
            running in minutes.
          </p>
          <div className="four-bold-text-fields">
            <p className="bold-text">1. Sign up for a Free account</p>
            <p className="paragraph">
               Create a trial account on our self-service portal.
            </p>
            <p className="bold-text">2. Get Phone Numbers</p>
            <p className="paragraph">
              Phonology offers Direct Inward Dialing (DIDs) in over 70
              countries. We give you access to all at market leading rates.{" "}
            </p>
            <p className="bold-text">3. Get ready to make calls!</p>
            <p className="paragraph">
  That’s it! Once activation is complete, you&apos;ll be ready to receive calls to your new Phonology number.

            </p>
          </div>
        </div>
        <div className="image-container">
          <Image src={YourImage} alt="Your Image" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
