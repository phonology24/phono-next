import React from "react";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SettingsIcon from "@mui/icons-material/Settings";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import GrainIcon from "@mui/icons-material/Grain";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { motion } from "framer-motion";
import styles from "../../styles/App.module.css";

const TelecomBanner = () => {
  return (
    <section className={styles.telecomBanner}>
      <div className={styles.telecomColumns}>
        <div className={styles.telecomColumnLeft}>
          <h2 className={styles.telecomH3} style={{ textAlign: "left", fontWeight: 700, fontSize: "30px" }}>
            VoIP service provider in India
            <p style={{ fontSize: "30px", marginTop:0}}>- Cutting Edge Communication Solutions</p>
          </h2>
          <p className={styles.telecomP} style={{ textAlign: "left" }}>
            High-quality voice and video calls, advanced call forwarding,
            automated attendants, and voicemail-to-email functionality.<br />
            Enjoy cost-effective international calls, seamless integration with existing systems,
            scalable solutions for businesses of all sizes, 24/7 customer support, and robust
            security features to protect your communication data.
          </p>
        </div>
        <div className={styles.telecomColumnRight}>
          <motion.div
            className={styles.telecomCard}
            whileHover={{
              scale: [1, 1.2, 1.1, 1],
              rotate: [0, 0, 0, 0, 0],
              borderRadius: ["0%", "25%", "50%", "50%", "20%"],
              backgroundColor: "white",
            }}
            transition={{
              duration: .5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.7, 1],
              repeat: null,
              repeatDelay: 1,
            }}
          >
            <SettingsIcon
              className={styles.telecomCardIcon}
            />
            <br />Dedicated Management
          </motion.div>
          <motion.div
            className={styles.telecomCard}
            whileHover={{
              scale: [1, 1.2, 1.1, 1],
              borderRadius: ["0%", "25%", "50%", "50%", "20%"],
              backgroundColor: "white",
            }}
            transition={{
              duration: .5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: null,
              repeatDelay: 1,
            }}
          >
            <SignalCellularAltIcon
              className={styles.telecomCardIcon}
            />
            <br />Multiple Quality Levels
          </motion.div>
          <motion.div
            className={styles.telecomCard}
            whileHover={{
              scale: [1, 1.2, 1.1, 1],
              rotate: [0, 0, 0, 0, 0],
              borderRadius: ["0%", "25%", "50%", "50%", "20%"],
              backgroundColor: "white",
            }}
            transition={{
              duration: .5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: null,
              repeatDelay: 1,
            }}
          >
            <FlashOnIcon
              className={styles.telecomCardIcon}
            />
            <br />Power of Big Telecom
          </motion.div>
          <motion.div
            className={styles.telecomCard}
            whileHover={{
              scale: [1, 1.2, 1.1, 1],
              rotate: [0, 0, 0, 0, 0],
              borderRadius: ["0%", "25%", "50%", "50%", "20%"],
              backgroundColor: "white",
            }}
            transition={{
              duration: .5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: null,
              repeatDelay: 1,
            }}
          >
            <DesktopWindowsIcon
              className={styles.telecomCardIcon}
            />
            <br />Self Service Portal
          </motion.div>
          <motion.div
            className={styles.telecomCard}
            whileHover={{
              scale: [1, 1.2, 1.1, 1],
              rotate: [0, 0, 0, 0, 0],
              borderRadius: ["0%", "25%", "50%", "50%", "20%"],
              backgroundColor: "white",
            }}
            transition={{
              duration: .5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: null,
              repeatDelay: 1,
            }}
          >
            <GrainIcon
              className={styles.telecomCardIcon}
            />
            <br />Unlimited Channels
          </motion.div>
          <motion.div
            className={styles.telecomCard}
            whileHover={{
              scale: [1, 1.2, 1.1, 1],
              rotate: [0, 0, 0, 0, 0],
              borderRadius: ["0%", "25%", "50%", "50%", "20%"],
              backgroundColor: "white",
            }}
            transition={{
              duration: .5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: null,
              repeatDelay: 1,
            }}
          >
            <LocalPhoneIcon
              className={styles.telecomCardIcon}
            />
            <br />Voice, DIDs & Messaging
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TelecomBanner;
