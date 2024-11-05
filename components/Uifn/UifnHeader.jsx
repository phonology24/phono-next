
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
              UIFN Numbers for Global Reach
              Universal International Freephone Numbers (UIFN) provide businesses with a single,
              toll-free number accessible from multiple countries, making it easier for customers
              worldwide to reach you without incurring costs. Perfect for companies with a global
              presence, UIFN numbers streamline customer support, improve accessibility,
              and create a unified, professional image. Customers can dial the same number across
              different regions, removing the need to manage multiple local numbers. By
              centralizing your customer support line, UIFN helps enhance customer satisfaction,
              build trust, and simplify communication, enabling businesses to deliver seamless,
              reliable service no matter where their customers are.
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
