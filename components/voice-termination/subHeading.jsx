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
        <h3>Customizable VoIP Features to Meet Enterprise Needs.</h3>
        <p>
        Unlock the full potential of your business with Phonology’s customizable Enterprise VoIP solution. Tailor your communication system to fit your needs, whether it's advanced call routing, voicemail-to-email, or seamless multi-device integration. Our flexible features are designed to boost team productivity, improve collaboration, and deliver exceptional customer experiences—empowering your business to thrive with a solution built just for you.        </p>
      </div>
      <div className={styles.centerTextContainer}>
        <div className={styles.centerText}>
          <h3 className={styles.centerTextH2}>How That Operates.</h3>
          <p className={styles.centerTextP}>Powered by Phonology’s advanced infrastructure, our VoIP services operate efficiently, delivering crystal-clear communication with minimal downtime.</p>
        </div>
      </div>
    </div>
  );
};

export default SubHeading;
