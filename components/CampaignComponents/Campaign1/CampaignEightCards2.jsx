
import React from 'react';
import '../../../styles/campaign/campaigneightcards2.css';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import PieChartIcon from '@mui/icons-material/PieChart';
import TerminalIcon from '@mui/icons-material/Terminal';
const CampaignEightCards2 = () => {
  const cards = [
    { icon: <PhoneForwardedIcon/>, heading: 'Call Forwarding and Routing', description: 'Efficiently redirecting incoming calls to the right person at the right time.' },
    { icon: <ShowChartIcon/>, heading: 'Auto Dialers', description: 'Enhance your agents productivity with automated dialers.' },
    { icon: <FaceRetouchingNaturalIcon/>, heading: 'Toll Free Numbers', description: 'Encourage more international callers as they will not be charged.' },
    { icon: <RadioButtonCheckedIcon/>, heading: 'Call Barging', description: 'Join an ongoing phone call to listen in or help out, provide support or guidance.' },
    { icon: <AddIcCallIcon/>, heading: 'Voicemail to Email  ', description: 'You can receive voicemail messages in the form of email attachments.' },
    { icon: <PieChartIcon/>, heading: 'Call Analytics and Reporting', description: 'Gives you detailed call reports which you can use to enhance performance.' },
    { icon: <TerminalIcon/>, heading: 'Mobile App', description: 'VoIP mobile apps enable internet-based calls, messaging, and file sharing.' },
    { icon: <LeakAddIcon/>, heading: 'Conference Calling', description: 'Allows multiple participants to join a single call over the internet, facilitating virtual meetings and group discussions.' },
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
