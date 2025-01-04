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
          We are passionate about revolutionizing the way businesses operate through the power of technology.
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
        <h3>We have rules to create a product start from scratch</h3>
        <p>
          Our products are designed with the user in mind, and are tailored to provide custom solutions for businesses of all sizes. Whether you're looking for cloud-based software or mobile applications, our products are intuitive, flexible, and designed to meet your specific needs.
        </p>
      </div>
    </section>
  );
};

export default AboutHeading;
