import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const FranceSubHeader = () => {
  const countryName = "France";  
  return (
    <div className={styles.subHeaderContainer}>
      <h2 className={styles.subHeaderHeading}>Why do you need a {countryName} Virtual Number?</h2>
      
      <div className={styles.cardsContainer}>
 
        
        <div className={styles.contactCard}>
          <Image src={ImageForCard} alt={`Contact Card for ${countryName}`} layout="responsive" />
          {contactNumbers.map((number, index) => (
            <div key={index} className={styles.contactRow}>
              <Image src={countryFlag} alt={`${countryName} flag`} width={32} height={32} className={styles.flagIcon} />
              <span className={styles.contactNumber}>{number}</span>
              <button className={styles.buyNowButton} disabled>Buy Now</button>
            </div>
          ))}
        </div>
        
        <div className={styles.textCard}>
          <p className={styles.cardParagraph}>
            Connect with {countryName} Customers Instantly: By using a local {countryName} number, you willll build immediate trust and credibility with your customers, making them feel more comfortable reaching out to you.
          </p>
          <ul className={styles.bulletPoints}>
            <li><b>Increase Customer Inquiries:</b> With a local or toll-free {countryName} number, you make it easier for your customers to get in touch—leading to more inquiries and potential sales.</li>
            <li><b>Save on Communication Costs:</b> You can reduce expensive international call charges, allowing your business to grow without the high costs of global communication.</li>
            <li><b>Scale as Your Business Expands:</b> As your business grows, so can your virtual number system. Add more lines as needed, without the hassle of physical office expansions.</li>
            <li><b>Offer Exceptional Service:</b> Using advanced features like call recording, IVR, and voicemail, you can provide the highest level of customer service, ensuring every call is handled professionally.</li>
          </ul>
        </div>
        
      
      </div>
    </div>
  );
}

export default FranceSubHeader;
