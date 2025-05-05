import React from "react";
import styles from "../../styles/messaging-services-cards.module.css";

const AICardsWithImage  = () => {
  return (
    <div className={styles.messagingServicesCardsContainer}>
      <h3 className={styles.msMainHeading}>How It Works</h3>
      <div className={styles.msSectionContainer}>
        <div className={styles.msCard}>
          <h3 className={styles.msCardHeading}>AI-Driven Interaction</h3>
          <p className={styles.msCardParagraph}>
            Your customer calls or messages, and our AI Voice Agent immediately engages, recognizing the intent and providing an appropriate response.
          </p>
        </div>
        <div className={styles.msCard}>
          <h3 className={styles.msCardHeading}>Instant Resolution</h3>
          <p className={styles.msCardParagraph}>
            From answering simple queries to routing more complex requests to human agents, our voice agents manage the flow smoothly, resolving as much as possible autonomously.
          </p>
        </div>
        <div className={styles.msCard}>
          <h3 className={styles.msCardHeading}>Seamless Handover</h3>
          <p className={styles.msCardParagraph}>
            When necessary, the AI Voice Agent seamlessly transfers the customer to a human agent, ensuring no information is lost and the conversation remains smooth.
          </p>
        </div>
        <div className={styles.msCard}>
          <h3 className={styles.msCardHeading}>Real-Time Data Syncing</h3>
          <p className={styles.msCardParagraph}>
            All interactions are logged and synchronized across your systems, providing you with a 360-degree view of your customer interactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AICardsWithImage;
