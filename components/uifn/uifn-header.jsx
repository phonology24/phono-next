
import React from 'react';
import '../../styles/uifn.css';
import YealinkPhone from '../../public/Assets/virtual-numbers1.png';
import Image from 'next/image';

const UifnHeader = () => {
  return (
    <div className="uifn-header">

      <div className="uifn-grid uifn-grid-middle uifn-grid-gap-large">
        <div className="uifn-content">
          <div className="uifn-content-inner">
            <h1 className="uifn-display-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse v
              <span className="uifn-gradient-ltr">
                - UCaaS
              </span>
            </h1>
            <p className="uifn-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse vel est mollis, accumsan justo eu, molestie sem. 
              Donec in nibh neque. Praesent eget orci sed nisi molestie scelerisque
              eget eu velit. Cras enim sem, auctor sed dui ac, vehicula pellentesque nibh. 
              Vivamus consectetur odio hendrerit neque consectetur, quis lacinia lorem volutpat.
              Nam imperdiet risus in sollicitudin vestibulum. Sed eros arc
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
