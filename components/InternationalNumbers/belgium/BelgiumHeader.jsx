"use client";
import React from "react";
import Image from "next/image";
import ImageForInternationalNumber from "../../../public/Assets/belgium.png";
import styles from "../../../styles/Internationalheader.module.css";
import USAAccordionComponent from "./accordion";

const BelgiumHeader = () => {
  let countryName = "Belgium";
  let countryFlag = "https://flagsapi.com/BE/flat/64.png";

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
          Expand your business reach with a Belgium virtual phone number from Phonology.
Create a local presence, increase customer trust, and maintain cost-effective communication—without 
the need for a physical location. Secure your Belgium number today and tap into new international markets!

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

export default BelgiumHeader;
