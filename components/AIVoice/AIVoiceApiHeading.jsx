import React from "react";
import "../../styles/aivoiceapi.css";
import CallCenterImage from "../../public/Assets/voiceapi.png";
import Image from "next/image";

const AIVoiceApiHeading = () => {
  return (
    <>
      <div className="ai-voice-api-content">
        <div className="ai-voice-api-image">
          <Image src={CallCenterImage} alt="AI Voice API" />
        </div>
        <div className="ai-voice-api-text">
          <h1 className="ai-voice-api-heading-main">Phonology’s AI Voice API</h1>
          <p className="ai-voice-api-description">
            Elevating AI Platforms with Intelligent Communication
          </p>
          <p className="ai-voice-api-details">
            Phonology’s Voice API empowers AI companies with intelligent voice capabilities
            that integrate seamlessly into AI-driven platforms. Designed to complement
            advanced technologies like conversational AI, virtual assistants, and
            machine learning models, our API delivers natural language processing (NLP),
            real-time speech recognition, and text-to-speech (TTS) features for lifelike
            interactions.
            <br/>
            <br/>
             With support for multilingual communication, intelligent call
            routing, and actionable call analytics, Phonology’s Voice API enhances user
            engagement, streamlines operations, and enables global scalability. Trusted
            for its reliability and developer-friendly integration, our solution equips
            AI companies with the tools to create smarter, more efficient, personalized
            communication experiences.
          </p>
        </div>
      </div>
    </>
  );
};

export default AIVoiceApiHeading;
