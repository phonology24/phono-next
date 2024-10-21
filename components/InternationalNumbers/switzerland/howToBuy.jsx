import React from 'react';
import '../../../styles/howtobuy.css'; // Assuming you'll add styles in a separate CSS file
import ImageForInternationalNumber1 from "../../../public/Assets/howtobuy1.png"; 
import ImageForInternationalNumber2 from "../../../public/Assets/howtobuy2.png"; 
import ImageForInternationalNumber3 from "../../../public/Assets/howtobuy3.png"; 
import ImageForInternationalNumber4 from "../../../public/Assets/howtobuy4.png"; 
import Image from 'next/image';

const HowToBuy = () => {
    const countryName = "Switzerland";

    return (
        <div className="how-to-buy-container">
            <div className="heading-section">
                <h2>How to Obtain a {countryName} Phone Number in 4 Simple Steps:</h2>
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
                        <h2>Choose Your Number Type</h2>
                        <p>
                            Choose a local {countryName} phone number to create a local presence, or opt for a toll-free number to offer your customers a cost-free way to reach your business.
                        </p>
                    </div>
                </div>
                
                <div className="step reverse">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber2} alt="Step 2" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">2</div>
                        <h2>Select the Correct Plan for Your Business</h2>
                        <p>
                            Browse our wide range of pricing plans designed to meet the needs of businesses of any size. Whether you’re a startup or a well-established company, Phonology has a solution that fits your goals.
                        </p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-image">
                        <Image src={ImageForInternationalNumber3} alt="Step 3" />
                    </div>
                    <div className="step-content">
                        <div className="step-number">3</div>
                        <h2>Complete the Quick Sign-Up Process</h2>
                        <p>
                            Register your business information and complete our simple sign-up process. In just a few minutes, your {countryName} virtual number will be ready for use.
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
                            Once registered, activate your {countryName} phone number and personalize features like call forwarding, voicemail, and IVR. Phonology’s easy-to-use platform allows you to tailor your virtual phone system to meet your business needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
