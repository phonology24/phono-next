import React from "react";
import styles from "../../styles/messaging-services-cards.module.css";

const MessagingServicesCards = () => {
  return (
    <div className={styles.messagingServicesCardsContainer}>
      <h2 className={styles.msMainHeading}>Get Messaging for</h2>
      <div className={styles.msSectionContainer}>
        <div className={styles.msCard}>
          <h2 className={styles.msCardHeading}>Notifications</h2>
          <p className={styles.msCardParagraph}>
            Ensure that dates, appointments, deliveries, and renewals are remembered always and never missed!
          </p>
          <ul className={styles.msBulletPoints}>
            {/* <li>Bullet Point 1</li>
            {/* <li>Bullet Point 2</li>
            {/* <li>Bullet Point 3</li> */}
          </ul>
        </div>
        <div className={styles.msCard}>
          <h2 className={styles.msCardHeading}>OTP Verification</h2>
          <p className={styles.msCardParagraph}>
            Step up user authentications and security measures by impaling one-time passwords and two-factor authentications for enhanced protection.
          </p>
          <ul className={styles.msBulletPoints}>
            {/* <li>Bullet Point 1</li>
            {/* <li>Bullet Point 2</li>
            {/* <li>Bullet Point 3</li> */}
          </ul>
        </div>
        <div className={styles.msCard}>
          <h2 className={styles.msCardHeading}>Marketing</h2>
          <p className={styles.msCardParagraph}>
            Boost engagement by impaling special offers, loyalty promotions, and discounts to drive business growth.
          </p>
          <ul className={styles.msBulletPoints}>
            {/* <li>Bullet Point 1</li>
            {/* <li>Bullet Point 2</li>
            {/* <li>Bullet Point 3</li> */}
          </ul>
        </div>
        <div className={styles.msCard}>
          <h2 className={styles.msCardHeading}>Support</h2>
          <p className={styles.msCardParagraph}>
            Strengthen customer support processes by managing tickets and providing updates to enhance overall satisfaction effectively.
          </p>
          <ul className={styles.msBulletPoints}>
            {/* <li>Bullet Point 1</li>
            {/* <li>Bullet Point 2</li>
            {/* <li>Bullet Point 3</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MessagingServicesCards;
