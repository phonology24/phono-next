import React from 'react';
import '../../../styles/howtobuy.css'; // Ensure this file contains the necessary styles
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    const countryName = "Poland"; // Consistent variable name

    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Acquire a {countryName} Phone Number in 4 Simple Steps:</h2>
                <p>Phonology makes it easy and affordable to buy the phone numbers you need online. Set up your VoIP number service in four easy steps!</p>
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
                            Choose between a local {countryName} phone number to build a local presence or a toll-free number to offer customers a free way to contact your business. Phonology provides flexible options to fit your specific needs.
                        </p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Select the Best Plan for Your Business</h2>
                        <p>
                            Explore our pricing plans, designed to meet the needs of businesses of all sizes. Whether you’re a small startup or a large enterprise, Phonology offers a plan to match your communication goals.
                        </p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Complete the Simple Registration Process</h2>
                        <p>
                            Register your business details and complete the hassle-free sign-up process. Within minutes, you’ll be ready to activate your {countryName} virtual number.
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
                            After registration, activate your {countryName} phone number and personalize key features like call forwarding, voicemail, and IVR. Phonology’s intuitive platform allows you to tailor your system to your business needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
