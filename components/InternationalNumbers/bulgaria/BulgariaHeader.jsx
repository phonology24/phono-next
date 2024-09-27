"use client";
import React from "react";
import Image from "next/image";
import ImageForInternationalNumber from "../../../public/Assets/austriaHeader1.png";
import styles from "../../../styles/Internationalheader.module.css";
import USAAccordionComponent from "./accordion";

const BulgariaHeader = () => {
  let countryName = "Bulgaria";
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
            Establish a local presence, build customer trust, and enjoy cost-effective
            communication—without needing a physical office. Secure your Bulgaria
            number today and tap into new international markets!
          </p>
          <button className={styles.InternationalButton}>Start Demo</button>
        </div>
        <div className={styles.ImageCard}>
          <Image src={ImageForInternationalNumber} alt="Background" className={styles.flagImage} />
        </div>
      </div>
      <USAAccordionComponent />
    </div>
  );
};

export default BulgariaHeader;
