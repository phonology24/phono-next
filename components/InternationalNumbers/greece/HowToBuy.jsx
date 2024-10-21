import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
  const countryName = "Greece";

  return (
    <div className="how-to-buy-container">
      <div className="heading-section">
        <h2>How to Buy {countryName} Phone Numbers Online in 4 Easy Steps:</h2>
        <p>
          Phonology makes it easy and affordable to buy the phone numbers you need online. Set up your VoIP number service in four simple steps!
        </p>
      </div>
      
      <div className="steps-container">
        <div className="step">
          <div className="step-image">
            <Image src={ImageForInternationalNumber1} alt="Step 1: Select Your Number Type" />
          </div>
          <div className="step-content">
            <div className="step-number">1</div>
            <h2>Step 1: Select Your Number Type</h2>
            <p>
              Choose a local {countryName} phone number to build a strong local presence, or opt for a toll-free number to make it easy for customers to contact you at no cost. Phonology provides tailored solutions to fit your business requirements.
            </p>
          </div>
        </div>
        
        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber2} alt="Step 2: Pick the Plan" />
          </div>
          <div className="step-content">
            <div className="step-number">2</div>
            <h2>Step 2: Pick the Plan That Is Perfect for Your Business</h2>
            <p>
              Browse our flexible pricing options designed to cater to businesses of all sizes. Whether you’re a startup or an established enterprise, Phonology has the right plan for your communication needs.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-image">
            <Image src={ImageForInternationalNumber3} alt="Step 3: Register" />
          </div>
          <div className="step-content">
            <div className="step-number">3</div>
            <h2>Step 3: Register & Complete the Quick Sign-Up Process</h2>
            <p>
              Sign up with your business details and complete the easy registration process. In just a few minutes, you’ll be ready to activate your {countryName} virtual number.
            </p>
          </div>
        </div>

        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber4} alt="Step 4: Activate & Personalize" />
          </div>
          <div className="step-content">
            <div className="step-number">4</div>
            <h2>Step 4: Activate & Personalize Your Number</h2>
            <p>
              Once registered, activate your {countryName} number and configure important features like call forwarding, voicemail, and IVR. Phonology’s platform allows you to easily customize your virtual phone system to match your specific business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
