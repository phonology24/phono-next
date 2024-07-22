import React from 'react';
import '../../../styles/campaign/campaigntwocards.css';
import campaignImg from "../../../public/Assets/HostedCallCenter.png"
import Image from 'next/image';
const CampaignTwoCards = () => {
  return (
    <div className="campaign-container">
      <div className="campaign-text">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula urna non sapien sollicitudin, quis scelerisque massa bibendum. Praesent vitae eros vel elit varius vestibulum. Aenean at scelerisque nunc. Nullam feugiat eros non justo luctus, sit amet efficitur libero ultrices.
        </p>
      </div>
      <div className="campaign-image">
        <Image src={campaignImg} alt="Campaign" />
      </div>
    </div>
  );
}

export default CampaignTwoCards;
