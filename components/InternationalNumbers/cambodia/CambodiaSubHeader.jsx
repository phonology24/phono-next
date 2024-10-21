import React from 'react';
import Image from 'next/image';
import ImageForCard from '../../../public/Assets/HostedCallCenter.png';
import styles from '../../../styles/Internationalsubheader.module.css';

const CambodiaSubHeader = () => {
  let countryName = "Cambodia";

  return (
    <div className={styles.subHeaderContainer}>
      <h2 className={styles.subHeaderHeading}>Expand Your Business with a {countryName} Virtual Number</h2>

      <div className={styles.cardsContainer}>
        {/* Uncomment if you want to use an image card */}
        {/* <div className={styles.imageCard}>
          <Image src={ImageForCard} alt={countryName} width={5000} height={5000} className={styles.cardImage} />
        </div> */}
        
        <Image className={styles.contactCard} src={ImageForCard} alt='imagecard' />

        <div className={styles.textCard}>
          <p className={styles.cardParagraph}>
            Expand your business into {countryName} with a virtual phone number from Phonology. Create a local presence, build strong connections with Cambodian customers, and streamline your communications—all without needing a physical office. Secure your {countryName} virtual number today and start exploring new growth opportunities in Southeast Asia!
          </p>
          <ul className={styles.bulletPoints}>
            <li><b>Instantly Connect with Cambodian Clients:</b> A local {countryName} phone number establishes credibility for your business, making it easy for Cambodian customers to contact you and feel confident in your brand.</li>
            <li><b>Boost Customer Engagement:</b> Providing a local or toll-free {countryName} number ensures your customers can easily get in touch with your business, increasing inquiries and strengthening your customer relationships.</li>
            <li><b>Save on Communication Costs:</b> Reduce expensive international call charges, allowing your business to grow without the high costs of global communication.</li>
            <li><b>Scale as Your Business Expands:</b> As your business expands, your virtual phone system can scale effortlessly. Add new lines and services without the need for physical office infrastructure.</li>
            <li><b>Offer Exceptional Customer Support:</b> Take advantage of advanced features like call forwarding, IVR, call recording, and voicemail to ensure every customer interaction is smooth and professional, improving overall customer satisfaction.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CambodiaSubHeader;
