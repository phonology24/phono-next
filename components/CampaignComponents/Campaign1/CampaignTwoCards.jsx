import React from 'react';
import '../../../styles/campaign/campaigntwocards.css';
import campaignImg from "../../../public/Assets/HostedCallCenter.png"
import Image from 'next/image';
const CampaignTwoCards = () => {
  return (
    <div className="campaign-container">
      <div className="campaign-text">
        <h1>Enhance your business communication now with our cost-effective, high-quality VoIP solutions.</h1>
        <p>
        Phonology's VoIP services offer seamless, high-quality voice communication over the Internet, 
        reducing costs and enhancing business efficiency. Our solutions include international - virtual and
         toll-free numbers, SIP trunks, Cloud telephony and hosted PBX systems. They are designed to cater to
          the specific needs of enterprises and corporations. With 19 years of expertise, Phonology ensures
           reliable and scalable telephony services for global connectivity.
              </p>
      </div>
      <div className="campaign-image">
        <Image src={campaignImg} alt="Campaign" />
      </div>
    </div>
  );
}

export default CampaignTwoCards;
