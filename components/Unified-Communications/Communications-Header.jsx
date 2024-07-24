import React from 'react';
import '../../styles/unified-communications.css';
import YealinkPhone from '../../public/Assets/home-banner-image.png'

import Image from 'next/image';
const CommunicationsHeader = () => {
  return (
    <div className="communications-header">
  

      <div className="communications-grid communications-grid-middle communications-grid-gap-large">
        <div className="communications-content">
          <div className="communications-content-inner">
            <h1 className="communications-display-4">
            One Platform, Endless Possibilities: Unified Communication Provider &nbsp;
              <span className="communications-gradient-ltr">
              - UCaaS
              </span>
            </h1>
            <p className="communications-large">
            Unified communications streamline voice, video, messaging, and collaboration tools into a single platform. As a leading unified communication provider,
             we offer integrated solutions that enhance efficiency, foster teamwork, and simplify communication for businesses, ensuring seamless connectivity across all channels.
</p>
            <ul className="communications-list">

              <li>
                {/* <a className="communications-link communications-link-arrow2" target="_blank" rel="noopener noreferrer">
                        <span className="communications-link-inner">
                          <span className="communications-link-label"><u>Explore Our Integrations</u></span>
                     
                        </span>
                      </a> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="communications-photo">
          <div className="communications-photo-inner">
            <Image className="communications-photo-image" src={YealinkPhone} alt="yealinkphone" style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            margin: '20px 0',
            objectFit: 'cover',
          }} ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationsHeader;
