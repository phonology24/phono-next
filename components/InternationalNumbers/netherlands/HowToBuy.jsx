import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber from "../../../public/Assets/austriaHeader1.png";
import Image from 'next/image';

const HowToBuy = () => {
    let countryName = "Netherlands"
  return (
    <div className="how-to-buy-container">
      <div className="heading-section">
        <h2>How to Buy {countryName} Phone Numbers Online in 4 Simple Steps:</h2>
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
            <h2>Step 1: Select Your Number Type</h2>
            <p>
            Explore the available options and choose the {countryName} phone number that best suits your needs—local, toll-free, or mobile.              </p>
          </div>
        </div>
        
        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber} alt="Step 2" />
          </div>
          <div className="step-content">
            <div className="step-number">2</div>
            <h2>Step 2: Choose a Plan of your Choice</h2>
            <p>
            Take up a pricing plan that aligns with your budget and call volume requirements.              </p>
          </div>
        </div>

        <div className="step">
          <div className="step-image">
            <Image src={ImageForInternationalNumber} alt="Step 3" />
          </div>
          <div className="step-content">
            <div className="step-number">3</div>
            <h2>Step 3: Sign Up & Complete Registration</h2>
            <p>
            Create an account and provide the necessary business or personal details to complete the registration process.              </p>
          </div>
        </div>

        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber} alt="Step 4" />
          </div>
          <div className="step-content">
            <div className="step-number">4</div>
            <h2>Step 4: Activate & Configure: </h2>
            <p>
            After purchase, your {countryName} phone number will be activated instantly. Customize settings like call forwarding, voicemail, and more to start using your number.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;