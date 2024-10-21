import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    let countryName = "Iceland";
    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Get an {countryName} Phone Number in 4 Simple Steps</h2>
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
                        <p>
                            Select between a local {countryName} phone number to establish a local presence or opt for a toll-free number to make it easier for customers to reach you. Phonology offers a wide range of options to fit your business needs.
                        </p>
                    </div>
                </div>
                
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Pick a Plan That Suits Your Business</h2>
                        <p>
                            Explore our flexible pricing plans that are designed to meet the needs of businesses of all sizes. Whether you’re a small business or a large enterprise, Phonology has a plan to match your communication goals.
                        </p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Complete the Easy Sign-Up Process</h2>
                        <p>
                            Register your business details and complete the quick and straightforward sign-up process. You will be ready to activate your {countryName} virtual number within just a few minutes.
                        </p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Step 4" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate and Customize Your Phone Number</h2>
                        <p>
                            Once registered, activate your {countryName} number and configure features such as call forwarding, voicemail, and IVR. Phonology’s user-friendly platform makes it easy to customize your phone system to meet your specific requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
