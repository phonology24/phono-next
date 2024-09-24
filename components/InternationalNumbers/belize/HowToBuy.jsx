import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber from "../../../public/Assets/austriaHeader1.png";
import Image from 'next/image';

const HowToBuy = () => {
    let countryName = "Belize"
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
            <h2>Step 1: Pick Your Number Type</h2>
            <p>
Choose between a local Belize phone number to establish a local presence or opt for a toll-free number to give your
 customers a free and easy way to contact your business. Phonology offers flexible options suited to your business needs.     
                  </p>
          </div>
        </div>
        
        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber} alt="Step 2" />
          </div>
          <div className="step-content">
            <div className="step-number">2</div>
            <h2>Step 2: Select the Right Plan for Your Business</h2>
            <p>
            Browse through our pricing plans, designed to meet the needs of businesses of all sizes.
             Whether you’re a growing startup or an established company, Phonology has the perfect plan for you. 
                                  </p>
          </div>
        </div>

        <div className="step">
          <div className="step-image">
            <Image src={ImageForInternationalNumber} alt="Step 3" />
          </div>
          <div className="step-content">
            <div className="step-number">3</div>
            <h2>Step 3: Complete the Simple Registration Process</h2>
            <p>
            Register your business details and complete our quick, hassle-free sign-up process. Your Belize virtual number will be ready to activate in just a few minutes.
                              </p>
          </div>
        </div>

        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber} alt="Step 4" />
          </div>
          <div className="step-content">
            <div className="step-number">4</div>
            <h2>Step 4: Activate & Customize Your Virtual Phone System </h2>
            <p>
            Once registered, activate your Belize phone number and configure key features like call forwarding, voicemail, and IVR. 
            Phonology’s platform allows you to easily personalize the system to match your business’s needs.            
                     </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
