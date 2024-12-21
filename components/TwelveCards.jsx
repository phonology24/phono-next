import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "../styles/twelvecards.css";
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import MoveUpOutlinedIcon from '@mui/icons-material/MoveUpOutlined';
import QueueOutlinedIcon from '@mui/icons-material/QueueOutlined';
import AppBlockingOutlinedIcon from '@mui/icons-material/AppBlockingOutlined';
import InterpreterModeOutlinedIcon from '@mui/icons-material/InterpreterModeOutlined';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import WifiFindOutlinedIcon from '@mui/icons-material/WifiFindOutlined';
import TtyOutlinedIcon from '@mui/icons-material/TtyOutlined';
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';
import RememberMeOutlinedIcon from '@mui/icons-material/RememberMeOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';

const cardsData = [
  {
    id: 1,
    title: "Voicemail",
    description: "Never miss a message with secure and accessible voicemail services.",
    icon: <GraphicEqOutlinedIcon fontSize="large" sx={{ color: "#2E7D32" }} />, // Dark Green
    backgroundColor: "#E0FFE0"
  },
  {
    id: 2,
    title: "IVR",
    description: "Simplify caller navigation with easy-to-use IVR systems.",
    icon: <SmartToyOutlinedIcon fontSize="large" sx={{ color: "#1565C0" }} />, // Deep Blue
    backgroundColor: "#E3F2FD"
  },
  {
    id: 3,
    title: "Call Forwarding",
    description: "Ensure smooth call redirection to the correct contact or location.",
    icon: <PhoneForwardedOutlinedIcon fontSize="large" sx={{ color: "#D32F2F" }} />, // Deep Red
    backgroundColor: "#FFEBEE"
  },
  {
    id: 4,
    title: "Call Transfer",
    description: "Quickly route calls to the right team member for effective handling.",
    icon: <MoveUpOutlinedIcon fontSize="large" sx={{ color: "#EF6C00" }} />, // Deep Orange
    backgroundColor: "#FFF3E0"
  },
  {
    id: 5,
    title: "Call Queuing",
    description: "Manage high call volumes with organized call queuing systems.",
    icon: <QueueOutlinedIcon fontSize="large" sx={{ color: "#2E7D32" }} />, // Dark Green
    backgroundColor: "#E0FFE0"
  },
  {
    id: 6,
    title: "Call Barging",
    description: "Join active calls to supervise or offer real-time assistance.",
    icon: <AppBlockingOutlinedIcon fontSize="large" sx={{ color: "#1565C0" }} />, // Deep Blue
    backgroundColor: "#E3F2FD"
  },
  {
    id: 7,
    title: "Call Recording",
    description: "Record calls securely for training, compliance, or quality assurance.",
    icon: <InterpreterModeOutlinedIcon fontSize="large" sx={{ color: "#D32F2F" }} />, // Deep Red
    backgroundColor: "#FFEBEE"
  },
  {
    id: 8,
    title: "Call Analytics",
    description: "Analyze call performance with detailed insights and metrics.",
    icon: <DataSaverOffOutlinedIcon fontSize="large" sx={{ color: "#EF6C00" }} />, // Deep Orange
    backgroundColor: "#FFF3E0"
  },
  {
    id: 9,
    title: "Customized Report",
    description: "Create personalized reports to track and enhance communication performance.",
    icon: <SummarizeOutlinedIcon fontSize="large" sx={{ color: "#2E7D32" }} />, // Dark Green
    backgroundColor: "#E0FFE0"
  },
  {
    id: 10,
    title: "Call Conferencing",
    description: "Host seamless multi-party calls with crystal-clear conferencing.",
    icon: <AddIcCallOutlinedIcon fontSize="large" sx={{ color: "#1565C0" }} />, // Deep Blue
    backgroundColor: "#E3F2FD"
  },
  {
    id: 11,
    title: "Call Masking",
    description: "Maintain confidentiality with secure call number masking.",
    icon: <WifiFindOutlinedIcon fontSize="large" sx={{ color: "#D32F2F" }} />, // Deep Red
    backgroundColor: "#FFEBEE"
  },
  {
    id: 12,
    title: "Call Whispering",
    description: "Coach team members during live calls without the customer knowing.",
    icon: <TtyOutlinedIcon fontSize="large" sx={{ color: "#EF6C00" }} />, // Deep Orange
    backgroundColor: "#FFF3E0"
  },
  {
    id: 13,
    title: "Personalized Greetings and Music",
    description: "Create a professional impression with custom greetings and hold music.",
    icon: <WavingHandOutlinedIcon fontSize="large" sx={{ color: "#2E7D32" }} />, // Dark Green
    backgroundColor: "#E0FFE0"
  },
  {
    id: 14,
    title: "Custom Caller ID",
    description: "Display branded or localized caller IDs to boost trust.",
    icon: <RememberMeOutlinedIcon fontSize="large" sx={{ color: "#1565C0" }} />, // Deep Blue
    backgroundColor: "#E3F2FD"
  },
  {
    id: 15,
    title: "Sticky Agent",
    description: "Maintain consistency by routing repeat callers to the same agent.",
    icon: <SupportAgentOutlinedIcon fontSize="large" sx={{ color: "#D32F2F" }} />, // Deep Red
    backgroundColor: "#FFEBEE"
  },
  {
    id: 16,
    title: "Virtual and Toll-Free Numbers",
    description: "Expand your reach with local and toll-free numbers for global accessibility.",
    icon: <ViewInArOutlinedIcon fontSize="large" sx={{ color: "#EF6C00" }} />, // Deep Orange
    backgroundColor: "#FFF3E0"
  }
];

  
  

const TwelveCards = () => {
  return (
    <div className="cards-section">
      <h3 className="section-heading">Features</h3>

      <div className="cards-container">
        {cardsData.map((card) => (
          <div key={card.id} className="card"
          style={{ backgroundColor: card.backgroundColor }}

          >
            <div className="card-header">
              {card.icon}
              <span className="card-title">{card.title}</span>
            </div>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwelveCards;
