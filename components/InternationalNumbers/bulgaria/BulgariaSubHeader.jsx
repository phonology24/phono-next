import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const BulgariaSubHeader = () => {
  let countryName = "Bulgaria";
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
          <p className={styles.cardParagraph}>
          Connect Instantly with Bulgarian Customers: Using a local Bulgaria number helps build trust and credibility immediately, making it easier for customers to reach out to your business with confidence.
          </p>
          <ul className={styles.bulletPoints}>
  <li><b>Boost Customer Engagement: </b> By offering a local or toll-free Bulgaria number, you make it simple for your customers to get in touch, leading to increased inquiries and more potential sales.</li>
  <li><b>Reduce Communication Costs: </b> Lower your international call charges, making global communication more affordable while allowing your business to expand into new regions effectively.</li>
  <li><b>Scale with Your Growing Business: </b>As your business grows, your virtual number system can easily scale to accommodate its needs. Add more lines without the hassle or cost of expanding physical office space.</li>
  <li><b>Deliver Exceptional Service:</b> Leverage advanced features like call forwarding, IVR, call recording, and voicemail to provide top-tier customer service, ensuring that every interaction is handled smoothly and professionally.</li>


          </ul>
        </div>
        
        {/* Uncomment if you want to add a visual element */}
        {/* <div className={styles.visualElement}></div> */}
      </div>
    </div>
  );
}

export default BulgariaSubHeader;
