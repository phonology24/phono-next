import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const BelgiumSubHeader = () => {
  let countryName = "Belgium";
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
        
        <Image className={styles.contactCard} src={ImageForCard} alt='imagecard'>
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
          Connect Instantly with Belgian Customers: Using a local Belgium number helps build trust and credibility right away, making it easier for your customers to feel comfortable when reaching out to your business.
          </p>
          <ul className={styles.bulletPoints}>
  <li><b>Boost Customer Engagement:</b> By offering a local or toll-free Belgium number, you provide an easy way for customers to contact you, increasing inquiries and driving potential sales.</li>
  <li><b>Reduce Communication Costs:</b>Cut down on high international call charges, making global communication more affordable while allowing your business to expand cost-effectively.</li>
  <li><b>Scale with Your Growing Business:</b>As your business grows, your virtual number system can grow with you. Add more lines seamlessly without the need for physical office space.</li>
  <li><b>Deliver Superior Service:</b> Take advantage of advanced features like call forwarding, IVR, call recording, and voicemail to provide outstanding customer service, ensuring every interaction is professional and efficient.</li>


          </ul>
        </div>
        
        {/* Uncomment if you want to add a visual element */}
        {/* <div className={styles.visualElement}></div> */}
      </div>
    </div>
  );
}

export default BelgiumSubHeader;
