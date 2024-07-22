import React from 'react';
import '../../styles/unified-communications.css';
import YealinkPhone from '../../public/Assets/YealinkPhone.png'
// import  Helmet  from 'react-helmet';
// import { MetaTags, ReactTitle } from 'react-meta-tags';
import Image from 'next/image';
const CommunicationsHeader = () => {
  return (
    <div className="communications-header">
      {/* <MetaTags>
        <title>
          Unified Communications As A Service | Ucaas Providers
        </title>
        <meta name='description' content='A leading UCaaS provider offering tailored unified communications services. 
          Streamline collaboration and connectivity while maximizing productivity with our advanced technology suite
          . Explore our comprehensive offerings today.'
        />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta name="keywords" content="unified communications,unified communications as a service,unified communications explained,
          unified communications providers in berkshire,ucaas,unified communications news,what is unified communications,top unified communications providers,
          cloud communications,unified communications provider, unified communication,unified communications and collaboration,ucaas unified communications as a service,
          unified communication done for you"/>
          <link rel="canonical" href="https://www.phonology.io/messaging-service-providers" />

      </MetaTags> */}

      <div className="communications-grid communications-grid-middle communications-grid-gap-large">
      {/* <ReactTitle title="Unified Communications As A Service | Ucaas Providers"/> */}
        <div className="communications-content">
          <div className="communications-content-inner">
            <h1 className="communications-display-4">
            One Platform, Endless Possibilities: Unified Communication Provider &nbsp;
              <span className="communications-gradient-ltr">
                {/* <br /> */}
              - UCaaS
              </span>
            </h1>
            <p className="communications-large">
            Unified communications streamline voice, video, messaging, and collaboration tools into a single platform. As a leading unified communication provider,
             we offer integrated solutions that enhance efficiency, foster teamwork, and simplify communication for businesses, ensuring seamless connectivity across all channels.
</p>
            <ul className="communications-list">

              <li>
                {/* <a className="communications-link communications-link-arrow2" target="_blank" rel="noopener noreferrer">
                        <span className="communications-link-inner">
                          <span className="communications-link-label"><u>Explore Our Integrations</u></span>
                     
                        </span>
                      </a> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="communications-photo">
          <div className="communications-photo-inner">
            <Image className="communications-photo-image" src={YealinkPhone} alt="_" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationsHeader;
