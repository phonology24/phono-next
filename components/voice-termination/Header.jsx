"use client"
import React from "react";
import headerVideo from "../../public/Assets/header-video.mp4";
import styles from '../../styles/voiceTermination.module.css';
import Link from "next/link";
import FreeTrialForm from "../Home/FreeTrialForm";
import { Helmet } from "react-helmet-async";
import BannerCards from "../BannerCards";

const HeaderVoiceTermination = () => {
  return (
    <div className={styles.heading}>

      <div className={styles.heroVc}>
        <div>
          <h1 className={styles.headingTextVc}>
            Enterprise VoIP Solution- Leading VoIP Service Provider in India
          </h1>
          <p className={styles.headingTextVcp}>
            Being a leading VoIP service provider in India, We deliver enterprise VoIP solutions that ensure seamless,
            reliable global communication. Our advanced features and flexible plans enhance business connectivity, 
            empowering you to stay connected and productive worldwide.
          </p>
        </div>
        <video autoPlay loop muted playsInline className={styles.headerVideo}>
          <source src={headerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.buttonGroupvc}>
          <button className={styles.vtButton}>Free Trial</button>
        <Link href="https://zfrmz.in/uVhtnQbhSsWHU9Z8Xy8T" target="_blank" rel="noopener noreferrer nofollow">
          <button className={styles.vtButton}>Get Pricing</button>
        </Link>
      </div>
 
      <BannerCards/>
    </div>
  );
};

export default HeaderVoiceTermination;
