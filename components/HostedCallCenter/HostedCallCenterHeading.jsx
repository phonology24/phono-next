import React from "react";
import "../../styles/hostedcallcenter.css";
import CallCenterImage from "../../public/Assets/HostedCC.png";
import Image from "next/image";
const HostedCallCenterHeading = () => {
  return (<>  

    <div className="hosted-call-center-content">

      <div className="hosted-call-center-image">
        <Image src={CallCenterImage} alt="Call Center" />
      </div>
      <div className="hosted-call-center-text">
        <h1 className="hosted-call-center-heading-main">Hosted Call Center</h1>
        <p className="hosted-call-center-description">
        Creating Compelling Customer Experiences for Contemporary Support Team
                  </p>
        <p className="hosted-call-center-details">
        Ensure outstanding customer experiences consistently by leveraging our robust calling center features,
  meticulously crafted to enhance efficiency and productivity. Phonogram&apos;s white-label hosted call-centered services empower channel partners with all
  essential tools for quoting, activating, billing, and supporting their personalized CCaaS solutions.
        </p>
      </div>
    </div>
    </>
 );
};

export default HostedCallCenterHeading;
