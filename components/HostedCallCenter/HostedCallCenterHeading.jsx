import React from "react";
import "../../styles/hostedcallcenter.css";
import CallCenterImage from "../../public/Assets/HostedCC.png";
import { Helmet } from "react-helmet";
import { ReactTitle } from "react-meta-tags";
import Image from "next/image";
const HostedCallCenterHeading = () => {
  return (<>  
         <Helmet>
        <title>
          Virtual Call Center Software | Call Center Solutions | Call Center Solution Provider
        </title>
        <meta name='description' content='Phonology Virtual Call Center Software Explore comprehensive Call Center Solutions tailored to your business needs.
           As your trusted Call Center Solution Provider, we ensure seamless communication and exceptional service delivery.'
        />
        {/* <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" /> */}
        <meta name="keywords" content="hosted call center,call center,call center software,hosted call center pricing,
        cloud based call center phone system,hosted call centre,virtual call center software,telax hosted call center,
        contact center,call center hardware,hosted contact center,cloud call center,cloud based call center,top hosted call center,
        call center solution,oracle hosted call center,what is hosted call center,contact center vs call center" />
        <link rel="canonical" href="https://www.phonology.io/call-center-solution" />

      </Helmet>
    <div className="hosted-call-center-content">
    <ReactTitle title="Virtual Call Center Software | Call Center Solutions | Call Center Solution Provider"/>

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
