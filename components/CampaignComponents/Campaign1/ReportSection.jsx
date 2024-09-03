import React from 'react';
import ElastixLogo from '../../../public/Assets/cisco-logo.png';
import '../../../styles/campaign/reportsection.css';
import Image from 'next/image';

const ReportSection = () => {
  return (
    <div className="report-section">
      <h2>Our <span className="highlight">Products</span></h2>
      <div className="report-items">
        <div className="report-item">
          <div className="image-container">
            <Image src={ElastixLogo} alt="Elastix Logo" className="report-image" width={1000} height={1000} />
            <div className="icon-circle">1</div>
          </div>
          <p>
            <strong style={{fontSize:"24px"}}>SIP Trunking</strong>
            <br />
            Offers seamless, scalable voice communication over the internet, 
            reducing costs while enhancing call quality and reliability. 
            Empower your business with flexible, high-performance connectivity that grows with you.
          </p>
        </div>
        <div className="report-item">
          <div className="image-container">
          <Image src={ElastixLogo} alt="Elastix Logo" className="report-image" width={1000} height={1000} />
          <div className="icon-circle">2</div>
          </div>
          <p>
          <strong style={{fontSize:"24px"}}>UCaaS</strong>
          <br />
          Solution unifies your communication channels into one cloud-based platform, 
          enhancing collaboration and productivity across your organization. 
           You can enjoy seamless integration of voice, video, messaging, 
           and more—unified in one powerful service.</p>
        </div>
        <div className="report-item">
          <div className="image-container">
          <Image src={ElastixLogo} alt="Elastix Logo" className="report-image" width={1000} height={1000} />
          <div className="icon-circle">3</div>
          </div>
          <p>
          <strong style={{fontSize:"24px"}}>Virtual Numbers</strong>
            <br />
            Provide your business with a local presence globally, 
            enabling seamless customer interaction without geographic limitations. 
            Enhance your reach and accessibility with flexible, cost-effective
             virtual numbers tailored to your needs. </p>
        </div>
        <div className="report-item">
          <div className="image-container">
          <Image src={ElastixLogo} alt="Elastix Logo" className="report-image" width={1000} height={1000} />
          <div className="icon-circle">4</div>
          </div>
          <p>
          <strong style={{fontSize:"24px"}}>Hosted PBX</strong>
            <br />
            Offers a cloud-based phone system that delivers enterprise-level 
            features without the need for on-site hardware. Enjoy scalable,
             reliable communication that simplifies management and reduces costs,
              all while keeping your business connected.</p>
        </div>
      </div>
      <button className="cta-button">GET FREE COPY</button>
    </div>
  );
};

export default ReportSection;
