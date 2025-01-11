import React from 'react';
import './stepHero.css'; // Import the CSS file

const StepHero = () => {
  const cards = [
    {
      heading: "Card 1",
      subheading: "Subheading 1", 
      description: "This is the description for Card 1.",
    },
    {
      heading: "Card 2",
      subheading: "Subheading 2",
      description: "This is the description for Card 2.",
    },
    {
      heading: "Card 3",
      subheading: "Subheading 3",
      description: "This is the description for Card 3.",
    },
  ];

  return (
    <div className="stepHero-card-container">
     <h1>Step By Step Guidelines</h1>
      {cards.map((card, index) => (
        <div className="stepHero-card" key={index}>
          <h2 className="stepHero-card-heading">{card.heading}</h2>
          <h4 className="stepHero-card-subheading">{card.subheading}</h4>
          <p className="stepHero-card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StepHero;
