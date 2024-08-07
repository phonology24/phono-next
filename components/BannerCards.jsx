"use client"
import React from "react";
import styles from '../styles/bannercard.module.css';

const BannerCards = () => {
  return (
    <div className={styles.darkDivVt}>
      <div className={styles.bannerCardContainer}>
        <div className={styles.bannerCard}>
          <h2 className={styles.headingbannercard}>24B+</h2>
          <h3 className={styles.ltrGradient}>Minutes Terminated</h3>
        </div>
        <div className={styles.bannerCard}>
          <h3 className={styles.headingbannercard}>80%</h3>
          <h3 className={styles.ltrGradient}>Cost Reduction</h3>
        </div>
        <div className={styles.bannerCard}>
          <h3 className={styles.headingbannercard}>70+</h3>
          <h3 className={styles.ltrGradient}>Country Supports</h3>
        </div>
        <div className={styles.bannerCard}>
          <h3 className={styles.headingbannercard}>24/7</h3>
          <h3 className={styles.ltrGradient}>Dedicated Technical Support</h3>
        </div>
      </div>
    </div>
  );
};

export default BannerCards;
