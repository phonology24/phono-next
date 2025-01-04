import React from "react";
import "../../styles/heading.css";
import Image from "next/image";
import HeroImage from "../../public/Assets/home-hero3.png";

// Placeholder image URL
const PlaceHolderImage = "https://via.placeholder.com/800x400";

const AboutHeading = () => {
  return (
    <section className="about-heading">
      <div className="about-heading__content">
        <h2 className="about-heading__title">
        Our Story: Connecting Businesses, Empowering Growth, and Building Relationships Worldwide.
        </h2>
      </div>
      <div className="about-heading__image-container">
        {/* <div className="about-heading__badge">
          <span className="about-heading__year">2023</span>
        </div> */}
        <div className="about-heading__image-wrapper">
          <Image
            src={PlaceHolderImage}
            alt="Team working in an office"
            className="about-heading__image"
            width={1000}
            height={400}
          />
        </div>
        {/* <button className="about-heading__play-button">
          ▶
        </button> */}
      </div>
      <div className="about-heading__description">
        <h3>About Us</h3>
        <p>
        At Phonology, we believe communication is the cornerstone of every successful business. For over 19 years,
         we’ve been at the forefront of telecom innovation, delivering cutting-edge solutions like VoIP, cloud 
         telephony, SIP trunks, and hosted PBX to businesses across the globe. Our mission is simple: to redefine
          how the world communicates by providing seamless, scalable, and secure communication systems tailored
           to your needs. With a proven track record of excellence, we’re more than a service provider—we’re
            your trusted partner in transforming communication into a competitive advantage. Step into the 
            future of connection with Phonology.
        </p>
      </div>
    </section>
  );
};

export default AboutHeading;
