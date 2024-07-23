import React from 'react';
import '../../../styles/campaign/campaigneightcards.css';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SpaIcon from '@mui/icons-material/Spa';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import FitbitIcon from '@mui/icons-material/Fitbit';
import NatIcon from '@mui/icons-material/Nat';
const CampaignEightCards = () => {
  const cards = [
    { icon: <SettingsRemoteIcon/>, heading: 'Remote Work', description: 'This is the description for card' },
    { icon: <WorkHistoryIcon/>, heading: 'Business Efficiency', description: 'This is the description for card' },
    { icon: <SpaIcon/>, heading: 'CRM Integration', description: 'This is the description for card' },
    { icon: <SupportAgentIcon/>, heading: 'Customer Suport', description: 'This is the description for card' },
    { icon: <AttachMoneyIcon/>, heading: 'Cost Saving', description: 'This is the description for card' },
    { icon: <AspectRatioIcon/>, heading: 'Scalability', description: 'This is the description for card' },
    { icon: <FitbitIcon/>, heading: 'Improved Call Quality', description: 'This is the description for card' },
    { icon: <NatIcon/>, heading: 'Unified Communications', description: 'This is the description for card' },
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
