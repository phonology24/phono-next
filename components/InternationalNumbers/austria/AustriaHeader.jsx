"use client";
import React from "react";
import Image from "next/image";
import ImageForInternationalNumber from "../../../public/Assets/austriaHeader1.png";
import styles from "../../../styles/Internationalheader.module.css";
import AustriaAccordionComponent from "./accordion";

const AustriaHeader = () => {
  let countryName = "Austria";
  let countryFlag = "https://flagsapi.com/AT/flat/64.png";

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
          Take your business global with an {countryName} virtual phone number from Phonology. Establish a local presence, 
          boost customer engagement, and enjoy cost-efficient communication—all without the need for a physical office.
           Get your {countryName} number today and grow internationally!
          </p>
          <button className={styles.InternationalButton}>Start Demo</button>
        </div>
        <div className={styles.ImageCard}>
          <Image src={ImageForInternationalNumber} alt="Background" className={styles.flagImage}/>
        </div>
      </div>
      <AustriaAccordionComponent />
    </div>
  );
};

export default AustriaHeader;
