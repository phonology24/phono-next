import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const BangladeshSubHeader = () => {
  const countryName = "Bangladesh";
  const countryFlag = "https://flagsapi.com/BD/flat/64.png"; // Updated to Bangladesh flag
  const contactNumbers = [
    "(+880) 1xxx xxxxxx",
    "(+880) 1xxx xxxxxx",
    "(+880) 1xxx xxxxxx",
    "(+880) 1xxx xxxxxx",
    "(+880) 1xxx xxxxxx",
    "(+880) 1xxx xxxxxx",
    "(+880) 1xxx xxxxxx",
    "(+880) 1xxx xxxxxx",
  ];

  return (
    <div className={styles.subHeaderContainer}>
      <h2 className={styles.subHeaderHeading}>Why do you need a {countryName} Virtual Number?</h2>
      
      <div className={styles.cardsContainer}>
        <div className={styles.imageCard}>
          <Image src={ImageForCard} alt={countryName} width={500} height={500} className={styles.cardImage} />
        </div>
        
        <div className={styles.textCard}>
          <p className={styles.cardParagraph}>
            Instantly Connect with Bangladeshi Clients: A local Bangladesh phone number boosts your credibility, 
            making it easier for customers in Bangladesh to reach out to your business, fostering trust and driving stronger relationships.
          </p>
          <ul className={styles.bulletPoints}>
            <li><b>Enhance Customer Engagement:</b> Offering a local or toll-free Bangladesh number provides a simple, cost-effective way for your customers to contact you, increasing inquiries and improving your customer engagement.</li>
            <li><b>Reduce International Communication Costs:</b> Using a Bangladesh virtual number helps reduce the cost of international calls, enabling your business to expand its communication capabilities without high calling expenses.</li>
            <li><b>Seamlessly Scale Your Business:</b> As your company grows, your virtual phone system can scale easily alongside it. Add additional lines and services without the hassle of expanding physical infrastructure.</li>
            <li><b>Deliver Top-Quality Customer Support:</b> Utilize features such as call forwarding, IVR, voicemail, and call recording to deliver seamless and professional customer service, ensuring that every interaction is managed efficiently.</li>
          </ul>
        </div>
      </div>

      
    </div>
  );
}

export default BangladeshSubHeader;
