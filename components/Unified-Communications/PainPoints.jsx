import React from 'react';
// import '../../styles/unified-communications.css';

const PainPoints = () => {
  return (
    <div className="pain-points-container">
      <div className="left-section">
        <h3 className="section-heading-unified">
          Challenges <span className="solved">Addressed</span>
        </h3>
        <ul className="painpointsul">
          <li>
          Fragmented Communication Channels
          <p className="painpoints-p">
          Unified Communications consolidates voice, video,<br/>
           messaging, and collaboration into a single platform, <br/>
          eliminating the need to juggle multiple tools and <br/>
          enhancing efficiency across all communication channels.

            </p>
          </li>
          <li>
          Device and Location Incompatibility
            <p className="painpoints-p">
            By integrating with SIP trunks and PBX systems,<br/>
             Unified Communications allows users to communicate <br/>
             seamlessly across any device, ensuring consistent <br/>
             communication whether employees are in the office <br/>
             or working remotely            </p>
          </li>
          <li>
          Scalability Issues for Growing Businesses
            <p className="painpoints-p">
            Unified Communications provides a cloud-based, scalable <br/>
            solution that grows with your business, enabling easy <br/>
            expansion without the need for complex infrastructure upgrades.

</p>
          </li>
          <li>
            Security and Data Privacy Concerns
            <p className="painpoints-p">
            Phonology’s Unified Communications ensures end-to-end<br/>
             encryption and secure data handling, protecting sensitive <br/>
             information and ensuring compliance with industry standards,<br/> 
             no matter the size of your business.            </p>
          </li>
        </ul>
      </div>

      <div className="right-section">
        <div className="client-feedback">
          <p className="feedback-paragraph">
            &quot;Unified Communications is the key to transforming modern workplaces – enhancing flexibility, boosting efficiency, and enabling teams to work together more effectively, no matter where they are.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export default PainPoints;
