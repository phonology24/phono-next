import React from 'react';
import '../../styles/contactus/contacthero.css';
import Image from 'next/image';
import CallCenterImage from "../../public/Assets/blurry-gradient-haikei.png";

const ContactUsHero = () => {
  return (
    <div className='contactus-hero'>
      <h2 className='contactus-hero-heading'>How Can We Support You?</h2>
      <div className="hero-row">
        <div className='contactus-card-container'>
        {/* <p className='contact-us-sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p> */}
          <div className='contactus-card'>
            <h3 className='contactus-card-heading'>Talk to us.</h3>
            <p className='contactus-card-text'>Interested in learning more about Phonology?<br />
              Contact our sales representatives at info@phonology.io</p>
              <div className="contact-us-button-div">
            <button className='contact-us-button '>Start a conversation</button>
            <button className='contact-us-button dark'>Get support</button>
            </div>
          </div>
        </div>
            <div className='contact-us-hero-img'>
              <Image src={CallCenterImage} width={1000} height={500} />
            </div>
      </div>
    </div>
  );
};

export default ContactUsHero;
