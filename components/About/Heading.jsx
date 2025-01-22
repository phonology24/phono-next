import React from "react";
import "../../styles/heading.css";
import Image from "next/image";
import HeroImage from "../../public/Assets/home-hero3.png";

import PlaceHolderImage from "../../public/Assets/about.png";

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
          At Phonology, we believe that communication is the cornerstone of every successful business.
          For over 19 years, we’ve empowered organizations to connect seamlessly, innovate boldly,
          and grow exponentially. As pioneers in cloud telephony, VoIP, and SIP trunking solutions,
          we aim to redefine how businesses communicate in an ever-evolving digital world.

          <br />
          <br />
          What sets us apart is our unwavering commitment to crafting personalized solutions
          that effectively cater to our clients' unique needs. From startups striving to make
          their mark to global enterprises expanding across borders, we deliver scalable,
          secure, and cost-effective telecom solutions that evolve with your business.

          <br />
          <br />
          We go beyond being a service provider—we are your trusted partner in achieving success.
          Our dedicated team of experts is here to ensure that every call you make, every interaction
          you create, and every connection you build is flawless. With 24/7 support, state-of-the-art
          security, and cutting-edge technology, we guarantee reliability and excellence every step of the way.
        </p>
      </div>
    </section>
  );
};

export default AboutHeading;
