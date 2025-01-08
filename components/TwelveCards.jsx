import React from "react";
import "../styles/twelvecards.css";
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import MoveUpOutlinedIcon from "@mui/icons-material/MoveUpOutlined";
import QueueOutlinedIcon from "@mui/icons-material/QueueOutlined";
import AppBlockingOutlinedIcon from "@mui/icons-material/AppBlockingOutlined";
import InterpreterModeOutlinedIcon from "@mui/icons-material/InterpreterModeOutlined";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import WifiFindOutlinedIcon from "@mui/icons-material/WifiFindOutlined";
import TtyOutlinedIcon from "@mui/icons-material/TtyOutlined";
import WavingHandOutlinedIcon from "@mui/icons-material/WavingHandOutlined";
import RememberMeOutlinedIcon from "@mui/icons-material/RememberMeOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";

const TwelveCards = () => {
  return (
    <div className="cards-section">
      <h3 className="section-heading">Features</h3>
      <div className="cards-container1">
        <div className="card1" style={{ backgroundColor: "#E0FFE0" }}>
          <div className="card-header">
            <GraphicEqOutlinedIcon fontSize="large" sx={{ color: "#2E7D32" }} />
            <span className="card-title">Voicemail</span>
          </div>
          <p className="card-description">
            Never miss a message with secure and accessible voicemail services.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#E3F2FD" }}>
          <div className="card-header">
            <SmartToyOutlinedIcon fontSize="large" sx={{ color: "#1565C0" }} />
            <span className="card-title">IVR</span>
          </div>
          <p className="card-description">
            Simplify caller navigation with easy-to-use IVR systems.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#FFEBEE" }}>
          <div className="card-header">
            <PhoneForwardedOutlinedIcon fontSize="large" sx={{ color: "#D32F2F" }} />
            <span className="card-title">Call Forwarding</span>
          </div>
          <p className="card-description">
            Ensure smooth call redirection to the correct contact or location.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#FFF3E0" }}>
          <div className="card-header">
            <MoveUpOutlinedIcon fontSize="large" sx={{ color: "#EF6C00" }} />
            <span className="card-title">Call Transfer</span>
          </div>
          <p className="card-description">
            Quickly route calls to the right team member for effective handling.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#E0FFE0" }}>
          <div className="card-header">
            <QueueOutlinedIcon fontSize="large" sx={{ color: "#2E7D32" }} />
            <span className="card-title">Call Queuing</span>
          </div>
          <p className="card-description">
            Manage high call volumes with organized call queuing systems.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#E3F2FD" }}>
          <div className="card-header">
            <AppBlockingOutlinedIcon fontSize="large" sx={{ color: "#1565C0" }} />
            <span className="card-title">Call Barging</span>
          </div>
          <p className="card-description">
            Join active calls to supervise or offer real-time assistance.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#FFEBEE" }}>
          <div className="card-header">
            <InterpreterModeOutlinedIcon fontSize="large" sx={{ color: "#D32F2F" }} />
            <span className="card-title">Call Recording</span>
          </div>
          <p className="card-description">
            Record calls securely for training, compliance, or quality assurance.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#FFF3E0" }}>
          <div className="card-header">
            <DataSaverOffOutlinedIcon fontSize="large" sx={{ color: "#EF6C00" }} />
            <span className="card-title">Call Analytics</span>
          </div>
          <p className="card-description">
            Analyze call performance with detailed insights and metrics.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#E0FFE0" }}>
          <div className="card-header">
            <SummarizeOutlinedIcon fontSize="large" sx={{ color: "#2E7D32" }} />
            <span className="card-title">Customized Report</span>
          </div>
          <p className="card-description">
            Create personalized reports to track and enhance communication performance.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#E3F2FD" }}>
          <div className="card-header">
            <AddIcCallOutlinedIcon fontSize="large" sx={{ color: "#1565C0" }} />
            <span className="card-title">Call Conferencing</span>
          </div>
          <p className="card-description">
            Host seamless multi-party calls with crystal-clear conferencing.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#FFEBEE" }}>
          <div className="card-header">
            <WifiFindOutlinedIcon fontSize="large" sx={{ color: "#D32F2F" }} />
            <span className="card-title">Call Masking</span>
          </div>
          <p className="card-description">
            Maintain confidentiality with secure call number masking.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#FFF3E0" }}>
          <div className="card-header">
            <TtyOutlinedIcon fontSize="large" sx={{ color: "#EF6C00" }} />
            <span className="card-title">Call Whispering</span>
          </div>
          <p className="card-description">
            Coach team members during live calls without the customer knowing.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#E0FFE0" }}>
          <div className="card-header">
            <WavingHandOutlinedIcon fontSize="large" sx={{ color: "#2E7D32" }} />
            <span className="card-title">Personalized Greetings and Music</span>
          </div>
          <p className="card-description">
            Create a professional impression with custom greetings and hold music.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#E3F2FD" }}>
          <div className="card-header">
            <RememberMeOutlinedIcon fontSize="large" sx={{ color: "#1565C0" }} />
            <span className="card-title">Custom Caller ID</span>
          </div>
          <p className="card-description">
            Display branded or localized caller IDs to boost trust.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#FFEBEE" }}>
          <div className="card-header">
            <SupportAgentOutlinedIcon fontSize="large" sx={{ color: "#D32F2F" }} />
            <span className="card-title">Sticky Agent</span>
          </div>
          <p className="card-description">
            Maintain consistency by routing repeat callers to the same agent.
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#FFF3E0" }}>
          <div className="card-header">
            <ViewInArOutlinedIcon fontSize="large" sx={{ color: "#EF6C00" }} />
            <span className="card-title">Virtual and Toll-Free Numbers</span>
          </div>
          <p className="card-description">
            Expand your reach with local and toll-free numbers for global accessibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwelveCards;
