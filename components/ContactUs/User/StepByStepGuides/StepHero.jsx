import React from 'react';
import Link from 'next/link';
import './stepHero.css'; // Import the CSS file

const StepHero = () => {
  const cards = [
    {
      heading: "How to Set Up a SIP Trunk with Phonology?",
      subheading: "Subheading 1",
      description: "Set up your SIP trunk with Phonology effortlessly and enjoy enhanced call quality, flexible scalability, and cost-effective communication, all designed around your business goals.",
      url: "/contact-us/support/step-by-step-guides/sip-trunk-guidelines"
    },
    {
      heading: "Setting Up IVR for Your Business: A Simple and Effective Guide.",
      subheading: "Subheading 1",
      description: "Learn to create a professional IVR system that automates call handling and enhances customer service. Our guide walks you through the process with ease.",
      url: "/contact-us/support/step-by-step-guides/ivr-guidelines"
    },
    {
      heading: "How to Set Up a SIP Trunk with Phonology?",
      subheading: "Subheading 1",
      description: "Set up your SIP trunk with Phonology effortlessly and enjoy enhanced call quality, flexible scalability, and cost-effective communication, all designed around your business goals.",
      url: "/contact-us/support/step-by-step-guides/sip-trunk-guidelines"
    },
    {
      heading: "How to Set Up a SIP Trunk with Phonology?",
      subheading: "Subheading 1",
      description: "Set up your SIP trunk with Phonology effortlessly and enjoy enhanced call quality, flexible scalability, and cost-effective communication, all designed around your business goals.",
      url: "/contact-us/support/step-by-step-guides/sip-trunk-guidelines"
    },
    {
      heading: "How to Set Up a SIP Trunk with Phonology?",
      subheading: "Subheading 1",
      description: "Set up your SIP trunk with Phonology effortlessly and enjoy enhanced call quality, flexible scalability, and cost-effective communication, all designed around your business goals.",
      url: "/contact-us/support/step-by-step-guides/sip-trunk-guidelines"
    },
    {
      heading: "How to Set Up a SIP Trunk with Phonology?",
      subheading: "Subheading 1",
      description: "Set up your SIP trunk with Phonology effortlessly and enjoy enhanced call quality, flexible scalability, and cost-effective communication, all designed around your business goals.",
      url: "/contact-us/support/step-by-step-guides/sip-trunk-guidelines"
    },
    {
      heading: "How to Set Up a SIP Trunk with Phonology?",
      subheading: "Subheading 1",
      description: "Set up your SIP trunk with Phonology effortlessly and enjoy enhanced call quality, flexible scalability, and cost-effective communication, all designed around your business goals.",
      url: "/contact-us/support/step-by-step-guides/sip-trunk-guidelines"
    },


    // Add more cards as needed
  ];

  return (
    <div className="stepHero-card-container">
      <h1>Step By Step Guidelines</h1>
      {cards.map((card, index) => (
        <Link href={card.url} key={index}>
          <div className="stepHero-card">
            <h2 className="stepHero-card-heading">{card.heading}</h2>
            {/* <h4 className="stepHero-card-subheading">{card.subheading}</h4> */}
            <p className="stepHero-card-description">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StepHero;
