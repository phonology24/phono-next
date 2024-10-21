import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const IcelandSubHeader = () => {
  let countryName = "Iceland";
  const countryFlag = "https://flagsapi.com/IS/flat/64.png"; // Updated to the correct Iceland flag
  const contactNumbers = [
    "(+354) 660 xxxxxx",
    "(+354) 660 xxxxxx",
    "(+354) 660 xxxxxx",
    "(+354) 660 xxxxxx",
    "(+354) 660 xxxxxx",
    "(+354) 660 xxxxxx",
    "(+354) 660 xxxxxx",
    "(+354) 660 xxxxxx",
  ];
  
  return (
    <div className={styles.subHeaderContainer}>
      <h2 className={styles.subHeaderHeading}>Why do you need an {countryName} Virtual Number?</h2>
      
      <div className={styles.cardsContainer}>
        {/* Uncomment if you want to use an image card */}
        {/* <div className={styles.imageCard}>
          <Image src={ImageForCard} alt={countryName} width={5000} height={5000} className={styles.cardImage} />
        </div> */}
        
        <Image className={styles.contactCard} src={ImageForCard} alt='imagecard' />

        <div className={styles.textCard}>
          {/* Uncomment if you want to use a card heading */}
          <p className={styles.cardParagraph}>
            Instantly Connect with {countryName} Customers: A local {countryName} phone number enhances your business credibility, making it easier for {countryName} customers to feel comfortable engaging with your business.
          </p>
          <ul className={styles.bulletPoints}>
            <li><b>Boost Customer Reach:</b> With a local or toll-free {countryName} phone number, you make it easier for customers to contact you, leading to increased inquiries and enhanced customer engagement.</li>
            <li><b>Save on International Communication Costs:</b> Using an {countryName} virtual number helps you cut down on expensive international call charges, making communication affordable while growing your business in new regions.</li>
            <li><b>Scale as Your Business Expands:</b> As your business grows, your virtual phone system can adapt without any hassle. Easily add new lines and services without needing to expand your physical infrastructure.</li>
            <li><b>Deliver Exceptional Customer Service:</b> Take advantage of advanced features like call forwarding, IVR, voicemail, and call recording to ensure that every customer interaction is handled smoothly and professionally, helping you build strong relationships.</li>
          </ul>
        </div>
        
        {/* Uncomment if you want to add a visual element */}
        {/* <div className={styles.visualElement}></div> */}
      </div>
    </div>
  );
}

export default IcelandSubHeader;
