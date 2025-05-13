import React from 'react';
import '../../styles/hostedphonenumbers.css';
import MyGlobe from '../MyGlobe';
import HostedPBXIMG from '../../public/Assets/agent1.jpg'
import Image from 'next/image';

const AiHero = () => {
  return (
    <div className="hosted-phone-numbers">   
      <div className="hosted-phone-numbers-inner constrain" style={{ paddingTop: '90px' }}>

        <div className="hosted-phone-numbers-grid hosted-phone-numbers-grid-middle hosted-phone-numbers-grid-gap-large">
          <div className="hosted-phone-numbers-content">
            <div className="hosted-phone-numbers-content-inner">
              <h1 className="hosted-phone-numbers-display-4">
              AI Voice Agents by Phonology
                <span className="gradient-ltr">
                  <br />         
                </span>
              </h1>
              <p className="hosted-phone-numbers-large">
              Revolutionize Your Customer Interactions with Intelligent AI Voice Solutions
At Phonology, we empower businesses with cutting-edge AI Voice Agents designed to enhance customer service,
 streamline communication, and improve operational efficiency. Our AI-driven voice agents offer 24/7 support, 
 ensuring customers receive consistent and responsive interactions every time they reach out.
              </p>
              <ul className="hosted-phone-numbers-list">
              </ul>
            </div>
          </div>
          <div className="hosted-phone-numbers-photo">
            <div className="hosted-phone-numbers-photo-inner">
              {/* <MyGlobe /> */}
              <Image src={HostedPBXIMG} height={400} width={500} alt="hosted-pbx-image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AiHero;
