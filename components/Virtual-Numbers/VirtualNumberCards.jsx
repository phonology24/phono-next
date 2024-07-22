"use client";
import React from "react";
import styles from "../../styles/virtual-number-cards.module.css";

const VirtualNumberCards = () => {
  return (
    <div className={styles.virtualNumberCardsContainer}>
      <h2 className={styles.vnMainHeading}>
        Our high-quality numbers meet your specific requirements.
      </h2>
      <div className={styles.vnSectionContainer}>
        <div className={styles.vnCard}>
          <h2 className={styles.vnCardHeading}>Call Centers</h2>
          <p className={styles.vnCardParagraph}>
            Boost call handling productivity, elevate client adventure, and smooth operational administration for ultimate results.
          </p>
          <ul className={styles.vnBulletPoints}>
            <li>Inbound campaigns</li>
            <li>Outbound campaigns</li>
            <li>Local presence</li>
          </ul>
        </div>
        <div className={styles.vnCard}>
          <h2 className={styles.vnCardHeading}>UCaaS / CCaaS</h2>
          <p className={styles.vnCardParagraph}>
            Ease external coupling, blend across assorted pathways, and ensure scalability for your blueprint.
          </p>
          <ul className={styles.vnBulletPoints}>
            <li>Virtual Identity</li>
            <li>Inbound Flows</li>
          </ul>
        </div>
        <div className={styles.vnCard}>
          <h2 className={styles.vnCardHeading}>PBX Operators</h2>
          <p className={styles.vnCardParagraph}>
            We serve external interaction, vocal routing, and assessing.
          </p>
          <ul className={styles.vnBulletPoints}>
            <li>Virtual presence in any state / country</li>
            <li>Toll-free Numbers</li>
            <li>Remote lines</li>
          </ul>
        </div>
        <div className={styles.vnCard}>
          <h2 className={styles.vnCardHeading}>Wholesalers</h2>
          <p className={styles.vnCardParagraph}>
            Provide localized entry, optimize vocal routing, and extend value-added facilities to boost the all-inclusive venture for your clientele.
          </p>
          <ul className={styles.vnBulletPoints}>
            <li>Expanded coverage</li>
            <li>Better pricing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VirtualNumberCards;
