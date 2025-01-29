"use client"
import React from "react";
import './AiVoiceBenefits.css'; // Importing the CSS file
import CallCenterImage from "../../public/Assets/benefitva.png";
import Image from "next/image";
const AiBenefits = () => {
  const benefits = [
    {
      title: "Enhanced Customer Experience",
      description: "Deliver seamless interactions with features like voice chat APIs and programmable IVRs, building trust and loyalty.",
    },
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks using AI voice APIs, enabling teams to focus on more critical tasks.",
    },
    {
      title: "Global Connectivity",
      description: "Expand your reach with VoIP phone APIs and local or toll-free numbers, ensuring communication without boundaries.",
    },
    {
      title: "Cost Savings",
      description: "Reduce operational expenses with voice-over APIs, eliminating hardware and lowering call rates.",
    },
    {
      title: "Real-Time Insights",
      description: "Analyze call performance with real-time analytics, optimizing communication strategies.",
    },
  ];

  return (
    <section className="ai-benefits-container">
      <div className="ai-benefits-content">
        <div className="ai-benefits-header">
          <h2 className="ai-benefits-title">The Key Benefits of Phonology’s Voice API  </h2>
          {/* <p className="ai-benefits-subtitle">
            Leverage cutting-edge technology to transform user experiences and streamline operations.
          </p> */}
        </div>
        <div className="ai-benefits-list">
          {benefits.map((benefit, index) => (
            <div key={index} className="ai-benefits-item">
              <h3 className="ai-benefits-item-title">{benefit.title}</h3>
              <p className="ai-benefits-item-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="ai-benefits-image">
           <Image src={CallCenterImage} alt="AI Voice API" width={500} height={500} /> 
      </div>
    </section>
  );
};

export default AiBenefits;
