import React from "react";
import "../../styles/aivoiceapi.css";
import CallCenterImage from "../../public/Assets/voiceapi.png";
import Image from "next/image";

const AIVoiceApiSubHeading = () => {
  return (
    <div className="aiVoiceApiContainer">
      <div className="aiVoiceApiText">
        <h2 className="aiVoiceApih2">
          Why AI Companies Choose
          <br></br>{" "}
          <span className="ltr-gradient">Phonology’s Voice API</span>
        </h2>
        <p className="aiVoiceApiP">
          <ul >
            <li className="voice-li">
              Built for AI Systems
            </li>
            <p className="voicep">
              Our Voice API is optimized for integration with AI technologies, empowering conversational AI, virtual assistants, and machine learning platforms with natural and intelligent voice communication.
            </p>
            <li className="voice-li">
              Human-Like Voice Interactions
            </li>
            <p className="voicep">
              Equip your AI solutions with natural language processing (NLP) and text-to-speech (TTS) capabilities to deliver lifelike and engaging voice responses.
            </p>
            <li className="voice-li">
              Scalable Voice Solutions
            </li>
            <p className="voicep">
              Handle high call volumes effortlessly, ensuring smooth, uninterrupted communication for your AI-powered platforms.
            </p>
            <li className="voice-li">
              Global Accessibility
            </li>
            <p className="voicep">
              With multi-language support, Phonology’s Voice API helps AI companies expand globally, catering to users in multiple languages and accents.
            </p>
            <li className="voice-li">
              Developer-Friendly Integration
            </li>
            <p className="voicep">
              Enjoy fast deployment and customization with Phonology’s robust API documentation and support.                  </p>
          </ul>
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
