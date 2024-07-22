import React from 'react';
import '../../../styles/campaign/campaigneightcards.css';

const CampaignEightCards = () => {
  const cards = [
    { icon: '🌟', heading: 'Remote Work', description: 'This is the description for card' },
    { icon: '🔥', heading: 'Business Efficiency', description: 'This is the description for card' },
    { icon: '💧', heading: 'CRM Integration', description: 'This is the description for card' },
    { icon: '⚡', heading: 'Customer Suport', description: 'This is the description for card' },
    { icon: '🌍', heading: 'Cost Saving', description: 'This is the description for card' },
    { icon: '💎', heading: 'Scalability', description: 'This is the description for card' },
    { icon: '🎯', heading: 'Improved Call Quality', description: 'This is the description for card' },
    { icon: '🚀', heading: 'Unified Communications', description: 'This is the description for card' },
  ];

  return (
    <div className="campaign-eight-cards-container">
      <h1 className="heading8">Benefits Of Using Our VoIP</h1>
      <div className="cards8">
        {cards.map((card, index) => (
          <div key={index} className="card8">
            <div className="icon8">{card.icon}</div>
            <h2>{card.heading}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampaignEightCards;
