"use client"
import React from "react";
import Logo from "../public/Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/App.module.css';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerSectionOne}>
        <div className={styles.footerLogoContainer}>
          <Link href="/">
            <Image src={Logo} alt="Phonology Logo" className={styles.footerLogo} />
          </Link>
        </div>
        <div className={styles.footerIcons}>
          <a href="https://twitter.com/phonology" target="_blank" rel="noopener noreferrer nofollow">
            <BsTwitter />
          </a>
          <a href="https://www.linkedin.com/company/phonology-it-solutions" target="_blank" rel="noopener noreferrer nofollow">
            <SiLinkedin />
          </a>
          <a href="https://www.facebook.com/phonologyvoip" target="_blank" rel="noopener noreferrer nofollow">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/phonology_voip/" target="_blank" rel="noopener noreferrer nofollow">
            <FaInstagram />
          </a>
        </div>
        <div className={styles.footerSectionColumns}>
          <span>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </span>
          <span>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </span>
        </div>
      </div>
      <div className={styles.footerSectionTwo}>
        <div className={styles.footerSectionColumns}>
          <span>info@phonology.io</span>
          <span>Sales: +91 98459 77788 / +91 98456 33355</span>
          <span>Support: +91 99865 09709 / +91 97404 54742</span>
          <span>Billing: +91 91085 40675</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
