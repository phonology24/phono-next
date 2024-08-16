import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber from "../../../public/Assets/austriaHeader1.png";
import Image from 'next/image';

const HowToBuy = () => {
  return (
    <div className="how-to-buy-container">
      <div className="heading-section">
        <h1>How to Buy Phone Numbers Online</h1>
        <p>Phonology makes it easy and affordable to buy phone numbers you need online.
        Set up your VoIP number service in four easy steps!</p>
      </div>
      
      <div className="steps-container">
        <div className="step">
          <div className="step-image">
            <Image src={ImageForInternationalNumber} alt="Step 1" />
          </div>
          <div className="step-content">
            <div className="step-number">1</div>
            <h2>Step 1: Choose Your Phone Number</h2>
            <p>Pick toll free, non-geographic, or local call tracking phone numbers from over 150+ countries around the world or port a phone number you already have.</p>
          </div>
        </div>
        
        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber} alt="Step 2" />
          </div>
          <div className="step-content">
            <div className="step-number">2</div>
            <h2>Step 2: Configure Call Forwarding Settings</h2>
            <p>After purchasing your  phone number, you'll receive an email with your login information and introduction to the platform. Log in to begin configuring forwarding rules, IVR menus, manage numbers and self-service your account.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-image">
            <Image src={ImageForInternationalNumber} alt="Step 3" />
          </div>
          <div className="step-content">
            <div className="step-number">3</div>
            <h2>Step 3: Download Phonology Apps</h2>
            <p>FBrowse our optional applications like click-to-call (for softphone users) and mobile app so you can make and take calls from home, the office, anywhere!</p>
          </div>
        </div>

        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber} alt="Step 4" />
          </div>
          <div className="step-content">
            <div className="step-number">4</div>
            <h2>Step 4: Start Connecting with Customers!</h2>
            <p>Enjoy crystal-clear voice services in Australia and beyond! One of our voice experts will reach out to confirm your account and ensure your service is set up for your specific preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
