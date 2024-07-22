import React from 'react';
import '../../styles/hostedphonenumbers.css';
import MyGlobe from '../MyGlobe';
import { Helmet } from 'react-helmet';
import { ReactTitle } from 'react-meta-tags';

const HostedPhoneNumbers = () => {
  return (
    <div className="hosted-phone-numbers">
      <Helmet>
        <title>
          Hosted PBX | Cloud PBX | IP PBX |Providers in India
        </title>
        <meta name='description' content='Phonologys Hosted PBX, Cloud PBX, and IP PBX solutions. Elevate your business with our advanced telephony services tailored for modern connectivity needs, 24x7 Support, and a free trial option.' />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta name="keywords" content="hosted pbx,cloud pbx,cloud phone system,cloud hosted phone system,hosted voip,cloud communications,
          cloud pbx system,cloud pbx phone system,hosted ip pbx,cloud pbx sytem,hosted pbx voip,hosted pbx phone,
          fonality hosted pbx,cloud pbx explained,cloud pbx phone sytem,pbx cloud,benefits of hosted pbx,cloud voip"/>
        <link rel="canonical" href="https://www.phonology.io/hosted-pbx-providers" />

      </Helmet>
      <div className="hosted-phone-numbers-inner constrain" style={{ paddingTop: '90px' }}>
        <ReactTitle title="Hosted PBX | Cloud PBX | IP PBX |Providers in India" />

        <div className="hosted-phone-numbers-grid hosted-phone-numbers-grid-middle hosted-phone-numbers-grid-gap-large">
          <div className="hosted-phone-numbers-content">
            <div className="hosted-phone-numbers-content-inner">
              <h2 className="hosted-phone-numbers-display-4">
                Effortless Connectivity, Powered by Our
                <span className="gradient-ltr">
                  <br />
                  Hosted PBX Services.
                </span>
              </h2>
              <h1 style={{ display: "none" }}>Hosted PBX | Cloud PBX | IP PBX |Providers in India</h1>
              <p className="hosted-phone-numbers-large">
               We offer reliable, scalable, and secure cloud-based phone systems designed to streamline your business communication.
                Our hosted PBX solutions empower your team with advanced features, ensuring seamless connectivity and improved productivity across your organization.
              </p>
              <ul className="hosted-phone-numbers-list">
              </ul>
            </div>
          </div>
          <div className="hosted-phone-numbers-photo">
            <div className="hosted-phone-numbers-photo-inner">
              <MyGlobe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HostedPhoneNumbers;
