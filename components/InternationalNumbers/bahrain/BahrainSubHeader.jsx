import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const BahrainSubHeader = () => {
  let countryName = "Bahrain";
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
      <h2 className={styles.subHeaderHeading}>Why get a {countryName} Virtual Number?</h2>
      
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
          Instantly Connect with Bahraini Customers: A local Bahrain phone number boosts your business’s credibility, 
             making it easy for customers in Bahrain to connect with you, fostering trust and stronger business relationships.
          </p>
          <ul className={styles.bulletPoints}>
  <li><b>Increase Customer Engagement:</b>By offering a local or toll-free Bahrain number,
   you provide an easy and cost-free way for customers to contact you, resulting in more inquiries and enhanced customer interactions.</li>
  <li><b>Lower Your International Calling Costs:</b> Using a Bahrain virtual number helps you minimize international call expenses, allowing your business to communicate efficiently without the high cost of international phone calls.</li>
  <li><b>Effortlessly Scale Your Operations:</b> As your business grows, your virtual phone system can grow with it. Add more lines and services seamlessly, without the need for physical infrastructure expansion.</li>
  <li><b>Provide Seamless Customer Support:</b> With features like call forwarding, IVR, call recording, and voicemail, you can ensure every customer interaction is smooth and professional, enhancing the overall experience for your clients.</li>


          </ul>
        </div>
        
        {/* Uncomment if you want to add a visual element */}
        {/* <div className={styles.visualElement}></div> */}
      </div>
    </div>
  );
}

export default BahrainSubHeader;
