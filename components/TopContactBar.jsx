import React from 'react';
import styles from '../styles/TopContactBar.module.css';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'; 

const TopContactBar = () => {
  return (
    <div className={styles.topContactBar}>
      <div className={styles.contactInfo}>
        <a href="mailto:example@example.com">info@phonology.io</a>
      </div>
      
      {/* <div className={styles.contactInfo}>
        <a href=""><span className={styles.salesSpan}>For Sales : </span>+91 98459 77788 / +91 98456 33355</a>
      </div> */}
      
      {/* Right section: Social media icons */}
      {/* <div className={styles.socialMediaIcons}>
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div> */}
    </div>
  );
}

export default TopContactBar;
