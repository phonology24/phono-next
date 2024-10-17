import React from "react";
import "../../styles/hostedcallcenter.css";
import CallCenterImage from "../../public/Assets/ccsolution1.png";
import Image from "next/image";
const HostedCallCenterHeading = () => {
  return (<>  

    <div className="hosted-call-center-content">

      <div className="hosted-call-center-image">
        <Image src={CallCenterImage} alt="Call Center"  />
      </div>
      <div className="hosted-call-center-text">
        <h1 className="hosted-call-center-heading-main">Call Center Solutions</h1>
        <p className="hosted-call-center-description">
        Cloud-Based Call Center Solutions for Seamless Customer Care
                          </p>
        <p className="hosted-call-center-details">
        Looking to elevate your customer service to new heights? 
        <br/>
        Phonology’s Call Center Solution has you covered.
         Whether you're managing inbound inquiries or outbound sales, our cloud-based platform makes it a breeze.
          With features like intelligent call routing, IVR systems, and real-time analytics, your team can deliver 
          exceptional service from anywhere. Imagine your agents handling higher call volumes without breaking a sweat,
           all while keeping customers happy and connected. Plus, it's scalable and cost-effective, so as your business
            grows, our solution grows with you. Elevate your call center game with Phonology, where customer satisfaction is always the priority.
        </p>
      </div>
    </div>
    </>
 );
};

export default HostedCallCenterHeading;
