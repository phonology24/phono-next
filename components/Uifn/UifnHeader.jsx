
import React from 'react';
import '../../styles/uifn.css';
import YealinkPhone from '../../public/Assets/uifn.png';
import Image from 'next/image';

const UifnHeader = () => {
  return (
    <div className="uifn-header">

      <div className="uifn-grid uifn-grid-middle uifn-grid-gap-large">
        <div className="uifn-content">
          <div className="uifn-content-inner">
            <h1 className="uifn-display-4">
            <span className="uifn-gradient-ltr">
            UIFN Toll-Free Numbers,             </span>
             One Solution for Worldwide Accessibility. 
            </h1>
            <p className="uifn-large">
            A UIFN toll-free number (Universal International Freephone Number) provides businesses with a single, 
            easy to remember contact number that works across multiple countries. It enables customers to connect
             effortlessly, free of charge, improving global accessibility and customer satisfaction. By using a 
             UIFN toll-free number, your business can foster trust, offer 24/7 availability, and streamline 
             communication, ensuring international customers can reach you with ease.
            </p>

          </div>
        </div>
        <div className="uifn-photo">
          <div className="uifn-photo-inner">
            <Image
              className="uifn-photo-image"
              src={YealinkPhone}
              alt="yealinkphone"

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UifnHeader;
