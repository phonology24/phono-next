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
      <h2 className="card-heading">{heading}</h2>
      <p className="card-paragraph">{paragraph}</p>
    </div>
  </div>
);

const SixTextCards = () => {
  const cardsData = [
    { logo: <ApiIcon />, heading: 'One API', paragraph: 'Harness the power of our robust API to effortlessly connect with your audience across various channels. With just one API, unlock the potential to engage customers on their preferred platforms seamlessly.' },
    { logo: <PublicIcon />, heading: 'Global Coverage', paragraph: 'Experience dependable coverage worldwide, guaranteeing that your messages reach your audience no matter where they are. Expand your reach and make a local impact with our extensive global coverage.' },
    { logo: <UpcomingIcon />, heading: 'Multiple Channels', paragraph: 'Embrace the convenience of managing 15 different messaging apps all in one place. Whether its SMS, WhatsApp, Viber, Telegram, Facebook Messenger, and more, streamline your communication strategy with ease.' },
    { logo: <LayersIcon />, heading: 'Automatic Failover', paragraph: 'Establish automatic failover to ensure uninterrupted communication with your customers. Our flexible failover system guarantees that your messages always find their way, even in challenging scenarios, providing reliability and continuity.' },
    { logo: <SmartToyIcon />, heading: 'ChatBots', paragraph: 'Elevate customer engagement with intelligent ChatBots. Automate responses, manage routine queries, and craft personalized interactions, delivering a seamless and efficient experience for your users.' },
    { logo: <SupportAgentIcon  />, heading: 'Support 24/7', paragraph: 'Our 24x7 customer support is committed to providing assistance whenever you need it. Rest easy, knowing that our dedicated team is here to help you navigate any challenges that may arise. Your success is our priority.' },
  ];

  return (
    <div className="six-text-cards-section">
      <h2 className="section-heading">Why Choose Phonology's <span className='ltr-gradient'>Omni-Channel</span></h2>
      <div className="six-text-cards-container">
        {cardsData.map((card, index) => (
          <TextCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default SixTextCards;