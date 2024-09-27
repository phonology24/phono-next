import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
// import ImageForInternationalNumber1 from "../../../public/Assets/austriahead.png"; 
import Image from 'next/image';

const HowToBuy = () => {
  let countryName = "Austria"
  return (
    <div className="how-to-buy-container">
      <div className="heading-section">
        <h2>How to Buy {countryName} Phone Numbers Online:</h2>
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
              Start by choosing the type of {countryName} phone number you need for your business.
              Whether you prefer a local {countryName} number to establish a local presence or a
              toll-free number to provide your customers with a free-to-call option, Phonology has you covered.
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
              Explore our flexible pricing plans and choose one that suits your communication
              requirements and budget. Whether you're a small business or a large enterprise,
              we offer plans to fit every business size and scale.
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
              Create your account by signing up with your details. Our quick and easy registration
              process ensures that you can get your {countryName} phone number up and running in no time,
              with minimal paperwork and hassle.
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
              After completing the registration, activate your new {countryName} phone number and configure features like call
              forwarding, voicemail, IVR, and more. Our intuitive dashboard makes it easy to customize your number to
              fit your business needs, ensuring seamless communication from day one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
