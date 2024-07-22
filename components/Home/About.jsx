import React from "react";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-section-container">
    
      <div className="about-section-image-container">
        <Image src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">Discover The Extraordinary </h1>
        <p className="primary-text">
          Phonology is vertical specialist and a leading provider of VoIP and IP
          Communications in India. We desire to connect millions over Internet
          Protocol, which in turn results in productive cost saving and gives
          them a substantial monetary advantage. As a complete Internet,
          Internet Telephony and VoIP solution provider, we work towards in
          building a network of subscribers all around the globe.{" "}
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" disabled>
            Learn More
          </button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
