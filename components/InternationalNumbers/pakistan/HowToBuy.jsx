import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    const countryName = "Pakistan";
  
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
                        <Image src={ImageForInternationalNumber1} alt="Step 1: Pick Your Number Type" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">1</div>
                        <h2>Step 1: Pick Your Number Type</h2>
                        <p>
                            Choose a local {countryName} phone number to establish a local presence, or opt for a toll-free number to provide customers with a simple, cost-free way to reach your business. Phonology offers a range of flexible solutions tailored to fit your business needs.
                        </p>
                    </div>
                </div>
                
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2: Select the Best Plan for Your Business" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Select the Best Plan for Your Business</h2>
                        <p>
                            Explore our pricing options, designed to cater to businesses of all sizes. Whether you’re a small startup or a large enterprise, Phonology has the perfect plan to match your communication goals.
                        </p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3: Complete the Simple Sign-Up Process" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Complete the Simple Sign-Up Process</h2>
                        <p>
                            Register your business details and complete the quick, hassle-free sign-up. Your {countryName} virtual number will be activated and ready for use in just a few minutes.
                        </p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4: Activate & Customize Your Virtual Phone System" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Customize Your Virtual Phone System</h2>
                        <p>
                            Once registered, activate your {countryName} phone number and set up essential features such as call forwarding, voicemail, and IVR. Phonology’s user-friendly platform makes it easy to personalize the system according to your business needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
