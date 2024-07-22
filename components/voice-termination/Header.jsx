"use client"
import React from "react";
import headerVideo from "../../public/Assets/header-video.mp4";
import styles from '../../styles/voiceTermination.module.css';
import Link from "next/link";
import FreeTrialForm from "../Home/FreeTrialForm";
import { Helmet } from "react-helmet-async";
// import MetaTags, { ReactTitle } from 'react-meta-tags';
import BannerCards from "../BannerCards";

const HeaderVoiceTermination = () => {
  return (
    <div className={styles.heading}>
      {/* <MetaTags>
        <meta
          name="description"
          content="The leading VoIP service provider in India with Phonology. Enjoy crystal-clear communication, seamless connectivity, 
          and cost-effective solutions tailored to your business needs. Call us for the best VoIP Calling rates with HD quality and 100% Client satisfaction"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta
          name="keywords"
          content="Internet service provider in India, Business VoIP in India, business VoIP service in India,
          VoIP Phone, VoIP, VoIP Service Provider in Bangalore, VoIP Service Provider in India, Best VoIP Service, VoIP Phone Provider, 
          IP phone provider, IP PBX Provider, Internet Telephony Service Provider, VoIP Solutions Provider, Best Business VoIP Solutions Provider,
          Cloud Based PBX Service Provider, How to Choose VoIP Phone System, VoIP Features, SIP Trunk, VOIP in India in Bangalore,
          VoIP communication in India, trunk line internet in India, small office VoIP in Bangalore, small office phone systems in India,
          SIP trunk in India, office VoIP phones in India, office phone services in India, office IP phone in India,"
        />
        <link rel="canonical" href="https://www.phonology.io/voip-service-providers-in-india" />
      </MetaTags> */}
      <div className={styles.heroVc}>
        {/* <ReactTitle title="Enterprise VoIP Solution- Leading VoIP Service Provider in India" /> */}
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
      <div className={styles.buttonGroup}>
          <button className={styles.vtButton}>Free Trial</button>
        {/* <Link href="https://zfrmz.in/uVhtnQbhSsWHU9Z8Xy8T" target="_blank" rel="noopener noreferrer nofollow"> */}
          <button className={styles.vtButton}>Get Pricing</button>
        {/* </Link> */}
      </div>
      {/* <div className={styles.darkDivVt}>
        <div className={styles.bannerCardContainer}>
          <div className={styles.bannerCard}>
            <h2 style={{ fontSize: "40px" }}>24B+</h2>
            <h4 className={styles.ltrGradient}>Minutes Terminated</h4>
          </div>
          <div className={styles.bannerCard}>
            <h2 style={{ fontSize: "40px" }}>80%</h2>
            <h4 className={styles.ltrGradient}>Cost Reduction</h4>
          </div>
          <div className={styles.bannerCard}>
            <h2 style={{ fontSize: "40px" }}>70+</h2>
            <h4 className={styles.ltrGradient}>Country Supports</h4>
          </div>
          <div className={styles.bannerCard}>
            <h2 style={{ fontSize: "40px" }}>24/7</h2>
            <h4 className={styles.ltrGradient}>Dedicated Technical Support</h4>
          </div>
        </div>
      </div> */}
      <BannerCards/>
    </div>
  );
};

export default HeaderVoiceTermination;
