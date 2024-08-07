import React from 'react';
import '../../styles/hostedphonenumbers.css';
import MyGlobe from '../MyGlobe';


const HostedPhoneNumbers = () => {
  return (
    <div className="hosted-phone-numbers">   
      <div className="hosted-phone-numbers-inner constrain" style={{ paddingTop: '90px' }}>

        <div className="hosted-phone-numbers-grid hosted-phone-numbers-grid-middle hosted-phone-numbers-grid-gap-large">
          <div className="hosted-phone-numbers-content">
            <div className="hosted-phone-numbers-content-inner">
              <h1 className="hosted-phone-numbers-display-4">
                Effortless Connectivity, Powered by Our
                <span className="gradient-ltr">
                  <br />
                  Hosted PBX Services.
                </span>
              </h1>
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
