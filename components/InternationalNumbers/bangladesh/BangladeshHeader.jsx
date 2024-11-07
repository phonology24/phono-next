"use client";
import React from "react";
import Image from "next/image";
import ImageForInternationalNumber from "../../../public/Assets/bangladesh.png";
import styles from "../../../styles/Internationalheader.module.css";
import AustriaAccordionComponent from "./accordion";

const BangladeshHeader = () => {
  let countryName = "Bangladesh";
  let countryFlag = "https://flagsapi.com/AT/flat/64.png";

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
            Expand your business into Bangladesh with a virtual phone number from Phonology.
            Establish a local presence, improve your communication with Bangladeshi customers,
            and build trust—all without needing a physical office. Secure your Bangladesh virtual
            number today and explore exciting opportunities in this fast-growing market!
          </p>
          <a href="https://zfrmz.in/kfmeFeFIEst6LHtun8nj" target="_blank" rel="noopener noreferrer">
    <button className={styles.InternationalButton}>Start Demo</button>
</a>        </div>
        <div className={styles.ImageCard}>
          <Image src={ImageForInternationalNumber} alt="Background" className={styles.flagImage} />
        </div>
      </div>
      <AustriaAccordionComponent />
    </div>
  );
};

export default BangladeshHeader;
