import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    let countryName = "Myanmar";
    
    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Set Up a {countryName} Phone Number in 4 Easy Steps:</h2>
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
                            Choose between a local {countryName} number to create a strong local presence or opt for a toll-free number to allow customers to reach your business free of charge. Phonology offers flexible solutions tailored to your specific needs.
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
                            Explore our pricing plans, crafted to suit businesses of all sizes. Whether you’re a small startup or an established enterprise, Phonology has a plan that aligns with your business goals.
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
                            Register your business details and complete our fast, hassle-free sign-up process. Your {countryName} virtual number will be ready for use within a few minutes.
                        </p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Personalize Your Phone System</h2>
                        <p>
                            Once registered, activate your {countryName} number and configure essential features like call forwarding, voicemail, and IVR. Phonology’s platform allows you to easily tailor your phone system to meet your business requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
