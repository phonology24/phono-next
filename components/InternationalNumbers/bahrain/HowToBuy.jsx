import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
  let countryName = "Bahrain"
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
            <Image src={ImageForInternationalNumber1} alt="Step 1" />
          </div>
          <div className="step-content">
            <div className="step-number">1</div>
            <h2>Step 1: Select Your Number Type</h2>
            <p>
              Select between a local Bahrain phone number to build a local presence
              or opt for a toll-free number to allow customers to contact you without
              any charges. Phonology offers customizable options to suit your business requirements.
            </p>
          </div>
        </div>

        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber2} alt="Step 2" />
          </div>
          <div className="step-content">
            <div className="step-number">2</div>
            <h2>Step 2: Choose a Plan of your Choice</h2>
            <p>
              Explore our flexible pricing plans designed for businesses of all sizes.
              Whether you’re a startup or an established company, Phonology has a solution that meets your communication needs.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-image">
            <Image src={ImageForInternationalNumber3} alt="Step 3" />
          </div>
          <div className="step-content">
            <div className="step-number">3</div>
            <h2>Step 3: Sign Up & Complete Registration</h2>
            <p>
              Register your business details and complete the quick and hassle-free sign-up process.
              Your Bahrain virtual number will be ready for activation in just a few minutes.
            </p>
          </div>
        </div>

        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber4} alt="Step 4" />
          </div>
          <div className="step-content">
            <div className="step-number">4</div>
            <h2>Step 4: Activate & Configure: </h2>
            <p>
              Once registered, activate your Bahrain phone number and set up key features like call forwarding,
              voicemail, and IVR. Phonology’s platform allows you to easily tailor your virtual phone system
              to match your business requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
