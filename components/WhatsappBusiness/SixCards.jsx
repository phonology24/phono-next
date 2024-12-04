"use client"
import React from "react";
import styles from '../../styles/hostedpbxcard.module.css';
import VideoChatIcon from "@mui/icons-material/VideoChat";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import LanguageIcon from "@mui/icons-material/Language";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import WebhookIcon from "@mui/icons-material/Webhook";

const SixCards = () => {
    return (
        <div>
            <div className={styles.nestedLayoutColumn}>
                <div className={styles.nestedLayoutColumnInner}>
                    <div className={styles.columnPbx}>
                        <VideoChatIcon className={styles.iconPbx} alt="web-meetings" />
                        <div className={styles.columnContent}>
                            <h2 className={styles.gradientLtr}>Shared Team Inbox</h2>
                            <p className={styles.large}>
                                Collaborate seamlessly with a unified inbox for all team interactions on WhatsApp.
                            </p>
                        </div>
                    </div>
                    <div className={styles.columnPbx}>
                        <Diversity1Icon className={styles.iconPbx} alt="web-meetings" />
                        <div className={styles.columnContent}>
                            <h3 className={styles.gradientLtr}>Bulk Messaging</h3>
                            <p className={styles.large}>
                                Reach your audience instantly with personalized, large-scale WhatsApp broadcasts.
                            </p>
                        </div>
                    </div>
                    <div className={styles.columnPbx}>
                        <DomainAddIcon className={styles.iconPbx} alt="web-meetings" />
                        <div className={styles.columnContent}>
                            <h3 className={styles.gradientLtr}>WhatsApp Catalog</h3>
                            <p className={styles.large}>
                                Showcase products/services directly within WhatsApp for easy customer browsing.
                            </p>
                        </div>
                    </div>
                    <div className={styles.columnPbx}>
                        <LanguageIcon className={styles.iconPbx} alt="web-meetings" />
                        <div className={styles.columnContent}>
                            <h3 className={styles.gradientLtr}>Chatbots</h3>
                            <p className={styles.large}>
                                Automate responses and streamline customer interactions with intelligent chatbots.
                            </p>
                        </div>
                    </div>
                    <div className={styles.columnPbx}>
                        <InstallMobileIcon className={styles.iconPbx} alt="web-meetings" />
                        <div className={styles.columnContent}>
                            <h3 className={styles.gradientLtr}>Detailed Analytics Dashboard</h3>
                            <p className={styles.large}>
                                Gain actionable insights with comprehensive analytics for better decision-making.
                            </p>
                        </div>
                    </div>
                    <div className={styles.columnPbx}>
                        <WebhookIcon className={styles.iconPbx} alt="web-meetings" />
                        <div className={styles.columnContent}>
                            <h3 className={styles.gradientLtr}>Integrations</h3>
                            <p className={styles.large}>
                                Connect effortlessly with your favourite CRM, ERP, or third-party tools for enhanced productivity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SixCards;
