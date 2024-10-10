import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const BelizeSubHeader = () => {
  let countryName = "Belize";
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
          Instantly Connect with Belizean Clients: A local Belize phone number increases your business’s credibility, making it easy for customers in Belize to engage with you, helping build trust and improve communication.
          </p>
          <ul className={styles.bulletPoints}>
  <li><b>Boost Customer Interaction: </b>Providing a local or toll-free Belize number gives your customers a simple and cost-free way to reach your business, leading to more inquiries and fostering better relationships.</li>
  <li><b>Save on Communication Costs:</b> You can reduce expensive international call charges, allowing your business to grow without the high costs of global communication.</li>
  <li><b>Effortlessly Scale Your Business:</b>As your business grows, so can your virtual phone system. You can add more lines and services without the need for additional office infrastructure or complicated setups.</li>
  <li><b>Provide Exceptional Customer Support::</b> Leverage features like call forwarding, IVR, voicemail, and call recording to ensure that every customer interaction is professional and seamless, enhancing their experience with your brand.</li>


          </ul>
        </div>
        
        {/* Uncomment if you want to add a visual element */}
        {/* <div className={styles.visualElement}></div> */}
      </div>
    </div>
  );
}

export default BelizeSubHeader;
