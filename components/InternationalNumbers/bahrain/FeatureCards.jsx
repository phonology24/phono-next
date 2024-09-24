import React from 'react';
import '../../../styles/featurecards8.css';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SpaIcon from '@mui/icons-material/Spa';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import FitbitIcon from '@mui/icons-material/Fitbit';
import NatIcon from '@mui/icons-material/Nat';

const BahrainFeatureCards = () => {
  const cards = [
    { icon: <SettingsRemoteIcon/>, heading: 'Call Forwarding', description: 'Route incoming calls to any phone, mobile, or device globally, ensuring you never miss important communication.' },
    { icon: <WorkHistoryIcon/>, heading: 'IVR (Interactive Voice Response)', description: 'Automate call routing with customizable IVR menus that guide callers to the appropriate department or service.' },
    { icon: <SpaIcon/>, heading: 'Toll-Free and Local Number Options', description: 'Pick from toll-free or local numbers to enhance customer access and build local credibility.' },
    { icon: <SupportAgentIcon/>, heading: 'Voicemail and Call Recording', description: 'Enable voicemail and call recording for quality control, training, and missed call management.' },
    { icon: <AttachMoneyIcon/>, heading: 'SMS Capabilities', description: 'Support text messaging, allowing for communication beyond voice calls and offering more flexible customer interaction.' },
    { icon: <AspectRatioIcon/>, heading: 'Multiple Device Ringing', description: 'Have multiple devices ring simultaneously when a call comes in, making sure someone is always available to answer.' },
    { icon: <FitbitIcon/>, heading: 'Call Analytics & Reporting', description: 'Track and analyze call data in real-time to monitor performance and optimize customer service.' },
    { icon: <NatIcon/>, heading: 'Scalability', description: 'Easily scale up by adding additional virtual numbers as your business expands, without the need for physical infrastructure.' },
  ];

  return (
    <div className="feature-eight-cards-container">
      <h2 className="feature-heading8">Key Features</h2>
      <div className="feature-cards8">
        {cards.map((card, index) => (
          <div key={index} className="feature-card8">
            <div className="feature-icon8">{card.icon}</div>
            <h2>{card.heading}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BahrainFeatureCards;
