import React from "react";
import "../../styles/aivoiceapi.css";
import CallCenterImage from "../../public/Assets/whatis.jpg";
import Image from "next/image";

const AIVoiceApiSubHeading = () => {
  return (
    <div className="aiVoiceApiContainer">
      <div className="aiVoiceApiText">
        <h2 className="aiVoiceApih2">
        What is a {" "}
          <span className="ltr-gradient">Voice API?</span>
        </h2>
        <p className="aiVoiceApiP">
        A Voice API is a powerful technology that enables developers to incorporate voice communication into apps or platforms using intuitive protocols. With Phonology’s Voice API, businesses can unlock a range of capabilities:

          <ul >
            <li className="voice-li">

            Make and Receive Calls            </li>
            <p className="voicep">
            Manage both inbound and outbound calls directly from your application.
            </p>
            <li className="voice-li">
            Automate Call Flows            </li>
            <p className="voicep">
            Use features like Programmable IVR and AI-powered call routing to optimize call management.
            </p>
            <li className="voice-li">
            Deliver Global Voice Services            </li>
            <p className="voicep">
            Access voice call APIs with a global reach, using local and toll-free numbers for seamless communication.
            </p>
        
            <p className="voicep">
            By integrating APIs for voice, businesses can create smarter systems for everything from voice chat APIs to voice assistant APIs. Phonology’s Voice API offers unmatched flexibility, enabling businesses to stay ahead in today’s digital-first world.            </p>    
          
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
