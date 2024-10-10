import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const ChinaSubHeader = () => {
  let countryName = "China";
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
          <p className={styles.cardParagraph}>
          Easily Connect with Chinese Clients: A local China phone number enhances your business's credibility, making it simpler for Chinese customers to contact you while increasing their confidence in your services.
          </p>
          <ul className={styles.bulletPoints}>
  <li><b>Boost Customer Interactions:</b>With a local or toll-free China number, you provide a direct, cost-free communication channel for your clients, helping you generate more inquiries and build stronger relationships.</li>
  <li><b>Cut Down on International Calling Costs:</b>By using a China virtual number, you can significantly reduce international call expenses, making communication more affordable as you expand into new markets.</li>
  <li><b>Scale Your Business Effortlessly:</b> As your company grows, so can your virtual phone system. Add new lines and services without investing in additional physical infrastructure or office space.</li>
  <li><b>Provide Excellent Customer Support:</b>Take advantage of advanced features such as call forwarding, IVR, voicemail, and call recording to ensure seamless and professional communication, enhancing the customer experience.</li>


          </ul>
        </div>
        
        {/* Uncomment if you want to add a visual element */}
        {/* <div className={styles.visualElement}></div> */}
      </div>
    </div>
  );
}

export default ChinaSubHeader;
