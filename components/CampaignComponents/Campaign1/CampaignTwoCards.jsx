import React from 'react';
import '../../../styles/campaign/campaigntwocards.css';
import campaignImg from "../../../public/Assets/virtual-numbers1.png";
import LandingPageImage from '../../../public/Assets/cloud.png'

import Image from 'next/image';

const CampaignTwoCards = () => {
  return (
    <div className="campaign-container">
      <div className="campaign-text">
        <h2>About Phonology</h2>
        <p>
          Phonology's VoIP services offer seamless, high-quality voice communication over the Internet,
          reducing costs and enhancing business efficiency. Our solutions include international - virtual and
          toll-free numbers, SIP trunks, Cloud telephony, and hosted PBX systems. They are designed to cater to
          the specific needs of enterprises and corporations. With over 2 decades of expertise, Phonology ensures
          reliable and scalable telephony services for global connectivity.
        </p>
        <button className='landing-page-cta'>Contact Us</button>
      </div>
      <div className="campaign-cards">
        <div className="cardscampaign">
          <Image src={campaignImg} alt="Campaign" />
        </div>
        <div className="cardscampaign">
          <p className="campaign-text-content">
            Over 2 decades of Experience
          </p>
        </div>
        <div className="cardscampaign">
          <p className="campaign-text-content">
            50+ Solutions
          </p>
        </div>
        <div className="cardscampaign">
          <Image src={LandingPageImage} alt="Campaign" />
        </div>
      </div>
    </div>
  );
}

export default CampaignTwoCards;
