import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    const countryName = "France"; // Keep the country name as a variable

    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Buy {countryName} Phone Numbers Online in 4 Simple Steps:</h2>
                <p>Phonology makes it easy and affordable to buy phone numbers you need online. Set up your VoIP number service in four easy steps!</p>
            </div>

            <div className="steps-container">
                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber1} alt="Select Your Number Type" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">1</div>
                        <h2>Step 1: Select Your Number Type</h2>
                        <p>
                            Choose between a local {countryName} phone number to establish a local presence or a toll-free number to make it easier for customers to reach you at no charge. Phonology provides a range of options suited to your business requirements.
                        </p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Choose a Plan" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Step 2: Select the Optimal Plan for Your Business</h2>
                        <p>
                            Discover our flexible pricing plans tailored to suit businesses of all sizes. Whether you're a small startup or a larger enterprise, Phonology has the right plan to fit your communication goals.
                        </p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Register and Finish Sign-Up" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Step 3: Register and Finish the Sign-Up Process</h2>
                        <p>
                            Simply sign up with your business details and complete the straightforward registration process. You’ll be ready to secure your {countryName} virtual number in just a few minutes.
                        </p>
                    </div>
                </div>

                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber4} alt="Activate and Customize Your Number" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">4</div>
                        <h2>Step 4: Activate & Customize Your Number</h2>
                        <p>
                            After completing registration, activate your {countryName} number and configure features such as call forwarding, voicemail, and IVR. Our easy-to-use platform allows you to personalize your virtual phone system to suit your needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
