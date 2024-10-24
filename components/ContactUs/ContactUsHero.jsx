import React from 'react';
import '../../styles/contactus/contacthero.css';

const ContactUsHero = () => {
  return (
    <div className='contactus-hero'>
      <h2 className='contactus-hero-heading'>How Can We Support You?</h2>
      <div className='contactus-card-container'>
        <div className='contactus-card'>
          <h3 className='ccontactus-ard-heading'>Card 1</h3>
          <p className='contactus-card-text'>Description for card 1.</p>
        </div>
        <div className='contactus-card'>
          <h3 className='contactus-card-heading'>Card 2</h3>
          <p className='contactus-card-text'>Description for card 2.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHero;
