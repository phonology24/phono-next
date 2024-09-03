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
    { icon: <SettingsRemoteIcon/>, heading: 'Call Forwarding and Routing', description: 'Seamlessly direct calls to the right person or device, making sure there are no missed connections.' },
    { icon: <WorkHistoryIcon/>, heading: 'Voicemail to Email', description: 'Receive your voicemails directly in your inbox for easy access and quick response.' },
    { icon: <SpaIcon/>, heading: 'Auto-Attendant', description: 'Automate call handling with a professional virtual receptionist that directs callers efficiently.' },
    { icon: <SupportAgentIcon/>, heading: 'Call Recording', description: 'Capture and store important conversations for quality assurance, training, or compliance purposes.' },
    { icon: <AttachMoneyIcon/>, heading: 'Conference Calling', description: ': Host virtual meetings effortlessly with crystal-clear conference calling capabilities.' },
    { icon: <AspectRatioIcon/>, heading: 'Call Analytics and Reporting', description: 'You can gain insights into call performance with detailed analytics and reporting tools.' },
    { icon: <FitbitIcon/>, heading: 'Integration with CRM', description: ': Enhance customer interactions by integrating calls directly with your CRM system.' },
    { icon: <NatIcon/>, heading: 'Mobile App', description: 'Stay connected on the go with a mobile app that brings your business communication to your fingertips.'},
  ];

  return (
    <div className="campaign-eight-cards-container">
      <h2 className="heading8">Features We Offer</h2>
      <div className="cards8">
        {cards.map((card, index) => (
          <div key={index} className="card8">
            <div className="icon8">{card.icon}</div>
            <h3>{card.heading}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <button className='features-button'>Apply Now</button>
    </div>
  );
}

export default CampaignEightCards;
