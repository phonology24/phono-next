import React from "react";
import HeaderImg from "../../public/Assets/omni-messaging.png";
import "../../styles/messagingservices.css";
import  Link  from "next/link";
import FreeTrialForm from "../Home/FreeTrialForm";
import { Helmet } from "react-helmet";
// import MetaTags, { ReactTitle } from 'react-meta-tags';
import Image from "next/image";
import BannerCards from "../BannerCards";

const HeaderVirtualNumbers = () => {
  return (
    <div className="heading">
      {/* <MetaTags>
        <title>
          Messaging Service Provider|Best SMS Service Provider In India
        </title>
        <meta name='description' content='Experience seamless communication solutions with Phonology, your trusted messaging service provider.
           Elevate your messaging experience with our innovative technology and reliable services, Discover the power of efficient and secure communication 
           today.'
        />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://www.phonology.io/messaging-service-providers" />

        <meta name="keywords" content="bulk sms service provider,text messaging service provider,bulk sms service,text messaging provider,text messaging service,bulk sms services,
          sms text messaging services provider,short message service,online sms service provider,bulk messaging,phone service provider,
          it service provider,bulk sms services provider,short messaging service,best bulk sms service provider,voip mms messaging service,top 
          bulk sms service provider"/>
      </MetaTags> */}
      <div className="hero">
      {/* <ReactTitle title="Messaging Service Provider|Best SMS Service Provider In India"/> */}
        <div>
          <h2 className="heading-text-h2">Your Trusted SIP Trunk Provider for Seamless Connectivity.</h2>
          <p className="heading-text-p">
          As your trusted SIP trunk provider, we ensure seamless connectivity for your business. Our advanced SIP trunking services offer reliable,
           high-quality communication solutions, enhancing your global reach and operational efficiency, making us the leading SIP trunk provider in the industry.
          </p>
        </div>
        <Image
          src={HeaderImg}
          alt="Network"
          className="header-img-virtual-numbers"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            margin: '20px 0',
            objectFit: 'cover',
          }}
        ></Image>
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
