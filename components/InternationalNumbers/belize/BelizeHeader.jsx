"use client";
import React from "react";
import Image from "next/image";
import ImageForInternationalNumber from "../../../public/Assets/austriaHeader1.png";
import styles from "../../../styles/Internationalheader.module.css";
import USAAccordionComponent from "./accordion";

const BelizeHeader = () => {
  let countryName = "Belize";
  let countryFlag = "https://flagsapi.com/BE/flat/64.png";

  return (
    <div className={styles.InternationalHeaderContainer}>
      <div className={styles.Heading}>
        <h1 className={styles.HeadingText}>
          Get&nbsp;<span className={styles.gradientLetter}>{countryName}&nbsp;</span>
          Virtual Phone Number
        </h1>
        {/* <h2>Engage With {countryName} Customers and Prospects, Efficiently.</h2> */}
      </div>
      <div className={styles.CardsContainer}>
        <div className="visualElement"></div>
        <div className={styles.ContentCard}>
          <p>
          Establish a local presence, enhance your communication with Belizean customers, 
          and strengthen your brand—all without the need for a physical office. Secure 
          your Belize virtual number today and explore new opportunities in this growing market!
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

export default BelizeHeader;
