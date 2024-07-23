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
    { icon: <SettingsRemoteIcon/>, heading: 'Remote Work', description: 'Work from anywhere with clear and reliable VoIP calls.' },
    { icon: <WorkHistoryIcon/>, heading: 'Business Efficiency', description: 'Improving business efficiency by making calls quicker, clearer and cheaper.' },
    { icon: <SpaIcon/>, heading: 'CRM Integration', description: 'Easily manage all customer calls and information in one place.' },
    { icon: <SupportAgentIcon/>, heading: 'Customer Suport', description: 'The customer support team offers assistance to clients round the clock.' },
    { icon: <AttachMoneyIcon/>, heading: 'Cost Saving', description: 'Reduces costs with and scalable and flexible solutions.' },
    { icon: <AspectRatioIcon/>, heading: 'Scalability', description: 'Can add or remove lines as communication needs change.' },
    { icon: <FitbitIcon/>, heading: 'Security', description: 'Encrypts calls, verifies users, blocks hackers, prevents attacks.' },
    { icon: <NatIcon/>, heading: 'Unified Communications', description: 'Combines all your communication tools into one platform.'},
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
