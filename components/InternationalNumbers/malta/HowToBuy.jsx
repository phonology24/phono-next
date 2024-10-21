import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    let countryName = "Malta";
    
    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Get a {countryName} Phone Number in 4 Easy Steps:</h2>
                <p>Phonology makes it easy and affordable to buy phone numbers you need online. Set up your VoIP number service in four simple steps!</p>
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
                            Choose a local {countryName} phone number to establish a local presence, or opt for a toll-free number to let customers reach you at no cost. Phonology provides flexible options to suit your business needs.
                        </p>
                    </div>
                </div>
                
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Pick a Pricing Plan That Fits Your Business</h2>
                        <p>
                            Explore our flexible pricing plans designed to meet the needs of businesses, whether you're a small startup or a large company. Phonology offers solutions that match your communication goals.
                        </p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Register & Complete the Simple Sign-Up Process</h2>
                        <p>
                            Register your business details and complete the fast and easy sign-up process. You’ll be ready to activate your {countryName} virtual number in just a few minutes.
                        </p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Personalize Your Number</h2>
                        <p>
                            Once registered, activate your {countryName} phone number and configure essential features like call forwarding, voicemail, and IVR. Phonology’s intuitive platform allows you to easily customize your virtual phone system to fit your exact needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
