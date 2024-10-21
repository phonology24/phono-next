import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    const countryName = "Portugal"; // You can also use "const" for better practice
  return (
    <div className="how-to-buy-container">
      <div className="heading-section">
        <h2>How to Buy {countryName} Phone Numbers Online in 4 Simple Steps:</h2>
        <p>Phonology makes it easy and affordable to buy phone numbers you need online. Set up your VoIP number service in four easy steps!</p>
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
              Choose between a local Portugal phone number to establish a local presence or a toll-free number to give customers a free and easy way to reach your business. Phonology provides adaptable solutions tailored to your specific needs.
            </p>
          </div>
        </div>
        
        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber2} alt="Step 2" />
          </div>
          <div className="step-content">
            <div className="step-number">2</div>
            <h2>Step 2: Pick the Correct Plan for Your Business</h2>
            <p>
              Explore our range of pricing plans, designed to suit businesses of all sizes. Whether you’re a startup or a growing enterprise, Phonology has a plan to meet your communication goals.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-image">
            <Image src={ImageForInternationalNumber3} alt="Step 3" />
          </div>
          <div className="step-content">
            <div className="step-number">3</div>
            <h2>Step 3: Complete the Quick Registration Process</h2>
            <p>
              Register your business details and complete the fast and easy sign-up process. You’ll be ready to activate your Portugal virtual number in just a few minutes.
            </p>
          </div>
        </div>

        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber4} alt="Step 4" />
          </div>
          <div className="step-content">
            <div className="step-number">4</div>
            <h2>Step 4: Activate & Customize Your Virtual Number</h2>
            <p>
              Once registered, activate your Portugal phone number and configure features like call forwarding, voicemail, and IVR. Phonology’s user-friendly platform allows you to easily personalize your phone system to meet your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
