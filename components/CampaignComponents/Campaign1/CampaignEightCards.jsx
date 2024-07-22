import React from 'react';
import '../../../styles/campaign/campaigneightcards.css';

const CampaignEightCards = () => {
  const cards = [
    { icon: '🌟', heading: 'Card 1', description: 'This is the description for card' },
    { icon: '🔥', heading: 'Card 2', description: 'This is the description for card' },
    { icon: '💧', heading: 'Card 3', description: 'This is the description for card' },
    { icon: '⚡', heading: 'Card 4', description: 'This is the description for card' },
    { icon: '🌍', heading: 'Card 5', description: 'This is the description for card' },
    { icon: '💎', heading: 'Card 6', description: 'This is the description for card' },
    { icon: '🎯', heading: 'Card 7', description: 'This is the description for card' },
    { icon: '🚀', heading: 'Card 8', description: 'This is the description for card' },
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
