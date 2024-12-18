import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import "../../styles/hero.css";
import Image from "next/image";

import HeroImage from "../../public/Assets/home-hero3.png"
const Hero = () => {

  const Redirector = () => {
    window.open("https://app.watel.io/register", "_blank");
  };

  const RedirectorToDemo= ()=> {
    window.open("https://zfrmz.in/Mf9eaR6Y7oP8L83Dx25o", "_blank");

  }
  return (

    <div className="hero-container">
      <div className="hero-section-1">
        <div className="hero-content">
          <h1 className="hero-heading">Redefining Connectivity as a leading VoIP Service Provider</h1>
          <p className="hero-paragraph">
            Phonology brings you the future of connectivity with advanced VoIP solutions designed for performance,
            reliability, and cost-effectiveness. Transform your communication and unlock endless possibilities.
          </p>
          <button className="button-85" onClick={RedirectorToDemo}>Book Your Demo Now</button>
          <div className="hero-box">
            <div className="hero-box-header">
              {/* <Image className="hero-icon" /> */}
              <h4 className="hero-box-heading">Transform Engagement with Watel’s WhatsApp Business API Solutions
              </h4>
              <p className="hero-box-paragraph">
              Watel’s WhatsApp Business API solutions help you connect effortlessly with your customers. Automate replies, personalize interactions, and keep them engaged every step of the way.
              </p>
            </div>
            <div className="hero-box-footer">
              {/* <span><PublicIcon className="span-icon" />Point 1</span>
              <span><PublicIcon className="span-icon" />Point 2</span>
              <span><PublicIcon className="span-icon" />Point 3</span> */}
              <button className="button-86" onClick={Redirector}>Get Free Trial</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section-2">
        <Image
          src={HeroImage}
          alt="Placeholder"
          className="hero-image" width={1000} height={1000}
        />
      </div>
    </div>
  );
};

export default Hero;
