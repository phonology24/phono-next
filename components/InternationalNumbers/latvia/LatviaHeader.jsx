"use client";
import React from "react";
import Image from "next/image";
import ImageForInternationalNumber from "../../../public/Assets/latvia.png";
import styles from "../../../styles/Internationalheader.module.css";
import USAAccordionComponent from "./accordion";

const LatviaHeader = () => {
  let countryName = "Latvia";
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
            Grow your business in Latvia using a virtual phone number from Phonology.
            Establish a local presence, build credibility with Latvian customers, and simplify
            your business communication—all without the need for a physical office.
            Secure your Latvia virtual number today and explore new growth opportunities across the Baltic region!
          </p>
          <a href="https://zfrmz.in/kfmeFeFIEst6LHtun8nj" target="_blank" rel="noopener noreferrer">
    <button className={styles.InternationalButton}>Start Demo</button>
</a>        </div>
        <div className={styles.ImageCard}>
          <Image src={ImageForInternationalNumber} alt="Background" className={styles.flagImage} />
        </div>
      </div>
      <USAAccordionComponent />
    </div>
  );
};

export default LatviaHeader;
