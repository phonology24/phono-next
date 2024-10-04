import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const BangladeshSubHeader = () => {
  let countryName = "Bangladesh";
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
      <h2 className={styles.subHeaderHeading}>Why do you need an {countryName} Virtual Number?</h2>
      
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
          Instantly Connect with Bangladeshi Clients: A local Bangladesh phone number boosts your credibility, 
          making it easier for customers in Bangladesh to reach out to your business, fostering trust and driving stronger relationships.
          </p>
          <ul className={styles.bulletPoints}>
  <li><b>Enhance Customer Engagement:</b> Offering a local or toll-free Bangladesh number provides a simple, cost-effective way for your customers to contact you, increasing inquiries and improving your customer engagement.</li>
  <li><b>Reduce International Communication Costs:</b>Using a Bangladesh virtual number helps reduce the cost of international calls, enabling your business to expand its communication capabilities without high calling expenses.</li>
  <li><b>Seamlessly Scale Your Business:</b>As your company grows, your virtual phone system can scale easily alongside it. Add additional lines and services without the hassle of expanding physical infrastructure.</li>
  <li><b>Deliver Top-Quality Customer Support:</b>Utilize features such as call forwarding, IVR, voicemail, and call recording to deliver seamless and professional customer service, ensuring that every interaction is managed efficiently.</li>


          </ul>
        </div>
        
        {/* Uncomment if you want to add a visual element */}
        {/* <div className={styles.visualElement}></div> */}
      </div>
    </div>
  );
}

export default BangladeshSubHeader;
