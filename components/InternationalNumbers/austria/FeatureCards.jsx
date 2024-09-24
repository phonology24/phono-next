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
import Grid3x3OutlinedIcon from '@mui/icons-material/Grid3x3Outlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
const AustriaFeatureCards = () => {
  const cards = [
    { icon: <SettingsRemoteIcon/>, heading: 'Call Forwarding', description: 'Route incoming calls to any phone, mobile, or device globally, ensuring you never miss important communication.' },
    { icon: <WorkHistoryIcon/>, heading: 'IVR (Interactive Voice Response)', description: 'Automate call routing with customizable IVR menus that guide callers to the appropriate department or service.' },
    { icon: <SpaIcon/>, heading: 'Toll-Free and Local Number Options', description: 'Pick from toll-free or local numbers to enhance customer access and build local credibility.' },
    { icon: <SupportAgentIcon/>, heading: 'Voicemail and Call Recording', description: 'Enable voicemail and call recording for quality control, training, and missed call management.' },
    { icon: <AttachMoneyIcon/>, heading: 'SMS Capabilities', description: 'Support text messaging, allowing for communication beyond voice calls and offering more flexible customer interaction.' },
    { icon: <AspectRatioIcon/>, heading: 'Multiple Device Ringing', description: 'Have multiple devices ring simultaneously when a call comes in, making sure someone is always available to answer.' },
    { icon: <FitbitIcon/>, heading: 'Call Analytics & Reporting', description: 'Track and analyze call data in real-time to monitor performance and optimize customer service.' },
    { icon: <NatIcon/>, heading: 'Scalability', description: 'Easily scale up by adding additional virtual numbers as your business expands, without the need for physical infrastructure.' },
    { icon: <Grid3x3OutlinedIcon/>, heading: 'Customizable Caller ID', description: 'Choose the caller ID displayed when making outbound calls, helping you present a local or professional identity to the recipient.' },
    { icon: <SubscriptionsOutlinedIcon/>, heading: 'Call Queuing', description: 'Manage high call volumes efficiently by placing incoming calls in a queue, ensuring no call is missed during busy periods.' },
    { icon: <BlockOutlinedIcon/>, heading: 'Call Blocking and Filtering', description: 'Set rules to block unwanted calls or filter specific numbers, reducing spam and enhancing security.' },
    { icon: <AvTimerOutlinedIcon/>, heading: 'Time-Based Routing', description: 'Automatically route calls based on specific time zones or business hours, ensuring calls are handled at the right time.' },
    { icon: <ArchitectureOutlinedIcon/>, heading: 'Geo-Fencing', description: 'Set geographic restrictions to ensure calls are routed to specific regions or agents based on the caller’s location.' },
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

export default AustriaFeatureCards;
