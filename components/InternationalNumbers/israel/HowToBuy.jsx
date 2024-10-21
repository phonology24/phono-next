import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    let countryName = "Israel";
    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Get an {countryName} Phone Number in 4 Easy Steps:</h2>
                <p>Phonology makes it easy and affordable to buy phone numbers you need online. Set up your VoIP number service in four easy steps!</p>
            </div>
            
            <div className="steps-container">
                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber1} alt="Step 1" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">1</div>
                        <h2>Step 1: Choose Your Number Type</h2>
                        <p>Select between a local {countryName} phone number to create a local presence or opt for a toll-free number to allow your customers to contact you free of charge. Phonology offers various options to meet your business needs.</p>
                    </div>
                </div>
                
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Select the Correct Plan for Your Business</h2>
                        <p>Explore our flexible pricing plans, designed to support businesses of all sizes. Whether you’re just starting or are an established company, Phonology has the perfect plan to meet your communication goals.</p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Complete the Quick Registration Process</h2>
                        <p>Register your business details and complete our simple, hassle-free sign-up process. Your {countryName} virtual number will be ready for activation in just a few minutes.</p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Personalize Your Phone System</h2>
                        <p>Once registered, activate your {countryName} phone number and customize essential features like call forwarding, voicemail, and IVR. Phonology’s easy-to-use platform allows you to tailor the system to meet your business requirements.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
