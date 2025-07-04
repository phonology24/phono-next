import React, { useEffect, useRef, useState } from "react";
import "../../styles/hero.css";
import Image from "next/image";
// @ts-ignore
import { VocalCallSDK } from "vocalcallsdk";
import HeroImage from "../../public/Assets/home-hero3.png";

const Hero = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const callSDKRef = useRef(null);

  // Initialize the VocalCallSDK when the component mounts
  useEffect(() => {
    const callSDK = new VocalCallSDK({
      agentId: "b1372001-c900-4bb6-ad15-a33eab46b3ee",
      callId: "a2bc5b39-00d2-49a6-bca4-ba9dc796d200",
      // Remove container since we're handling the button manually
      inactiveText: "Talk to AI",
      activeText: "Listening...",
      size: "medium",
    });

    callSDKRef.current = callSDK;

    // Cleanup on component unmount
    return () => {
      if (callSDKRef.current) {
        callSDKRef.current.destroy();
      }
    };
  }, []);

  const handleCallClick = () => {
    if (callSDKRef.current) {
      if (isCallActive) {
        // End the call
        callSDKRef.current.endCall();
        setIsCallActive(false);
      } else {
        // Start the call
        callSDKRef.current.startCall();
        setIsCallActive(true);
      }
    }
  };

  const Redirector = () => {
    window.open("https://app.watel.io/register", "_blank");
  };

  const RedirectorToDemo = () => {
    window.open("https://zfrmz.in/Mf9eaR6Y7oP8L83Dx25o", "_blank");
  };

  return (
    <div className="hero-container">
      <div className="hero-section-1">
        <div className="hero-content">
          <h1 className="hero-heading">
            Redefining Connectivity as a leading VoIP Service Provider
          </h1>
          <p className="hero-paragraph">
            Phonology brings you the future of connectivity with advanced VoIP
            solutions designed for performance, reliability, and cost-effectiveness. Transform your communication and unlock endless possibilities.
          </p>
          <button className="button-86" onClick={handleCallClick}>
            {isCallActive ? "Listening..." : "Talk to AI"}
          </button>
          <div className="hero-box">
            <div className="hero-box-header">
              <h4 className="hero-box-heading">
                Transform Engagement with Watel WhatsApp Business API Solutions
              </h4>
              <p className="hero-box-paragraph">
                Watel WhatsApp Business API solutions help you connect effortlessly with your customers. Automate replies, personalize interactions, and keep them engaged every step of the way.
              </p>
            </div>
            <div className="hero-box-footer">
              <button className="button-86" onClick={Redirector}>
                Get Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section-2">
        <Image
          src={HeroImage}
          alt="Placeholder"
          className="hero-image"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Hero;