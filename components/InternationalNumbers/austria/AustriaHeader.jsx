"use client";
import React from "react";
import Image from "next/image";
import ImageForInternationalNumber from "../../../public/Assets/blurry-gradient-haikei.png";
import styles from "../../../styles/InternationalNumbersCss/internationalheader.module.css"; // Updated to use CSS modules

const AustriaHeader = () => {
  let countryName = "Austria";
  let countryFlag = "https://flagsapi.com/AT/flat/64.png";

  return (
    <div className={styles.InternationalHeaderContainer}>
      <div className={styles.InternationalContent}>
        <h1 className={styles.Heading}>
          Get <span className={styles.gradientLetter}>{countryName} </span>
          Virtual Phone Number
        </h1>
        <h2>Engage With {countryName} Customers and Prospects, Efficiently.</h2>
        <button className={styles.InternationalButton}>Start Demo</button>
        {/* Uncomment to use the image */}
        {/* <Image 
          src={ImageForInternationalNumber} 
          alt="Background" 
          className={styles.flagImage}
        /> */}
      </div>
      {/* Uncomment if you want to add a visual element */}
      {/* <div className="visualElement"></div> */}
    </div>
  );
};

export default AustriaHeader;
