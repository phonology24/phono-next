
import React from 'react';
import '../../../styles/campaign/campaigneightcards2.css';

const CampaignEightCards2 = () => {
  const cards = [
    { icon: '📚', heading: 'Education', description: 'Empower yourself with knowledge through our comprehensive courses.' },
    { icon: '💼', heading: 'Career', description: 'Boost your professional growth with our career development programs.' },
    { icon: '🌿', heading: 'Environment', description: 'Join us in making a positive impact on our planet.' },
    { icon: '💡', heading: 'Innovation', description: 'Explore the latest trends and innovations in technology.' },
    { icon: '💪', heading: 'Fitness', description: 'Stay fit and healthy with our personalized fitness plans.' },
    { icon: '🍔', heading: 'Food', description: 'Discover delicious recipes and culinary tips.' },
    { icon: '✈️', heading: 'Travel', description: 'Plan your next adventure with our travel guides and tips.' },
    { icon: '🎨', heading: 'Art', description: 'Unleash your creativity with our art and design resources.' },
  ];

  return (
    <div className="campaign-eight-cards-container82">
      <h1 className="heading82">Our Features</h1>
      <div className="cards82">
        {cards.map((card, index) => (
          <div key={index} className="card82">
            <div className="icon82">{card.icon}</div>
            <h2>{card.heading}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampaignEightCards2;
