import React from 'react';
import { Metadata } from 'next';

export const metadata = {
  title: 'Terms and Conditions | Phonology', 
}
const TermsAndConditions = () => {
  const containerStyle = {
    maxWidth: '800px',
    // margin: 'auto',
    margin:'100px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '15px',
  };

  const paragraphStyle = {
    marginBottom: '10px',
  };

  return (


    
    <div style={containerStyle}>


      <h2 style={headingStyle}>TERMS AND CONDITIONS</h2>

      <p style={paragraphStyle}><b>Introduction</b></p>
      <p style={paragraphStyle}>
      Welcome to Phonology. By accessing our website and services, you agree to adhere to these terms and conditions.      </p>

      <p style={paragraphStyle}><b>Use of Service</b></p>
      <p style={paragraphStyle}>
      The services offered by Phonology are governed by the following terms of use. Phonology reserves the right to update these terms as needed without prior notice.
            </p>

      <p style={paragraphStyle}><b>User Account</b></p>
      <p style={paragraphStyle}>
      If a service requires you to create an account, you must complete the registration process by providing current, complete, and accurate information as requested on the registration form.      </p>

      <p style={paragraphStyle}><b>Privacy</b></p>
      <p style={paragraphStyle}>
      Your use of Phonology is governed by our Privacy Policy. Please review this policy, as it outlines our data collection practices and governs the site.      </p>

      <p style={paragraphStyle}><b>No Unlawful or Prohibited Use</b></p>
      <p style={paragraphStyle}>
      As a condition of your use of the Phonology website, you warrant to Phonology that you will not use the website for any purpose that is unlawful or prohibited by these terms, conditions, and notices.      </p>

      <p style={paragraphStyle}><b>Intellectual Property</b></p>
      <p style={paragraphStyle}>
      All content included on the site, such as text, graphics, logos, images, the compilation thereof, and any software used on the site, is the property of Phonology or its suppliers and it is protected by copyright and international copyright laws.      </p>

      <p style={paragraphStyle}><b>Liability Disclaimer</b></p>
      <p style={paragraphStyle}>
      The information, software, products, and services included in or available through the Phonology website may have inaccuracies or typographical errors. Changes are added from time to time to the information herein.      </p>

      <p style={paragraphStyle}><b>Contact Information</b></p>
      <p style={paragraphStyle}>
        If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:info@phonology.io">info@phonology.io</a>.
      </p>
    </div>
  );
};

export default TermsAndConditions;
