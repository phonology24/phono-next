"use client"
import React from "react";
import styles from '../../styles/voiceTermination.module.css';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const VoiceTerminationCard = () => {
  return (
    <div className={styles.voiceCardContainer}>
      <div className={`${styles.voiceCard} ${styles.dark}`}>
        <StarIcon className={styles.icon} />
        <p className={styles.field1}>Gold Standard</p>
        <p className={styles.field2}>
          We guarantee the highest Quality of Service (QoS) at the most competitive price in the market.
          Ideal for Pinless, Calling card, and Inmate Calling Providers.
        </p>
        <div className={styles.divider}></div>
        <p className={styles.field3}>
          Perfect for Pinless, Calling Cards, and Inmate Calling Providers.
        </p>
        <p className={styles.longField}>
          All routes conclude through stable, high-quality providers.
          CLI and signalling features receive full support across the Phonology network.
          QoS parameters are proactively managed and held to Phonology's highest standards for retail traffic.
        </p>
        <div className={styles.divider}></div>
        <button className={styles.voiceButton} disabled>Start 14 day free trial</button>
      </div>

      <div className={`${styles.voiceCard} ${styles.dark1}`}>
        <FavoriteIcon className={styles.icon} />
        <p className={styles.field1}>Phono Immediate</p>
        <p className={styles.field2}>Implementing Quality of Service (QoS) routing with competitive market-driven pricing.</p>
        <div className={styles.divider}></div>
        <p className={styles.field3}>Optimal for UCaaS, CPaaS, and Cloud PBX companies.</p>
        <p className={styles.longField}>
          Phono Immediate furnishes A-Z routes with Quality of Service (QoS) and competitive pricing.
          The LCR system capitalizes on spot market chances while maintaining high quality.
          Our termination services are cost-effective and of exceptional quality.
        </p>
        <div className={styles.divider}></div>
        <button className={styles.voiceButton} disabled>Start 14 day free trial</button>
      </div>

      <div className={`${styles.voiceCard} ${styles.dark2}`}>
        <ThumbUpIcon className={styles.icon} />
        <p className={styles.field1}>Tailored Routing</p>
        <p className={styles.field2}>A routing resolution customized to meet your particular needs.</p>
        <div className={styles.divider}></div>
        <p className={styles.field3}>Optimal for Wholesale VoIP enterprises</p>
        <p className={styles.longField}>
          For entities necessitating routing alternatives with predefined services, we will be able to devise a custom solution to cater to your unique needs.
          Additionally, we offer the development of personalised voice termination resolutions if our services don't align with your requirements.
        </p>
        <div className={styles.divider}></div>
        <button className={styles.voiceButton} disabled>Start 14 day free trial</button>
      </div>

      <div className={`${styles.voiceCard} ${styles.dark3}`}>
        <WorkspacePremiumIcon className={styles.icon} />
        <p className={styles.field1}>Platinum Level</p>
        <p className={styles.field2}>We ensure unmatched voice termination quality with advanced characteristics.</p>
        <div className={styles.divider}></div>
        <p className={styles.field3}>Perfect for entities with unique routings</p>
        <p className={styles.longField}>
          Access Tier 1 direct interconnects through different suppliers.
          Our system sustains DTMF and undergoes daily testing to guarantee the delivery of CLI.
          ISUP signalling remains transparent for roaming and 24/7 check on QoS.
        </p>
        <div className={styles.divider}></div>
        <button className={styles.voiceButton} disabled>Start 14 day free trial</button>
      </div>
    </div>
  );
};

export default VoiceTerminationCard;
