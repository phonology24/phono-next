import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
  const countryName = "Hong Kong";

  return (
    <div className="how-to-buy-container">
      <div className="heading-section">
        <h2>How to Set Up a {countryName} Phone Number in 4 Easy Steps</h2>
        <p>
          Phonology makes it easy and affordable to buy phone numbers you need online.
          Set up your VoIP number service in four simple steps!
        </p>
      </div>
      
      <div className="steps-container">
        <div className="step">
          <div className="step-image">
            <Image src={ImageForInternationalNumber1} alt="Step 1" />
          </div>
          <div className="step-content">
            <div className="step-number">1</div>
            <h2>Select Your Number Type</h2>
            <p>
              Choose between a local {countryName} number to build a strong local presence or opt for a toll-free number to allow customers to reach you without incurring costs. 
              Phonology offers a variety of options to suit your business needs.
            </p>
          </div>
        </div>
        
        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber2} alt="Step 2" />
          </div>
          <div className="step-content">
            <div className="step-number">2</div>
            <h2>Choose the Correct Plan for Your Business</h2>
            <p>
              Explore our versatile pricing plans, crafted to accommodate the needs of businesses of all sizes. Whether you’re a startup or an established enterprise, 
              Phonology has a plan that fits your communication requirements.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-image">
            <Image src={ImageForInternationalNumber3} alt="Step 3" />
          </div>
          <div className="step-content">
            <div className="step-number">3</div>
            <h2>Complete the Simple Registration Process</h2>
            <p>
              Register your business details and complete our quick, easy sign-up process. Your {countryName} virtual number will be ready to use within just a few minutes.
            </p>
          </div>
        </div>

        <div className="step reverse">
          <div className="step-image">
            <Image src={ImageForInternationalNumber4} alt="Step 4" />
          </div>
          <div className="step-content">
            <div className="step-number">4</div>
            <h2>Activate & Customize Your Phone System</h2>
            <p>
              Once registered, activate your {countryName} number and configure features like call forwarding, voicemail, and IVR. 
              Phonology’s user-friendly platform allows you to easily tailor your virtual phone system to your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
