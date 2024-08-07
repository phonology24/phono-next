"use client"
import React from 'react';
import styles from '../../styles/voiceTermination.module.css';

const SubHeading = () => {
  return (
    <div className={styles.subHeadingContainer}>
      <iframe
        width="670"
        height="378"
        src="https://www.youtube.com/embed/TdSA7gkVYU0?si=5hry-vt8bYAh58mq"
        title="Your Iframe Title"
        frameBorder="0"
        allowFullScreen
        className={styles.iframeStyle}
      ></iframe>

      <div className={styles.textField}>
        <h3>Magnify your impact while diminishing expenses.</h3>
        <p>
        Fulfill all your voice calling requirements with our high-grade wholesale A-Z Voice Termination. Partner with global corporations fabricating their voice architecture with Phonology.
        </p>
      </div>
      <div className={styles.centerTextContainer}>
        <div className={styles.centerText}>
          <h3 className={styles.centerTextH2}>How That Operates.</h3>
          <p className={styles.centerTextP}>Attain all your voice-calling desires with our category-leading wholesale A-Z Voice Termination.<br></br> Collaborate with enterprises globally constructing their Voice structure utilizing Phonology.</p>
        </div>
      </div>
    </div>
  );
};

export default SubHeading;
