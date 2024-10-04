import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const CambodiaSubHeader = () => {
  let countryName = "Cambodia";
  const countryFlag = "https://flagsapi.com/CR/flat/64.png";
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
      <h2 className={styles.subHeaderHeading}>Why do you need a {countryName} Virtual Number?</h2>
      
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
          <p className={styles.cardParagraph}>
          Instantly Connect with Cambodian Clients: A local Cambodia phone number establishes credibility for your business, making it easy for Cambodian customers to contact you and feel confident in your brand.
          </p>
          <ul className={styles.bulletPoints}>
  <li><b>Boost Customer Engagement:</b> Providing a local or toll-free Cambodia number ensures your customers can easily get in touch with your business, increasing inquiries and strengthening your customer relationships.</li>
  <li><b>Save on Communication Costs:</b> You can reduce expensive international call charges, allowing your business to grow without the high costs of global communication.</li>
  <li><b>Scale as Your Business Expands:</b> As your business expands, your virtual phone system can scale effortlessly. Add new lines and services without the need for physical office infrastructure.</li>
  <li><b>Offer Exceptional Customer Support:</b> Take advantage of advanced features like call forwarding, IVR, call recording, and voicemail to ensure that every customer interaction is smooth and professional, improving overall customer satisfaction.</li>


          </ul>
        </div>
        
        {/* Uncomment if you want to add a visual element */}
        {/* <div className={styles.visualElement}></div> */}
      </div>
    </div>
  );
}

export default CambodiaSubHeader;
