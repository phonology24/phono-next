'use client';
import React from 'react';
import '../../styles/unified-communications.css';
import YealinkPhone from '../../public/Assets/home-banner-image.png';
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
                {/* Example of an additional link (commented out) */}
              </li>
            </ul>
          </div>
        </div>
        <div className="communications-photo">
          <div className="communications-photo-inner">
            <video autoPlay loop muted playsInline className="uc-vid">
              <source src="/Assets/uc-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationsHeader;
