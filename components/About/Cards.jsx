import React from "react";
import "../../styles/cards.css";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import StorageIcon from "@mui/icons-material/Storage";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import HubIcon from "@mui/icons-material/Hub";
import StarIcon from "@mui/icons-material/Star";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import { motion } from "framer-motion";
const Cards = () => {
  const achievements = [
    {
      id: 1,
      title: "A-Z Voice Termination & flexible routing",
      icon: (
        <PrecisionManufacturingIcon
          style={{ fontSize: 50, marginBottom: 10 }}
        />
      ),
    },
    {
      id: 2,
      title: "Dedicated account management",
      icon: <StorageIcon style={{ fontSize: 50, marginBottom: 10 }} />,
    },
    {
      id: 3,
      title: "20+ billion minutes terminated each year",
      icon: <ShutterSpeedIcon style={{ fontSize: 50, marginBottom: 10 }} />,
    },
    {
      id: 4,
      title: "550+ Directs and CLI certified routes",
      icon: <HubIcon style={{ fontSize: 50, marginBottom: 10 }} />,
    },
    {
      id: 5,
      title: "Per minute channel pricing",
      icon: <StarIcon style={{ fontSize: 50, marginBottom: 10 }} />,
    },
    {
      id: 6,
      title: "DID coverage for 70+ countries",
      icon: <SatelliteAltIcon style={{ fontSize: 50, marginBottom: 10 }} />,
    },
    {
      id: 6,
      title: "DID coverage for 70+ countries",
      icon: <SatelliteAltIcon style={{ fontSize: 50, marginBottom: 10 }} />,
    },
    {
      id: 6,
      title: "DID coverage for 70+ countries",
      icon: <SatelliteAltIcon style={{ fontSize: 50, marginBottom: 10 }} />,
    },
  ];

  return (
    <div className="cards-container">
      {achievements.map((achievement) => (
        <motion.div
          whileHover={{
            scale: [1, 1.2, 1.1, 1],
            rotate: [0, 0, 0, 0, 0],
            borderRadius: ["0%", "25%", "50%", "50%", "20%"],
            backgroundColor: "#6CFF4F",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.7, 1],
            repeat: null,
            repeatDelay: 1,
          }}
          key={achievement.id}
          className="card"
          style={{ width: "250px", height: "100px" }}
        >
          {achievement.icon}
          <h4>
            <b>{achievement.title}</b>
          </h4>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
