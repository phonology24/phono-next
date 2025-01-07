import React from "react";
import "../../styles/heading.css";
import Image from "next/image";
import HeroImage from "../../public/Assets/home-hero3.png";

// Placeholder image URL
import PlaceHolderImage from  "../../public/Assets/about.jpg";

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
<br/>
          Our mission is rooted in understanding the dynamic needs of today’s businesses and crafting 
          solutions that meet them head-on. At Phonology, we emphasize innovation, reliability, 
          and a customer-first approach in everything we do. Whether you’re a budding startup 
          striving for recognition or a global enterprise expanding your reach, our advanced 
          communication solutions are designed to keep you ahead of the curve. From fostering 
          seamless team collaboration to delivering unparalleled customer interactions, we 
          empower your business to succeed. With around-the-clock support, cutting-edge security, 
          and technology built for tomorrow, Phonology ensures you remain connected, competitive,
           and ready for what’s next.
        </p>
      </div>
    </section>
  );
};

export default AboutHeading;
