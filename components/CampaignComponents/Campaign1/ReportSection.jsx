import React from 'react';
import ElastixLogo from '../../../public/Assets/cisco-logo.png';
import '../../../styles/campaign/reportsection.css';
import Image from 'next/image';

const ReportSection = () => {
  return (
    <div className="report-section">
      <h2>What will you learn <span className="highlight">from the report</span></h2>
      <div className="report-items">
        <div className="report-item">
          <div className="image-container">
            <Image src={ElastixLogo} alt="Elastix Logo" className="report-image" width={1000} height={1000} />
            <div className="icon-circle">1</div>
          </div>
          <p>
            <strong>Add a description of your offer and key benefits.</strong>
            <br />
            What it is and how it helps your customer.
          </p>
        </div>
        <div className="report-item">
          <div className="image-container">
          <Image src={ElastixLogo} alt="Elastix Logo" className="report-image" width={1000} height={1000} />
          <div className="icon-circle">2</div>
          </div>
          <p>
            <strong>Add a description of your offer and key benefits.</strong>
            <br />
            What it is and how it helps your customer.
          </p>
        </div>
        <div className="report-item">
          <div className="image-container">
          <Image src={ElastixLogo} alt="Elastix Logo" className="report-image" width={1000} height={1000} />
          <div className="icon-circle">3</div>
          </div>
          <p>
            <strong>Add a description of your offer and key benefits.</strong>
            <br />
            What it is and how it helps your customer.
          </p>
        </div>
        <div className="report-item">
          <div className="image-container">
          <Image src={ElastixLogo} alt="Elastix Logo" className="report-image" width={1000} height={1000} />
          <div className="icon-circle">4</div>
          </div>
          <p>
            <strong>Add a description of your offer and key benefits.</strong>
            <br />
            What it is and how it helps your customer.
          </p>
        </div>
      </div>
      <button className="cta-button">GET FREE COPY</button>
    </div>
  );
};

export default ReportSection;
