import React from "react";
import LinkIcon from '@mui/icons-material/Link';
import Link from "next/link";
import styles from '../styles/contactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.formHeadingText}>
        To learn more about how <span className={styles.ltrGradient}>Phonology</span> could help you,
        contact us. We&apos;d be happy to take on the challenge! 
        <br/>
        <button type="submit" className={styles.submitContactform}>
          <a href="https://zfrmz.in/Mf9eaR6Y7oP8L83Dx25o" target="_blank" rel="noopener noreferrer" className={styles.submitbuttonLink}>
            Let&apos;s Talk
             {/* <LinkIcon style={{ fontSize: "40px", fontWeight: 100 }} /> */}
          </a>
        </button>
      </div>
      <div className={styles.companyDetails}>
        <p>
          <b>Office:</b>
          <br />
          Phonology IT Solutions
          <br />
          # 2, RR Chambers, Millers Road
          <br />
          Bangalore - 560052, India
          <br />
        </p>
        <p>
          <b>Support:</b>
          <br />
          Having a technical problem?
          <br />
          <Link href="mailto:support@phonology.io" style={{color:'grey'}}>Contact the technical support team.</Link>
        </p>
        <p>
          <b>General Enquiries:</b>
          <br />
          info@phonology.io
          <br />
          <br />
          <br />
          <br />
        </p> 
      </div>
    </div>
  );
};

export default ContactForm;
