import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    const countryName = "Philippines"; // Corrected the spelling from "Philippiness" to "Philippines"
  
    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Buy {countryName} Phone Numbers Online in 4 Simple Steps:</h2>
                <p>
                    Phonology makes it easy and affordable to buy the phone numbers you need online. 
                    Set up your VoIP number service in four easy steps!
                </p>
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
                            Choose between a local {countryName} phone number to establish a local presence or a toll-free number to offer your customers an easy and cost-free way to contact your business. Phonology offers versatile solutions tailored to meet your business needs.
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
                            Explore our range of pricing plans, designed for businesses of any size. Whether you’re a startup or a large organization, Phonology has the perfect plan for your communication needs.
                        </p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Complete the Quick Sign-Up Process</h2>
                        <p>
                            Register your business details and complete the simple, hassle-free sign-up process. Your {countryName} virtual number will be ready for use within just a few minutes.
                        </p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Customize Your Phone System</h2>
                        <p>
                            Once registered, activate your {countryName} phone number and configure essential features such as call forwarding, voicemail, and IVR. Phonology’s platform allows you to tailor your phone system according to your business needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
