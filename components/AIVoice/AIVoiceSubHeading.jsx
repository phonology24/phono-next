import React from "react";
import "../../styles/aivoiceapi.css";
import CallCenterImage from "../../public/Assets/ccsolution1.png";
import Image from "next/image";

const AIVoiceApiSubHeading = () => {
  return (
    <div className="aiVoiceApiContainer">
      <div className="aiVoiceApiText">
        <h2 className="aiVoiceApih2">
          Transform Communication with <br></br>{" "}
          <span className="ltr-gradient">Innovation & Intelligence.</span>
        </h2>
        <p className="aiVoiceApiP">
          Our AI-powered voice API solutions are designed to enhance communication with unmatched precision and efficiency.
          Seamlessly integrate AI capabilities into your existing systems, empowering your team with text-to-speech, voice recognition, and real-time analytics.
          <br></br>{" "}
          Leverage intelligent routing and scalable APIs to manage high call volumes without compromising quality. Phonology ensures top-tier security with advanced encryption and robust authentication protocols.
          As your business evolves, our solutions adapt dynamically, providing you with a flexible and future-ready communication framework.
        </p>
      </div>
      <div className="aiVoiceApiImage">
        <Image
          src={CallCenterImage}
          alt="AI Voice API"
          style={{ width: "100%", height: "auto", borderRadius: "17px" }}
        />
      </div>
    </div>
  );
};

export default AIVoiceApiSubHeading;
