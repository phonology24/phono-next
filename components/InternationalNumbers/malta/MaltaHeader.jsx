"use client";
import React from "react";
import Image from "next/image";
import ImageForInternationalNumber from "../../../public/Assets/malta.png";
import styles from "../../../styles/Internationalheader.module.css";
import USAAccordionComponent from "./accordion";

const MaltaHeader = () => {
  let countryName = "Malta";
  let countryFlag = "https://flagsapi.com/IT/flat/64.png";

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
          Expand your business into Malta with a virtual phone number from Phonology.
Create a local presence, enhance your communication with Maltese customers, and build trust—all without needing a physical office. Secure your Malta virtual number today and take advantage of new business opportunities across the Mediterranean!

          </p>
          <a href="https://zfrmz.in/kfmeFeFIEst6LHtun8nj" target="_blank" rel="noopener noreferrer">
    <button className={styles.InternationalButton}>Start Demo</button>
</a>        </div>
        <div className={styles.ImageCard}>
          <Image src={ImageForInternationalNumber} alt="Background" className={styles.flagImage}/>
        </div>
      </div>
      <USAAccordionComponent />
    </div>
  );
};

export default MaltaHeader;
