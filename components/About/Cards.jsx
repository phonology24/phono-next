import React from "react";
import "../../styles/cards.css";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import StorageIcon from "@mui/icons-material/Storage";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import HubIcon from "@mui/icons-material/Hub";
import StarIcon from "@mui/icons-material/Star";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
const Cards = () => {
  const achievements = [
    {
      id: 1,
      title: "A-Z Voice Termination & flexible routing",
      icon: <PrecisionManufacturingIcon />,
    },
    {
      id: 2,
      title: "Dedicated account management",
      icon: <StorageIcon />,
    },
    {
      id: 3,
      title: "20+ billion minutes terminated each year",
      icon: <ShutterSpeedIcon />,
    },
    {
      id: 4,
      title: "550+ Directs and CLI certified routes",
      icon: <HubIcon />,
    },
    {
      id: 5,
      title: "Per minute channel pricing",
      icon: <StarIcon />,
    },
    {
      id: 6,
      title: "24*7 Customer Support",
      icon: <SatelliteAltIcon />,
    },
    {
      id: 7,
      title: "60% Cost Reduction",
      icon: <SatelliteAltIcon />,
    },
    {
      id: 8,
      title: "DID coverage for 120+ countries",
      icon: <SatelliteAltIcon />,
    },
  ];

  return (
    <div className="about-cards-container">
      {achievements.map((achievement) => (
        <div key={achievement.id} className="about-card">
          {achievement.icon}
          <h3>
            <b>{achievement.title}</b>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Cards;
