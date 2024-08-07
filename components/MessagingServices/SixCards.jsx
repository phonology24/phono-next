import React from 'react';
import '../../styles/messagingservices.css';
import ApiIcon from '@mui/icons-material/Api';
import PublicIcon from '@mui/icons-material/Public';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import LayersIcon from '@mui/icons-material/Layers';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const TextCard = ({ logo, heading, paragraph }) => (
  <div className="text-card">
    {logo && <div className="card-logo">{logo}</div>}
    <div className="card-content">
      <h3 className="card-heading">{heading}</h3>
      <p className="card-paragraph">{paragraph}</p>
    </div>
  </div>
);

const SixTextCards = () => {
  const cardsData = [
    { logo: <ApiIcon />, heading: 'One API', paragraph: 'Use our robust API power to connect with audiences across various channels effortlessly. With this one API, unlock engaging potentials on their preferred platforms effortlessly. ' },
    { logo: <PublicIcon />, heading: 'Global Coverage', paragraph: 'Experience worldwide coverage where messages reach your audience no matter where they are. Create a local presence with our wide-reaching global coverage.' },
    { logo: <UpcomingIcon />, heading: 'Multiple Channels', paragraph: 'Manage 15 different messaging apps in one place. Streamline your communication strategies with SMS, WhatsApp, Viber, Telegram, Facebook Messenger and other applications.' },
    { logo: <LayersIcon />, heading: 'Automatic Failover', paragraph: 'Implement automatic failover for uninterrupted communication with customers. Ensure messages find their way, even in challenging scenarios, for reliability and continuity.' },
    { logo: <SmartToyIcon />, heading: 'ChatBots', paragraph: 'Improve customer engagement with Smart ChatBots. You can automate responses, manage queries, and create interactions for efficient experiences.' },
    { logo: <SupportAgentIcon  />, heading: 'Support 24/7', paragraph: 'Our 24x7 customer support is dedicated to assisting when you need it. Navigate challenges knowing our team is here to help for your success.' },
  ];

  return (
    <div className="six-text-cards-section">
      <h2 className="section-heading">Why Choose Phonology&apos;s <span className='ltr-gradient'>Omni-Channel?</span></h2>
      <div className="six-text-cards-container">
        {cardsData.map((card, index) => (
          <TextCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default SixTextCards;
