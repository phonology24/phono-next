"use client";
import React from "react";
import Image from "next/image";
import ImageForInternationalNumber from "../../../public/Assets/Cambodia.png";
import styles from "../../../styles/Internationalheader.module.css";
import USAAccordionComponent from "./accordion";

const CambodiaHeader = () => {
  let countryName = "Cambodia";
  let countryFlag = "https://flagsapi.com/BG/flat/64.png";

  return (
    <div className={styles.InternationalHeaderContainer}>
      <div className={styles.Heading}>
        <h1 className={styles.HeadingText}>
          <span className={styles.gradientLetter}>{countryName}&nbsp;</span>
          Virtual Phone Number
        </h1>
        {/* <h2>Engage With {countryName} Customers and Prospects, Efficiently.</h2> */}
      </div>
      <div className={styles.CardsContainer}>
        <div className="visualElement"></div>
        <div className={styles.ContentCard}>
          <p>
          Expand your business into Cambodia with a virtual phone number from Phonology.
Create a local presence, build strong connections with Cambodian customers, and streamline 
your communications—all without needing a physical office. Secure your Cambodia virtual number today and start exploring new growth opportunities in Southeast Asia!

          </p>
          <button className={styles.InternationalButton}>Start Demo</button>
        </div>
        <div className={styles.ImageCard}>
          <Image src={ImageForInternationalNumber} alt="Background" className={styles.flagImage}/>
        </div>
      </div>
      <USAAccordionComponent />
    </div>
  );
};

export default CambodiaHeader;
