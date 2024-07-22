"use client"
import React from "react";
import styles from '../../styles/hostedpbxcard.module.css';
import VideoChatIcon from "@mui/icons-material/VideoChat";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import LanguageIcon from "@mui/icons-material/Language";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import WebhookIcon from "@mui/icons-material/Webhook";

const HostedPbxCards = () => {
  return (
    <div>
      <div className={styles.nestedLayoutColumn}>
        <div className={styles.nestedLayoutColumnInner}>
          <div className={styles.columnPbx}>
            <VideoChatIcon className={styles.iconPbx} alt="web-meetings" />
            <div className={styles.columnContent}>
              <h3 className={styles.gradientLtr}>Web Meetings</h3>
              <p className={styles.large}>
              Host reliable web meetings through the same system you use to call or chat.
              </p>
            </div>
          </div>
          <div className={styles.columnPbx}>
            <Diversity1Icon className={styles.iconPbx} alt="web-meetings" />
            <div className={styles.columnContent}>
              <h3 className={styles.gradientLtr}>Team Chat</h3>
              <p className={styles.large}>
              Chat with your co-workers in real-time to get updates fast through Phonology instant messaging.
              </p>
            </div>
          </div>
          <div className={styles.columnPbx}>
            <DomainAddIcon className={styles.iconPbx} alt="web-meetings" />
            <div className={styles.columnContent}>
              <h3 className={styles.gradientLtr}>Business SMS</h3>
              <p className={styles.large}>
              Send text messages to any mobile device from our cloud-based platform, through the mobile app.
                            </p>
            </div>
          </div>
          <div className={styles.columnPbx}>
            <LanguageIcon className={styles.iconPbx} alt="web-meetings" />
            <div className={styles.columnContent}>
              <h3 className={styles.gradientLtr}>Web Phone</h3>
              <p className={styles.large}>
              Work from anywhere using our web phone. Please open your preferred browser and establish a connection.
              </p>
            </div>
          </div>
          <div className={styles.columnPbx}>
            <InstallMobileIcon className={styles.iconPbx} alt="web-meetings" />
            <div className={styles.columnContent}>
              <h3 className={styles.gradientLtr}>Mobile App</h3>
              <p className={styles.large}>
              Communicate with clients and colleagues on the go with the Phonology Mobile App.
              </p>
            </div>
          </div>
          <div className={styles.columnPbx}>
            <WebhookIcon className={styles.iconPbx} alt="web-meetings" />
            <div className={styles.columnContent}>
              <h3 className={styles.gradientLtr}>Integrations</h3>
              <p className={styles.large}>
              Integrates seamlessly with the software and tools you are already using.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostedPbxCards;
