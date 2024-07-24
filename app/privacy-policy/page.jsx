import React from 'react';
import { Metadata } from 'next';

export const metadata = {
  title: 'Privacy Policy | Phonology', 
}
const PrivacyPolicy = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '100px auto',
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
      <h2 style={headingStyle}>PRIVACY POLICY</h2>

      <p style={paragraphStyle}><b>Introduction</b></p>
      <p style={paragraphStyle}>
        Welcome to Phonology. We are committed to protecting your privacy and ensuring that your personal information is collected and used properly, lawfully, and transparently.
      </p>

      <p style={paragraphStyle}><b>Information We Collect</b></p>
      <p style={paragraphStyle}>
        We may collect personal information that includes but is not limited to your name, address, email address, phone number, payment information, and usage data. This information is collected through various means, such as when you visit our site, register for services, or contact us for support.
      </p>

      <p style={paragraphStyle}><b>How We Use Your Information</b></p>
      <p style={paragraphStyle}>
        Your information is used to provide and improve our services, process transactions, communicate with you, and comply with legal requirements. We also use your information to enhance your experience on our site and to personalize the content and advertisements that you see.
      </p>

      {/* Add more sections as needed */}

      <p style={paragraphStyle}><b>Changes to This Policy</b></p>
      <p style={paragraphStyle}>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>

      <p style={paragraphStyle}><b>Contact Information</b></p>
      <p style={paragraphStyle}>
        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:info@phonology.io">info@phonology.io</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
