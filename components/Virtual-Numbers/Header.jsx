"use client"
import React from "react";
import HeaderImg from "../../public/Assets/Header-virtual-numbers.png";
import "../../styles/virtualnumbers.css";
import Link  from "next/link";
import FreeTrialForm from "../Home/FreeTrialForm";
import { Helmet } from "react-helmet";
// import { ReactTitle } from "react-meta-tags";
import Image from "next/image";
import BannerCards from "../BannerCards";

const HeaderVirtualNumbers = () => {
  return (
    <div className="vn-header">
      <Helmet>
        <title>
          Virtual Phone Number Providers
        </title>
        <meta name='description' content='Unlock the power of seamless communication with the top virtual phone number providers. Elevate your business connectivity with reliable,
         feature-rich solutions tailored to your needs. Explore our comprehensive range of services and take your communication strategy to new heights today.'
        />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://www.phonology.io/virtual-phone-number-providers" />

        <meta name="keywords" content="virtual numbers,virtual number,number virtual,ca virtual number,uk virtual number,free virtual numbers,virtual phone numbers,
        local virtual numbers,usa virtual number,buy virtual number,get virtual number,buy number virtual,free virtual number,free number virtual,number virtual free,
        virtual number free,virtual phone number sms,virtual phone number,onoff number virtual,virtual dubai number,virtualphonenumber,virtual mobile number"/>
      </Helmet>
      <div className="hero-vn">


        <div>
          <h1 className="heading-text-vn">
          Your Global Presence, Simplified with Our Virtual Phone Numbers.
                    </h1>
          <p className="heading-text-vnp">
          Experience seamless global connectivity with our virtual phone number provider.
           Simplify your business communications and establish a local presence anywhere in the world.
            Our services ensure you stay connected effortlessly, no matter where your business takes you.

</p>
        </div>
        <div className="video-container threepages">
        <video autoPlay loop muted playsInline className="uc-vid">
              <source src="/Assets/virtualvid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>

      </div>
      <div className="button-groupvn">
        <FreeTrialForm />
        <Link href="https://zfrmz.in/uVhtnQbhSsWHU9Z8Xy8T" target="_blank" rel="noopener noreferrer nofollow">
          <button>Get Pricing</button>
        </Link>{" "}
      </div>
<BannerCards />
    </div>
  );
};

export default HeaderVirtualNumbers;
