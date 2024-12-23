import React from "react";
import HeaderImg from "../../public/Assets/omni-messaging.png";
import "../../styles/messagingservices.css";
import  Link  from "next/link";
import FreeTrialForm from "../Home/FreeTrialForm";
import Image from "next/image";
import BannerCards from "../BannerCards";

const HeaderVirtualNumbers = () => {
  return (
    <div className="heading">
      <div className="hero">
        <div className="sip-text-content">
          <h1 className="heading-text-h2">Your Trusted SIP Trunk Provider for Seamless Connectivity.</h1>
          <p className="heading-text-p">
          As your trusted SIP trunk provider, we ensure seamless connectivity for your business. Our advanced SIP trunking services offer reliable,
           high-quality communication solutions, enhancing your global reach and operational efficiency, making us the leading SIP trunk provider in the industry.
          </p>
        </div>

      <div className="video-container threepages">
        <video autoPlay loop muted playsInline className="uc-vid">
              <source src="/Assets/siptrunkvid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
      </div>
      <div className="button-group">
        <FreeTrialForm className="button" />
        <Link href="https://zfrmz.in/uVhtnQbhSsWHU9Z8Xy8T" target="_blank" rel="noopener noreferrer nofollow">
          <button>Get Pricing</button>
        </Link>
      </div>
      <BannerCards/>
    </div>
  );
};

export default HeaderVirtualNumbers;
