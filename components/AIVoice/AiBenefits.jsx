import React from "react";
import './AiVoiceBenefits.css'; // Importing the CSS file
import CallCenterImage from "../../public/Assets/ccsolution1.png";
import Image from "next/image";
const AiBenefits = () => {
  const benefits = [
    {
      title: "Smarter Interactions",
      description: "Create lifelike conversations that improve user engagement and satisfaction.",
    },
    {
      title: "Enhanced AI Applications",
      description: "Add intelligent voice capabilities to virtual assistants, chatbots, and smart devices.",
    },
    {
      title: "Real-Time Adaptability",
      description: "Use call data insights to refine AI systems and improve learning models.",
    },
    {
      title: "Global Reach",
      description: "Cater to a diverse user base with multilingual voice support.",
    },
    {
      title: "Cost Efficiency",
      description: "Automate repetitive tasks, reducing operational costs while maintaining high-quality interactions.",
    },
  ];

  return (
    <section className="ai-benefits-container">
      <div className="ai-benefits-content">
        <div className="ai-benefits-header">
          <h2 className="ai-benefits-title">Benefits of AI-Driven Solutions</h2>
          <p className="ai-benefits-subtitle">
            Leverage cutting-edge technology to transform user experiences and streamline operations.
          </p>
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
