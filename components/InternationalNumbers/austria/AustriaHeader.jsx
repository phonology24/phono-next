"use client"
import React from 'react';
import styles from '../../../styles/InternationalNumbersCss/internationalHeader.module.css';
import Image from 'next/image';
import ImageForInternationalNumber from '../../../public/Assets/blurry-gradient-haikei.png';

const AustriaHeader = () => {
    let countryName = "Austria";
    let countryFlag = "https://flagsapi.com/AT/flat/64.png";

    return (
        <div className={styles.InternationalHeaderContainer}>
            <div className={styles.InternationalContent}>
                
            <h1 className={styles.Heading}>
                
                    Get&nbsp;<span className={styles.gradientLetter}>{countryName}&nbsp;</span> 
                    Virtual Phone Number
                 
                </h1>                <h2>Engage With {countryName} Customers and Prospects, Efficiently.</h2>
                <button className={styles.InternationalButton}>Start Demo</button>
                {/* <Image 
                    src={ImageForInternationalNumber} 
                    alt="Background" 
                    className={styles.flagImage}
                /> */}
            </div>
            {/* <div className={styles.visualElement}></div> */}
        </div>
    );
}

export default AustriaHeader;
