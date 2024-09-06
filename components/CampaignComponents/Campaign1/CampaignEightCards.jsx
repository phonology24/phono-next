import React from 'react';
import '../../../styles/campaign/campaigneightcards.css';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import VoicemailOutlinedIcon from '@mui/icons-material/VoicemailOutlined';
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import InstallMobileOutlinedIcon from '@mui/icons-material/InstallMobileOutlined';
const CampaignEightCards = () => {
  const cards = [
    { icon: <PhoneForwardedOutlinedIcon/>, heading: 'Call Forwarding and Routing', description: 'Seamlessly direct calls to the right person or device, making sure there are no missed connections.' },
    { icon: <VoicemailOutlinedIcon/>, heading: 'Voicemail to Email', description: 'Receive your voicemails directly in your inbox for easy access and quick response.' },
    { icon: <AssistantOutlinedIcon/>, heading: 'Auto-Attendant', description: 'Automate call handling with a professional virtual receptionist that directs callers efficiently.' },
    { icon: <RadioButtonCheckedOutlinedIcon/>, heading: 'Call Recording', description: 'Capture and store important conversations for quality assurance, training, or compliance purposes.' },
    { icon: <AddIcCallOutlinedIcon/>, heading: 'Conference Calling', description: ': Host virtual meetings effortlessly with crystal-clear conference calling capabilities.' },
    { icon: <DataSaverOffOutlinedIcon/>, heading: 'Call Analytics and Reporting', description: 'You can gain insights into call performance with detailed analytics and reporting tools.' },
    { icon: <IntegrationInstructionsOutlinedIcon/>, heading: 'Integration with CRM', description: ': Enhance customer interactions by integrating calls directly with your CRM system.' },
    { icon: <InstallMobileOutlinedIcon/>, heading: 'Mobile App', description: 'Stay connected on the go with a mobile app that brings your business communication to your fingertips.'},
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
      {/* <button className='features-button'>Apply Now</button> */}
    </div>
  );
}

export default CampaignEightCards;
