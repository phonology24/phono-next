
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
    { icon: <PhoneForwardedIcon/>, heading: 'Call Forwarding and Routing', description: 'Empower yourself with knowledge through our comprehensive courses.' },
    { icon: <ShowChartIcon/>, heading: 'Call Barging', description: 'Boost your professional growth with our career development programs.' },
    { icon: <FaceRetouchingNaturalIcon/>, heading: 'Auto- Attendant', description: 'Join us in making a positive impact on our planet.' },
    { icon: <RadioButtonCheckedIcon/>, heading: 'Call Recording', description: 'Explore the latest trends and innovations in technology.' },
    { icon: <AddIcCallIcon/>, heading: 'Conference Calling', description: 'Stay fit and healthy with our personalized fitness plans.' },
    { icon: <LeakAddIcon/>, heading: 'Integration With CRM', description: 'Discover delicious recipes and culinary tips.' },
    { icon: <PieChartIcon/>, heading: 'Call Analytics and Reporting', description: 'Plan your next adventure with our travel guides and tips.' },
    { icon: <TerminalIcon/>, heading: 'Mobile App', description: 'Unleash your creativity with our art and design resources.' },
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
