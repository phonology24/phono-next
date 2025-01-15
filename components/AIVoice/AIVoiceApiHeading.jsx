import React from "react";
import "../../styles/aivoiceapi.css";
import CallCenterImage from "../../public/Assets/ccsolution1.png";
import Image from "next/image";

const AIVoiceApiHeading = () => {
  return (
    <>
      <div className="ai-voice-api-content">
        <div className="ai-voice-api-image">
          <Image src={CallCenterImage} alt="AI Voice API" />
        </div>
        <div className="ai-voice-api-text">
          <h1 className="ai-voice-api-heading-main">AI Voice API Solutions</h1>
          <p className="ai-voice-api-description">
            Revolutionize Communication with AI-Driven Voice API Solutions
          </p>
          <p className="ai-voice-api-details">
            Are you ready to transform your communication strategy? 
            <br />
            Phonology’s AI Voice API delivers cutting-edge voice capabilities for businesses of all sizes.
            <br />
            Whether it’s automated voice responses, text-to-speech, or real-time analytics, our API makes integration seamless.
            Enhance customer interactions, reduce operational costs, and scale effortlessly as your business grows.
            With Phonology’s AI Voice API, innovation meets simplicity, ensuring your business stays ahead in a competitive landscape.
            Let’s redefine how you connect with your audience.
          </p>
        </div>
      </div>
    </>
  );
};

export default AIVoiceApiHeading;
