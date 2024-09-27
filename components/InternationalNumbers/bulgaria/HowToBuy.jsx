import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
  let countryName = "Bulgaria"
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
            <h2>Step 1: Choose Your Number Type</h2>
            <p>
              Start by selecting the type of Bulgaria phone number that best fits your business needs.
              Whether you choose a local Bulgarian number to establish a strong local presence or
              a toll-free number to provide customers with free access, Phonology has the ideal solution for you.
              Pick a plan customized to suit your business needs.
              Explore our flexible pricing plans and select one that matches your business goals and
              communication needs. We provide affordable options for startups, growing businesses, and large enterprises.

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
            Register with your business information and complete the hassle-free sign-up process. We’ve made it quick and simple to get your Bulgaria phone number operational in no time.                          </p>
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
            Once registered, activate your Bulgaria number and customize the settings, such as call forwarding, voicemail, 
            and IVR. Our intuitive dashboard allows you to easily manage your number to suit your specific business needs.                 </p>
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
              After purchase, your {countryName} phone number will be activated instantly. Customize settings like call forwarding, voicemail, and more to start using your number.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;