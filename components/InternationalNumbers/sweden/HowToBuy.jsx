import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    const countryName = "Sweden";

    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Obtain a {countryName} Phone Number in 4 Easy Steps</h2>
                <p>
                    Phonology makes it easy and affordable to buy the phone numbers you need online. Set up your VoIP number service in four easy steps!
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
                            Choose between a local {countryName} phone number to establish a local presence or a toll-free number to allow customers to reach you without any costs. Phonology provides flexible options to suit your business needs.
                        </p>
                    </div>
                </div>
                
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Pick the Correct Plan for Your Business</h2>
                        <p>
                            Explore our tailored pricing plans designed for businesses of all sizes. Whether you’re a startup or a large enterprise, Phonology has a plan that matches your communication goals.
                        </p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Complete the Fast Registration Process</h2>
                        <p>
                            Register your business details and complete the quick and easy sign-up process. In just a few minutes, your {countryName} virtual number will be ready to go live.
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
                            Once registered, activate your {countryName} phone number and configure features like call forwarding, voicemail, and IVR. Phonology’s user-friendly platform makes it easy to personalize your phone system to fit your business needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
