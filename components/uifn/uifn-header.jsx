import React from 'react';
import '../../styles/uifn.css';
import YealinkPhone from '../../public/Assets/home-banner-image.png';
import Image from 'next/image';

const uifnHeader = () => {
  return (
    <div className="uifn-header">

      <div className="uifn-grid uifn-grid-middle uifn-grid-gap-large">
        <div className="uifn-content">
          <div className="uifn-content-inner">
            <h1 className="uifn-display-4">
              One Platform, Endless Possibilities: Unified Communication Provider &nbsp;
              <span className="uifn-gradient-ltr">
                - UCaaS
              </span>
            </h1>
            <p className="uifn-large">
              Unified communications streamline voice, video, messaging, and collaboration tools into a single platform. As a leading unified communication provider,
              we offer integrated solutions that enhance efficiency, foster teamwork, and simplify communication for businesses, ensuring seamless connectivity across all channels.
            </p>
            <ul className="uifn-list">
              <li></li>
            </ul>
          </div>
        </div>
        <div className="uifn-photo">
          <div className="uifn-photo-inner">
            <Image
              className="uifn-photo-image"
              src={YealinkPhone}
              alt="yealinkphone"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                margin: '20px 0',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default uifnHeader;
