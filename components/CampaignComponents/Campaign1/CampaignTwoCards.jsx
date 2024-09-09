import React from 'react';
import '../../../styles/campaign/campaigntwocards.css';
import campaignImg from "../../../public/Assets/virtual-numbers1.png";
import LandingPageImage from '../../../public/Assets/cloud.png'

import Image from 'next/image';
import EmblaCarousel from './carouselComps/Carousel';

const CampaignTwoCards = () => {  
  const OPTIONS = { loop: true, duration: 0, Autoplay: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  
  return (
    <div className="campaign-container">
      <div className="campaign-text">
        <h2>About Phonology</h2>
        <p>
        Phonology is a leader in innovative telecom solutions, offering advanced VoIP, Internet telephony, 
        SIP trunks, and cloud telephony services.<br/> With 19 years of expertise, we empower businesses in India 
        and globally with seamless communication, international virtual numbers, and hosted PBX systems. 
        Our UCaaS and CPaaS platforms enhance connectivity, making us the go-to partner for enterprises 
        seeking reliable and cost-effective telecom services.<br/> At Phonology, we don’t just connect calls; 
        we connect people, ideas, and opportunities. Experience the future of communication 
        with Phonology—where technology meets exceptional service.
        </p>
        {/* <button className='landing-page-cta'>Contact Us</button> */}
      </div>
      <div className="campaign-cards">
        {/* <div className="cardscampaign">
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
        </div> */}
                                <EmblaCarousel slides={SLIDES} options={OPTIONS} className='right-image' />

      </div>
    </div>
  );
}

export default CampaignTwoCards;
