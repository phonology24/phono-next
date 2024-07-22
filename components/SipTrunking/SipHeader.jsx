// SIPTrunkingHeading.jsx

import React from 'react';
import '../../styles/siptrunking.css'; 
import SIPTrunkingImage from '../../public/Assets/integrations-cluster@2x-1.png';
import { Helmet } from 'react-helmet';
import { MetaTags, ReactTitle } from 'react-meta-tags';
import Image from 'next/image';
const SIPTrunkingHeading = () => {
  return (
    <div className="sip-trunking-heading">
            <MetaTags>
            <meta name="title" content="Default Title" data-react-helmet="true"/>

          <meta name='description' content='Explore top-tier SIP trunking solutions with Phonology, your trusted SIP trunk provider. 
          Streamline your communication infrastructure with reliable, scalable, and cost-efficient SIP trunking services tailored to your 
          business requirements.' />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
          
          <meta name="keywords" content="sip trunking,sip trunking explained,what is sip trunking,sip,sip trunk,sip trunking
           for dummies,sip trunks,sip trunking vs voip,what is a sip trunk,trunking,pbx sip trunking,global sip trunking,softtop sip trunking,
           sip trunking service,explain sip trunking,elastic sip trunking,sip trunking benefits,sip trunking provider,business sip trunking,
           wholesale sip trunking,call center sip trunking,sip trunking applications,understanding sip trunking"/>
           <link rel="canonical" href="https://www.phonology.io/sip-trunk-providers" />
           <meta name="google-site-verification" content="lUn9gZy0JO-OslJJrXzUov5OmCQY18ODrGXyYnZAHvI" />

      </MetaTags>
      <ReactTitle title="SIP Trunking | Phonology | VoIP Service Provider In India"/>

      <div className="sip-trunking-content">
        <div className="sip-trunking-text">
          <h2 className="sip-trunking-heading-main">
            SIP Trunking
          </h2>
          <p className="sip-trunking-description">
          Enable any phone system with a digital dial tone.
                              </p>
          <p className="sip-trunking-details">
          Does your clientele operate their own phone systems? Phonology&apos;s white-label SIP trunking seamlessly integrates with all leading manufacturers, 
  supporting both legacy and modern SIP-based solutions. Let your clients retain their current phones. You supply the dial tone, manage billing, 
  and oversee operations from one unified platform.
                       </p>
        </div>
        <div className="sip-trunking-image">
          <Image src={SIPTrunkingImage} alt="SIP Trunking" />
        </div>
      </div>
    </div>
  );
};

export default SIPTrunkingHeading;
