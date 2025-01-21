import React from "react";
import "../../styles/aivoiceapi.css";
import CallCenterImage from "../../public/Assets/voiceapi.png";
import Image from "next/image";

const AIVoiceApiHeading = () => {
  return (
    <>
      <div className="ai-voice-api-content">
        {/* <iframe
          src="https://mybilling.phonology.in/supplementary/webrtc2/"
          name="iframe_a"
          height="600px"
          width="150%"
          title="Iframe Example"
          allow="autoplay; microphone; camera">
        </iframe> */}
        <div className="ai-voice-api-image">
          <Image src={CallCenterImage} alt="AI Voice API" />
        </div>
        <div className="ai-voice-api-text">
          <h1 className="ai-voice-api-heading-main">Phonology’s Voice API</h1>
          <p className="ai-voice-api-description">
            Powering Seamless Voice Communication
          </p>
          <p className="ai-voice-api-details">
            Enable Smarter, Scalable Voice Communication with Phonology’s Voice API.
            Phonology’s Voice API allows businesses to integrate cutting-edge voice 
            communication capabilities into their applications or platforms effortlessly.

            <br />
            <br />
            From managing voice calls and voice messages to implementing voice and SMS APIs,
           Phonology offers all the tools needed to simplify communication, improve efficiency,
            and deliver exceptional customer experiences. Scalable and reliable, our Voice API
             is designed to help your business stay ahead in a fast-evolving digital landscape.

          </p>
        </div>
      </div>
    </>
  );
};

export default AIVoiceApiHeading;
