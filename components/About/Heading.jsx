import React from "react";
import "../../styles/heading.css";
import { Helmet } from "react-helmet";
import { MetaTags, ReactTitle } from "react-meta-tags";

const AboutHeading = () => {
  return (
    <div className="about-heading">
          <Helmet>
        {/* <title>
          About Us | Phonology | VoIP Service Provider In India
        </title> */}
        <link rel="canonical" href="https://www.phonology.io/about-phono" />

        <meta name='description' content='Welcome to our About Us page, where innovation meets integrity in providing exceptional VoIP services for 
          international communication.
           With a dedication to excellence and a commitment to customer satisfaction, we strive to redefine the standards of global connectivity.'  data-react-helmet="true"/>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta name="keywords" content="Internet service provider in India, Business VoIP in India, business VoIP service in India, VoIP Phone, VoIP, VoIP Service Provider in Bangalore, VoIP Service Provider in India, Best VoIP Service, VoIP Phone Provider, IP phone provider, IP PBX Provider, Internet Telephony Service Provider, VoIP Solutions Provider, Best Business VoIP Solutions Provider, Cloud Based PBX Service Provider, How to Choose VoIP Phone System, VoIP Features, SIP Trunk, VOIP in India in Bangalore, VoIP communication in India, trunk line internet in India, small office VoIP in Bangalore, small office phone systems in India, SIP trunk in India, office VoIP phones in India, office phone services in India, office IP phone in India, " />
      </Helmet>
    <ReactTitle title="About Us | Phonology | VoIP Service Provider In India"/>

      <h1>Best VOIP Service Providers</h1>
      <h2 className="h2about-heading">
        We Make Business<br></br> Communication Simple.
      </h2>
      <p className="about-heading-text">

        <span className="blue">Phonology</span>is a vertical specialist and a leading provider - VoIP and IP Communications in India. 
        We desire to connect millions over the internet protocol, which in turn results in productive cost savings and gives them a substantial monetary advantage. 
        As a complete Internet, Internet Telephony, and VoIP solution provider, we work towards building a network of subscribers all around the globe.
        Incorporated by MD Group in the IT capital of India, Bangalore,  <span className="blue">Phonology</span> is a leading provider of Internet Telephony and VoIP services in the country.
         It is a licensed provider in Bangalore by the Department of Telecom, India.
</p>
    </div>
);
};

export default AboutHeading;
