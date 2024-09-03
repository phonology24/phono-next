import React from 'react';
import '../../../styles/campaign/campaignbenefits.css';
import benefitImage from '../../../public/Assets/cisco-logo.png'; // Update the path as per your setup
import Image from 'next/image';

const benefits = [
  {
    title: "Benefit No. 1",
    description: "A few words about your product/offer. Focus on the benefits not the features. Explain how your product will improve your customer's life.",
    color: "#FFE081"
  },
  {
    title: "Benefit No. 2",
    description: "A few words about your product/offer. Focus on the benefits not the features. Explain how your product will improve your customer's life.",
    color: "#D3A3FF"
  },
  {
    title: "Benefit No. 3",
    description: "A few words about your product/offer. Focus on the benefits not the features. Explain how your product will improve your customer's life.",
    color: "#97E5D5"
  },
  {
    title: "Benefit No. 4",
    description: "A few words about your product/offer. Focus on the benefits not the features. Explain how your product will improve your customer's life.",
    color: "#97DFFB"
  }
];

const BenefitsComponent = () => {
  return (
    <div className="benefits-section">
      <div className="benefits-image">
        <Image src={benefitImage} alt="Benefit"  width={1000} height={1000}/>
      </div>
      <div className="benefits-list">
        <h2>We are offering</h2>
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <div className="benefit-circle" style={{ backgroundColor: benefit.color }}></div>
            <div className="benefit-content">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsComponent;
