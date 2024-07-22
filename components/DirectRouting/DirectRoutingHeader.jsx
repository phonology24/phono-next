// DirectRoutingHeading.jsx

import React from 'react';
import '../../styles/directrouting.css'; 
import TeamsImage from '../../public/Assets/dot-grid.webp'; 
import { Helmet } from 'react-helmet';
// import { ReactTitle } from 'react-meta-tags';

const DirectRoutingHeading = () => {
  return (
    <div className="direct-routing-heading">
            <Helmet>
        <title>
        Microsoft Teams Direct Routing Service Provider
                </title>
          <meta name='description' content='Microsoft Teams Direct Routing allows you to connect with ease.
           Our guide offers step-by-step instructions to optimize your communication and collaboration.' />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
          <meta name="keywords" content="direct routing,direct routing cubase,direct routing as a service,microsoft teams direct routing,
          microsoft teams phone system direct routing,direct routing demo,microsoft direct routing,routing for ms teams,what is direct routing as a service,
          pro tips for direct routing & e911 | odfp116,cubase bus routing,operator connect vs direct routing as a service,
          should our company do operator connect or direct routing"/>
          <link rel="canonical" href="https://www.phonology.io/direct-routing-service-providers" />


      </Helmet>
      <div className="direct-routing-content">
      {/* <ReactTitle title="Microsoft Teams Direct Routing Service Provider"/> */}

        <div className="direct-routing-text">
          <h1 className="direct-routing-description ">
          Microsoft Teams Direct Routing
          </h1>
          <p className="direct-routing-heading-main">
          Transform Your Customers <br /> Teams App into a <br></br>Powerful <span className='ltr-gradient'>Phone System</span>
          </p>
          <p className="direct-routing-details">
          If your customers are already utilizing Microsoft Teams for chat and web meetings &lsquo; seamlessly integrate it with Phonology&apos;s white-label VoIP platform to activate its integrated phone system. Phonology provides the easiest&lsquo; vendor-certified solution with a one-click setup and maintenance. Moreover&lsquo; you can handle billing and support for the service&lsquo; all from a single system.
          </p>
        </div>
        <div className="direct-routing-image">
        </div>
      </div>
    </div>
  );
};

export default DirectRoutingHeading;
