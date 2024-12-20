import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "../styles/twelvecards.css";

const cardsData = [
    {
      id: 1,
      title: "Dashboard",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashboardIcon fontSize="large" sx={{ color: "#FFB6C1" }} />,
      backgroundColor: "#E0FFE0"
    },
    {
      id: 2,
      title: "Analytics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashboardIcon fontSize="large" sx={{ color: "#FF69B4" }} />,
      backgroundColor: "#E3F2FD"
    },
    {
      id: 3,
      title: "User Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashboardIcon fontSize="large" sx={{ color: "#B9FBC0" }} />,
      backgroundColor: "#FFEBEE"
    },
    {
      id: 4,
      title: "Reports",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashboardIcon fontSize="large" sx={{ color: "#FF9800" }} />,
      backgroundColor: "#FFF3E0"
    },
    {
      id: 5,
      title: "Notifications",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashboardIcon fontSize="large" sx={{ color: "#FFC107" }} />,
      backgroundColor: "#E0FFE0"
    },
    {
      id: 6,
      title: "Settings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashboardIcon fontSize="large" sx={{ color: "#90CAF9" }} />,
      backgroundColor: "#E3F2FD"
    },
    {
      id: 7,
      title: "Performance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashboardIcon fontSize="large" sx={{ color: "#A5D6A7" }} />,
      backgroundColor: "#FFEBEE"
    },
    {
      id: 8,
      title: "Integrations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashboardIcon fontSize="large" sx={{ color: "#FFEB3D" }} />,
      backgroundColor: "#FFF3E0"
    },
    {
      id: 9,
      title: "Profile",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashboardIcon fontSize="large" sx={{ color: "#B3E5FC" }} />,
      backgroundColor: "#E0FFE0"
    },
    {
      id: 10,
      title: "Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashboardIcon fontSize="large" sx={{ color: "#FFEB3D" }} />,
      backgroundColor: "#E3F2FD"
    },
    {
      id: 11,
      title: "Database",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashboardIcon fontSize="large" sx={{ color: "#FFCDD2" }} />,
      backgroundColor: "#FFEBEE"
    },
    {
      id: 12,
      title: "Security",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashboardIcon fontSize="large" sx={{ color: "#B3E5FC" }} />,
      backgroundColor: "#FFF3E0"
    }
  ];
  
  

const TwelveCards = () => {
  return (
    <div className="cards-section">
      <h3 className="section-heading">Cards Section</h3>

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
