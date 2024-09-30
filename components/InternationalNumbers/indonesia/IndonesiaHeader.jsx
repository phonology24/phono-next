"use client";
import React from "react";
import Image from "next/image";
import ImageForInternationalNumber from "../../../public/Assets/Indonesia.png";
import styles from "../../../styles/Internationalheader.module.css";
import USAAccordionComponent from "./accordion";

const IndonesiaHeader = () => {
  let countryName = "Indonesia";
  let countryFlag = "https://flagsapi.com/GR/flat/64.png";

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
          Expand your business globally with an {countryName} virtual phone number from Phonology. 
          Establish a local presence, boost customer engagement, and enjoy cost-efficient
           communication—all without the need for a physical office. Get your {countryName} number
            today and grow internationally!
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

export default IndonesiaHeader;
