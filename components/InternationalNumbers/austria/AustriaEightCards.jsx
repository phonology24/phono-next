import React from 'react';
import '../../../styles/internationalCards8.css';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SpaIcon from '@mui/icons-material/Spa';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import FitbitIcon from '@mui/icons-material/Fitbit';
import NatIcon from '@mui/icons-material/Nat';

const AustriaEightCards = () => {
  const cards = [
    { icon: <SettingsRemoteIcon/>, heading: 'Remote Work', description: 'Work from anywhere with clear and reliable VoIP calls.' },
    { icon: <WorkHistoryIcon/>, heading: 'Business Efficiency', description: 'Improve business efficiency by making calls that are quicker, clearer and cheaper.' },
    { icon: <SpaIcon/>, heading: 'CRM Integration', description: 'Integrate your VoIP calls to CRM to help manage all customer calls and information in one place.' },
    { icon: <SupportAgentIcon/>, heading: 'Customer Suport', description: 'Clients will receive continuous, robust support from our customer service team at all hours.' },
    { icon: <AttachMoneyIcon/>, heading: 'Cost Saving', description: 'Reduces costs with and scalable and flexible solutions.' },
    { icon: <AspectRatioIcon/>, heading: 'Scalability', description: 'You can add or remove lines as communication needs change.' },
    { icon: <FitbitIcon/>, heading: 'Security', description: 'Encrypts calls, verifies users, blocks hackers, prevents attacks.' },
    { icon: <NatIcon/>, heading: 'UCaaS', description: 'Brings together all your different communication tools into one simple system.'},
  ];

  return (
    <div className="international-eight-cards-container">
      <h1 className="international-heading8">Benefits Of Using Our VoIP</h1>
      <div className="international-cards8">
        {cards.map((card, index) => (
          <div key={index} className="international-card8">
            <div className="international-icon8">{card.icon}</div>
            <h2>{card.heading}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AustriaEightCards;
