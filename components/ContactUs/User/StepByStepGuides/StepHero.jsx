import React from 'react';
import Link from 'next/link';
import './stepHero.css';
import Image from 'next/image';

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
      heading: "How to Activate and Manage Virtual Numbers?",
      subheading: "Subheading 1",
      description: "Discover the simple steps to activate and manage virtual numbers, enabling your business to connect effortlessly with customers anywhere.",
      url: "/contact-us/support/step-by-step-guides/virtual-number-guidelines"
    },
    {
      heading: "How to Set Up and Use Call Recording for Your Team?",
      subheading: "Subheading 1",
      description: "Set up and utilize call recording to boost team efficiency and maintain compliance. Discover how to activate, access, and maximize recordings for training and quality improvement.",
      url: "/contact-us/support/step-by-step-guides/call-record-guidelines"
    },
    {
      heading: "How to Set Up Voicemail and Manage Messages for Your Business?",
      subheading: "Subheading 1",
      description: "Learn to activate voicemail, create personalized messages, and retrieve recorded calls with ease, keeping your business communication smooth and professional.",
      url: "/contact-us/support/step-by-step-guides/voicemail-guidelines"
    },
    {
      heading: "Customizing Call Queues for Better Customer Experience.",
      subheading: "Subheading 1",
      description: "Efficiently manage incoming calls and enhance customer experiences with customized call queues. Learn the steps to ensure seamless call handling for your business.",
      url: "/contact-us/support/step-by-step-guides/call-queue-guidelines"
    },
    {
      heading: "How to Monitor Call Quality and Improve Performance.",
      subheading: "Subheading 1",
      description: "Learn to evaluate call quality and resolve issues quickly with monitoring tools and analytics. Optimize your communication systems for consistent, high-quality performance.",
      url: "/contact-us/support/step-by-step-guides/call-quality-monitor-guides"
    },


  ];
  return (
    <div className="stepHero-container">
      <div className="stepHero-image-container">
      <Image
  src="/Assets/steps-bg.jpg"
  alt="Step By Step Guide"
  className="stepHero-image"
  layout="fill"
  objectFit="cover" 
/>

      </div>

      <div className="stepHero-card-wrapper">
        <h1 className="stepHero-title">Step By Step Guidelines</h1>
        {cards.map((card, index) => (
          <Link href={card.url} key={index}>
            <div className="stepHero1-card">
              <h2 className="stepHero-card-heading">{card.heading}</h2>
              <p className="stepHero-card-description">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StepHero;
