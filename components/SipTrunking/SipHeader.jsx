import React from "react";
import HeaderImg from "../../public/Assets/omni-messaging.png";
import "../../styles/messagingservices.css";
import  Link from "next/link";
import FreeTrialForm from "../Home/FreeTrialForm";
import Image from "next/image";

const HeaderVirtualNumbers = () => {
  return (
    <div className="heading">
      <div className="hero">
      <h1 style={{display:"none"}}>  Messaging Service Provider|Best SMS Service Provider In India</h1>
        <div>
          <h2 className="heading-text-h2">Omnichannel Messaging.</h2>
          <p className="heading-text-p">
            We've got you covered for effective and versatile engagement.<br /> Unified Communication delivers
            Calling, Messaging, Fax, Video and DATA all over a single platform.
          </p>
        </div>
        <Image
          src={HeaderImg}
          alt="Network Image"
          className="header-img-virtual-numbers"
          style={{width: "400px", height: "400px"}}
        ></Image>
      </div>
      <div className="button-group">
        <FreeTrialForm className="button" />
        <Link href="https://forms.zoho.in/phonology/form/GetPricingForm" target="_blank" rel="noopener noreferrer">
          <button>Get Pricing</button>
        </Link>
      </div> 
    </div>
  );
};

export default HeaderVirtualNumbers;