"use client";
import React from "react";
import Image from "next/image";
import ImageForInternationalNumber from "../../../public/Assets/Bahrain.png";
import styles from "../../../styles/Internationalheader.module.css";
import AustriaAccordionComponent from "./accordion";

const BahrainHeader = () => {
  let countryName = "Bahrain";
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
          Expand your business reach into Bahrain using a virtual phone number from Phonology.
Establish a strong local presence, foster trust with Bahraini customers, and enhance your 
communication—all without needing a physical office. 
Secure your Bahrain virtual number today and explore the possibilities in the growing Middle Eastern market!

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

export default BahrainHeader;
