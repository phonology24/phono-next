import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const AustriaSubHeader = () => {
  let countryName = "Austria";
  const countryFlag = "https://flagsapi.com/AT/flat/64.png";
  const contactNumbers = [
    "(+43) 660 xxxxxx",
    "(+43) 660 xxxxxx",
    "(+43) 660 xxxxxx",
    "(+43) 660 xxxxxx",
    "(+43) 660 xxxxxx",
    "(+43) 660 xxxxxx",
    "(+43) 660 xxxxxx",
    "(+43) 660 xxxxxx",
  ];
  
  return (
    <div className={styles.subHeaderContainer}>
      <h2 className={styles.subHeaderHeading}>Why Do You Need {countryName} Virtual Numbers?</h2>
      
      <div className={styles.cardsContainer}>
        {/* Uncomment if you want to use an image card */}
        {/* <div className={styles.imageCard}>
          <Image src={ImageForCard} alt={countryName} width={5000} height={5000} className={styles.cardImage} />
        </div> */}
        
        <Image className={styles.contactCard} src={ImageForCard}>
           {/* {contactNumbers.map((number, index) => (
            <div key={index} className={styles.contactRow}>
              <Image src={countryFlag} alt={`${countryName} flag`} width={32} height={32} className={styles.flagIcon} />
              <span className={styles.contactNumber}>{number}</span>
              <button className={styles.buyNowButton} disabled>Buy Now</button>
            </div>
          ))} */}

        </Image> 
        
        <div className={styles.textCard}>
          {/* Uncomment if you want to use a card heading */}
          {/* <h3 className={styles.cardHeading}>Benefits of Austria Virtual Numbers</h3> */}
          <p className={styles.cardParagraph}>
            {countryName} virtual numbers offer numerous benefits for businesses looking to expand their reach and improve communication with local customers. Here are some key advantages:
          </p>
          <ul className={styles.bulletPoints}>
            <li>Cost-effective communication</li>
            <li>Local presence without a physical office</li>
            <li>Enhanced customer trust</li>
            <li>Easy to set up and manage</li>
            <li>Scalable solutions for growing businesses</li>
            <li>Advanced call forwarding options</li>
            <li>Integration with CRM and other tools</li>
            <li>Improved customer support experience</li>
            <li>Access to advanced features like IVR</li>
            <li>Better call quality and reliability</li>
          </ul>
        </div>
        
        {/* Uncomment if you want to add a visual element */}
        {/* <div className={styles.visualElement}></div> */}
      </div>
    </div>
  );
}

export default AustriaSubHeader;
