"use client"
import React from "react";
import styles from '../styles/bannercard.module.css';

const BannerCards = () => {
  return (
    <div className={styles.darkDivVt}>
      <div className={styles.bannerCardContainer}>
        <div className={styles.bannerCard}>
          <h2>24B+</h2>
          <h4 className={styles.ltrGradient}>Minutes Terminated</h4>
        </div>
        <div className={styles.bannerCard}>
          <h2>80%</h2>
          <h4 className={styles.ltrGradient}>Cost Reduction</h4>
        </div>
        <div className={styles.bannerCard}>
          <h2>70+</h2>
          <h4 className={styles.ltrGradient}>Country Supports</h4>
        </div>
        <div className={styles.bannerCard}>
          <h2>24/7</h2>
          <h4 className={styles.ltrGradient}>Dedicated Technical Support</h4>
        </div>
      </div>
    </div>
  );
};

export default BannerCards;
