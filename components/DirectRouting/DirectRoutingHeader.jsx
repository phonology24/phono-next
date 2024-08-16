// DirectRoutingHeading.jsx

import React from 'react';
import '../../styles/directrouting.css'; 

const DirectRoutingHeading = () => {
  return (
    <div className="direct-routing-heading">
   
      <div className="direct-routing-content">

        <div className="direct-routing-text">
          {/* <h1 className="direct-routing-description ">
          Microsoft Teams Direct Routing
          </h1> */}
          <h1 className="direct-routing-heading-main">
          Your Business, Your Way—<span className='ltr-gradient'>Cloud Telephony </span>for the Modern Enterprise.
          </h1>
          <p className="direct-routing-details">
          Imagine transforming your business communication into a seamless, modern experience—no clunky hardware, 
          just pure efficiency.
          <br/> 
          <br/> 
          Phonology’s Cloud Telephony does exactly that. Say goodbye to traditional 
          PBX systems and hello to a flexible, cloud-based solution that scales as you grow. Whether it’s 
          handling calls from anywhere, setting up virtual numbers, or managing IVR and call analytics, we’ve
           got you covered.
           <br/>
           With built-in security and rock-solid reliability, your communication never 
           misses a beat. It’s the perfect fit for businesses that want to stay connected, work smarter,
            and embrace the future of telephony with confidence.  
          </p>
        </div>
        <div className="direct-routing-image">
        </div>
      </div>
    </div>
  );
};

export default DirectRoutingHeading;
