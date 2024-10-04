import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const CroatiaSubHeader = () => {
  let countryName = "Croatia";
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
          Instant Connection with Croatian Customers: A local Croatia phone number helps your business build immediate credibility, making customers feel confident when reaching out to you.
          </p>
          <ul className={styles.bulletPoints}>
  <li><b>Enhance Customer Interaction: </b> Offering a local or toll-free Croatia number ensures that customers can easily get in touch, which can drive more inquiries and conversions.</li>
  <li><b>Lower Your International Communication Costs: </b> Reduce your expenses on international calls, making your global communications more cost-efficient while helping your business expand into new regions.</li>
  <li><b>Adapt as Your Business Grows: </b>As your company expands, your virtual phone system can grow with it. You can easily add additional lines without the complexity of expanding your physical office presence.</li>
  <li><b>Deliver Outstanding Customer Service: </b> Use advanced features like call forwarding, IVR, call recording, and voicemail to provide excellent customer support, ensuring every call is handled effectively and professionally.</li>


          </ul>
        </div>
        
        {/* Uncomment if you want to add a visual element */}
        {/* <div className={styles.visualElement}></div> */}
      </div>
    </div>
  );
}

export default CroatiaSubHeader;
