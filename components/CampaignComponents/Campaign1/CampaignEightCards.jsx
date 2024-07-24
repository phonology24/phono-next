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
    { icon: <WorkHistoryIcon/>, heading: 'Business Efficiency', description: 'Improve business efficiency by making calls that are quicker, clearer and cheaper.' },
    { icon: <SpaIcon/>, heading: 'CRM Integration', description: 'Integrate your VoIP calls to CRM to help manage all customer calls and information in one place.' },
    { icon: <SupportAgentIcon/>, heading: 'Customer Suport', description: 'The customer support team offers assistance to clients round the clock.' },
    { icon: <AttachMoneyIcon/>, heading: 'Cost Saving', description: 'Reduce costs with VoIP solutions that are scalable and flexible solutions.' },
    { icon: <AspectRatioIcon/>, heading: 'Scalability', description: 'You can add or remove lines as communication needs change.' },
    { icon: <FitbitIcon/>, heading: 'Security', description: 'Provides robust security by encrypting calls, verifying users and blocking hackers.' },
    { icon: <NatIcon/>, heading: 'Unified Communications', description: 'Combines all your communication tools into one single easy-to-use platform'},
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
